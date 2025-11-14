"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { useRef } from "react"; 

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  rootMargin?: string; 
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  rootMargin = "-50px 0px 0px 0px", 
  blur = "6px",
}: BlurFadeProps) => {
  
  // PERBAIKAN: useInView hanya menerima SATU argumen (opsi) dan mengembalikan ref.
  const { ref, inView: inViewResult } = useInView({ 
    triggerOnce: true, // <-- INI PERBAIKANNYA: Ganti 'once' menjadi 'triggerOnce'
    rootMargin: rootMargin 
  }); 

  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;