import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Client = {
  name: string;
  logoSrc?: string;
};

const clients: Client[] = [
  { name: "TW Soluções", logoSrc: "../public/fox.png" },
  { name: "Saga", logoSrc: "../public/rev.png" },
  { name: "FTR", logoSrc: "../public/cast.png" },
  { name: "Claro", logoSrc: "../public/hsm.jpg" },
];

export function ClientSection() {
  const TW_BLUE = "#0F376F";
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Animação com duração controlada (mais rápida que o "smooth" do browser)
  const animateScroll = (
    element: HTMLElement,
    delta: number,
    duration = 150,
  ) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      element.scrollLeft = start + delta * easeOutCubic(t);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-client-card='true']");
    const step = card ? card.offsetWidth + 16 : 320; // 16 = gap-4
    const delta = dir === "left" ? -step : step;

    animateScroll(el, delta, 180); // 🔥 diminua p/ 150, aumente p/ 220
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
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
          {/* Left button */}
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => scrollByCards("left")}
            className="
              hidden md:flex
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 items-center justify-center rounded-full
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
              hidden md:flex
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 items-center justify-center rounded-full
              bg-background/80 backdrop-blur border border-border
              shadow-md hover:shadow-lg transition
            "
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Fade edges */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />

          {/* Track */}
          <div
            ref={scrollerRef}
            className="
              flex gap-4 overflow-x-auto
              pb-2 pt-1
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* hide scrollbar (webkit) */}
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {clients.map((c) => (
              <div
                key={c.name}
                data-client-card="true"
                className="
                  snap-start
                  min-w-[260px] sm:min-w-[300px] md:min-w-[320px]
                  bg-card border border-border rounded-2xl
                  p-6 md:p-8 flex items-center justify-center
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                  relative overflow-hidden
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
                    className="relative w-full h-25 md:h-25 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                ) : (
                  <span
                    className="relative text-lg font-semibold"
                    style={{ color: TW_BLUE }}
                  >
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
