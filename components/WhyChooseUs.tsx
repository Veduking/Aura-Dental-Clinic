"use client";

import { motion } from "framer-motion";
import { Award, Cpu, ShieldCheck, Wallet, HeartHandshake, Siren } from "lucide-react";
import { WHY_US, STATS } from "@/lib/constants";
import AnimatedCounter from "./AnimatedCounter";

const ICONS: Record<string, any> = {
  award: Award,
  cpu: Cpu,
  shield: ShieldCheck,
  wallet: Wallet,
  heart: HeartHandshake,
  siren: Siren,
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Why Aura</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Aura Dental Studio</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
              >
                <div className="h-11 w-11 rounded-xl bg-mint flex items-center justify-center text-accent mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-ink/60 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 rounded-3xl bg-primary/5 p-8 md:p-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter value={s.value} suffix={s.label === "Google Rating" ? "★" : "+"} />
              </p>
              <p className="text-xs md:text-sm text-ink/60 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
