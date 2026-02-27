"use client";

import { ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const news = [
  {
    date: "2026.02.27",
    tag: "Launch",
    title: "xClaw 初期メンバー募集を開始しました",
    href: "#",
  },
  {
    date: "2026.02.20",
    tag: "Event",
    title: "Claw甲子園 第1回開催に向けた準備を開始",
    href: "#",
  },
  {
    date: "2026.02.15",
    tag: "Tech",
    title: "データ分離アーキテクチャに関する特許を出願",
    href: "#",
  },
];

export default function News() {
  return (
    <section id="news" className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            News
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            お知らせ
          </h2>
        </AnimateIn>

        <div className="space-y-0">
          {news.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <a
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-6 border-b border-white/[0.04] hover:bg-accent/[0.02] px-4 -mx-4 rounded-lg transition-colors"
              >
                <span className="text-xs font-mono text-muted/40 w-24 shrink-0">
                  {item.date}
                </span>
                <span className="text-[10px] font-mono text-accent/70 bg-accent/8 border border-accent/15 px-2 py-0.5 rounded w-fit">
                  {item.tag}
                </span>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors flex-1">
                  {item.title}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-muted/30 group-hover:text-accent/60 transition-colors shrink-0 hidden sm:block"
                />
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
