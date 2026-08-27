import type { CroJob, JobId } from "@/data/types";
import { Storyboard } from "./Storyboard";
import { ChapterPayoff } from "./ChapterPayoff";
import { JobMore } from "./JobMore";

const JOB_ART: Record<JobId, string> = {
  "standardize-room": "/brand/watercolor-room.png",
  "legal-redlines": "/brand/watercolor-deal.png",
  "attach-engine": "/brand/watercolor-attach.png",
  "deal-inspection": "/brand/watercolor-deal.png",
  "sko-enablement": "/brand/watercolor-sko.png",
  "ramp-compression": "/brand/watercolor-ramp.png",
};

export function JobSection({ job }: { job: CroJob }) {
  const lead = job.storyboard.slice(0, -1);
  const payoff = job.storyboard[job.storyboard.length - 1];

  return (
    <section id={job.id} className="narrative report-section job">
      <p className="section-number">
        {String(job.number).padStart(2, "0")}
      </p>
      <div>
        <div className="job-art" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={JOB_ART[job.id]} alt="" />
        </div>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-value">{job.outcome}</p>
        <Storyboard beats={lead} />
        {payoff ? (
          <ChapterPayoff beat={payoff} wash={JOB_ART[job.id]} />
        ) : null}
        <JobMore job={job} />
      </div>
    </section>
  );
}
