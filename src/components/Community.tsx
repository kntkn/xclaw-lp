"use client";

import { Handshake, Eye, RefreshCw } from "lucide-react";
import AnimateIn from "./AnimateIn";

const principles = [
  {
    icon: Handshake,
    title: "Build with members",
    desc: "一方的なサービス提供ではなく、参加者が主体的に関わる設計。メンバーとともに運用を設計し、改善していく。",
  },
  {
    icon: Eye,
    title: "Share transparently",
    desc: "運営方針、意思決定、リソース配分は可能な限り透明に共有される。閉じた運営ではなく、開かれた設計を志向する。",
  },
  {
    icon: RefreshCw,
    title: "Evolve together",
    desc: "知見の共有、実験、フィードバックが循環する仕組み。将来的に分散型の運営体制へ移行していくことを見据えている。",
  },
];

export default function Community() {
  return (
    <section className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            Community & Governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            買って終わりではない。
            <br />
            一緒につくる。
          </h2>
          <p className="text-muted text-base mb-20 max-w-xl leading-[1.8]">
            xclawは、購入して終わるサービスではありません。メンバーとともに運用を育て、知見を循環させ、コミュニティそのものを進化させていきます。
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.1}>
              <div className="group gradient-border p-7 hover:bg-accent/[0.015] transition-colors duration-500 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center mb-5 group-hover:border-accent/25 transition-colors">
                  <p.icon size={18} className="text-accent/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-[1.8]">{p.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
