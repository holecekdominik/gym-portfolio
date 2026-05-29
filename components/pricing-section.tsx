"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Základ",
    price: "699",
    period: "měsíc",
    description: "Pro ty, kteří začínají svou fitness cestu",
    features: [
      "Přístup do posilovny 6:00-22:00",
      "Vstup do cardio zóny",
      "Šatny se sprchami",
      "Základní úvodní konzultace",
      "Možnost rezervace strojů",
    ],
    highlighted: false,
  },
  {
    name: "Prémiové",
    price: "1 299",
    period: "měsíc",
    description: "Nejoblíbenější volba našich členů",
    features: [
      "Neomezený přístup 24/7",
      "Všechny zóny včetně funkční",
      "Sauna a relaxační zóna",
      "2x měsíčně osobní trenér",
      "Skupinové lekce zdarma",
      "Přístup do VIP šatny",
      "Výživové poradenství",
    ],
    highlighted: true,
  },
  {
    name: "Elitní",
    price: "2 499",
    period: "měsíc",
    description: "Pro ty, kteří chtějí maximum",
    features: [
      "Vše z Prémiové",
      "8x měsíčně osobní trenér",
      "Individuální tréninkový plán",
      "Měsíční analýza složení těla",
      "Masáže a regenerace",
      "Prioritní přístup k novinkám",
      "Parkování zdarma",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="cenik" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Ceník členství</span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
            VYBERTE SI <span className="text-primary">PLÁN</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Flexibilní členství bez závazků. Můžete kdykoliv změnit nebo pozastavit.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Nejoblíbenější
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-5xl lg:text-6xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">Kč/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full font-semibold uppercase tracking-wider ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  Vybrat {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Všechna členství zahrnují přístup do mobilní aplikace a možnost pozastavení až na 30 dní ročně.
          </p>
        </div>
      </div>
    </section>
  )
}
