import { FLEET } from "@/data/fleet";
import { GrokFace } from "./GrokFace";

function Box({
  href,
  title,
  blurb,
  color,
}: {
  href: string;
  title: string;
  blurb: string;
  color: string;
}) {
  return (
    <a className="roster-box" href={href}>
      <i style={{ background: color }} />
      <strong>{title}</strong>
      <span>{blurb}</span>
    </a>
  );
}

function bot(id: string) {
  const found = FLEET.find((item) => item.id === id);
  if (!found) throw new Error(`Missing fleet bot ${id}`);
  return found;
}

export function RosterChart() {
  const cos = bot("cos");
  const line = ["room", "attach", "expert", "desk", "forecast"].map(bot);
  const sko = FLEET.filter((item) => item.cluster === "sko");
  const bottom = ["coach", "buyer", "eng", "prospect"].map(bot);

  return (
    <section id="roster" className="roster">
      <p className="job-number">Example roster</p>
      <h2>A Grok Bot fleet for Datadog GTM</h2>
      <p className="section-lede">
        Chief of Staff on top. Specialists underneath. SKO lives in a group
        chat. Click a box to open that job.
      </p>

      <div className="roster-tree">
        <Box
          href={`#${cos.jobId}`}
          title={cos.name}
          blurb={cos.blurb}
          color={cos.color}
        />
        <div className="roster-stem" aria-hidden />
        <div className="roster-bar" aria-hidden />
        <div className="roster-row">
          {line.map((bot) => (
            <div key={bot.id} className="roster-cell">
              <div className="roster-stem short" aria-hidden />
              <Box
                href={`#${bot.jobId}`}
                title={bot.name}
                blurb={bot.blurb}
                color={bot.color}
              />
            </div>
          ))}
        </div>
        <div className="roster-stem" aria-hidden />
        <div className="roster-cluster">
          <p>SKO group chat</p>
          <div className="roster-row tight">
            {sko.map((bot) => (
              <Box
                key={bot.id}
                href={`#${bot.jobId}`}
                title={bot.name}
                blurb={bot.blurb}
                color={bot.color}
              />
            ))}
          </div>
        </div>
        <div className="roster-stem" aria-hidden />
        <div className="roster-row four">
          {bottom.map((bot) => (
            <div key={bot.id} className="roster-cell">
              <div className="roster-stem short" aria-hidden />
              <Box
                href={`#${bot.jobId}`}
                title={bot.name}
                blurb={bot.blurb}
                color={bot.color}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="roster-note">
        <GrokFace size={18} /> Grok Bot from SpaceXAI. This is an example
        fleet, not a live org.
      </p>
    </section>
  );
}
