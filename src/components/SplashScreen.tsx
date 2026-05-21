import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img src={logo} alt="Rite Tech" className="h-34 md:h-32 w-auto mb-6" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-px bg-gold-gradient mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-primary font-body text-xs md:text-sm tracking-[0.35em] uppercase"
            >
              Trust and quality you can built on..
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
