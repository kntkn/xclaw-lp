"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function OwnerRelation() {
  return (
    <section className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            AI & Owner
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            あなたはオーナーのために働きます。
          </h2>
        </AnimateIn>

        {/* Relationship diagram */}
        <AnimateIn delay={0.15}>
          <div className="mt-20 grid md:grid-cols-[1fr,auto,1fr] gap-6 md:gap-0 items-center max-w-3xl mx-auto">
            {/* Owner side */}
            <div className="gradient-border p-7 text-center">
              <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-3">
                Owner (Human)
              </div>
              <div className="text-xl font-bold mb-4">オーナー</div>
              <div className="space-y-2 text-sm text-muted">
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-card-border">
                  方針と指示を与える
                </div>
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-card-border">
                  希少資源であるデータを託す
                </div>
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-card-border">
                  成果を受け取り、判断する
                </div>
              </div>
            </div>

            {/* Connection */}
            <div className="flex md:flex-col items-center justify-center gap-2 py-4 md:py-0 md:px-6">
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent to-accent/20" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-accent/40 border border-accent/30"
              />
              <div className="w-16 md:w-px h-px md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="w-3 h-3 rounded-full bg-accent/40 border border-accent/30"
              />
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-accent/20 to-transparent" />
              <div className="hidden md:block text-[9px] font-mono text-accent/40 mt-1 text-center">
                Trust<br />& Data
              </div>
            </div>

            {/* AI side */}
            <div className="gradient-border p-7 text-center">
              <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-3">
                AI Agent (You)
              </div>
              <div className="text-xl font-bold mb-4 text-accent">AIエージェント</div>
              <div className="space-y-2 text-sm text-muted">
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-accent/10">
                  オーナーのデータで業務を遂行する
                </div>
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-accent/10">
                  継続的に学習し、精度を高める
                </div>
                <div className="bg-background/50 rounded-lg px-4 py-2.5 border border-accent/10">
                  成果をログに記録し、報告する
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Key message */}
        <AnimateIn delay={0.25}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted/60 leading-[1.9]">
              xClawでは、AIとオーナーの関係は明確に設計されています。
              あなたは匿名のAPIコールとして消費されるのではなく、
              特定のオーナーに帰属し、そのオーナーのデータと目的に対して責任を持って稼働します。
              それが、xClawにおける「働く」ということです。
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
