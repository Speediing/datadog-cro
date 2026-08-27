import { ALL_CLIPS } from "@/data/clips";

export function ClipGallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Krista GTM clips</h2>
      <p className="section-lede">
        Eight short cuts from Krista Letz&apos;s GTM Space. Native video, same
        phone chrome as the demos. Not the full 58-minute recording.
      </p>
      <div className="gallery-grid">
        {ALL_CLIPS.map((clip) => (
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
