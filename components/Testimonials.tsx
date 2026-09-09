"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleReviews = Array.from(
    { length: Math.min(4, TESTIMONIALS.length) },
    (_, index) => TESTIMONIALS[(startIndex + index) % TESTIMONIALS.length]
  );

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setStartIndex((current) => (current + 4) % TESTIMONIALS.length);
    }, 6000);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section id="reviews" className="section-pad bg-mint/40">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Patients Say</h2>
          <p className="text-ink/60 mt-3 text-sm">Kind words from our patients.</p>
        </motion.div>

        <motion.div
          key={startIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {visibleReviews.map((t, i) => (
            <motion.div
              key={`${startIndex}-${t.name}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="text-primary/15 absolute top-5 right-5" size={36} />
              <div className="flex gap-0.5 text-amber-400 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-ink/70 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
