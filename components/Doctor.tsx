"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, BadgeCheck, Stethoscope, Languages } from "lucide-react";
import { DOCTOR, IMAGES } from "@/lib/constants";

const FACTS = [
  { icon: GraduationCap, label: "Qualification", value: DOCTOR.qualification },
  { icon: BadgeCheck, label: "Registration No.", value: "Available on request" },
  { icon: Stethoscope, label: "Specialization", value: DOCTOR.specialization },
  { icon: Languages, label: "Languages", value: "Please contact the clinic" },
];

export default function Doctor() {
  return (
    <section className="section-pad bg-mint/40">
      <div className="container-xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={IMAGES.doctor.src}
              alt={IMAGES.doctor.alt}
              fill
              sizes="(max-width: 768px) 90vw, 450px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Meet Your Dentist</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{DOCTOR.name}</h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Dr. Gopika Viswanath provides gentle, personalized dental care at
            Aura Dental Studio, from routine visits to root canal treatment
            and complete smile care.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {FACTS.map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white text-primary flex items-center justify-center shadow-sm">
                  <f.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-ink/50 uppercase tracking-wide">{f.label}</p>
                  <p className="font-medium text-ink text-sm mt-0.5">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
