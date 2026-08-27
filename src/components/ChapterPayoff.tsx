import type { Artifact, SlideCard, StoryBeat } from "@/data/types";
import { DeckSlides } from "./DeckSlides";

function MeetingDeck({
  slides,
  wash,
}: {
  slides: SlideCard[];
  wash?: string;
}) {
  return (
    <div className="leave leave-deck">
      {wash ? (
        <div className="leave-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wash} alt="" />
        </div>
      ) : null}
      <header className="leave-deck-top">
        <strong>Acme · Tuesday</strong>
        <span>Next meeting</span>
      </header>
      <DeckSlides slides={slides} size="lg" />
    </div>
  );
}

function AttachMap({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "attach-map" }>;
}) {
  const days = artifact.days || 90;
  const ticks = [0, 15, 45, 90].filter((day) => day <= days);

  return (
    <div className="leave leave-map">
      <header className="leave-map-top">
        <div>
          <p className="leave-kicker">90-day attach</p>
          <h3>{artifact.title}</h3>
        </div>
        <p className="leave-map-meet">
          <strong>{artifact.meeting.when}</strong>
          <span>{artifact.meeting.who}</span>
          <span>{artifact.meeting.agenda}</span>
        </p>
      </header>
      <div className="leave-ruler" aria-hidden>
        {ticks.map((day) => (
          <span
            key={day}
            style={{ left: `${(day / days) * 100}%` }}
          >
            Day {day}
          </span>
        ))}
      </div>
      <ol className="leave-lanes">
        {artifact.lanes.map((lane) => (
          <li
            key={lane.product}
            className={lane.punch ? "is-punch" : undefined}
          >
            <div className="leave-lane-name">
              <strong>{lane.product}</strong>
              <span>{lane.owner}</span>
            </div>
            <div className="leave-lane-track">
              <i
                style={{
                  left: `${(lane.from / days) * 100}%`,
                  width: `${((lane.to - lane.from) / days) * 100}%`,
                }}
              />
              <em
                style={{
                  left: `${(lane.from / days) * 100}%`,
                  width: `${((lane.to - lane.from) / days) * 100}%`,
                }}
              >
                {lane.move}
              </em>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function UpstairsMemo({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "forecast" }>;
}) {
  return (
    <div className="leave leave-memo">
      <header className="leave-memo-top">
        <div>
          <p className="leave-kicker">{artifact.title}</p>
          <h3>
            {artifact.account || "Acme"}
            {artifact.amount ? ` · ${artifact.amount}` : ""}
          </h3>
        </div>
        <p className="leave-stamp">{artifact.status}</p>
      </header>
      <p className="leave-memo-body">{artifact.body}</p>
      {artifact.gaps?.length ? (
        <ul className="leave-stamps">
          {artifact.gaps.map((gap) => (
            <li key={gap.label}>
              <strong>{gap.label}</strong>
              <span>{gap.body}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function FieldPack({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "talk-tracks" }>;
}) {
  return (
    <div className="leave leave-pack">
      <header className="leave-pack-top">
        <p className="leave-kicker">Friday field pack</p>
        <h3>{artifact.title}</h3>
      </header>
      <ol className="leave-cards">
        {artifact.tracks.map((track) => (
          <li key={track.seat}>
            <p className="leave-seat">{track.seat}</p>
            <p className="leave-line">{track.line}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BetterAnswer({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "scorecard" }>;
}) {
  return (
    <div className="leave leave-answer">
      <header className="leave-answer-top">
        <div>
          <p className="leave-kicker">OSS drill</p>
          <h3>The line that wins</h3>
        </div>
        <p className="leave-score">{artifact.score}</p>
      </header>
      <div className="leave-split">
        <section className="leave-before">
          <p className="leave-kicker">Too abstract</p>
          <p className="leave-weak">
            {artifact.weakLine || artifact.notes[0]}
          </p>
          <ul>
            {artifact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
        <section className="leave-after">
          <p className="leave-kicker">Say this</p>
          <p className="leave-win">{artifact.betterAnswer}</p>
          <p className="leave-incident" aria-hidden>
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>Log pile</span>
            <b>APM + Logs</b>
          </p>
        </section>
      </div>
    </div>
  );
}

export function ChapterPayoff({
  beat,
  wash,
}: {
  beat: StoryBeat;
  wash?: string;
}) {
  const slides = beat.slides;
  const artifact = beat.artifact;

  let body = null;
  if (slides?.length) {
    body = <MeetingDeck slides={slides} wash={wash} />;
  } else if (artifact?.kind === "attach-map") {
    body = <AttachMap artifact={artifact} />;
  } else if (artifact?.kind === "forecast") {
    body = <UpstairsMemo artifact={artifact} />;
  } else if (artifact?.kind === "talk-tracks") {
    body = <FieldPack artifact={artifact} />;
  } else if (artifact?.kind === "scorecard") {
    body = <BetterAnswer artifact={artifact} />;
  }

  if (!body) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">{beat.label}</p>
      {body}
    </div>
  );
}
