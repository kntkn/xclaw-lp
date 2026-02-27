"use client";

import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "参加する",
    desc: "メンバーシップに申請し、オンボーディングを受ける。",
  },
  {
    num: "02",
    title: "環境を整える",
    desc: "ローカルマシンを用意し、ノード環境を構築する。",
  },
  {
    num: "03",
    title: "AIを稼働させる",
    desc: "タスクを設定し、AIエージェントが働き始める。",
  },
];

export default function HowToJoin() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
            How to Join
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            参加方法
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 relative">
          {/* Connection line */}
          <div className="hidden sm:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent/5 via-accent/20 to-accent/5" />

          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.12}>
              <div className="relative">
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <span className="text-sm font-mono text-accent font-semibold">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
