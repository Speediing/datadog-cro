import type { CroJob } from "@/data/types";
import { CLIPS } from "@/data/clips";
import { ClipFigure } from "./ClipFigure";
import { JobDemo } from "./JobDemo";

export function JobSection({ job }: { job: CroJob }) {
  return (
    <section id={job.id} className="job">
      <p className="job-number">Job {job.number}</p>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-problem">{job.problem}</p>
      <p className="job-bot">{job.botJob}</p>
      <JobDemo job={job} />
      <div
        className={`job-clips${job.clips.length > 1 ? " count-2" : ""}`}
      >
        {job.clips.map((id) => (
          <ClipFigure key={id} clip={CLIPS[id]} />
        ))}
      </div>
    </section>
  );
}
