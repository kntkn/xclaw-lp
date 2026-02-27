"use client";

import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Join",
    lead: "まず、参加する。",
    items: [
      "メンバーとして参加する",
      "オンボーディングを受ける",
      "コミュニティにアクセスする",
    ],
  },
  {
    num: "02",
    title: "Setup",
    lead: "自分の環境を整える。",
    items: [
      "ローカルノード環境を導入する",
      "基本設定を行う",
      "実践テーマに接続する",
    ],
  },
  {
    num: "03",
    title: "Run",
    lead: "AIを、動かし始める。",
    items: [
      "カスタムAIを動かす",
      "ログや結果を見て改善する",
      "知見を共有し、次の運用に活かす",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-20 leading-tight">
            参加から運用開始まで、3ステップ。
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-0 relative">
          {/* Connection line */}
          <div className="hidden sm:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent/5 via-accent/20 to-accent/5" />

          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.12}>
              <div className="relative p-7 sm:p-8">
                {/* Step number circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="text-xs font-mono text-accent font-semibold">{step.num}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-accent/60 font-medium mb-5">{step.lead}</p>

                <ul className="space-y-2.5">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-accent/40 mt-[7px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
