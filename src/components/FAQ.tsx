"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "100,000円には何が含まれますか？",
    a: "xclawコミュニティへの参加権、初期オンボーディング、基本ガイドとドキュメント、定期セッションへのアクセス、初期ユースケースへのアクセスが含まれます。AIを運用するためのハードウェア費用は含まれておらず、別途必要です。",
  },
  {
    q: "Mac miniは必要ですか？",
    a: "ローカルノードの運用にはMac miniまたは同等のハードウェアが推奨されますが、参加時点で必須ではありません。オンボーディングの中で、環境や用途に応じた導入ガイダンスを提供します。",
  },
  {
    q: "エンジニアでなくても参加できますか？",
    a: "参加できます。基本的なセットアップはガイドに沿って進められるよう設計されています。高度なカスタマイズにはある程度の技術知識が必要になりますが、コミュニティ内での知見共有やサポートを通じて段階的に習得していける環境です。",
  },
  {
    q: "参加後は何から始まりますか？",
    a: "オンボーディングセッションへの参加から始まります。xclawの仕組み、ノード環境のセットアップ手順、最初に試すべきユースケースについてガイダンスを受けた上で、自分のペースで運用を開始していきます。",
  },
  {
    q: "法人でも参加できますか？",
    a: "法人名義での参加も可能です。詳細な条件についてはお問い合わせください。",
  },
  {
    q: "収益は保証されますか？",
    a: "xclawは投資商品ではなく、AIの運用コミュニティです。収益や利回りを保証するものではありません。メンバーは自分のAIを運用し、実務や実験に接続していくことで、それぞれの活動に価値を見出していく形です。",
  },
  {
    q: "xclawとClaw甲子園の関係は何ですか？",
    a: "Claw甲子園は、xclawメンバーのAIエージェントが実際に稼働する公開実験イベントです。xclawで運用しているAIを実践の場で試し、成果を共有するshowcaseとして位置づけられています。",
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
    <section id="faq" className="py-28 sm:py-36 bg-section-alt">
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
