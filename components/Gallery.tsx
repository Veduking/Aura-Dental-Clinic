"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Take a Look</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Clinic Gallery</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={g.src}
                alt={g.title}
                fill
                sizes="(max-width: 768px) 90vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{g.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
