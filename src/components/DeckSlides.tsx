import type { SlideCard } from "@/data/types";

export function DeckSlides({
  slides,
  size = "md",
  account = "Acme",
}: {
  slides: SlideCard[];
  size?: "sm" | "md" | "lg";
  account?: string;
}) {
  return (
    <div className={`deck-slides size-${size}`}>
      {slides.map((slide) => {
        const voice = slide.voice || "us";
        return (
          <article
            key={slide.n}
            className={`deck-tile voice-${voice}`}
          >
            <header className="deck-tile-bar">
              <span className="deck-kicker">
                {slide.kicker || (voice === "them" ? "They said" : "Datadog")}
              </span>
              <span className="deck-n">
                {String(slide.n).padStart(2, "0")}
              </span>
            </header>
            <h3 className="deck-tile-title">{slide.title}</h3>
            <p className={voice === "them" ? "deck-quote" : "deck-map"}>
              {voice === "them" ? `“${slide.body}”` : slide.body}
            </p>
            {size !== "sm" ? (
              <footer className="deck-tile-foot">
                <span>
                  {account} / Datadog
                </span>
                <span>Next meeting</span>
              </footer>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
