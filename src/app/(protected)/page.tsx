import { JobSection } from "@/components/JobSection";
import { ClipGallery } from "@/components/ClipGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { BrandLockup } from "@/components/BrandLockup";
import { RosterChart } from "@/components/RosterChart";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top" className="page">
      <SiteNav />

      <header className="hero">
        <div className="hero-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/watercolor-pad.png" alt="" />
        </div>
        <BrandLockup size="lg" />
        <p className="hero-line">Grok Bot for Datadog GTM</p>
      </header>

      <RosterChart />

      <div id="jobs">
        {JOBS.map((job) => (
          <JobSection key={job.id} job={job} />
        ))}
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.png" alt="" />
      </div>

      <ClipGallery />
      <QuoteWall />

      <footer className="site-footer">
        <BrandLockup size="sm" />
      </footer>
    </main>
  );
}
