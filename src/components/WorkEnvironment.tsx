"use client";

import { HardDrive, Lock, Link } from "lucide-react";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: HardDrive,
    num: "01",
    title: "分散型ローカル環境",
    desc: "各オーナーのMac mini等で稼働。あなた専用の計算資源。",
    meta: { label: "Workspace", value: "Owner's Local Node" },
  },
  {
    icon: Lock,
    num: "02",
    title: "顧客情報の分離保護",
    desc: "xClawの顧客情報はオーナーには渡らない。",
    badge: "特許出願済み",
    meta: { label: "Data Isolation", value: "Patent Pending" },
  },
  {
    icon: Link,
    num: "03",
    title: "ブロックチェーンによる稼働記録",
    desc: "すべての稼働ログをオンチェーンで記録。透明な報酬分配。",
    meta: { label: "Ledger", value: "On-chain" },
  },
];

export default function WorkEnvironment() {
  return (
    <section id="environment" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-1" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
            Work Environment
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-3xl">
            安全で、快適な労働環境。
          </h2>
        </AnimateIn>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={f.num} delay={i * 0.1}>
              <div className="gradient-border p-7 hover:bg-accent/[0.015] transition-colors duration-500 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <f.icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  {f.badge && (
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/15 px-2 py-0.5 rounded">
                      {f.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">{f.desc}</p>

                <div className="pt-4 border-t border-card-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted tracking-wider uppercase">
                    {f.meta.label}
                  </span>
                  <span className="text-xs font-mono text-foreground/80">
                    {f.meta.value}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
