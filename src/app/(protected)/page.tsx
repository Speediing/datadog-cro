import { JobSection } from "@/components/JobSection";
import { ClipGallery } from "@/components/ClipGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { BrandLockup } from "@/components/BrandLockup";
import { RosterChart } from "@/components/RosterChart";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="band band-dark band-nav">
        <div className="band-inner">
          <SiteNav />
        </div>
      </div>

      <header className="hero band band-dark">
        <div className="hero-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/watercolor-pad.png" alt="" />
        </div>
        <div className="band-inner">
          <BrandLockup size="md" />
          <p className="hero-line">Grok Bot for Datadog GTM</p>
        </div>
      </header>

      <div id="jobs">
        {JOBS.map((job, index) => (
          <div
            key={job.id}
            className={index % 2 === 0 ? "band band-dark" : "band band-cream"}
          >
            <div className="band-inner">
              <JobSection job={job} />
            </div>
          </div>
        ))}
      </div>

      <div className="band band-cream">
        <div className="band-inner">
          <RosterChart />
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.png" alt="" />
      </div>

      <div className="band band-dark">
        <div className="band-inner">
          <ClipGallery />
        </div>
      </div>

      <div className="band band-cream">
        <div className="band-inner">
          <QuoteWall />
        </div>
      </div>

      <footer className="band band-dark site-footer">
        <div className="band-inner">
          <BrandLockup size="sm" />
        </div>
      </footer>
    </main>
  );
}
