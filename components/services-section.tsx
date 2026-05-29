"use client"

import { Dumbbell, Users, Utensils, HeartPulse, Flame, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Dumbbell,
    title: "Osobní trénink",
    description: "Individuální přístup s certifikovaným trenérem, který vám pomůže dosáhnout vašich cílů rychle a efektivně.",
  },
  {
    icon: Users,
    title: "Skupinové lekce",
    description: "HIIT, spinning, jóga, pilates a další. Cvičte ve skupině s motivující atmosférou a skvělými instruktory.",
  },
  {
    icon: Utensils,
    title: "Výživové poradenství",
    description: "Sestavíme vám individuální jídelníček podle vašich cílů - hubnutí, nabírání svalů nebo udržení kondice.",
  },
  {
    icon: HeartPulse,
    title: "Analýza složení těla",
    description: "Profesionální měření pomocí InBody analyzéru. Zjistěte přesný poměr svalů, tuku a vody ve vašem těle.",
  },
  {
    icon: Flame,
    title: "Sauna & Wellness",
    description: "Relaxujte po tréninku v naší finské sauně. Ideální pro regeneraci svalů a celkové uvolnění.",
  },
  {
    icon: Clock,
    title: "Přístup 24/7",
    description: "S Prémiovým a Elitním členstvím máte přístup do posilovny kdykoliv - brzy ráno i pozdě v noci.",
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Naše služby</span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4">
              VŠE PRO VÁŠ <span className="text-primary">ÚSPĚCH</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Nabízíme kompletní služby pro dosažení vašich fitness cílů pod jednou střechou.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
