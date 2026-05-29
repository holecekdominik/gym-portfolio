"use client"

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "U Stadionu 16",
    subvalue: "280 02 Kolín",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 321 123 456",
    subvalue: "Denně 6:00-22:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ironfitness.cz",
    subvalue: "Odpovíme do 24 hodin",
  },
  {
    icon: Clock,
    label: "Otevírací doba",
    value: "Non-stop 24/7",
    subvalue: "Pro členy s kartou",
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Kontakt</span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
            ZAČNĚTE <span className="text-primary">JEŠTĚ DNES</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Máte otázky? Napište nám nebo se stavte na prohlídku. První vstup máte na nás!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground mb-6">
                NAPIŠTE NÁM
              </h3>
              
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Jméno *
                    </label>
                    <Input
                      id="name"
                      placeholder="Vaše jméno"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      placeholder="+420 xxx xxx xxx"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vas@email.cz"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Zpráva *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Vaše zpráva nebo dotaz..."
                    rows={4}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider py-6">
                  Odeslat zprávu
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.subvalue}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video relative bg-secondary">
                <iframe
                  src="https://www.google.com/maps?q=U%20Stadionu%2016%2C%20280%2002%20Kol%C3%ADn&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
              </div>
            </Card>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground">Sledujte nás:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
