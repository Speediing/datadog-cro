import { JobSection } from "@/components/JobSection";
import { ClipGallery } from "@/components/ClipGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { BrandLockup } from "@/components/BrandLockup";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top" className="page">
      <SiteNav />

      <header className="hero">
        <p className="hero-eyebrow">Grok Bot</p>
        <BrandLockup size="lg" />
        <p className="hero-line">Grok Bot for Datadog GTM</p>
      </header>

      {JOBS.map((job) => (
        <JobSection key={job.id} job={job} />
      ))}

      <ClipGallery />
      <QuoteWall />

      <footer className="site-footer">
        <BrandLockup size="sm" />
      </footer>
    </main>
  );
}
