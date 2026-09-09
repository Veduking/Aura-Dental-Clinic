"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, CalendarCheck } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const currentLink = [...NAV_LINKS]
        .reverse()
        .find((link) => {
          const section = document.querySelector(link.href);
          return section && section.getBoundingClientRect().top <= 128;
        });

      setActiveLink(currentLink?.href ?? "#home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-xl flex items-center justify-between px-4 sm:px-6 md:px-10 xl:px-16 h-16 sm:h-20">
        <a href="#home" aria-label={SITE.name} className="flex items-center gap-2 sm:gap-3 font-heading text-ink">
          <span className="relative h-12 w-12 sm:h-16 sm:w-16 shrink-0 overflow-hidden" aria-hidden="true">
            <Image
              src="/images/aura-brand-logo-transparent.png"
              alt=""
              fill
              priority
              className="origin-top scale-[1.6] object-contain"
            />
          </span>
          <span className="hidden min-[420px]:inline text-base sm:text-xl font-semibold">{SITE.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative inline-flex isolate py-2 transition-colors ${
                  activeLink === link.href ? "text-primary" : "hover:text-primary"
                }`}
              >
                {activeLink === link.href && (
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0.35 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.35 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary origin-center"
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 transition-colors"
        >
          <CalendarCheck size={16} />
          Book Appointment
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-white/70 transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <ul className="flex flex-col px-4 sm:px-6 py-4 gap-2 text-ink/80 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setOpen(false);
                    }}
                    className={`flex min-h-11 items-center ${activeLink === link.href ? "text-primary" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold"
                >
                  <CalendarCheck size={16} />
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
