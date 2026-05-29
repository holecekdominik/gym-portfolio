import { Dumbbell } from "lucide-react"

const footerLinks = {
  sluzby: [
    { label: "Osobní trénink", href: "#" },
    { label: "Skupinové lekce", href: "#" },
    { label: "Výživové poradenství", href: "#" },
    { label: "Rehabilitace", href: "#" },
  ],
  informace: [
    { label: "O nás", href: "#" },
    { label: "Kariéra", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  pravni: [
    { label: "Obchodní podmínky", href: "#" },
    { label: "Ochrana soukromí", href: "#" },
    { label: "Provozní řád", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-foreground">
                IRON<span className="text-primary">FITNESS</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Prémiové fitness centrum v srdci Kolína. Od roku 2009 pomáháme lidem dosahovat jejich fitness cílů.
            </p>
            <p className="text-muted-foreground text-sm">
              IČO: 12345678<br />
              DIČ: CZ12345678
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">
              Služby
            </h4>
            <ul className="space-y-3">
              {footerLinks.sluzby.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">
              Informace
            </h4>
            <ul className="space-y-3">
              {footerLinks.informace.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">
              Právní informace
            </h4>
            <ul className="space-y-3">
              {footerLinks.pravni.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Iron Fitness Kolín. Všechna práva vyhrazena.
          </p>
          <p className="text-muted-foreground text-xs">
            Vytvořeno s ❤️ v Kolíně
          </p>
        </div>
      </div>
    </footer>
  )
}
