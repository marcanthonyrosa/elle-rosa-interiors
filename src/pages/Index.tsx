import { useState } from "react";
import { Menu, X, ArrowUp, ChevronDown, Home, Paintbrush, Hammer, Mail, MapPin } from "lucide-react";

import heroImage from "@/assets/hero-interior.jpg";
import portraitImage from "@/assets/designer-portrait.jpg";

const navLinks = ["About", "Services", "Portfolio", "Contact"];

const services = [
  {
    icon: Home,
    title: "Layout Design",
    description: "Crafting the spatial flow and floor plan of your home — maximising light, movement, and function.",
  },
  {
    icon: Paintbrush,
    title: "Room Design",
    description: "Curating fixtures, furniture, and finishes to create rooms that feel as good as they look.",
  },
  {
    icon: Hammer,
    title: "Builder Coordination",
    description: "Working hand-in-hand with builders to bring the vision to life, on budget and on time.",
  },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="font-['Playfair_Display'] text-2xl font-semibold tracking-wide text-foreground">
            Elle Rosa <span className="text-primary">Design</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="block w-full text-left text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero — full-screen, centered */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury interior design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-6">Interior Design Studio</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 font-['Playfair_Display']">
            Elle Rosa Design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Designing spaces that define you
          </p>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={portraitImage} alt="Elle Rosa, Interior Designer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary hidden md:block" />
            </div>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Concept to <span className="italic">Completion</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Elle Rosa transforms houses into deeply personal spaces. With an end-to-end approach — from initial concept through design and build — every project is crafted with intention, precision, and a bold sense of style.
                </p>
                <p>
                  Each home tells its owner's story. Elle works closely with clients and builders to ensure that story is told beautifully, on time, and without compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-semibold">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-10 border border-border hover:border-primary/50 transition-all duration-500 group"
              >
                <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4 font-['Playfair_Display']">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">Portfolio</h2>
            <div className="py-20 border border-border bg-secondary/30">
              <p className="text-muted-foreground text-lg italic font-['Playfair_Display']">Coming Soon</p>
              <p className="text-muted-foreground/70 text-sm mt-2">Our latest projects will be showcased here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              Let's Create Something <span className="italic">Beautiful</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to transform your space? Get in touch and let's bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>elle@ellerosadesign.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Houston, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-['Playfair_Display'] text-sm text-muted-foreground">
            © 2025 Elle Rosa Interior Design. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
