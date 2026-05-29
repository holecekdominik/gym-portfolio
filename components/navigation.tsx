"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#sluzby", label: "Služby" },
  { href: "#cenik", label: "Ceník" },
  { href: "#treneri", label: "Trenéři" },
  { href: "#vybaveni", label: "Vybavení" },
  { href: "#recenze", label: "Recenze" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-foreground">
              IRON<span className="text-primary">FITNESS</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider">
              Zkušební vstup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider w-full mt-4">
                Zkušební vstup
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
