"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/constants";

const BUTTONS = [
  { icon: Phone, label: "Call", href: `tel:${SITE.phoneHref}`, bg: "bg-ink" },
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE.whatsappHref}`, bg: "bg-[#25D366]" },
  { icon: CalendarCheck, label: "Appointment", href: "#appointment", bg: "bg-primary" },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {BUTTONS.map((b, i) => (
        <motion.a
          key={b.label}
          href={b.href}
          target={b.href.startsWith("http") ? "_blank" : undefined}
          rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={b.label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex items-center gap-2 ${b.bg} text-white rounded-full shadow-lg h-12 w-12 justify-center hover:w-auto hover:px-4 overflow-hidden transition-all duration-300`}
        >
          <b.icon size={20} className="shrink-0" />
          <span className="hidden group-hover:inline text-sm font-medium whitespace-nowrap">{b.label}</span>
        </motion.a>
      ))}
    </div>
  );
}
