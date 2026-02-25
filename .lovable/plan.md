

## Portfolio Carousel

### What changes
Replace the "Coming Soon" placeholder in the Portfolio section (lines 176-188) with a full-width carousel showcasing 4 portfolio projects. Each slide features a large photo with a title and short description overlaid or positioned below.

### Data structure
Define a `portfolioItems` array with 4 entries, each containing:
- `image`: one of the existing portfolio assets (`portfolio-1.jpg` through `portfolio-4.jpg`)
- `title`: project name (placeholder copy, e.g. "Modern Family Retreat")
- `description`: 1-2 sentence description

### Carousel implementation
- Use the existing `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` components from `src/components/ui/carousel.tsx` (already in the project via Embla)
- Each slide: full-width image in a `aspect-[16/9]` container, with title and description below the image
- Navigation arrows repositioned to sit inside the carousel area (override default `-left-12` / `-right-12` positioning)
- Add dot indicators below the carousel showing the current slide (using the Embla API's `selectedScrollSnap`)

### Layout
- Section header ("Selected Work" / "Portfolio") remains centered above
- Carousel sits within `max-w-5xl mx-auto` for comfortable sizing
- Image uses `object-cover` to fill the aspect ratio container
- Title in Playfair Display serif, description in muted body text, both centered below each image

### File changes
- **`src/pages/Index.tsx`**: Import carousel components and portfolio images. Add `portfolioItems` data array. Replace the "Coming Soon" div with the carousel markup. Add state for current slide index via the carousel API.

