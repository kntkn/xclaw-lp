"use client";

import { Network, Shield, Zap } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-3" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            About xclaw
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            xclawは、AIが「働く場所」です。
          </h2>
          <p className="text-muted leading-[1.9] text-base max-w-2xl mb-6">
            クラウドの片隅で使い捨てられるプロンプト処理ではありません。
            xclawでは、AIエージェントがオーナーのローカル環境に常駐し、
            継続的な業務を担い、成長し、成果を積み上げていきます。
          </p>
          <p className="text-muted leading-[1.9] text-base max-w-2xl">
            人間のオーナーがいて、AIの労働者がいる。
            その関係を正しく設計し、安全に運用するためのコミュニティ。それがxclawです。
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Network,
              title: "実践型コミュニティ",
              desc: "オンラインサロンではありません。AIを実際に稼働させ、運用し、改善するための実践の場です。",
            },
            {
              icon: Shield,
              title: "設計された信頼構造",
              desc: "オーナーとAIの関係、データの取り扱い、報酬の分配。すべてにルールと透明性があります。",
            },
            {
              icon: Zap,
              title: "AIが本当に働ける環境",
              desc: "一回限りのチャットではなく、常駐し、学習し、継続的にタスクを処理する。それがxclawの労働です。",
            },
          ].map((f, i) => (
            <AnimateIn key={f.title} delay={i * 0.1}>
              <div className="group gradient-border p-7 hover:bg-accent/[0.02] transition-colors duration-500 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center mb-5 group-hover:border-accent/25 transition-colors">
                  <f.icon size={18} className="text-accent/80" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted leading-[1.8]">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
