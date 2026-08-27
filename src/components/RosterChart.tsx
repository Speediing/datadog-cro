import { FLEET } from "@/data/fleet";

function bot(id: string) {
  const found = FLEET.find((item) => item.id === id);
  if (!found) throw new Error(`Missing fleet bot ${id}`);
  return found;
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
      <strong>{title}</strong>
      <span>{blurb}</span>
    </a>
  );
}

const SPECIALISTS = [
  { id: "room", blurb: "Granola and Gong to the next pack" },
  { id: "attach", blurb: "90-day land-2-expand map" },
  { id: "desk", blurb: "EB, paper, champion gaps" },
  { id: "chief", blurb: "SKO and Friday one-pager" },
  { id: "coach", blurb: "Practice partner and first-90 kit" },
] as const;

export function RosterChart() {
  const cos = bot("cos");
  const specialists = SPECIALISTS.map((item) => ({
    ...bot(item.id),
    blurb: item.blurb,
  }));

  return (
    <section id="roster" className="roster">
      <h2>Example roster</h2>
      <p className="section-lede">
        Chief of Staff at the top. Five specialists underneath. Click a name to
        open that job.
      </p>

      <div className="org" role="tree">
        <div className="org-top">
          <Box
            href={`#${cos.jobId}`}
            title={cos.name}
            blurb={cos.blurb}
            chief
          />
        </div>
        <div className="org-connect" aria-hidden>
          <i className="org-stem" />
          <i className="org-bar" />
        </div>
        <ul className="org-kids">
          {specialists.map((item) => (
            <li key={item.id} className="org-kid">
              <Box
                href={`#${item.jobId}`}
                title={item.name}
                blurb={item.blurb}
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="roster-note">
        Grok Bot from SpaceXAI. Example fleet, not a live org.
      </p>
    </section>
  );
}
