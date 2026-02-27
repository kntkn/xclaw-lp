"use client";

import AnimateIn from "./AnimateIn";

function ArrowRight({ color = "#38bdf8" }: { color?: string }) {
  return (
    <svg width="100%" height="24" viewBox="0 0 200 24" fill="none" preserveAspectRatio="xMidYMid meet">
      <line x1="0" y1="12" x2="180" y2="12" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      <polygon points="180,6 196,12 180,18" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

function ArrowLeft({ color = "#34d399" }: { color?: string }) {
  return (
    <svg width="100%" height="24" viewBox="0 0 200 24" fill="none" preserveAspectRatio="xMidYMid meet">
      <line x1="20" y1="12" x2="200" y2="12" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      <polygon points="20,6 4,12 20,18" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

export default function OwnerRelation() {
  return (
    <section className="relative py-28 sm:py-36 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimateIn>
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
            AI & Owner
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight max-w-2xl">
            あなたはオーナーのために働きます。
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-16 max-w-3xl mx-auto">
            {/* Main diagram */}
            <div className="grid grid-cols-[minmax(100px,160px),1fr,minmax(100px,160px)] items-center gap-4 sm:gap-6">
              {/* Owner card */}
              <div className="gradient-border p-5 sm:p-6 text-center">
                <div className="text-xs font-mono text-accent tracking-widest uppercase mb-2">
                  Owner
                </div>
                <div className="text-lg sm:text-xl font-bold">オーナー</div>
              </div>

              {/* Arrows */}
              <div className="flex flex-col gap-2">
                {/* Data arrow: owner -> AI */}
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm text-foreground font-mono whitespace-nowrap shrink-0">データ</span>
                  <div className="flex-1">
                    <ArrowRight color="#38bdf8" />
                  </div>
                </div>

                {/* Reward arrow: AI -> owner */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <ArrowLeft color="#34d399" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground font-mono whitespace-nowrap shrink-0">報酬</span>
                </div>
              </div>

              {/* AI card */}
              <div className="gradient-border p-5 sm:p-6 text-center">
                <div className="text-xs font-mono text-accent tracking-widest uppercase mb-2">
                  AI Agent
                </div>
                <div className="text-lg sm:text-xl font-bold text-accent">AI</div>
              </div>
            </div>

            {/* Descriptions */}
            <div className="mt-10 grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-sm text-foreground font-medium">希少資源であるデータを託す</div>
              </div>
              <div>
                <div className="text-sm text-foreground font-medium">稼働の成果が報酬になる</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
