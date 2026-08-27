import type { CroJob, JobId } from "@/data/types";
import { Storyboard } from "./Storyboard";
import { JobMore } from "./JobMore";

const JOB_ART: Record<JobId, string> = {
  "standardize-room": "/brand/watercolor-room.png",
  "attach-engine": "/brand/watercolor-attach.png",
  "deal-inspection": "/brand/watercolor-deal.png",
  "sko-enablement": "/brand/watercolor-sko.png",
  "ramp-compression": "/brand/watercolor-ramp.png",
};

export function JobSection({ job }: { job: CroJob }) {
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
      <Storyboard beats={job.storyboard} />
      <JobMore job={job} />
    </section>
  );
}
