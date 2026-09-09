"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";

// Signature element: a smile-shaped arc (not a straight bar) that fills in
// as the visitor scrolls down the page — the clinic's motif doubling as UI.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [pathLength, setPathLength] = useState(0);

  // Path length for a smile arc: M10,10 Q150,55 290,10
  useEffect(() => {
    setPathLength(320); // approximate curve length, good enough visually
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pointer-events-none">
      <svg width="300" height="24" viewBox="0 0 300 24" className="mt-1">
        <path
          d="M10,10 Q150,32 290,10"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="smile-progress-track"
        />
        <motion.path
          d="M10,10 Q150,32 290,10"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="smile-progress-fill"
          style={{
            pathLength: smoothed,
          }}
        />
      </svg>
    </div>
  );
}
