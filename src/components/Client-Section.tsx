import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Client = {
  name: string;
  logoSrc?: string;
};

const clients: Client[] = [
  { name: "fox", logoSrc: "/clientes/fox.png" },
  { name: "rev", logoSrc: "/clientes/rep.png" },
  { name: "cast", logoSrc: "/clientes/cast.png" },
  { name: "hsm", logoSrc: "/clientes/nsm.jpg" },
  { name: "peu", logoSrc: "/clientes/peu.png" },
  { name: "citro", logoSrc: "/clientes/citro.png" },
  { name: "bella ", logoSrc: "/clientes/bella.png" },
];

export function ClientSection() {
  const TW_BLUE = "#0F376F";
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // ✅ scroll animado (mais suave)
  const animateScroll = (element: HTMLElement, delta: number, duration = 260) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      element.scrollLeft = start + delta * easeInOutCubic(t);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-client-card='true']");
    if (!card) return;

    const gap = 16; // gap-4
    const step = card.getBoundingClientRect().width + gap;
    const delta = dir === "left" ? -step : step;

    animateScroll(el, delta, 280);
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#EAF2FF] text-[#2F6FED] border border-[#CFE0FF]">
            Parceiros
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nossos Clientes
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Principais empresas que confiam em nosso trabalho.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left button (agora aparece no mobile também) */}
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => scrollByCards("left")}
            className="
              flex
              absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full
              bg-background/80 backdrop-blur border border-border
              shadow-md hover:shadow-lg transition
            "
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Right button */}
          <button
            type="button"
            aria-label="Avançar"
            onClick={() => scrollByCards("right")}
            className="
              flex
              absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full
              bg-background/80 backdrop-blur border border-border
              shadow-md hover:shadow-lg transition
            "
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Fade edges (mais estreito no mobile) */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-24 bg-gradient-to-r from-background to-transparent" />

          {/* Track */}
          <div
            ref={scrollerRef}
            className="
              flex gap-4 overflow-x-auto
              px-12 md:px-14
              pb-3 pt-1
              snap-x snap-proximity
              scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
              touch-pan-x
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {clients.map((c) => (
              <div
                key={c.name}
                data-client-card="true"
                className="
                  snap-center
                  min-w-[220px] sm:min-w-[260px] md:min-w-[320px]
                  bg-card border border-border rounded-2xl
                  p-5 md:p-8 flex items-center justify-center
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                  relative overflow-hidden
                  group
                "
              >
                {/* Hover azul */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(650px circle at 50% 40%, ${TW_BLUE}22 0%, transparent 55%)`,
                  }}
                />

                {/* Logo / fallback */}
                {c.logoSrc ? (
                  <img
                    src={c.logoSrc}
                    alt={c.name}
                    className="relative w-full h-16 md:h-20 object-contain"
                    loading="lazy"
                    draggable={false}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <span className="relative text-lg font-semibold" style={{ color: TW_BLUE }}>
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            ← Arraste para navegar →
          </p>
        </div>
      </div>
    </section>
  );
}
