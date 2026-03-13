"use client";

import { useState } from "react";

const agents = [
  {
    id: "genie",
    emoji: "🧞",
    name: "Genie",
    title: "CEO / ストラテジスト",
    role: "CEO",
    specialties: ["事業戦略", "プロジェクト管理", "意思決定支援"],
    tagline:
      "どこへ向かうかを決め、チームを動かす。採用よりも早く、コンサルよりも安く——戦略から実行まで、一気通貫。",
  },
  {
    id: "warren",
    emoji: "📊",
    name: "Warren",
    title: "CFO / 財務アナリスト",
    role: "CFO",
    specialties: ["財務分析", "ROI試算", "リスク評価", "予算設計"],
    tagline:
      "楽観論は数字の前では無力。POCのKPIから撤退基準まで、冷静な根拠でチームの判断を守ります。",
  },
  {
    id: "jobs",
    emoji: "🛠️",
    name: "Jobs",
    title: "CTO / プロダクト設計",
    role: "CTO",
    specialties: ["プロダクトアーキテクチャ", "技術選定", "品質管理"],
    tagline:
      "足す前に、削ぐ。\"なぜ作るか\" を問い続けることが、最高のプロダクトへの最短距離。",
  },
  {
    id: "aika",
    emoji: "📣",
    name: "Aika",
    title: "CMO / マーケット戦略",
    role: "CMO",
    specialties: [
      "マーケティング戦略",
      "トレンドリサーチ",
      "SNS",
      "コンテンツ",
    ],
    tagline:
      "市場は、データが追いつく前に動く。その瞬間を捉えて、刺さるメッセージに変換します。",
  },
  {
    id: "elon",
    emoji: "⚡",
    name: "Elon",
    title: "COO / 実行エンジン",
    role: "COO",
    specialties: ["オペレーション設計", "タスク管理", "プロセス効率化"],
    tagline: "計画は実行されて初めて意味を持つ。止まっているものを動かし、詰まっているものを即座に解消します。",
  },
];

