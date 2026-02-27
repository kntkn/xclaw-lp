"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function FinalCTA() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden noise-overlay">
      <div className="ambient-glow ambient-glow-3" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-gradient">AIの次の時代を、</span>
            <br />
            外から眺めるだけで終わらせない。
          </h2>
          <p className="text-muted text-base sm:text-lg mb-12 max-w-md mx-auto leading-[1.8]">
            xclawの初期メンバーとして、実践の側に参加する。
          </p>
          <a
            href="#membership"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-background font-semibold text-sm hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
          >
            参加申請する
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
