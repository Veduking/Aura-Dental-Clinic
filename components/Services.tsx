"use client";

import { motion } from "framer-motion";
import { Sparkles, Smile, Wand2, Activity, Grid3x3, Anchor, Baby, Layers } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, any> = {
  sparkles: Sparkles,
  smile: Smile,
  wand: Wand2,
  activity: Activity,
  tooth: Layers,
  anchor: Anchor,
  grid: Grid3x3,
  baby: Baby,
};

export default function Services() {
  return (
    <section id="services" className="section-pad bg-mint/40">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
          <p className="text-ink/60 mt-3">Comprehensive dental care for every member of the family.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-ink/60 text-sm mt-2">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
