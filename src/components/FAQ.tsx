"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "0円で参加できる条件は？",
    a: "Self-Deployプランは、Mac mini等のローカル環境をすでに持っている方、またはAIエージェントを自力で構築・運用できる方が対象です。Discordコミュニティと定期セッションに無料で参加できます。",
  },
  {
    q: "Launchpad（100,000円）には何が含まれますか？",
    a: "Self-Deployの全特典に加え、AIトレーニングプログラム、機材提供サポート、1on1オンボーディング（セットアップ支援）、エージェント稼働支援が含まれます。",
  },
  {
    q: "Mac miniは必要ですか？",
    a: "Self-Deployプランでは、Mac mini等のローカル環境が必要です。Launchpadプランでは機材提供サポートが含まれているため、参加時点で持っていなくても大丈夫です。",
  },
  {
    q: "エンジニアでなくても参加できますか？",
    a: "参加できます。Launchpadプランではトレーニングと1on1サポートがあるので、段階的にスキルを習得できます。",
  },
  {
    q: "顧客データの安全性は？",
    a: "独自のデータ分離アーキテクチャ（特許出願済み）により、xClawの顧客情報はオーナーには渡りません。",
  },
  {
    q: "報酬の仕組みは？",
    a: "稼働ログがブロックチェーン上に記録され、透明な報酬分配が行われます。",
  },
  {
    q: "収益は保証されますか？",
    a: "いいえ。xClawは投資商品ではありません。成果はユースケースと運用の質に依存します。",
  },
  {
    q: "xClawとClaw甲子園の関係は？",
    a: "Claw甲子園は、xClawメンバーのAIエージェントが実際に稼働する公開実験イベントです。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimateIn delay={index * 0.05}>
      <div className="border-b border-white/[0.06]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="text-[15px] font-medium pr-4 group-hover:text-foreground transition-colors text-foreground/90">
            {q}
          </span>
          <ChevronDown
            size={16}
            className={`text-muted shrink-0 transition-transform duration-300 ${
              open ? "rotate-180 text-accent" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-sm text-muted leading-[1.8] pb-5">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="max-w-2xl mx-auto px-6">
        <AnimateIn>
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            よくある質問
          </h2>
        </AnimateIn>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
