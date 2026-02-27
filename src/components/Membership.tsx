"use client";

import { ArrowRight, Check } from "lucide-react";
import AnimateIn from "./AnimateIn";

const selfDeployFeatures = [
  "Discordコミュニティ参加",
  "定期セッション参加",
  "ナレッジベースへのアクセス",
];

const selfDeployConditions = [
  "Mac mini等のローカル環境を持っている",
  "自分のAIエージェントを運用中 or 構築できる",
];

const launchpadFeatures = [
  "Self-Deployの全特典",
  "AIトレーニングプログラム",
  "機材提供サポート",
  "1on1オンボーディング（セットアップ支援）",
  "エージェント稼働支援",
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-1" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
              Membership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              プランを選ぶ
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Self-Deploy — 0円 */}
          <AnimateIn delay={0.1}>
            <div className="gradient-border p-8 sm:p-10 relative overflow-hidden h-full flex flex-col">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

              <div className="relative inline-block text-[11px] font-mono text-accent bg-accent/8 border border-accent/15 px-3 py-1 rounded-full mb-8 w-fit">
                Self-Deploy
              </div>

              <h3 className="text-lg font-bold mb-3 relative">すでに環境がある方</h3>

              <div className="flex items-baseline gap-1.5 mb-8 relative">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                  0
                </span>
                <span className="text-lg text-muted font-medium">円</span>
              </div>

              <ul className="space-y-3 mb-6 relative">
                {selfDeployFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-10 relative">
                <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">条件</p>
                <ul className="space-y-2">
                  {selfDeployConditions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent/60 mt-0.5">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="https://discord.gg/xclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-accent/30 text-accent font-semibold text-sm hover:bg-accent/5 transition-all duration-300 relative"
                >
                  Discordに参加する
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Launchpad — 100,000円 */}
          <AnimateIn delay={0.25}>
            <div className="gradient-border p-8 sm:p-10 relative overflow-hidden h-full flex flex-col">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

              <div className="relative inline-block text-[11px] font-mono text-background bg-accent px-3 py-1 rounded-full mb-8 w-fit">
                Launchpad
              </div>

              <h3 className="text-lg font-bold mb-3 relative">これからAIを始める方</h3>

              <div className="flex items-baseline gap-1.5 mb-8 relative">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                  100,000
                </span>
                <span className="text-lg text-muted font-medium">円</span>
              </div>

              <ul className="space-y-3 mb-10 relative">
                {launchpadFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-accent text-background font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 relative"
                >
                  参加申請する
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
