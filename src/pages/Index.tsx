import { useState } from "react";
import { Menu, X, ArrowUp, Home, Paintbrush, Hammer, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import heroImage from "@/assets/hero-interior.jpg";
import portraitImage from "@/assets/designer-portrait.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const navLinks = ["About", "Services", "Portfolio", "Contact"];

const services = [
  {
    icon: Home,
    title: "Layout & Space Planning",
    description: "Crafting the perfect flow and functionality for your home — from room proportions to traffic patterns, every detail is considered.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Curating fixtures, furniture, and finishes that reflect your personality while creating a cohesive, stunning aesthetic.",
  },
  {
    icon: Hammer,
    title: "Builder Coordination",
    description: "Seamlessly collaborating with builders and tradespeople to ensure your vision is brought to life — on time and on point.",
  },
];

const portfolioItems = [
  { image: portfolio1, title: "The Serene Suite" },
  { image: portfolio2, title: "Golden Kitchen" },
  { image: portfolio3, title: "Marble Retreat" },
  { image: portfolio4, title: "Grand Living" },
  { image: portfolio5, title: "Elegant Dining" },
  { image: portfolio6, title: "The Study" },
];

const testimonials = [
  {
    quote: "Elle transformed our house into a home. Her ability to understand our lifestyle and translate it into beautiful, functional spaces is unmatched.",
    name: "Sarah & James K.",
    project: "Full Home Renovation",
  },
  {
    quote: "Working with Elle was an absolute dream. She has an incredible eye for detail and made the entire process feel effortless.",
    name: "Michael T.",
    project: "Apartment Redesign",
  },
  {
    quote: "Elle's coordination with our builder was seamless. She kept everything on track and the result exceeded our expectations.",
    name: "The Rivera Family",
    project: "New Build Interior",
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="font-['Playfair_Display'] text-2xl font-semibold tracking-wide text-foreground">
            Elle <span className="text-primary">Rosa</span>
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

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury interior design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Interior Design Consultancy</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
              Designing Spaces That Tell{" "}
              <span className="italic text-primary">Your Story</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              From concept to completion, Elle Rosa creates interiors that are as functional as they are beautiful — spaces that truly feel like home.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-none px-10 py-6 text-sm tracking-widest uppercase"
            >
              Get in Touch
            </Button>
          </div>
        </div>
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
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">About Elle</p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Where Vision Meets <span className="italic">Craft</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Elle Rosa brings a refined, detail-obsessed approach to interior design. With a passion for creating spaces that balance beauty with everyday functionality, she works closely with each client to understand their lifestyle, tastes, and aspirations.
                </p>
                <p>
                  Her end-to-end process — from initial concept through to builder coordination and final styling — ensures a seamless experience and a result that feels authentically yours.
                </p>
                <p>
                  Whether it's a full home renovation or a single room refresh, Elle's philosophy remains the same: every space should tell a story.
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
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">What I Do</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Services
            </h2>
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
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.title} className="group relative aspect-square overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex items-end">
                  <p className="text-background font-['Playfair_Display'] text-lg p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Kind Words</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-10 border border-border">
                <Quote className="w-6 h-6 text-primary/40 mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold font-['Playfair_Display']">{t.name}</p>
                  <p className="text-sm text-primary">{t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Let's Create Something <span className="italic">Beautiful</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Ready to transform your space? Book a consultation and let's bring your vision to life.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@ellerosa.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+61 400 000 000</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Melbourne, Australia</span>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="rounded-none bg-background border-border focus:border-primary h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="rounded-none bg-background border-border focus:border-primary h-12" />
              </div>
              <div>
                <Textarea placeholder="Tell me about your project..." className="rounded-none bg-background border-border focus:border-primary min-h-[160px] resize-none" />
              </div>
              <Button type="submit" className="rounded-none px-10 py-6 text-sm tracking-widest uppercase w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-['Playfair_Display'] text-sm text-muted-foreground">
            © 2025 Elle Rosa Interior Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
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
