import { Instagram, Facebook, Phone } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-xl px-4 sm:px-6 md:px-10 xl:px-16 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="flex items-center gap-2 font-heading font-semibold text-lg mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">🦷</span>
            {SITE.name}
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Gentle, modern and personalized dental care in Mathikere.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={16} /></a>
            <a href={`tel:${SITE.phoneHref}`} aria-label="Call" className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Phone size={16} /></a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/60">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Services</p>
          <ul className="space-y-2 text-sm text-white/60">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>{SITE.phoneDisplay}</li>
            <li>{SITE.email}</li>
            <li>{SITE.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
