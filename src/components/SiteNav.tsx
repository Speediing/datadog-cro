import { JOBS } from "@/data/jobs";
import { BrandLockup } from "./BrandLockup";

export function SiteNav() {
  return (
    <header className="site-header site-header-over">
      <a href="#top" className="nav-brand">
        <BrandLockup size="sm" />
      </a>
      <nav className="header-actions" aria-label="On this page">
        {JOBS.map((job) => (
          <a key={job.id} className="text-button" href={`#${job.id}`}>
            {String(job.number).padStart(2, "0")}
          </a>
        ))}
        <a className="text-button" href="#roster">
          Team
        </a>
        <a className="text-button" href="#quotes">
          Quotes
        </a>
      </nav>
    </header>
  );
}
