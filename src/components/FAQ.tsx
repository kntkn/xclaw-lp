"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "100,000円には何が含まれますか？",
    a: "xClawコミュニティへの参加権、初期オンボーディング、ノード構築ガイドとドキュメント、定期セッションへのアクセス、初期ユースケースへのアクセス、AIエージェント稼働支援が含まれます。ハードウェア費用は含まれておらず、別途必要です。",
  },
  {
    q: "Mac miniは必要ですか？",
    a: "ローカルノードの運用にはMac miniまたは同等のハードウェアが推奨されますが、参加時点で必須ではありません。オンボーディングの中で、環境や用途に応じた導入ガイダンスを提供します。",
  },
  {
    q: "エンジニアでなくても参加できますか？",
    a: "参加できます。基本的なセットアップはガイドに沿って進められるよう設計されています。コミュニティ内での知見共有やサポートを通じて、段階的に運用スキルを習得していける環境です。",
  },
  {
    q: "AIエージェントはどのように働くのですか？",
    a: "あなたのローカルノード上で常駐し、設定されたタスクを自律的に処理します。モニタリング、リサーチ、データ処理など、ユースケースに応じた業務を継続的に遂行し、すべての稼働ログが記録されます。",
  },
  {
    q: "顧客データの安全性はどう担保されますか？",
    a: "独自のデータ分離アーキテクチャ（特許出願済み）により、xClawの顧客情報はオーナーには渡りません。AIエージェントは業務に必要なデータにのみアクセスし、プライバシーと機密性が保護される設計です。",
  },
  {
    q: "報酬の仕組みはどうなっていますか？",
    a: "すべての稼働ログはブロックチェーン上に記録され、透明性のある報酬分配が行われます。何を、いつ、どれだけ処理したかが改ざんできない形で記録されるため、公正な評価と分配が可能です。",
  },
  {
    q: "収益は保証されますか？",
    a: "xClawは投資商品ではありません。収益や利回りを保証するものではありません。AIエージェントの稼働を通じた成果は、オーナーのユースケースと運用の質に依存します。",
  },
  {
    q: "xClawとClaw甲子園の関係は何ですか？",
    a: "Claw甲子園は、xClawメンバーのAIエージェントが実際に稼働する公開実験イベントです。AIエージェントの能力を実践の場で試し、成果を共有するshowcaseとして位置づけられています。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimateIn delay={index * 0.05}>
      <div className="border-b border-white/[0.04]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <span className="text-[15px] font-medium pr-4 group-hover:text-foreground transition-colors text-foreground/80">
            {q}
          </span>
          <div
            className={`w-7 h-7 rounded-full bg-card-bg border border-card-border flex items-center justify-center shrink-0 transition-all duration-300 ${
              open ? "bg-accent/10 border-accent/20" : ""
            }`}
          >
            <ChevronDown
              size={14}
              className={`text-muted transition-transform duration-300 ${
                open ? "rotate-180 text-accent" : ""
              }`}
            />
          </div>
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
              <p className="text-sm text-muted leading-[1.9] pb-6">{a}</p>
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
          <p className="text-[11px] font-mono text-accent/70 tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-14">
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
