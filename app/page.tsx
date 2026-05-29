import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { TrainersSection } from "@/components/trainers-section"
import { EquipmentSection } from "@/components/equipment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <EquipmentSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
