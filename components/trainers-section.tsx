"use client"

import { Instagram, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const trainers = [
  {
    name: "Martin Novák",
    specialty: "Silový trénink & Powerlifting",
    experience: "12 let",
    certifications: ["NSCA-CPT", "Powerlifting Coach Level 3"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&crop=face",
    instagram: "@martin_fitness",
  },
  {
    name: "Petra Svobodová",
    specialty: "Funkční trénink & HIIT",
    experience: "8 let",
    certifications: ["ACE Certified", "TRX Instructor"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&crop=face",
    instagram: "@petra_fit",
  },
  {
    name: "Jakub Procházka",
    specialty: "Bodybuilding & Výživa",
    experience: "10 let",
    certifications: ["IFBB Pro", "Sports Nutritionist"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&crop=face",
    instagram: "@jakub_body",
  },
  {
    name: "Kateřina Horáková",
    specialty: "Yoga & Mobilita",
    experience: "6 let",
    certifications: ["RYT-500", "Mobility Specialist"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&crop=face",
    instagram: "@kate_yoga",
  },
]

export function TrainersSection() {
  return (
    <section id="treneri" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Náš tým</span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4">
              OSOBNÍ <span className="text-primary">TRENÉŘI</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Certifikovaní profesionálové, kteří vám pomohou dosáhnout vašich cílů efektivně a bezpečně.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <Card
              key={trainer.name}
              className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href="#"
                    className="text-primary-foreground flex items-center gap-2 font-medium hover:underline"
                  >
                    <Instagram className="w-5 h-5" />
                    {trainer.instagram}
                  </a>
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{trainer.specialty}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Award className="w-4 h-4" />
                  <span>{trainer.experience} zkušeností</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
