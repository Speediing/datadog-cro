import type { CroJob, JobId } from "@/data/types";
import { Storyboard } from "./Storyboard";
import { ChapterPayoff } from "./ChapterPayoff";
import { JobMore } from "./JobMore";

const JOB_ART: Record<JobId, string> = {
  "standardize-room": "/brand/watercolor-room.png",
  "attach-engine": "/brand/watercolor-attach.png",
  "deal-inspection": "/brand/watercolor-deal.png",
  "sko-enablement": "/brand/watercolor-sko.png",
  "ramp-compression": "/brand/watercolor-ramp.png",
};

export function JobSection({ job }: { job: CroJob }) {
  const lead = job.storyboard.slice(0, -1);
  const payoff = job.storyboard[job.storyboard.length - 1];

  return (
    <section id={job.id} className="job">
      <div className="job-art" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={JOB_ART[job.id]} alt="" />
      </div>
      <header className="job-lead">
        <p className="job-number">Job {job.number}</p>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-outcome">{job.outcome}</p>
      </header>
      <Storyboard beats={lead} />
      {payoff ? (
        <ChapterPayoff beat={payoff} wash={JOB_ART[job.id]} />
      ) : null}
      <JobMore job={job} />
    </section>
  );
}
