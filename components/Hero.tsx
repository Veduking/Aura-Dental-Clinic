"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, CalendarCheck } from "lucide-react";
import { IMAGES, SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative gradient-bg overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container-xl relative grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-10 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 mb-6">
            {SITE.name}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink">
            Creating Healthy &amp;{" "}
            <span className="text-primary">Beautiful Smiles</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-lg">
            Modern dentistry with compassionate care — gentle treatment, advanced
            technology, and a team that genuinely wants you to love your smile.
          </p>

          <div className="mt-9 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3.5 font-semibold shadow-lg shadow-primary/20 hover:bg-sky-600 hover:-translate-y-0.5 transition-all"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-7 py-3.5 font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
            <Image
              src={IMAGES.hero.src}
              alt={IMAGES.hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 450px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:block">
            <p className="text-2xl font-bold text-primary">4.6★</p>
            <p className="text-xs text-ink/60">from 35+ Google reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
