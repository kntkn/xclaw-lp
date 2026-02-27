"use client";

import { Mail } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="gradient-border p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center mx-auto mb-6">
              <Mail size={20} className="text-accent/80" strokeWidth={1.5} />
            </div>
            <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              お問い合わせ
            </h2>
            <p className="text-muted text-sm leading-[1.8] mb-8">
              メンバーシップ、法人利用、パートナーシップ、メディア取材など、
              お気軽にご連絡ください。
            </p>
            <a
              href="mailto:contact@xclaw.io"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-mono text-sm"
            >
              contact@xclaw.io
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
