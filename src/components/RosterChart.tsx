import { FLEET } from "@/data/fleet";

function bot(id: string) {
  const found = FLEET.find((item) => item.id === id);
  if (!found) throw new Error(`Missing fleet bot ${id}`);
  return found;
}

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

function isLight(hex: string) {
  if (!hex.startsWith("#") || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

function Box({
  href,
  title,
  blurb,
  color,
  chief = false,
}: {
  href: string;
  title: string;
  blurb: string;
  color: string;
  chief?: boolean;
}) {
  return (
    <a className={chief ? "org-box is-chief" : "org-box"} href={href}>
      <span
        className="org-avatar"
        style={{
          background: color,
          color: isLight(color) ? "#111" : "#fff",
        }}
        aria-hidden
      >
        {initials(title)}
      </span>
      <span className="org-name">{title}</span>
      <span className="org-blurb">{blurb}</span>
    </a>
  );
}

const SPECIALISTS = [
  { id: "room", blurb: "Turns Granola or Gong into the next pack." },
  { id: "attach", blurb: "Builds the 90-day land-2-expand map." },
  { id: "expert", blurb: "Who is in the account and what they use." },
  { id: "desk", blurb: "Pastes the pipeline and names the gaps." },
  { id: "chief", blurb: "Turns a launch into what the field can say." },
  { id: "coach", blurb: "Practice partner and the first-90 kit." },
  { id: "eng", blurb: "Answers from the product. Bugbot when it breaks." },
  { id: "prospect", blurb: "Five by five. Gmail drafts only." },
] as const;

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
            color={cos.color}
            chief
          />
        </div>
        <div className="org-branch">
          <div className="org-connect" aria-hidden>
            <i className="org-stem" />
            <i className="org-bar" />
          </div>
          <ul className="org-kids">
            {SPECIALISTS.map((item) => {
              const specialist = bot(item.id);
              return (
                <li key={item.id} className="org-kid">
                  <Box
                    href={`#${specialist.jobId}`}
                    title={specialist.name}
                    blurb={item.blurb}
                    color={specialist.color}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
