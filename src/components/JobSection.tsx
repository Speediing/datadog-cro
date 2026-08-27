import type { CroJob, JobId } from "@/data/types";
import { CLIPS } from "@/data/clips";
import { ClipFigure } from "./ClipFigure";
import { JobDemo } from "./JobDemo";

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
      <div className="job-copy">
        <p className="job-number">Job {job.number}</p>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-problem">{job.problem}</p>
        <p className="job-bot">{job.botJob}</p>
      </div>
      <div className="job-art" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={JOB_ART[job.id]} alt="" />
      </div>
      <div className="job-stage">
        <JobDemo job={job} />
        <div
          className={`job-clips${job.clips.length > 1 ? " count-2" : ""}`}
        >
          {job.clips.map((id) => (
            <ClipFigure key={id} clip={CLIPS[id]} />
          ))}
        </div>
      </div>
    </section>
  );
}