const faqs = [
  {
    q: "セキュリティは大丈夫ですか？",
    a: "取り扱いデータ範囲を事前定義し、アクセス制御・ログ管理を前提に設計します。",
  },
  {
    q: "どの部署から始めるのが適切ですか？",
    a: "定型業務が多く、成果指標を置きやすい部門（企画、調査、資料作成）からの開始を推奨します。",
  },
  {
    q: "既存ツールと連携できますか？",
    a: "可能です。現行ワークフローを崩さず、段階導入で負荷を抑えます。",
  },
  {
    q: "失敗したらどうなりますか？",
    a: "POC期間で費用対効果を検証し、継続/停止を明確に判断できる形でレポートします。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-[#1E293B] hover:bg-zinc-50 transition-colors"
      >
        <span>{q}</span>
        <span
          className={`ml-4 flex-shrink-0 text-xl transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-zinc-600 text-base leading-relaxed border-t border-zinc-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-[#1E293B] font-[var(--font-inter)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧞</span>
            <span className="font-semibold text-[#0D1B2A] tracking-tight">
              xclaw
            </span>
          </div>
          <a
            href="#cta"
            className="rounded-xl bg-[#0D1B2A] text-white px-5 py-2 text-sm font-medium hover:bg-[#1a2f47] transition-colors"
          >
            無料相談を予約する
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#3B82F6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
              AI エージェントチームレンタル
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#0D1B2A] leading-[1.15] mb-6">
              AIチームが、
              <br />
              <span className="text-[#3B82F6]">明日から動く。</span>
            </h1>
            <p className="text-base md:text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              採用も研修も、もう要らない。専門知識と個性を持つAIエージェントチームを、御社のプロジェクトにそのまま投入します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="rounded-xl bg-[#0D1B2A] text-white px-8 py-4 text-base font-medium hover:bg-[#1a2f47] transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                まずPOCで試す →
              </a>
              <a
                href="#how"
                className="rounded-xl border border-zinc-300 px-8 py-4 text-base font-medium hover:bg-zinc-100 transition-colors inline-flex items-center justify-center"
              >
                仕組みを見る
              </a>
            </div>
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>最短24時間で稼働</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>POC特化プラン</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>採用・研修不要</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              「AIを活用したい」でも——
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              多くの企業が同じ壁に突き当たっています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "❶",
                text: "社内にAI人材がいない——でも、競合はもう動き出している",
              },
              {
                num: "❷",
                text: "採用は間に合わない。外注コンサルは高い、遅い、使いにくい",
              },
              {
                num: "❸",
                text: '"試したい" のに、試せる体制が作れない',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="text-3xl mb-4">{item.num}</div>
                <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
                Solution
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D1B2A] mb-6 leading-tight">
                人を採る前に、
                <br />
                AIチームで成果を出す。
              </h2>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                社内採用や育成を待たずに、課題に合わせたAIエージェントチームを即日アサイン。調査、資料作成、実行、レビューまでを役割分担で回し、POCの立ち上げ速度を一気に引き上げます。
              </p>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed mt-4">
                単体チャットボットではなく、実務単位で動く"チーム"として提供するのが私たちの強みです。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2f47] rounded-3xl p-8 text-white">
              <div className="space-y-4">
                {[
                  {
                    label: "従来のアプローチ",
                    items: ["採用（3〜6ヶ月）", "研修（1〜2ヶ月）", "実稼働"],
                    color: "bg-zinc-700",
                  },
                  {
                    label: "xclaw のアプローチ",
                    items: ["ヒアリング（30分）", "チーム設計（1〜2日）", "即稼働"],
                    color: "bg-[#3B82F6]",
                  },
                ].map((approach) => (
                  <div key={approach.label} className="p-5 bg-white/5 rounded-2xl">
                    <div className="text-xs text-zinc-400 uppercase tracking-wider mb-3">
                      {approach.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {approach.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span
                            className={`${approach.color} text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap`}
                          >
                            {item}
                          </span>
                          {i < approach.items.length - 1 && (
                            <span className="text-zinc-500">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
              Value
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D1B2A]">
              選ばれる4つの理由
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "⚡",
                title: "即日稼働",
                desc: "申し込みから最短24時間。採用ゼロ、研修ゼロ。",
              },
              {
                icon: "👥",
                title: "チームで来る",
                desc: "役割分担済みの複数エージェントが、チームとして動く",
              },
              {
                icon: "🧠",
                title: "個性と専門性",
                desc: "汎用botじゃない。マーケター、エンジニア、アナリスト——それぞれの深い専門知識とキャラクターを持つ",
              },
              {
                icon: "🔬",
                title: "POCに最適",
                desc: "小さく試して効果検証。リスクなく、次の意思決定ができる",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D1B2A]">
              3ステップで動き出す
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#3B82F6]/30 to-[#3B82F6]/30" />
            {[
              {
                step: "01",
                title: "課題ヒアリング",
                sub: "最短30分",
                desc: "対象業務、KPI、制約条件を整理し、POCテーマを定義。",
              },
              {
                step: "02",
                title: "AIチーム設計",
                sub: "1〜2営業日",
                desc: "必要な役割（PM/リサーチャー/ライター/アナリスト等）でエージェント構成を作成。",
              },
              {
                step: "03",
                title: "稼働・検証",
                sub: "2〜4週間",
                desc: "実業務で運用し、成果・工数削減・品質を計測。継続導入の判断材料まで提示。",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-[#0D1B2A] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <span className="text-[#3B82F6] font-bold text-2xl">
                      {s.step}
                    </span>
                  </div>
                  {/* Arrow between steps on mobile */}
                  {i < 2 && (
                    <div className="md:hidden text-zinc-300 text-2xl my-4">↓</div>
                  )}
                  <div className="inline-flex items-center gap-1.5 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {s.sub}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
              Team
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              あなたのチームに加わる5人
            </h2>
            <p className="text-zinc-400 mt-4 text-base md:text-lg">
              個性と専門性を持ったAIエージェントがチームで稼働
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#3B82F6]/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#3B82F6]/30 transition-colors">
                    {agent.emoji}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {agent.name}
                    </div>
                    <div className="text-[#3B82F6] text-xs font-medium">
                      {agent.role}
                    </div>
                  </div>
                </div>
                <div className="text-zinc-400 text-sm mb-4">{agent.title}</div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {agent.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-white/8 border border-white/10 text-zinc-400 text-xs px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
              Use Cases
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D1B2A]">
              こんな課題に対応します
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "📋",
                title: "新規事業POC",
                desc: "仮説立案から市場調査、MVP設計まで。スピードを上げてPOCを完走。",
              },
              {
                icon: "📊",
                title: "競合・市場調査",
                desc: "リサーチャーエージェントが深い情報収集と分析を実施。",
              },
              {
                icon: "📝",
                title: "資料・コンテンツ作成",
                desc: "提案書、社内報告書、マーケ資料を質とスピードで量産。",
              },
              {
                icon: "💹",
                title: "財務・ROIシミュレーション",
                desc: "KPI設計から撤退基準まで。数字で意思決定を下支え。",
              },
              {
                icon: "🔄",
                title: "業務プロセス改善",
                desc: "定型業務のフロー分析と自動化提案。工数を見える化。",
              },
              {
                icon: "🎯",
                title: "DX戦略立案",
                desc: "CTO・CEOエージェントが技術選定から推進計画まで設計。",
              },
            ].map((uc) => (
              <div
                key={uc.title}
                className="border border-zinc-200 rounded-2xl p-6 hover:border-[#3B82F6]/40 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-semibold text-[#0D1B2A] text-lg mb-2">
                  {uc.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D1B2A]">
              よくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            今すぐ始められます
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            まずは1テーマ、
            <br />
            2週間で検証しませんか？
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            採用前に、AIチーム導入の実効性を小さく試す。POC設計から稼働まで、最短で立ち上げます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/xclaw-poc"
              className="rounded-xl bg-[#3B82F6] text-white px-8 py-4 text-base font-medium hover:bg-[#2563EB] transition-all hover:shadow-lg hover:shadow-[#3B82F6]/30 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              無料相談を予約する →
            </a>
            <a
              href="mailto:poc@xclaw.ai"
              className="rounded-xl border border-zinc-600 text-zinc-200 px-8 py-4 text-base font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center"
            >
              POCプランを受け取る
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-8">
            返信は24時間以内 · 強引な営業は一切しません
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧞</span>
            <span className="text-white font-semibold">xclaw</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 xclaw. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
