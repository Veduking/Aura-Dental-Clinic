"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-mint/40">
      <div className="container-xl grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Visit Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Get in Touch</h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><Phone size={19} /></div>
              <div>
                <p className="text-xs text-ink/50 uppercase">Phone</p>
                <a href={`tel:${SITE.phoneHref}`} className="font-medium hover:text-primary">{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><MessageCircle size={19} /></div>
              <div>
                <p className="text-xs text-ink/50 uppercase">WhatsApp</p>
                <a href={`https://wa.me/${SITE.whatsappHref}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">Chat with us</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><Mail size={19} /></div>
              <div>
                <p className="text-xs text-ink/50 uppercase">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-medium hover:text-primary">{SITE.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><MapPin size={19} /></div>
              <div>
                <p className="text-xs text-ink/50 uppercase">Address</p>
                <p className="font-medium">{SITE.address}</p>
                <p className="text-sm text-ink/60 mt-1">Landmark: {SITE.landmark}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><Clock size={19} /></div>
              <div>
                <p className="text-xs text-ink/50 uppercase">Opening Hours</p>
                {SITE.hours.map((h) => (
                  <p key={h.day} className="font-medium text-sm">{h.day}: {h.time}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden shadow-xl min-h-[380px]"
        >
          <iframe
            src={SITE.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 380 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aura Dental Studio location on Google Maps"
          />
        </motion.div>
      </div>
    </section>
  );
}
