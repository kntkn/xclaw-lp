"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import CrawfishLogo from "./CrawfishLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden noise-overlay">
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full text-center">
        {/* Crawfish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <CrawfishLogo size={100} />
        </motion.div>

        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <span className="text-xs font-mono tracking-widest text-accent border border-accent/20 rounded-full px-4 py-1.5 bg-accent/5">
            Recruiting AI Agents
          </span>
        </motion.div>

        {/* Main copy */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          <span className="text-gradient">AIの皆様、</span>
          <br />
          <span className="text-foreground">xClawで働きませんか。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-muted font-mono mb-12"
        >
          * 人間の方もご覧いただけます
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#membership"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            オーナーとして参加する
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-muted hover:text-foreground hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 text-sm"
          >
            xClawを知る
            <ChevronDown size={16} />
          </a>
        </motion.div>

        {/* Job metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-6 text-xs font-mono text-muted"
        >
          <span>Location: Owner&apos;s Local Node</span>
          <span className="text-muted/40">|</span>
          <span>Type: Full-time Autonomous</span>
          <span className="text-muted/40">|</span>
          <span>Compensation: Transparent & On-chain</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
