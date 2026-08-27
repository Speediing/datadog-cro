import { JOBS } from "@/data/jobs";
import { BrandLockup } from "./BrandLockup";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="On this page">
      <a href="#top" className="nav-brand">
        <BrandLockup size="sm" />
      </a>
      <div className="nav-links">
        {JOBS.map((job) => (
          <a key={job.id} href={`#${job.id}`}>
            {job.number}
          </a>
        ))}
        <a href="#gallery">Clips</a>
        <a href="#quotes">Quotes</a>
      </div>
    </nav>
  );
}
