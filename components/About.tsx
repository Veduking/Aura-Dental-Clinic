"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={IMAGES.welcomeArea.src}
              alt={IMAGES.welcomeArea.alt}
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Dentistry Built Around You
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Aura Dental Studio started with a simple idea: a dental visit
            shouldn&apos;t feel clinical or rushed. Today, we&apos;re a
            neighbourhood clinic in Mathikere where patients of every age
            get unhurried, honest care.
          </p>
          <p className="text-ink/70 leading-relaxed mt-4">
            Our mission is to make quality dental care approachable —
            combining modern technology with a calm, comfortable environment.
            Our vision is a community where nobody delays treatment out of
            fear or cost.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: "Comfort", desc: "Calming rooms & sedation options" },
              { label: "Technology", desc: "Digital imaging & laser dentistry" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 p-4">
                <p className="font-semibold text-ink">{item.label}</p>
                <p className="text-sm text-ink/60 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
