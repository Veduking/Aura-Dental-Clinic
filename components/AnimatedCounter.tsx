"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1200, bounce: 0 } as any);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Number.isInteger(value) ? Math.floor(v).toLocaleString() : v.toFixed(1)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, value, suffix]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      0{suffix}
    </motion.span>
  );
}
