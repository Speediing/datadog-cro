import type { StoryBeat, StoryScene } from "@/data/types";

function Screen({ scene }: { scene: StoryScene }) {
  if (scene === "call") {
    return (
      <>
        <rect x="18" y="14" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.28" />
        <rect x="44" y="14" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.14" />
        <rect x="18" y="31" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.14" />
        <rect x="44" y="31" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.08" />
      </>
    );
  }
  if (scene === "demo") {
    return (
      <>
        <rect x="16" y="14" width="52" height="32" rx="1.4" fill="currentColor" opacity="0.12" />
        <path d="M36 24l14 8-14 8z" fill="currentColor" opacity="0.5" />
      </>
    );
  }
  if (scene === "notes" || scene === "voice") {
    return (
      <path
        d="M20 18h44M20 26h44M20 34h30M20 42h22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.45"
      />
    );
  }
  if (scene === "map") {
    return (
      <>
        <rect x="18" y="18" width="28" height="6" rx="1" fill="currentColor" opacity="0.45" />
        <rect x="18" y="28" width="40" height="6" rx="1" fill="currentColor" opacity="0.7" />
        <rect x="18" y="38" width="22" height="6" rx="1" fill="currentColor" opacity="0.3" />
      </>
    );
  }
  if (scene === "inspect" || scene === "deck") {
    return (
      <>
        <rect x="22" y="13" width="40" height="28" rx="1.4" fill="currentColor" opacity="0.1" />
        <path
          d="M28 22h28M28 28h22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.45"
        />
      </>
    );
  }
  if (scene === "launch") {
    return (
      <>
        <rect x="16" y="16" width="36" height="10" rx="2" fill="currentColor" opacity="0.18" />
        <rect x="22" y="30" width="44" height="10" rx="2" fill="currentColor" opacity="0.32" />
      </>
    );
  }
  if (scene === "drill") {
    return (
      <>
        <circle cx="32" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
        <circle cx="52" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
        <path
          d="M22 42c2-6 6-9 10-9s8 3 10 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.35"
        />
      </>
    );
  }
  return (
    <path
      d="M24 36 60 16 48 42l-6-12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.45"
    />
  );
}

function Laptop({ scene }: { scene: StoryScene }) {
  return (
    <svg className="story-laptop" viewBox="0 0 88 58" aria-hidden>
      <rect
        x="10"
        y="4"
        width="68"
        height="44"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect x="14" y="8" width="60" height="36" rx="1.2" fill="currentColor" opacity="0.06" />
      <Screen scene={scene} />
      <path
        d="M4 50h80l3 5H1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Storyboard({ beats }: { beats: StoryBeat[] }) {
  return (
    <ol className="storyboard">
      {beats.map((beat) => (
        <li key={`${beat.when}-${beat.label}`} className="story-beat">
          <Laptop scene={beat.scene} />
          {beat.when ? <p className="story-when">{beat.when}</p> : null}
          <p className="story-line">{beat.label}</p>
        </li>
      ))}
    </ol>
  );
}
