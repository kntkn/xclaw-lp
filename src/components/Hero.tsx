"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function LiveDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      {/* Main card */}
      <div className="gradient-border p-6 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-muted tracking-widest uppercase">
            Node Dashboard
          </span>
          <span className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-live" />
            Online
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Active Nodes", value: "24", trend: "+3" },
            { label: "Running Agents", value: "7", trend: "" },
            { label: "Uptime", value: "99.2%", trend: "" },
          ].map((m) => (
            <div key={m.label} className="bg-background/60 rounded-lg p-3 border border-card-border">
              <div className="text-[10px] text-muted font-mono mb-1.5">{m.label}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-semibold">{m.value}</span>
                {m.trend && (
                  <span className="text-[10px] text-emerald-400 font-mono">{m.trend}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] font-mono text-muted tracking-widest uppercase mb-2">
            Live Activity
          </div>
          {[
            { time: "now", msg: "research-agent: 3 sources summarized", status: "running", accent: true },
            { time: "2m", msg: "monitor-node synced successfully", status: "done", accent: false },
            { time: "8m", msg: "ops-agent: 12 records processed", status: "done", accent: false },
            { time: "14m", msg: "weekly report generated", status: "done", accent: false },
          ].map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
              className={`flex items-center gap-3 text-xs font-mono py-2 px-3 rounded-lg ${
                log.accent ? "bg-accent/5 border border-accent/10" : "bg-background/40"
              }`}
            >
              <span className="text-muted/60 w-8 shrink-0 text-[10px]">{log.time}</span>
              <span className={`truncate ${log.accent ? "text-foreground/90" : "text-foreground/60"}`}>
                {log.msg}
              </span>
              <span
                className={`ml-auto shrink-0 text-[10px] px-1.5 py-0.5 rounded font-medium ${
                  log.status === "running"
                    ? "bg-accent/10 text-accent"
                    : "bg-emerald-400/10 text-emerald-400/70"
                }`}
              >
                {log.status}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-card-border">
          <span className="text-[10px] font-mono text-muted/50">Queue: 2 pending</span>
          <span className="text-[10px] font-mono text-muted/30">|</span>
          <span className="text-[10px] font-mono text-muted/50">Last sync: 32s ago</span>
          <span className="ml-auto text-[10px] font-mono text-accent/40 blink-cursor">_</span>
        </div>
      </div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -top-4 -right-4 gradient-border px-4 py-2.5 shadow-2xl shadow-accent/5"
      >
        <div className="text-[9px] font-mono text-muted tracking-wider uppercase">Latest Task</div>
        <div className="text-xs font-mono text-accent">research-agent / summarize</div>
      </motion.div>

      {/* Connection lines decoration */}
      <div className="absolute -left-8 top-1/3 w-8 h-px bg-gradient-to-r from-transparent to-accent/20" />
      <div className="absolute -left-8 top-2/3 w-8 h-px bg-gradient-to-r from-transparent to-accent/10" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden noise-overlay">
      {/* Background ambience */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="absolute inset-0 grid-bg" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2.5"
            >
              {["Local Node", "Custom AI", "Member Network"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono tracking-wider text-accent/70 border border-accent/15 rounded-full px-3.5 py-1 bg-accent/5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.75rem] sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-gradient">AIを持つ。</span>
              <br />
              <span className="text-foreground/90">自分のノードで、動かす。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-muted max-w-lg leading-[1.8]"
            >
              AIが働く時代は、外から眺めるものじゃない。
              <br className="hidden sm:block" />
              自分のノードで、自分のAIを保有し、運用し、実務に接続する。
              <br className="hidden sm:block" />
              xclawは、その実践を始めるためのメンバーシップコミュニティです。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#membership"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-background font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                参加申請する
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-muted hover:text-foreground hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 text-sm"
              >
                仕組みを見る
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right: visual */}
          <div className="flex justify-center lg:justify-end">
            <LiveDashboard />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
