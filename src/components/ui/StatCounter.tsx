import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  showArabicNumerals?: boolean;
}

const StatCounter = ({
  value,
  label,
  icon: Icon,
  delay = 0,
  showArabicNumerals = false,
}: StatCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const arabicIndicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const toArabicIndic = (text: string) =>
    text
      .replace(/[0-9]/g, (digit) => arabicIndicDigits[Number(digit)])
      .replace(/\./g, "٫");

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);
    
    // Add delay before starting animation
    const delayTimer = setTimeout(() => {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 2);
        const currentValue = Math.floor(numericValue * easeOutQuad);

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericValue);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 100);

    return () => clearTimeout(delayTimer);
  }, [isInView, numericValue, delay, isAnimating]);

  const getSuffix = () => value.replace(/[0-9,]/g, "");
  const getFormatted = () => {
    if (displayValue >= 1000) {
      return (displayValue / 1000).toFixed(displayValue % 1000 === 0 ? 0 : 1) + "K";
    }
    return displayValue.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glass-card rounded-lg p-6 text-center"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-body font-semibold text-foreground">
        {getFormatted()}
        <span className="text-2xl font-body font-semibold">{getSuffix()}</span>
      </p>
      {showArabicNumerals && (
        <p className="text-lg font-body font-semibold text-primary" dir="rtl" lang="ar">
          {toArabicIndic(getFormatted())}
          <span className="text-base font-body font-semibold">{getSuffix()}</span>
        </p>
      )}
      <p className="text-muted-foreground text-sm font-body mt-1">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
