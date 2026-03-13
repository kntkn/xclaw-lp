"use client";

import { useState } from "react";

type Agent = {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  tagline: string;
  avatarEmoji: string;
};

const agents: Agent[] = [
  {
    id: "genie",
    name: "Genie",
    role: "CEO / ストラテジスト",
    specialties: ["事業戦略", "プロジェクト管理", "意思決定支援"],
    tagline:
      "どこへ向かうかを決め、チームを動かす。戦略から実行まで一気通貫で支える。",
    avatarEmoji: "🧞",
  },
  {
    id: "aika",
    name: "Aika",
    role: "CMO / コピー・マーケ",
    specialties: ["コピーライティング", "訴求設計", "トーン設計"],
    tagline:
      "市場の動きを言葉に変え、決裁者に刺さるメッセージを作る。",
    avatarEmoji: "📣",
  },
  {
    id: "elon",
    name: "Elon",
    role: "COO / 実行エンジン",
    specialties: ["情報設計", "オペレーション設計", "実装推進"],
    tagline:
      "計画は実行されて初めて意味を持つ。止まる前提でなく、回る設計を作る。",
    avatarEmoji: "⚡",
  },
];

const painPoints = [
  {
    number: "01",
    title: "社内にAI人材がいない——でも、競合はもう動き出している。",
    body: "動きたいのに、推進できる人が足りない。その遅れがそのまま機会損失になる。",
  },
  {
    number: "02",
    title: "採用は間に合わない。外注コンサルは高い、遅い、使いにくい。",
    body: "必要なのは長い提案書ではなく、今すぐ動ける実働体制。",
  },
  {
    number: "03",
    title: "試したいのに、試せる体制が社内にない。",
    body: "小さく始めたいだけなのに、最初の一歩の設計で止まってしまう。",
  },
];

const values = [
  {
    icon: "⚡",
    title: "即日稼働",
    body: "申し込みから最短24時間。採用ゼロ、研修ゼロで立ち上がります。",
  },
  {
    icon: "👥",
    title: "チームで来る",
    body: "1体のbotではなく、役割分担されたAIチームがそのまま実務に入ります。",
  },
  {
    icon: "🧠",
    title: "個性と専門性",
    body: "マーケ、分析、実装、戦略。専門ごとの強みとキャラクターを持つAIが、実務単位で機能します。",
  },
  {
    icon: "🔬",
    title: "POCに最適",
    body: "まずは小さく始めて、成果と課題を見極める。大きく張る前に、現実的な検証ができます。",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "課題を定義する",
    body: "対象業務、期待成果、制約条件を整理し、POCテーマを決める。",
  },
  {
    step: "Step 2",
    title: "AIチームを設計する",
    body: "必要な役割に応じて、エージェント構成を組む。例: strategist / researcher / analyst / operator / writer",
  },
  {
    step: "Step 3",
    title: "実務で回して検証する",
    body: "2〜4週間で実運用し、工数削減・スピード・品質・再現性を測る。継続導入するか止めるかまで判断材料を出す。",
  },
];

const useCases = [
  "新規事業部門: 市場調査、競合分析、提案資料作成を短期間で回す",
  "DX推進部門: 社内業務の自動化候補を洗い出し、POCを高速実行する",
  "経営企画: 定例レポート、意思決定用サマリー、論点整理を高速化する",
  "営業企画: 提案書たたき台、顧客分析、仮説設計を支援する",
  "マーケティング: 調査→企画→コピー→改善案までを一気通貫で回す",
  "社内特命PJ: 少人数で回している曖昧な案件に、即席の実働チームを投入する",
];

