import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { RosterChart } from "@/components/RosterChart";
import { NightRocketMount } from "@/components/NightRocketMount";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/watercolor-pad.png"
          alt=""
        />
        <NightRocketMount />
        <SiteNav />
      </div>

      <div className="report">
        <section className="hero">
          <div>
            <p className="eyebrow">Grok Bot for Datadog sales</p>
            <h1>A bot that helps Datadog sales.</h1>
            <p className="hero-intro">
              Six jobs, from this call to the next meeting.
            </p>
          </div>
          <aside className="trial-card">
            <div>
              <span className="trial-day">6</span>
              <span className="trial-total">jobs</span>
            </div>
            <p>From this call to the next meeting.</p>
          </aside>
        </section>

        <div className="metric-grid">
          {JOBS.map((job) => (
            <a
              key={job.id}
              className="metric-card"
              href={`#${job.id}`}
            >
              <h2>{job.title}</h2>
              <p>{String(job.number).padStart(2, "0")}</p>
            </a>
          ))}
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>

        <RosterChart />
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.png" alt="" />
      </div>

      <div className="report">
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cursor for Datadog</p>
          <p>Grok Bot for Datadog sales</p>
        </div>
      </footer>
    </main>
  );
}
