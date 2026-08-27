import { FLEET } from "@/data/fleet";

function bot(id: string) {
  const found = FLEET.find((item) => item.id === id);
  if (!found) throw new Error(`Missing fleet bot ${id}`);
  return found;
}

function Cell({
  href,
  title,
  blurb,
}: {
  href: string;
  title: string;
  blurb: string;
}) {
  return (
    <a className="roster-cell" href={href}>
      <strong>{title}</strong>
      <span>{blurb}</span>
    </a>
  );
}

export function RosterChart() {
  const cos = bot("cos");
  const line = ["room", "attach", "expert", "desk", "forecast"].map(bot);
  const sko = FLEET.filter((item) => item.cluster === "sko");
  const ramp = ["coach", "buyer", "eng", "prospect"].map(bot);

  return (
    <section id="roster" className="roster">
      <h2>Example roster</h2>
      <p className="section-lede">
        Chief of Staff at the top. Specialists underneath. SKO is a group chat.
        Click a name to open that job.
      </p>

      <div className="roster-chart">
        <div className="roster-row chief">
          <Cell href={`#${cos.jobId}`} title={cos.name} blurb={cos.blurb} />
        </div>
        <div className="roster-row">
          {line.map((item) => (
            <Cell
              key={item.id}
              href={`#${item.jobId}`}
              title={item.name}
              blurb={item.blurb}
            />
          ))}
        </div>
        <p className="roster-label">SKO group chat</p>
        <div className="roster-row two">
          {sko.map((item) => (
            <Cell
              key={item.id}
              href={`#${item.jobId}`}
              title={item.name}
              blurb={item.blurb}
            />
          ))}
        </div>
        <p className="roster-label">Ramp</p>
        <div className="roster-row four">
          {ramp.map((item) => (
            <Cell
              key={item.id}
              href={`#${item.jobId}`}
              title={item.name}
              blurb={item.blurb}
            />
          ))}
        </div>
      </div>
      <p className="roster-note">
        Grok Bot from SpaceXAI. Example fleet, not a live org.
      </p>
    </section>
  );
}
