import { JOBS } from "@/data/jobs";
import { BrandLockup } from "./BrandLockup";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="On this page">
      <a href="#top" className="nav-brand">
        <BrandLockup size="sm" />
      </a>
      <div className="nav-links">
        <a className="nav-jobs" href="#jobs">
          Jobs
        </a>
        {JOBS.map((job) => (
          <a key={job.id} className="nav-job-num" href={`#${job.id}`}>
            {job.number}
          </a>
        ))}
        <a href="#roster">Team</a>
        <a href="#quotes">Quotes</a>
      </div>
    </nav>
  );
}
