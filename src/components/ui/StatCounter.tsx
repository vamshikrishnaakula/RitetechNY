import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

const StatCounter = ({ value, label, icon: Icon, delay = 0 }: StatCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      const currentValue = Math.floor(numericValue * easeOutQuad);

      setDisplayValue(currentValue);

      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayValue(numericValue);
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

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
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="glass-card rounded-lg p-6 text-center"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-body font-semibold text-foreground">
        {getFormatted()}
        <span className="text-2xl font-body font-semibold">{getSuffix()}</span>
      </p>
      <p className="text-muted-foreground text-sm font-body mt-1">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
