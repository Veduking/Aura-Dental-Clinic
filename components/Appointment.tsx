"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { SITE, TREATMENTS_FOR_FORM } from "@/lib/constants";

type Status = "idle" | "success";

export default function Appointment() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const details = [
      "Hello Aura Dental Studio, I would like to book an appointment.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `Treatment: ${formData.get("treatment")}`,
      `Preferred date: ${formData.get("date")}`,
      `Message: ${formData.get("message") || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("success");
  };

  return (
    <section id="appointment" className="section-pad">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">Book Your Appointment</h2>
          <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
            Fill in the form and WhatsApp will open with your appointment
            details ready to send to our front desk.
          </p>
          <div className="rounded-2xl bg-primary/5 p-6 max-w-md">
            <p className="text-sm text-ink/70">
              Your appointment request will open in{" "}
              <span className="font-semibold text-ink">WhatsApp</span> with
              all of your form details prefilled. Review the message and tap
              send to contact the clinic.
            </p>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-slate-100 shadow-lg p-7 md:p-9 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink/80">Name</label>
              <input id="name" name="name" required type="text"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none"
                placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-ink/80">Phone</label>
              <input id="phone" name="phone" required type="tel"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none"
                placeholder="+91 99013 34365" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink/80">Email</label>
            <input id="email" name="email" required type="email"
              className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none"
              placeholder="you@example.com" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="treatment" className="text-sm font-medium text-ink/80">Treatment</label>
              <select id="treatment" name="treatment" required
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none bg-white">
                <option value="">Select a treatment</option>
                {TREATMENTS_FOR_FORM.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium text-ink/80">Preferred Date</label>
              <input id="date" name="date" required type="date"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink/80">Message</label>
            <textarea id="message" name="message" rows={4}
              className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-base sm:text-sm focus:border-primary outline-none resize-none"
              placeholder="Tell us anything that will help us prepare (optional)" />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-semibold hover:bg-sky-600 transition-colors"
          >
            <CalendarCheck size={18} /> Continue on WhatsApp
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-emerald-600">
              <CheckCircle2 size={16} /> WhatsApp opened with your appointment details.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
