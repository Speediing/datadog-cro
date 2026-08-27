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
  { id: "room", blurb: "Turns Granola or Gong into the next pack." },
  { id: "attach", blurb: "Builds the 90-day land-2-expand map." },
  { id: "expert", blurb: "Who is in the account and what they use." },
  { id: "desk", blurb: "Pastes the pipeline and names the gaps." },
] as const;

const ROW_TWO = [
  { id: "chief", blurb: "Turns a launch into what the field can say." },
  { id: "coach", blurb: "Practice partner and the first-90 kit." },
  { id: "eng", blurb: "Answers from the product. Bugbot when it breaks." },
  { id: "prospect", blurb: "Five by five. Gmail drafts only." },
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
      <h2>Your Grok Bot team</h2>
      <p className="section-lede">
        Message Bots like teammates. Each one has a job and its own computer, so
        it can work in Salesforce, Gmail, Figma, Gong, the same tools you
        already use. They keep going after you close the laptop, talk to each
        other when the work overlaps, and come back when something needs your
        sign-off. Drafts stay drafts until you send.
      </p>

      <div className="org" role="tree">
        <div className="org-top">
          <Box
            href={`#${cos.jobId}`}
            title={cos.name}
            blurb="Routes work, runs group chats, handles one-offs."
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
    </section>
  );
}
