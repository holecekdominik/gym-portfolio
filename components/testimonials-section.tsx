"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jan Kořínek",
    role: "Člen 3 roky",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Iron Fitness kompletně změnil můj přístup k tréninku. Skvělé vybavení, profesionální trenéři a atmosféra, která vás motivuje překonávat limity. Za 3 roky jsem zhubl 25 kg a cítím se lépe než kdy dřív.",
  },
  {
    name: "Markéta Dvořáková",
    role: "Členka 1 rok",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Jako začátečnice jsem se bála chodit do posilovny. V Iron Fitness mě ale přijali skvěle, trenéři jsou trpěliví a vysvětlí vše od základů. Dnes už trénuji sama a mám výsledky, o kterých se mi ani nesnilo.",
  },
  {
    name: "Tomáš Veselý",
    role: "Člen 5 let",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Objel jsem spoustu posiloven v okolí, ale Iron Fitness je jednoznačně nejlepší. Čistota, moderní vybavení, 24/7 přístup a hlavně skvělá komunita lidí, kteří se navzájem podporují.",
  },
  {
    name: "Lucie Malá",
    role: "Členka 2 roky",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Prémiové členství s osobním trenérem bylo nejlepší investice do sebe. Petra mě naučila správnou techniku, sestavila mi jídelníček a díky tomu jsem konečně dosáhla svých cílů. Doporučuji všem!",
  },
  {
    name: "Pavel Černý",
    role: "Člen 4 roky",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Jako powerlifter oceňuji kvalitní vybavení - Eleiko osy a kotouče, dostatek stojanů a platformy pro mrtvý tah. V jiných posilovnách tohle nenajdete. Iron Fitness je pro vážné sportovce.",
  },
  {
    name: "Kristýna Nová",
    role: "Členka 6 měsíců",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Skupinové lekce jsou skvělé! HIIT, spinning, jóga - vše na vysoké úrovni s motivujícími instruktory. Sauna po tréninku je perfektní bonus. Iron Fitness překonal všechna má očekávání.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="recenze" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Recenze</span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
            CO ŘÍKAJÍ <span className="text-primary">ČLENOVÉ</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Více než 2500 spokojených členů nemůže lhát. Přečtěte si jejich příběhy.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {`"${testimonial.text}"`}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-secondary rounded-lg">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">4.9 / 5.0</div>
              <div className="text-xs text-muted-foreground">Hodnocení na Google (320+ recenzí)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
