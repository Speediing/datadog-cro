import type { SlideCard, StoryBeat, StoryScene } from "@/data/types";
import { DeckSlides } from "./DeckSlides";

function SceneIcon({ scene }: { scene: StoryScene }) {
  return (
    <svg className="story-icon" viewBox="0 0 32 32" aria-hidden>
      {scene === "call" ? (
        <>
          <rect
            x="3.5"
            y="8"
            width="18"
            height="13"
            rx="2.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M22.5 13.2 28 10v12l-5.5-3.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </>
      ) : null}
      {scene === "demo" ? (
        <>
          <rect
            x="4"
            y="6"
            width="24"
            height="15.5"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M12 26h8M16 21.5V26" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="13.5" r="2.1" fill="currentColor" />
        </>
      ) : null}
      {scene === "voice" ? (
        <>
          <path
            d="M8 11h7.5v8.5H11L8 23z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 8H26v8.5h-4.5L19 20z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </>
      ) : null}
      {scene === "notes" ? (
        <>
          <rect
            x="7"
            y="5.5"
            width="18"
            height="21"
            rx="1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M11 11h10M11 16h10M11 21h6"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      ) : null}
      {scene === "deck" ? (
        <>
          <rect
            x="4"
            y="7"
            width="11"
            height="8"
            rx="1.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="17"
            y="7"
            width="11"
            height="8"
            rx="1.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="4"
            y="17.5"
            width="11"
            height="8"
            rx="1.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="17"
            y="17.5"
            width="11"
            height="8"
            rx="1.2"
            fill="currentColor"
            opacity="0.22"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : null}
      {scene === "map" ? (
        <>
          <rect
            x="5"
            y="7"
            width="22"
            height="18"
            rx="1.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M5 13h22M5 19h22M12.5 7v18M19.5 7v18"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </>
      ) : null}
      {scene === "inspect" ? (
        <>
          <circle
            cx="14"
            cy="14"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M19.2 19.2 26 26" stroke="currentColor" strokeWidth="1.8" />
        </>
      ) : null}
      {scene === "launch" ? (
        <>
          <path
            d="M7 22.5h18"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 22.5 16 7l6 15.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </>
      ) : null}
      {scene === "drill" ? (
        <>
          <circle
            cx="11"
            cy="12"
            r="3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="21"
            cy="12"
            r="3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M5.5 23c.6-3.4 2.8-5.2 5.5-5.2S16 19.6 16.6 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M15.5 23c.6-3.4 2.8-5.2 5.5-5.2S26 19.6 26.6 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      ) : null}
      {scene === "send" ? (
        <path
          d="M5 16 27 6 18 26l-3.2-7.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      ) : null}
    </svg>
  );
}

function Join({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={down ? "story-join is-down" : "story-join"}
      viewBox="0 0 28 36"
      aria-hidden
    >
      {down ? (
        <path
          d="M14 2c0 10 0 14 0 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ) : (
        <path
          d="M2 18c8-9 16-9 24 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      <path
        d={down ? "M10 20l4 6 4-6" : "M20 12l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Storyboard({ beats }: { beats: StoryBeat[] }) {
  const hasDeck = beats.some((beat) => Boolean(beat.slides?.length));
  const lead = hasDeck ? beats.slice(0, -1) : beats;
  const payoff = hasDeck ? beats[beats.length - 1] : null;
  const payoffSlides = (payoff?.slides || []) as SlideCard[];

  return (
    <div className={hasDeck ? "storyboard has-deck" : "storyboard"}>
      <ol className="story-strip">
        {lead.map((beat, index) => {
          const last = !hasDeck && index === lead.length - 1;
          return (
            <li
              key={`${beat.scene}-${beat.label}`}
              className={last ? "story-cell is-end" : "story-cell"}
            >
              {index > 0 ? <Join /> : null}
              <div className="story-frame">
                <span className="story-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <SceneIcon scene={beat.scene} />
                <p>{beat.label}</p>
              </div>
            </li>
          );
        })}
      </ol>
      {payoff ? (
        <div className="story-cell is-payoff">
          <Join down />
          <div className="story-frame is-payoff">
            <div className="story-meta">
              <span className="story-num">
                {String(beats.length).padStart(2, "0")}
              </span>
              <SceneIcon scene={payoff.scene} />
              <p>{payoff.label}</p>
            </div>
            {payoffSlides.length > 0 ? (
              <DeckSlides slides={payoffSlides} size="md" />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
