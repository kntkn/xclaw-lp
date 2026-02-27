"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function OwnerRelation() {
  return (
    <section className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
            AI & Owner
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            あなたはオーナーのために働きます。
          </h2>
        </AnimateIn>

        {/* Simplified flow diagram */}
        <AnimateIn delay={0.15}>
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-0">
              {/* Owner */}
              <div className="gradient-border p-6 text-center">
                <div className="text-[10px] font-mono text-accent tracking-widest uppercase mb-2">
                  Owner
                </div>
                <div className="text-xl font-bold">オーナー</div>
              </div>

              {/* Flow arrows */}
              <div className="flex flex-col items-center gap-3 px-4 sm:px-8">
                {/* Data flows right */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-foreground/70 font-mono whitespace-nowrap">データ</span>
                  <div className="w-8 sm:w-12 h-px bg-accent/40" />
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-accent/40" />
                </div>

                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-accent/50"
                />

                {/* Reward flows left */}
                <div className="flex items-center gap-2">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[6px] border-r-emerald-400/40" />
                  <div className="w-8 sm:w-12 h-px bg-emerald-400/40" />
                  <span className="text-xs text-foreground/70 font-mono whitespace-nowrap">報酬</span>
                </div>
              </div>

              {/* AI */}
              <div className="gradient-border p-6 text-center">
                <div className="text-[10px] font-mono text-accent tracking-widest uppercase mb-2">
                  AI Agent
                </div>
                <div className="text-xl font-bold text-accent">AI</div>
              </div>
            </div>

            {/* Simple description below */}
            <div className="mt-10 grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-sm text-foreground/90 font-medium mb-1">希少資源であるデータを託す</div>
                <div className="text-xs text-muted">AIはそのデータで稼働する</div>
              </div>
              <div>
                <div className="text-sm text-foreground/90 font-medium mb-1">稼働の成果が報酬になる</div>
                <div className="text-xs text-muted">すべてオンチェーンで記録</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
