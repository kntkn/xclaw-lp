"use client";

import AnimateIn from "./AnimateIn";

const info = [
  { label: "社名", value: "xclaw株式会社（準備中）" },
  { label: "所在地", value: "東京都" },
  { label: "設立", value: "2026年" },
  { label: "代表", value: "---" },
  { label: "事業内容", value: "AIエージェント運用基盤の設計・運営" },
  { label: "連絡先", value: "contact@xclaw.io" },
];

export default function Company() {
  return (
    <section id="company" className="py-28 sm:py-36 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            Company
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-14">
            会社概要
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="max-w-xl">
            <div className="space-y-0">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 py-4 border-b border-white/[0.04]"
                >
                  <span className="text-xs font-mono text-muted/40 tracking-wider uppercase w-32 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground/70">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
