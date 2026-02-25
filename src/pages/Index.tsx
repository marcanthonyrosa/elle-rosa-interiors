import { useState, useCallback, useEffect } from "react";
import { Menu, X, ArrowUp, ChevronDown, Home, Paintbrush, Hammer, Mail, MapPin, Copy, Check } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

import heroImage from "@/assets/hero-interior.jpg";
import portraitImage from "@/assets/kitchen-1.png";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const navLinks = ["About", "Services", "Portfolio", "Contact"];
5
const services = [
{
  icon: Home,
  title: "Layout Design",
  description: "The floor plan shapes everything. I work with your builder early — before walls go up — to make sure your home flows the way your family actually lives."
},
{
  icon: Paintbrush,
  title: "Room Design",
  description: "Furniture, fixtures, finishes, fabrics. I make every styling call as a cohesive whole, so nothing feels random and everything feels intentional."
},
{
  icon: Hammer,
  title: "Builder Coordination",
  description: "I stay in it all the way through delivery — so what you move into actually matches what we designed."
}];

const portfolioItems = [
  { image: portfolio1, title: "Modern Family Retreat", description: "A full home redesign for a family of five — open-plan living, warm textures, and kid-proof finishes that still feel elevated." },
  { image: portfolio2, title: "River Oaks Revival", description: "A dated 1990s build transformed into a bright, layered home with custom millwork and statement lighting throughout." },
  { image: portfolio3, title: "The Heights Renovation", description: "A thoughtful renovation balancing original charm with modern function — designed for a young couple who love to entertain." },
  { image: portfolio4, title: "Memorial New Build", description: "Collaborated with the builder from day one to shape a layout that puts family life at the center of every room." },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setCurrentSlide(carouselApi.selectedScrollSnap());
    setSlideCount(carouselApi.scrollSnapList().length);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => { carouselApi.off("select", onSelect); };
  }, [carouselApi, onSelect]);

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
            {navLinks.map((link) =>
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">

                {link}
              </button>
            )}
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen &&
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
            {navLinks.map((link) =>
          <button
            key={link}
            onClick={() => scrollToSection(link.toLowerCase())}
            className="block w-full text-left text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">

                {link}
              </button>
          )}
          </div>
        }
      </nav>

      {/* Hero — full-screen, centered */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury interior design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.1] mb-6 font-['Playfair_Display']">
            Elle Rosa <span className="text-primary">Design</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 font-['Playfair_Display'] text-foreground/90">
            Homes designed for busy families to actually live in.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            I handle every detail — from the floor plan to the final finish — so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300">

              Start Your Project
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 bg-background text-foreground text-sm tracking-widest uppercase rounded-lg shadow-md hover:shadow-lg hover:text-primary transition-all duration-300">

              View Portfolio
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary animate-bounce"
          aria-label="Scroll down">

          <ChevronDown size={32} />
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={portraitImage} alt="Elle Rosa, Interior Designer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary hidden md:block" />
            </div>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">About</p>
              <h2 className="text-3xl md:text-[32px] font-semibold mb-8 leading-snug">
                Concept to <span className="italic">Completion</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                <p>
                  I started Elle Rosa Design because I believe your home should feel like you — not a catalogue, not a trend, not someone else's idea of beautiful.
                </p>
                <p>
                  I work with families building new homes or renovating the one they're already in. I get into it early — working alongside your builder on the layout itself — because the best design decisions happen before the walls go up, not after.
                </p>
                <p>
                  From floor plan to furniture to the final walkthrough, I stay in it until it's right.
                </p>
                <p>
                  As a mom, I design with real life in mind — because I know what it actually takes to keep a home looking good while people are living in it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Services */}
      <section id="services" className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Services</p>
            <h2 className="text-3xl md:text-[32px] font-semibold">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) =>
            <div
              key={service.title}
              className="bg-background p-10 border border-border hover:border-primary/50 transition-all duration-500 group">

                <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4 font-['Playfair_Display']">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Selected Work</p>
            <h2 className="text-3xl md:text-[32px] font-semibold mb-8">Portfolio</h2>
            <div className="max-w-5xl mx-auto">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {portfolioItems.map((item) => (
                    <CarouselItem key={item.title}>
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center mt-6">
                        <h3 className="text-xl md:text-2xl font-semibold font-['Playfair_Display'] mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">{item.description}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-[calc(50%-40px)]" />
                <CarouselNext className="right-4 top-[calc(50%-40px)]" />
              </Carousel>
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: slideCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => carouselApi?.scrollTo(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary scale-110" : "bg-border hover:bg-muted-foreground/50"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Contact */}
      <section id="contact" className="py-28 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-[32px] font-semibold mb-8 leading-snug">
              Let's figure out what your home <span className="italic">needs.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base max-w-xl mx-auto">
              Every project starts with a conversation. Tell me where you are in the process — even if it's just an idea — and we'll go from there.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:elle@ellerosadesign.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                  elle@ellerosadesign.com
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("elle@ellerosadesign.com");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-3 bg-muted text-muted-foreground rounded-lg shadow-md hover:shadow-lg hover:text-primary transition-all duration-300"
                  aria-label="Copy email to clipboard">

                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
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
            © 2026 Elle Rosa Design. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">

            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </footer>
    </div>);

};

export default Index;