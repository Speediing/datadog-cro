import { CLIPS } from "@/data/clips";
import type { CroJob } from "@/data/types";
import { ImessageDemo } from "./ImessageDemo";

export function JobSection({ job }: { job: CroJob }) {
  const clips = job.clips.map((id) => CLIPS[id]);

  return (
    <section id={job.id} className="job">
      <p className="job-number">Job {job.number}</p>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-problem">{job.problem}</p>
      <p className="job-bot">{job.botJob}</p>

      <div className="job-demo">
        <ImessageDemo thread={job.demo} />
      </div>

      <div className={`job-clips count-${clips.length}`}>
        {clips.map((clip) => (
          <figure key={clip.id} className="clip-card">
            <div className="clip-phone">
              <video
                controls
                playsInline
                preload="metadata"
                src={clip.file}
                aria-label={clip.title}
              />
            </div>
            <figcaption>
              <span className="clip-title">{clip.title}</span>
              <span className="clip-blurb">{clip.blurb}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
