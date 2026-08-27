import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
  wash,
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  const heard = slides.filter((slide) => slide.voice === "them");
  const mapped = slides.filter((slide) => slide.voice !== "them");

  return (
    <div className={`leave leave-heard size-${size}`}>
      {wash && size === "lg" ? (
        <div className="leave-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wash} alt="" />
        </div>
      ) : null}
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Acme / Datadog</span>
          <span>14:32 · still on this call</span>
        </header>
        <div className="heard-main">
          <h3>What we heard</h3>
          <ol>
            {heard.map((slide) => (
              <li key={slide.n}>
                <p className="heard-quote">“{slide.body}”</p>
                <p className="heard-tag">{slide.title}</p>
              </li>
            ))}
          </ol>
        </div>
        <footer className="heard-map">
          <p>How Datadog maps</p>
          <ul>
            {mapped.map((slide) => (
              <li key={slide.n}>
                <strong>{slide.title}.</strong> {slide.body}
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </div>
  );
}
