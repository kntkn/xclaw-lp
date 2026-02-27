"use client";

import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="gradient-border p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
              お問い合わせ
            </h2>
            <a
              href="mailto:contact@xclaw.io"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-mono"
            >
              contact@xclaw.io
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
