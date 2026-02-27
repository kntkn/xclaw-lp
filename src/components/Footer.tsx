export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold tracking-tight mb-3">
              <span className="text-foreground">x</span>
              <span className="text-accent">claw</span>
            </div>
            <p className="text-sm text-muted/70 leading-[1.8] max-w-xs">
              ローカルノード上で自分専用のAIを運用するための実践型メンバーシップコミュニティ。
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[10px] font-mono text-muted/40 tracking-widest uppercase mb-5">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Activities", href: "#activities" },
                { label: "Membership", href: "#membership" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted/60 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-mono text-muted/40 tracking-widest uppercase mb-5">
              Contact
            </div>
            <a
              href="mailto:contact@xclaw.io"
              className="text-sm text-muted/60 hover:text-foreground transition-colors duration-200"
            >
              contact@xclaw.io
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.04] text-xs text-muted/30 font-mono">
          &copy; {new Date().getFullYear()} xclaw. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