const faqs = [
  {
    q: "セキュリティは大丈夫か？",
    a: "扱う情報範囲を事前に定義し、アクセス制御・ログ管理前提で設計する。",
  },
  {
    q: "どの部署から始めるべきか？",
    a: "企画、調査、資料作成、社内レポーティングのように、成果指標を置きやすい領域が向いている。",
  },
  {
    q: "既存ツールと一緒に使えるか？",
    a: "可能だ。既存ワークフローを壊さず、段階導入で組み込む前提で設計する。",
  },
  {
    q: "失敗したらどうなるか？",
    a: "POC期間で費用対効果を測り、継続・停止を判断できるようにする。失敗コストを小さく固定する設計だ。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-medium text-[#1E293B]">{q}</span>
        <span className={`text-xl transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && <div className="border-t border-zinc-100 px-6 py-5 text-zinc-600">{a}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-[#1E293B] font-[var(--font-inter)]">
      <nav className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#F8FAFC]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-[#0D1B2A]">
            <span>🧞</span>
            <span>xclaw</span>
          </div>
          <a
            href="#cta"
            className="rounded-xl bg-[#0D1B2A] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#16273b]"
          >
            まずはPOCで試す
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full bg-[#3B82F6]/10 px-4 py-1.5 text-sm font-medium text-[#2563EB]">
              AIエージェントチームレンタル
            </div>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0D1B2A] md:text-6xl md:leading-[1.1]">
              AIチームが、
              <br />
              明日から動く。
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              採用も研修も、もう要らない。個性・スキル・専門知識を持つAIエージェントチームを、御社のプロジェクトにそのまま投入できます。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-[#0D1B2A] px-8 py-4 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#16273b] hover:shadow-lg"
              >
                まずはPOCで試す
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-8 py-4 text-base font-medium transition hover:bg-white"
              >
                導入イメージを見る
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>✓ 最短24時間で稼働</span>
              <span>✓ POC特化プラン</span>
              <span>✓ 採用・研修不要</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              AIをやりたい。でも進まない。
            </h2>
            <p className="text-base text-zinc-400 md:text-lg">
              大企業の新規事業・DX推進部門で、よく止まるのはこの3点だ。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item.number} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="mb-4 text-sm font-semibold text-[#60A5FA]">{item.number}</div>
                <h3 className="mb-4 text-xl font-semibold text-white leading-snug">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto grid gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">Solution</div>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-5xl">
              採用前に、AIチームで結果を出す。
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
              社内採用や育成を待たず、課題に応じたAIエージェントチームを即日アサインする。調査、資料作成、分析、実行、レビューまでを役割分担で回し、POCの立ち上がりを最短化する。単体のチャットボットではなく、実務単位で動く
              <strong className="text-[#0D1B2A]">チーム</strong>
              として提供するのが差分だ。
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-[#0D1B2A] to-[#1D3557] p-8 text-white shadow-xl">
            <div className="mb-6 text-lg font-semibold">このサービスの特徴</div>
            <ul className="space-y-4 text-zinc-200">
              {[
                "採用不要",
                "研修不要",
                "すぐ着手",
                "小さく試せる",
                "専門性を役割で分担できる",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 text-[#60A5FA]">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">選ばれる4つの理由</h2>
            <p className="text-base text-zinc-600 md:text-lg">即日稼働だけじゃない。組織に載せやすい理由がある。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-7">
                <div className="mb-4 text-3xl">{value.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#0D1B2A]">{value.title}</h3>
                <p className="leading-relaxed text-zinc-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">How it works</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">3ステップで実務に入る</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-zinc-200 bg-white p-8">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">{step.step}</div>
                <h3 className="mb-4 text-xl font-semibold text-[#0D1B2A]">{step.title}</h3>
                <p className="leading-relaxed text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">Team</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              役割分担されたAIチームが来る
            </h2>
            <p className="text-base text-zinc-400 md:text-lg">
              1体のbotではなく、実務を回すためのチームをそのまま投入する。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {agents.map((agent) => (
              <div key={agent.id} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {agent.avatarEmoji}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{agent.name}</div>
                    <div className="text-sm text-zinc-400">{agent.role}</div>
                  </div>
                </div>
                <p className="mb-5 leading-relaxed text-zinc-200">{agent.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-zinc-300"
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

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">Use cases</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">こんな場面で効く</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-6 leading-relaxed text-zinc-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">FAQ</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">よくある質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-[#0D1B2A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            まずはPOCで、小さく始める。
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            最初から大きく導入しなくていい。まずは1テーマで試して、成果と課題を見てから広げればいい。そういう前提で設計する。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://forms.gle/xclaw-poc"
              className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-8 py-4 text-base font-medium text-white transition hover:bg-[#2563EB]"
            >
              まずはPOCで試す
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-8 py-4 text-base font-medium text-zinc-200 transition hover:bg-white/5"
            >
              導入イメージを見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
