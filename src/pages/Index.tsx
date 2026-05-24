import { useEffect, useRef, useState } from "react";
import primaryBedroomMoodboard from "@/assets/primary-bedroom-moodboard.png";
import powderRoomMoodboard from "@/assets/powder-room-moodboard.png";
import bedroom1Moodboard from "@/assets/bedroom1-moodboard.png";
import bedroom2Moodboard from "@/assets/bedroom2-moodboard.png";
import primaryBedroomRendering from "@/assets/primary-bedroom-rendering-moodboard.png";

const NAV_LINKS = [
  { href: "#work", label: "The Work" },
  { href: "#process", label: "The Process" },
  { href: "#studio", label: "The Studio" },
  { href: "#journal", label: "Journal" },
  { href: "#inquire", label: "Inquire" },
];

type MoodboardFigureProps = {
  src: string;
  alt: string;
  plate: string;
  className?: string;
};

const MoodboardFigure = ({ src, alt, plate, className }: MoodboardFigureProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <figure className={`figure${className ? ` ${className}` : ""}`}>
      <div className="moodboard-skeleton" data-loaded={loaded}>
        <span className="moodboard-skeleton-corner moodboard-skeleton-corner--tl" aria-hidden="true" />
        <span className="moodboard-skeleton-corner moodboard-skeleton-corner--tr" aria-hidden="true" />
        <span className="moodboard-skeleton-corner moodboard-skeleton-corner--bl" aria-hidden="true" />
        <span className="moodboard-skeleton-corner moodboard-skeleton-corner--br" aria-hidden="true" />
        <div className="moodboard-skeleton-stack">
          <p className="moodboard-skeleton-label">Plate forthcoming</p>
          <p className="moodboard-skeleton-dots" aria-hidden="true">· · · · · ·</p>
          <p className="moodboard-skeleton-plate">{plate}</p>
        </div>
      </div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="moodboard"
        data-loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      {/* N6 NEWSPAPER MASTHEAD */}
      <header className="masthead">
        <h1 className="masthead-mark">Elle Rosa Design</h1>
        <div className="masthead-mark-rule" />
        <p className="masthead-descriptor">
          Residential interior design
          <span className="sep">&middot;</span>
          A studio practice
        </p>
        <nav className="masthead-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="masthead-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="masthead-menu"
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        id="masthead-menu"
        className={`masthead-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
      >
        <button
          type="button"
          className="masthead-menu-close"
          onClick={() => setMenuOpen(false)}
        >
          Close
        </button>
        <nav className="masthead-menu-nav" aria-label="Primary, expanded">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* HERO — PRIMARY BEDROOM RENDERING */}
      <section className="fold fold--hero" id="work">
        <MoodboardFigure
          src={primaryBedroomRendering}
          alt="The Cottage — primary bedroom mood board. Manor Blue painted walls, linen-upholstered four-poster bed, walnut nightstand, Wyeth painting, brass goose-neck floor lamp, lake view through sliding doors."
          plate="No. 01"
        />
        <div className="hero-caption-strip">
          <span className="hero-caption-plate">No. 01</span>
          <h2 className="hero-caption-title">The Cottage — Primary bedroom</h2>
          <p className="hero-caption-meta">
            Mood board
            <span className="sep">&middot;</span>
            Thousand Islands
            <span className="sep">&middot;</span>
            In progress
          </p>
        </div>
      </section>

      {/* LEDE */}
      <section className="fold fold--text">
        <div className="text-fold-inner">
          <p className="text-fold-lede">
            Elle Rosa Design is a residential studio in Houston, Texas — building
            homes that feel as if they have <em>always been there</em>.
          </p>
        </div>
      </section>

      {/* PLATE — POWDER ROOM */}
      <section className="fold fold--plate" id="process">
        <MoodboardFigure
          src={powderRoomMoodboard}
          alt="The Cottage — powder room mood board. A small bathroom with pale blue Queen Anne's lace botanical wallpaper, white beadboard wainscoting, a white pedestal sink, cane-front cabinetry, scalloped sconces, and a scalloped jute rug."
          plate="No. 02"
        />
        <div className="plate-annotation">
          <p className="plate-number">No. 02</p>
          <h2 className="plate-title">
            A small room earns the right to be playful.
          </h2>
          <p className="plate-body">
            A Queen Anne's lace wallpaper in pale blue against white beadboard. A
            scalloped wavy-edge mirror, a rattan-shaded sconce, cane-fronted
            cabinetry, a brass faucet, a scalloped jute rug. Small rooms are where
            families let themselves be a little more whimsical than they would in a
            living room — and the powder room is the right place to honor that.
          </p>
          <p className="plate-meta">
            Powder room
            <span className="sep">&middot;</span>
            The Cottage
            <span className="sep">&middot;</span>
            Thousand Islands
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="fold fold--text">
        <div className="text-fold-inner text-fold-inner--narrow">
          <p className="text-fold-prose">
            Every project moves slowly, deliberately, and in service of the family
            who will live with it. The studio takes a small number of full-home
            renovations and room-by-room engagements each year.
          </p>
          <p className="text-fold-prose">
            We listen first, compose carefully, and stay through realization — from
            first conversation to the day the family moves back in.
          </p>
        </div>
      </section>

      {/* PLATE — BEDROOM 1 (REVERSE) */}
      <section className="fold fold--plate fold--plate--reverse">
        <MoodboardFigure
          src={bedroom1Moodboard}
          alt="The Cottage — Bedroom 1 mood board. A guest bedroom with a spool-turned walnut spindle bed, butter-yellow quilted bedding, scalloped wicker bedside lamps, and a gallery wall of mixed framed artwork."
          plate="No. 03"
        />
        <div className="plate-annotation">
          <p className="plate-number">No. 03</p>
          <h2 className="plate-title">
            A gallery wall earned over decades, not curated in an afternoon.
          </h2>
          <p className="plate-body">
            A spool-turned spindle bed, butter-quilted bedding, scalloped wicker
            lamps, a green-and-yellow patterned rug. Above the bed, a wall of
            family pictures — silhouettes, oils, vintage snapshots, a bird print, a
            child's drawing — hung as if added one decade at a time. The room is
            warm, eccentric, and unguarded. Guest bedrooms in summer cottages should
            be all three.
          </p>
          <p className="plate-meta">
            Bedroom one
            <span className="sep">&middot;</span>
            The Cottage
            <span className="sep">&middot;</span>
            Thousand Islands
          </p>
        </div>
      </section>

      {/* PLATE — BEDROOM 2 */}
      <section className="fold fold--plate">
        <MoodboardFigure
          src={bedroom2Moodboard}
          alt="The Cottage — Bedroom 2 mood board. A guest bedroom with a mid-century walnut spindle bed, brass dome bedside lamps, a pink floral quilt over sage linen sheets, a green-and-cream geometric area rug, and two architectural sketches in narrow frames above the bed."
          plate="No. 04"
        />
        <div className="plate-annotation">
          <p className="plate-number">No. 04</p>
          <h2 className="plate-title">
            The quieter sibling, with floral and sage.
          </h2>
          <p className="plate-body">
            A mid-century walnut spindle bed, brass dome bedside lamps, two
            architectural sketches in narrow frames. Pink floral quilt over sage
            linen sheets, a green-and-cream geometric rug. The room is quieter than
            its sibling next door — meant for the guest who wants to read a book in
            the afternoon, not be performed at.
          </p>
          <p className="plate-meta">
            Bedroom two
            <span className="sep">&middot;</span>
            The Cottage
            <span className="sep">&middot;</span>
            Thousand Islands
          </p>
        </div>
      </section>

      {/* PLATE — PRIMARY BEDROOM MOOD BOARD */}
      <section className="fold fold--plate fold--plate--reverse">
        <MoodboardFigure
          src={primaryBedroomMoodboard}
          alt="The Cottage — primary bedroom mood board. Manor Blue painted walls, linen-upholstered four-poster bed, walnut nightstand, Wyeth painting, brass goose-neck floor lamp, lake view through sliding doors."
          plate="No. 05"
        />
        <div className="plate-annotation">
          <p className="plate-number">No. 05</p>
          <h2 className="plate-title">
            Manor Blue, a Wyeth, and the water beyond.
          </h2>
          <p className="plate-body">
            Walls in Benjamin Moore <em>Manor Blue</em> — a soft, considered blue
            that holds the room without darkening it. The light shifts through the
            day as it would in any old house overlooking water; the color absorbs it
            differently in morning than at dusk. A linen-upholstered four-poster,
            walnut nightstands, a Wyeth above the bed, a brass goose-neck floor
            lamp. Brass in the smallest doses.
          </p>
          <p className="plate-meta">
            Primary bedroom
            <span className="sep">&middot;</span>
            The Cottage
            <span className="sep">&middot;</span>
            Thousand Islands
          </p>
        </div>
      </section>

      {/* LETTER */}
      <section className="fold fold--letter" id="studio">
        <div className="letter-inner">
          <p className="letter-salutation">A note from the studio.</p>
          <p className="letter-prose">
            The Cottage is the first project we are sharing publicly. It is a summer
            home on the Thousand Islands being re-imagined for a family who has been
            gathering there across generations — and finished the way every project
            here will be finished:{" "}
            <em>one decision, one material, one room at a time</em>.
          </p>
          <p className="letter-prose">
            I began this practice because I believe good interiors are not the result
            of pattern recognition or industry shortcuts. They are the result of
            listening — to a family, to a house, to the way Saturday afternoon light
            falls on a particular wall. The studio is small on purpose, takes few
            projects on purpose, and finishes them slowly on purpose.
          </p>
          <p className="letter-prose">
            If you are considering a renovation or a build and want a designer who
            will sit with your house long enough to understand it — and to honor what
            the family inside it actually needs — I would like to hear from you.
          </p>
          <p className="letter-signoff">Elle</p>
          <p className="letter-credit">Founder &middot; Elle Rosa Design &middot; Houston</p>
        </div>
      </section>

      {/* JOURNAL INDEX */}
      <section className="fold fold--index" id="journal">
        <div className="index-inner">
          <div className="index-head">
            <h2 className="index-title">From the journal.</h2>
            <p className="index-issue">Issue One &middot; May 2026</p>
          </div>
          <ol className="index-entries">
            <li className="index-entry">
              <span className="index-entry-num">No. 01</span>
              <h3 className="index-entry-title">
                Manor Blue, and the bedroom that watches the water.
              </h3>
              <p className="index-entry-meta">
                Mood board
                <span className="sep">&middot;</span>
                May 2026
              </p>
            </li>
            <li className="index-entry">
              <span className="index-entry-num">No. 02</span>
              <h3 className="index-entry-title">
                On Queen Anne's lace and the small bathrooms in old houses.
              </h3>
              <p className="index-entry-meta">
                Mood board
                <span className="sep">&middot;</span>
                April 2026
              </p>
            </li>
            <li className="index-entry">
              <span className="index-entry-num">No. 03</span>
              <h3 className="index-entry-title">
                Gallery walls, earned over decades rather than curated in an
                afternoon.
              </h3>
              <p className="index-entry-meta">
                Process
                <span className="sep">&middot;</span>
                March 2026
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* INQUIRE — INKWELL BAND */}
      <section className="fold fold--inquire" id="inquire">
        <div className="inquire-inner">
          <p className="inquire-eyebrow">
            Now taking projects &middot; 2026 — 2027
          </p>
          <h2 className="inquire-statement">
            A considered home begins with a considered conversation.
          </h2>
          <p className="inquire-prose">
            The studio takes on a small number of engagements each year. Tell us
            about your home, your family, and what you are hoping for — and we will
            be in touch within the week.
          </p>
          <a href="mailto:elle@ellerosadesign.com" className="inquire-link">
            Begin a project{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <p className="inquire-secondary">
            Or write directly to{" "}
            <a href="mailto:elle@ellerosadesign.com">elle@ellerosadesign.com</a>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-signoff">Elle Rosa Design</span>
            <p className="footer-tagline">
              A Houston residential interior design studio. Considered work for
              considered homes, one project at a time.
            </p>
          </div>
          <ul className="footer-list">
            <h4>The Studio</h4>
            <li>
              <a href="#work">The Work</a>
            </li>
            <li>
              <a href="#process">The Process</a>
            </li>
            <li>
              <a href="#journal">Journal</a>
            </li>
            <li>
              <a href="#inquire">Inquire</a>
            </li>
          </ul>
          <ul className="footer-list">
            <h4>Elsewhere</h4>
            <li>
              <a href="mailto:elle@ellerosadesign.com">elle@ellerosadesign.com</a>
            </li>
            <li>
              <a href="https://instagram.com/ellerosadesign" target="_blank" rel="noopener noreferrer">@ellerosadesign</a>
            </li>
          </ul>
        </div>
        <div className="footer-rule" />
        <div className="footer-colophon">
          <span>&copy; 2026 Elle Rosa Design</span>
          <span className="ornament" aria-hidden="true" />
          <span>Houston, Texas</span>
        </div>
      </footer>
    </>
  );
};

export default Index;
