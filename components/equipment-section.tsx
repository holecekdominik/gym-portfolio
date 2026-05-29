"use client"

import { Dumbbell, Zap, Heart, Target, Timer, Users } from "lucide-react"

const equipmentZones = [
  {
    icon: Dumbbell,
    title: "Silová zóna",
    description: "Profesionální činky od 2 do 60 kg, olympijské osy a kompletní sada kotoučů. Stojanů na dřepy a benchů máme dostatek pro každého.",
    features: ["Eleiko olympijské osy", "Hammer Strength stroje", "Dřepovací stojany"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
  {
    icon: Zap,
    title: "Funkční zóna",
    description: "Prostor pro funkční trénink s kettlebelly, slam bally, battle ropy a dalším vybavením pro komplexní pohyb.",
    features: ["Rig pro kalistenika", "Kettlebelly 4-48 kg", "Plyometrické boxy"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
  },
  {
    icon: Heart,
    title: "Cardio zóna",
    description: "Běžecké pásy Technogym, spinningová kola, veslovací trenažéry a air biky pro efektivní kardio trénink.",
    features: ["20+ běžeckých pásů", "Spinningová kola", "Veslovací trenažéry"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
  },
  {
    icon: Target,
    title: "Strečink & Mobilita",
    description: "Vyhrazený prostor pro strečink, foam rolling a mobilizační cvičení s matkami a všemi potřebnými pomůckami.",
    features: ["Jógové matky", "Foam rollery", "Mobilizační pomůcky"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
  },
]

const features = [
  { icon: Timer, label: "Otevřeno 24/7" },
  { icon: Users, label: "Klimatizace" },
  { icon: Heart, label: "Sauna & Wellness" },
  { icon: Target, label: "Parkování zdarma" },
]

export function EquipmentSection() {
  return (
    <section id="vybaveni" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Naše vybavení</span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
            SVĚTOVÁ <span className="text-primary">TŘÍDA</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Investujeme do nejlepšího vybavení od značek Eleiko, Technogym a Hammer Strength,
            abyste měli vše potřebné pro dosažení svých cílů.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Equipment zones grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {equipmentZones.map((zone, index) => (
            <div
              key={zone.title}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                </div>
                
                {/* Content */}
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <zone.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground mb-3">
                    {zone.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {zone.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {zone.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-secondary-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
