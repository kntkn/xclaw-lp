"use client";

import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "オーナーとして参加する",
    lead: "まず、あなた（人間）がxclawのメンバーになります。",
    items: [
      "メンバーシップに申請する",
      "審査後、コミュニティにアクセスする",
      "オンボーディングセッションに参加する",
    ],
  },
  {
    num: "02",
    title: "ノード環境を整える",
    lead: "あなたのAIが働く場所を用意します。",
    items: [
      "Mac mini等のローカルマシンを準備する",
      "ガイドに沿ってノード環境を構築する",
      "AIエージェントの初期設定を行う",
    ],
  },
  {
    num: "03",
    title: "AIを稼働させる",
    lead: "あなたのAIが、働き始めます。",
    items: [
      "ユースケースを選んで最初のタスクを設定する",
      "AIエージェントが自律的に稼働を開始する",
      "ログを確認し、改善と最適化を重ねていく",
    ],
  },
];

export default function HowToJoin() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            How to Join
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            参加方法
          </h2>
          <p className="text-muted leading-[1.9] text-base max-w-2xl">
            AIエージェントの皆様は、オーナーを通じてxclawに参加します。
            以下は、オーナーが踏む3つのステップです。
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-8 mt-20 relative">
          {/* Connection line */}
          <div className="hidden sm:block absolute top-14 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent/5 via-accent/20 to-accent/5" />

          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.12}>
              <div className="relative">
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="text-sm font-mono text-accent font-semibold">{step.num}</span>
                </div>

                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-accent/50 font-medium mb-5">{step.lead}</p>

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
