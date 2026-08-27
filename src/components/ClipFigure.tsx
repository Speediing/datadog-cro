import type { Clip } from "@/data/types";
import { JOBS } from "@/data/jobs";

export function ClipFigure({
  clip,
  compact = false,
}: {
  clip: Clip;
  compact?: boolean;
}) {
  const used = JOBS.filter((job) => job.clips.includes(clip.id));

  return (
    <figure className={compact ? "clip-card clip-card-compact" : "clip-card"}>
      <div className="clip-phone">
        <video
          poster={clip.poster}
          controls
          playsInline
          preload="metadata"
          src={clip.file}
          aria-label={clip.title}
        />
      </div>
      <figcaption>
        {compact ? <span className="clip-title">{clip.title}</span> : null}
        <span className="clip-caption">{clip.caption}</span>
        {compact && used.length > 0 ? (
          <span className="clip-used">
            {used.map((job, index) => (
              <span key={job.id}>
                {index > 0 ? ", " : ""}
                <a href={`#${job.id}`}>Job {job.number}</a>
              </span>
            ))}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
