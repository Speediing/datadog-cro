import { JobSection } from "@/components/JobSection";
import { ClipGallery } from "@/components/ClipGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top" className="page">
      <SiteNav />

      <header className="hero">
        <p className="hero-brand">Grok Bot</p>
        <h1>Five jobs for Datadog GTM</h1>
        <p className="hero-lede">
          A leave-behind from the CRO conversation. Each seat is a real Grok Bot
          thread you can step through, plus the matching Krista GTM clip.
        </p>
      </header>

      {JOBS.map((job) => (
        <JobSection key={job.id} job={job} />
      ))}

      <ClipGallery />
      <QuoteWall />

      <footer className="site-footer">
        <p>
          From Jason Wiker, Cursor Field Engineering. Passworded on purpose.
          Preview only until you say otherwise.
        </p>
      </footer>
    </main>
  );
}
