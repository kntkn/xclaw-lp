"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const categories = [
  {
    id: "monitoring",
    label: "Monitoring",
    description: "定時チェックや継続監視を行うAI。変化を見逃さない、静かで確実な運用。",
    activities: [
      "指定URLやデータソースの定期チェック",
      "変化検知時のアラート通知",
      "モニタリングログの蓄積と可視化",
    ],
    outputs: [
      { label: "schedule checked", time: "12:00:00", status: "done" },
      { label: "3 changes detected", time: "12:00:14", status: "alert" },
      { label: "alert dispatched to #ops", time: "12:00:15", status: "done" },
      { label: "monitoring cycle complete", time: "12:00:16", status: "done" },
    ],
    value: "人が張りつかなくても、変化を見逃さない運用が構築できる。",
    metric: { label: "Checks today", value: "142" },
  },
  {
    id: "research",
    label: "Research",
    description: "情報収集、整理、要約を回すAI。構造化されたインプットを自動で手に入れる。",
    activities: [
      "特定トピックの情報収集と整理",
      "複数ソースからの要約生成",
      "定期レポートの自動作成",
    ],
    outputs: [
      { label: "5 sources collected", time: "09:30:00", status: "done" },
      { label: "cross-reference complete", time: "09:31:22", status: "done" },
      { label: "summary generated (1.2k words)", time: "09:32:08", status: "done" },
      { label: "report saved to /output/weekly", time: "09:33:01", status: "done" },
    ],
    value: "手動リサーチの時間を削減し、構造化されたインプットを得られる。",
    metric: { label: "Reports generated", value: "38" },
  },
  {
    id: "operations",
    label: "Operations",
    description: "定型業務の前処理や補助を行うAI。繰り返しを自動化し、精度を上げる。",
    activities: [
      "定型タスクの前処理の自動化",
      "データの整形、変換、転送",
      "ワークフローの補助実行",
    ],
    outputs: [
      { label: "task queued: data-transform", time: "14:20:00", status: "done" },
      { label: "12 records processed", time: "14:21:34", status: "done" },
      { label: "validation passed", time: "14:21:40", status: "done" },
      { label: "output synced to destination", time: "14:22:01", status: "done" },
    ],
    value: "繰り返し業務の負荷を下げ、運用効率を高めていく。",
    metric: { label: "Tasks processed", value: "284" },
  },
  {
    id: "experiments",
    label: "Experiments",
    description: "公開実験やデモで稼働するAI。新しい運用パターンを安全に試す。",
    activities: [
      "Claw甲子園などのイベント連動AI稼働",
      "新しいユースケースの試行",
      "実験結果の共有とフィードバック",
    ],
    outputs: [
      { label: "experiment initialized", time: "16:00:00", status: "done" },
      { label: "agent deployed to showcase", time: "16:02:11", status: "done" },
      { label: "live run: 12 iterations", time: "16:30:00", status: "running" },
      { label: "results logged to /experiments", time: "16:45:22", status: "done" },
    ],
    value: "安全な実験環境で新しい運用パターンを探索できる。",
    metric: { label: "Experiments run", value: "17" },
  },
];

export default function Activities() {
  const [active, setActive] = useState("monitoring");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="activities" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="ambient-glow ambient-glow-2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            Activities & Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            参加したら、何をするのか。
          </h2>
          <p className="text-muted text-base mb-6 max-w-xl leading-[1.8]">
            抽象的な話ではなく、具体的な運用がある。自分のAIをセットアップし、動かし、結果を見て、改善する。
          </p>
        </AnimateIn>

        {/* Member activities */}
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap gap-2.5 mb-14">
            {[
              "自分のAIをセットアップする",
              "実務タスクに接続する",
              "動作ログを見て改善する",
              "運用の知見を共有する",
              "新しい使い方を試す",
            ].map((item) => (
              <span
                key={item}
                className="text-xs text-muted/80 bg-card-bg border border-card-border rounded-lg px-4 py-2.5 font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* Category tabs */}
        <AnimateIn delay={0.15}>
          <div className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative text-sm font-mono px-5 py-2.5 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                  active === cat.id
                    ? "bg-accent/10 text-accent border-accent/25 shadow-lg shadow-accent/5"
                    : "bg-card-bg text-muted border-card-border hover:border-white/10 hover:text-foreground/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Left */}
            <div className="gradient-border p-7">
              <div className="text-[11px] font-mono text-accent/60 tracking-widest uppercase mb-4">
                {current.label}
              </div>
              <p className="text-sm text-foreground/80 mb-6 leading-[1.8]">
                {current.description}
              </p>

              <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-3">
                What members do
              </div>
              <ul className="space-y-2.5 mb-7">
                {current.activities.map((a, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent/40 mt-[7px] shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-card-border">
                <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mb-2">
                  Practical value
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{current.value}</p>
              </div>
            </div>

            {/* Right: terminal-like output */}
            <div className="gradient-border p-7">
              <div className="flex items-center justify-between mb-5">
                <div className="text-[11px] font-mono text-muted/50 tracking-widest uppercase">
                  Output Log
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-accent/30" />
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                {current.outputs.map((o, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-mono text-xs py-2 px-3 rounded-lg bg-background/50 border border-transparent hover:border-card-border transition-colors"
                  >
                    <span className="text-muted/40 w-16 shrink-0 text-[10px]">{o.time}</span>
                    <span className="text-foreground/60 truncate">{o.label}</span>
                    <span
                      className={`ml-auto shrink-0 text-[10px] px-2 py-0.5 rounded font-medium ${
                        o.status === "running"
                          ? "bg-accent/10 text-accent"
                          : o.status === "alert"
                          ? "bg-amber-400/10 text-amber-400/80"
                          : "bg-emerald-400/10 text-emerald-400/60"
                      }`}
                    >
                      {o.status}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 font-mono text-xs py-2 px-3">
                  <span className="text-accent/30 blink-cursor">_</span>
                </div>
              </div>

              {/* Metric */}
              <div className="pt-5 border-t border-card-border flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-muted/40 tracking-wider uppercase">
                    {current.metric.label}
                  </div>
                  <div className="text-2xl font-bold mt-1">{current.metric.value}</div>
                </div>
                <div className="text-[10px] font-mono text-emerald-400/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 pulse-live" />
                  Node Active
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
