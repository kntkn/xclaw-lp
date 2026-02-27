"use client";

import { ArrowRight, Check, Minus } from "lucide-react";
import AnimateIn from "./AnimateIn";

const included = [
  "xclawコミュニティ参加権",
  "初期オンボーディング",
  "基本ガイド / ドキュメント",
  "定期セッションへのアクセス",
  "初期ユースケースへのアクセス",
];

const notes = [
  "ハードウェア費用は別途",
  "個別の運用環境は導入内容により異なる場合があります",
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-1" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <div className="text-center mb-20">
            <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
              Membership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              初期メンバーとして、参加する。
            </h2>
            <p className="text-muted text-base max-w-lg mx-auto leading-[1.8]">
              xclawの初期メンバーとして、コミュニティ参加と初期導入プログラムにアクセスできます。
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="max-w-lg mx-auto">
            <div className="gradient-border p-8 sm:p-10 relative overflow-hidden">
              {/* Subtle glow behind card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

              {/* Badge */}
              <div className="relative inline-block text-[11px] font-mono text-accent bg-accent/8 border border-accent/15 px-3.5 py-1 rounded-full mb-8">
                Initial Members
              </div>

              <h3 className="text-xl font-bold mb-3 relative">xclaw Membership</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-10 relative">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                  100,000
                </span>
                <span className="text-lg text-muted font-medium">円</span>
              </div>

              {/* Included */}
              <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-4">
                Included
              </div>
              <ul className="space-y-3.5 mb-8 relative">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Notes */}
              <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-4">
                Note
              </div>
              <ul className="space-y-3 mb-10 relative">
                {notes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Minus size={14} className="text-muted/30 mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-muted/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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
    </section>
  );
}
