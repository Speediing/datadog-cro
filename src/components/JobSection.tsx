import type { CroJob } from "@/data/types";
import { JobDemo } from "./JobDemo";

export function JobSection({ job }: { job: CroJob }) {
  return (
    <section id={job.id} className="job">
      <p className="job-number">Job {job.number}</p>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-problem">{job.problem}</p>
      <p className="job-bot">{job.botJob}</p>
      <JobDemo job={job} />
    </section>
  );
}
