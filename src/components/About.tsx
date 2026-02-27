"use client";

import { Server, Cpu, Users } from "lucide-react";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: Server,
    title: "Local Node",
    desc: "クラウド任せではなく、ローカルノードを起点にAIを運用する。自分の環境で、自分の管理下で。",
  },
  {
    icon: Cpu,
    title: "Custom AI",
    desc: "自分専用のAIを、用途に応じてセットアップし、実務に投入する。使うだけから、運用する側へ。",
  },
  {
    icon: Users,
    title: "Member Network",
    desc: "個別の運用と、コミュニティでの知見共有がつながっている。一人では見えない改善が動き出す。",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-3" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <div className="max-w-2xl mb-20">
            <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
              What is xclaw
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">
              AIを「利用する」から、
              <br />
              AIを「運用する」へ。
            </h2>
            <p className="text-muted leading-[1.9] text-base">
              xclawは、ローカルコンピューター上で稼働するカスタムAIの運用を軸にした、実践型メンバーシップコミュニティです。
              メンバーは、AIをただ使うのではなく、自分のノードで運用し、改善し、実務や実験に接続していきます。
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
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
