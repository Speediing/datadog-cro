import { QUOTES } from "@/data/quotes";

export function QuoteWall() {
  return (
    <section id="quotes" className="quotes">
      <h2>What people say about Grok Bot</h2>
      <p className="section-lede">
        Public praise, pulled from the live Grok Bot quotes wall. Social proof
        belongs here at the end, after the jobs.
      </p>
      <div className="quote-grid">
        {QUOTES.map((quote) => (
          <article
            key={`${quote.handle}-${quote.date}-${quote.source}`}
            className="quote-card"
          >
            <blockquote>{quote.quote}</blockquote>
            <footer>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={quote.avatar}
                alt=""
                width={40}
                height={40}
                className="quote-avatar"
              />
              <div>
                <p className="quote-name">{quote.name}</p>
                <p className="quote-handle">{quote.handle}</p>
              </div>
              {quote.source ? (
                <a
                  href={quote.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-source"
                >
                  Source
                </a>
              ) : null}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
