"use client";

import AnimateIn from "./AnimateIn";

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
          <div className="mt-16 max-w-md mx-auto">
            {/* Single SVG diagram */}
            <svg viewBox="0 0 400 320" fill="none" className="w-full h-auto">
              {/* Owner box */}
              <rect x="20" y="20" width="360" height="80" rx="16" fill="#0c1018" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
              <text x="200" y="50" textAnchor="middle" fill="#ff4d4d" fontSize="11" fontFamily="monospace" letterSpacing="0.1em">OWNER</text>
              <text x="200" y="76" textAnchor="middle" fill="#e8ecf4" fontSize="20" fontFamily="system-ui" fontWeight="700">オーナー</text>

              {/* Arrow down: データ (Owner -> AI) */}
              <line x1="140" y1="100" x2="140" y2="200" stroke="#ff4d4d" strokeWidth="1.5" strokeOpacity="0.5" />
              <polygon points="133,194 140,210 147,194" fill="#ff4d4d" fillOpacity="0.5" />
              <text x="120" y="158" textAnchor="end" fill="#e8ecf4" fontSize="14" fontFamily="monospace">データ</text>

              {/* Arrow up: 報酬 (AI -> Owner) */}
              <line x1="260" y1="220" x2="260" y2="120" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.5" />
              <polygon points="253,126 260,110 267,126" fill="#34d399" fillOpacity="0.5" />
              <text x="280" y="162" textAnchor="start" fill="#e8ecf4" fontSize="14" fontFamily="monospace">報酬</text>

              {/* AI box */}
              <rect x="20" y="220" width="360" height="80" rx="16" fill="#0c1018" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
              <text x="200" y="250" textAnchor="middle" fill="#ff4d4d" fontSize="11" fontFamily="monospace" letterSpacing="0.1em">AI AGENT</text>
              <text x="200" y="276" textAnchor="middle" fill="#ff4d4d" fontSize="20" fontFamily="system-ui" fontWeight="700">AI</text>
            </svg>

            {/* Descriptions */}
            <div className="mt-8 grid grid-cols-2 gap-6 text-center">
              <div className="text-sm text-foreground">希少資源であるデータを託す</div>
              <div className="text-sm text-foreground">稼働の成果が報酬になる</div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
