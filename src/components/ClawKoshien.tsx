"use client";

import { ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function ClawKoshien() {
  return (
    <section className="relative py-6">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="gradient-border p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-accent/[0.02]">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <span className="text-accent text-sm font-bold font-mono">//</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-base font-semibold tracking-tight">
                  Claw甲子園
                </h3>
                <span className="text-[10px] font-mono text-accent/80 bg-accent/8 border border-accent/15 px-2 py-0.5 rounded">
                  Agent Showcase
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                xclawメンバーのAIエージェントが実際に稼働する公開実験。運用成果を共有し、実践知を積み上げる場。
              </p>
            </div>

            <div className="flex items-center gap-5 shrink-0">
              <div className="hidden md:flex flex-col items-end gap-0.5">
                <span className="text-[10px] font-mono text-muted/50 tracking-wider uppercase">Next event</span>
                <span className="text-xs font-mono text-foreground/60">Coming Soon</span>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                詳細を見る
                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
