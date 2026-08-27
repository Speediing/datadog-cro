import { FLEET } from "@/data/fleet";

function bot(id: string) {
  const found = FLEET.find((item) => item.id === id);
  if (!found) throw new Error(`Missing fleet bot ${id}`);
  return found;
}

function MonitorCue() {
  return (
    <svg className="org-monitor" viewBox="0 0 24 24" aria-hidden>
      <rect
        x="3"
        y="4.5"
        width="18"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 20h8M12 16.5V20" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function Box({
  href,
  title,
  blurb,
  chief = false,
}: {
  href: string;
  title: string;
  blurb: string;
  chief?: boolean;
}) {
  return (
    <a className={chief ? "org-box is-chief" : "org-box"} href={href}>
      <span className="org-name">
        <MonitorCue />
        <strong>{title}</strong>
      </span>
      <span>{blurb}</span>
    </a>
  );
}

const ROW_ONE = [
  { id: "room", blurb: "Granola, Figma. Next pack." },
  { id: "attach", blurb: "Gong to a 90-day map." },
  { id: "expert", blurb: "Account usage, exec brief." },
  { id: "desk", blurb: "Pipeline paste. Gaps upstairs." },
] as const;

const ROW_TWO = [
  { id: "chief", blurb: "SKO story, Friday one-pager." },
  { id: "coach", blurb: "Practice partner, first-90 kit." },
  { id: "eng", blurb: "Live product answer, Bugbot." },
  { id: "prospect", blurb: "5x5. Gmail drafts only." },
] as const;

function Row({ ids }: { ids: typeof ROW_ONE | typeof ROW_TWO }) {
  return (
    <ul className="org-kids">
      {ids.map((item) => {
        const specialist = bot(item.id);
        return (
          <li key={item.id} className="org-kid">
            <Box
              href={`#${specialist.jobId}`}
              title={specialist.name}
              blurb={item.blurb}
            />
          </li>
        );
      })}
    </ul>
  );
}

export function RosterChart() {
  const cos = bot("cos");

  return (
    <section id="roster" className="roster">
      <h2>The bots</h2>
      <p className="section-lede">
        One app. A Chief. Specialists with their own computers. They message
        each other.
      </p>

      <div className="org" role="tree">
        <div className="org-top">
          <Box
            href={`#${cos.jobId}`}
            title={cos.name}
            blurb="Routes, group chats, one-offs."
            chief
          />
        </div>
        <div className="org-branch">
          <div className="org-connect" aria-hidden>
            <i className="org-stem" />
            <i className="org-bar" />
          </div>
          <Row ids={ROW_ONE} />
          <div className="org-connect org-wrap" aria-hidden>
            <i className="org-stem" />
            <i className="org-bar" />
          </div>
          <Row ids={ROW_TWO} />
        </div>
      </div>

      <p className="roster-note">
        You approve drafts. Nothing auto-sends. Example Datadog GTM fleet.
      </p>
    </section>
  );
}
