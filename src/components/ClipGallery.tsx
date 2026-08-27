import { ALL_CLIPS } from "@/data/clips";
import { ClipFigure } from "./ClipFigure";

export function ClipGallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Krista GTM clips</h2>
      <p className="section-lede">
        Same clips as above, if you want them in one place.
      </p>
      <div className="gallery-grid compact">
        {ALL_CLIPS.map((clip) => (
          <ClipFigure key={clip.id} clip={clip} compact />
        ))}
      </div>
    </section>
  );
}
