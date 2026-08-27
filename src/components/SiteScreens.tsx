import type { Artifact, DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { CLIPS } from "@/data/clips";

function asSlides(artifact?: Artifact) {
  return artifact?.kind === "slides" ? artifact : null;
}
function asTable(artifact?: Artifact) {
  return artifact?.kind === "table" ? artifact : null;
}
function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}
function asSlack(artifact?: Artifact) {
  return artifact?.kind === "slack" ? artifact : null;
}
function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}
function asForecast(artifact?: Artifact) {
  return artifact?.kind === "forecast" ? artifact : null;
}
function asTalks(artifact?: Artifact) {
  return artifact?.kind === "talk-tracks" ? artifact : null;
}
function asGaps(artifact?: Artifact) {
  return artifact?.kind === "gaps" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  if (beat.site === "clip" && beat.clip) {
    const clip = CLIPS[beat.clip];
    return (
      <div className="site-clip">
        <video
          src={clip.file}
          controls
          playsInline
          autoPlay
          muted
          loop
          aria-label={clip.title}
        />
      </div>
    );
  }

  switch (beat.site) {
    case "granola":
      return <GranolaScreen account={account} />;
    case "figma":
      return <FigmaScreen account={account} artifact={artifact} />;
    case "gong":
      return <GongScreen account={account} />;
    case "sfdc-account":
      return <SfdcAccountScreen account={account} />;
    case "sfdc-opp":
      return (
        <SfdcOppScreen
          account={account}
          highlight={Boolean(asGaps(artifact))}
        />
      );
    case "sheets":
      return <SheetsScreen account={account} artifact={artifact} />;
    case "gmail":
      return (
        <GmailScreen account={account} artifact={asGmail(artifact)} sent={sent} />
      );
    case "slack":
      return (
        <SlackScreen account={account} artifact={asSlack(artifact)} sent={sent} />
      );
    case "gdoc":
      return (
        <GdocScreen
          account={account}
          onePager={asOnePager(artifact)}
          forecast={asForecast(artifact)}
          talks={asTalks(artifact)}
        />
      );
    default:
      return <GranolaScreen account={account} />;
  }
}

function GranolaScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Granola</strong>
        <span>
          {account} / Datadog
        </span>
      </header>
      <p className="site-time">Today · last 20 min</p>
      <ul>
        <li>
          <span>14:12</span> Land-2 is APM + Logs in one squad. Not a platform
          tour.
        </li>
        <li>
          <span>14:18</span> Security objection: SSO and an audit trail before
          any expand.
        </li>
        <li>
          <span>14:21</span> Soft yes on a Bits AI pilot if those two are named.
        </li>
        <li>
          <span>14:24</span> Cost mentioned once. RUM not in the room.
        </li>
        <li>
          <span>14:28</span> Champion will take a Tuesday with security
          co-owner.
        </li>
        <li>
          <span>14:31</span> Use cases named live on the demo. Sev-2 story,
          one squad, SSO as the gate.
        </li>
      </ul>
    </div>
  );
}

function FigmaScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const slides = asSlides(artifact);
  const packet = artifact?.kind === "packet" ? artifact : null;
  const pager = asOnePager(artifact);
  const cards = slides?.cards ?? [
    { n: 1, title: "What we heard", body: `${account} land-2 is APM + Logs.` },
    { n: 2, title: "Security path", body: "SSO + audit trail." },
    { n: 3, title: "Bits AI pilot", body: "One squad only." },
    { n: 4, title: "Use cases they just named", body: "Sev-2 story. One squad." },
    { n: 5, title: "How Datadog aligns", body: "Land-2, then Bits AI habit." },
    { n: 6, title: "The ask", body: "Champion + security, Tuesday." },
  ];

  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>
          {slides
            ? slides.title
            : pager
              ? `${account} leave-behind`
              : packet
                ? `${account} champion packet`
                : `${account} North Star`}
        </strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        {packet ? (
          <div className="figma-doc">
            {packet.fields.map((field) => (
              <p key={field.label}>
                <b>{field.label}</b>
                {field.value}
              </p>
            ))}
          </div>
        ) : pager ? (
          <div className="figma-doc">
            {pager.sections.map((section) => (
              <p key={section.heading}>
                <b>{section.heading}</b>
                {section.body}
              </p>
            ))}
          </div>
        ) : (
          <div className="figma-frames">
            {cards.map((card) => (
              <article key={card.n}>
                <span>{String(card.n).padStart(2, "0")}</span>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GongScreen({ account }: { account: string }) {
  return (
    <div className="site site-gong">
      <header>
        <strong>Gong</strong>
        <span>
          {account} · first meeting · 32 min
        </span>
      </header>
      <div className="gong-recap">
        <h4>Call recap</h4>
        <ul>
          <li>Landed APM + Logs (land-2)</li>
          <li>Security lead in the room</li>
          <li>Cost mentioned once</li>
          <li>No economic buyer on the call</li>
        </ul>
      </div>
    </div>
  );
}

function SfdcAccountScreen({ account }: { account: string }) {
  return (
    <div className="site site-sfdc">
      <header>
        <span className="sfdc-cloud" />
        <strong>Sales</strong>
        <em>Lightning</em>
      </header>
      <div className="sfdc-title">
        <p>Account</p>
        <h3>{account}</h3>
      </div>
      <dl className="sfdc-fields">
        <div>
          <dt>Land</dt>
          <dd>APM + Logs</dd>
        </div>
        <div>
          <dt>Security lead</dt>
          <dd>In first meeting</dd>
        </div>
        <div>
          <dt>Cost</dt>
          <dd>Mentioned once</dd>
        </div>
        <div>
          <dt>EB</dt>
          <dd>Unconfirmed</dd>
        </div>
      </dl>
      <table className="sfdc-related">
        <caption>90-day attach</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th>Owner</th>
            <th>Window</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bits AI</td>
            <td>Platform eng manager</td>
            <td>Day 15 to 45</td>
          </tr>
          <tr>
            <td>Cloud SIEM</td>
            <td>Security lead</td>
            <td>Day 15 to 45</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>FinOps alias</td>
            <td>Day 45 to 90</td>
          </tr>
          <tr>
            <td>RUM</td>
            <td>Frontend guild</td>
            <td>Day 45 to 90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SfdcOppScreen({
  account,
  highlight,
}: {
  account: string;
  highlight: boolean;
}) {
  return (
    <div className="site site-sfdc">
      <header>
        <span className="sfdc-cloud" />
        <strong>Sales</strong>
        <em>Lightning</em>
      </header>
      <div className="sfdc-title">
        <p>Opportunity</p>
        <h3>
          {account} · $1.4M
        </h3>
      </div>
      <dl className="sfdc-fields">
        <div>
          <dt>Stage</dt>
          <dd>4 · this quarter</dd>
        </div>
        <div className={highlight ? "gap" : undefined}>
          <dt>EB meeting</dt>
          <dd>None on calendar</dd>
        </div>
        <div className={highlight ? "gap" : undefined}>
          <dt>Legal</dt>
          <dd>Slow · no dated path</dd>
        </div>
        <div className={highlight ? "gap" : undefined}>
          <dt>Champion</dt>
          <dd>Loves us · weak map</dd>
        </div>
        <div className={highlight ? "gap" : undefined}>
          <dt>Cloud SIEM</dt>
          <dd>Comp unclear</dd>
        </div>
      </dl>
    </div>
  );
}

function SheetsScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const table = asTable(artifact);
  const rows = table
    ? table.rows
    : [
        [account, "Champion", "EB TBD", "APM + Logs", "Tue SIEM"],
        ["Globex", "VP Eng", "CISO", "APM + Logs", "Discovery"],
        ["Initech", "SRE lead", "CTO", "APM + Logs", "Bits AI"],
        ["Umbrella", "Sec eng", "CISO", "APM + Logs", "OSS drill"],
        ["Hooli", "Platform", "EB TBD", "APM + Logs", "Cost later"],
      ];
  const cols = table
    ? table.columns
    : ["Account", "Champion", "EB", "Land-2", "Next"];

  return (
    <div className="site site-sheets">
      <header>
        <span className="sheets-mark">Sheets</span>
        <strong>
          {table ? `${account} 90-day attach` : "5 accounts x 5 prospects"}
        </strong>
      </header>
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft · not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} champion`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} / Datadog`}
      </p>
      <div>{artifact?.body || "Draft parked here until you tap Send?"}</div>
    </div>
  );
}

function SlackScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asSlack>;
  sent: boolean;
}) {
  return (
    <div className="site site-slack">
      <aside>
        <strong>Datadog GTM</strong>
        <span>{artifact?.channel || "#gtm-field"}</span>
      </aside>
      <div>
        <header>
          <h4>{artifact?.channel || "#gtm-field"}</h4>
          <em>{sent ? "Sent" : "Draft · not sent"}</em>
        </header>
        <div className="slack-draft">
          {artifact?.body ||
            `Friday pack for ${account}. Draft only. Nothing posted.`}
        </div>
      </div>
    </div>
  );
}

function GdocScreen({
  account,
  onePager,
  forecast,
  talks,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
  forecast: ReturnType<typeof asForecast>;
  talks: ReturnType<typeof asTalks>;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>
          {forecast
            ? `${account} forecast`
            : talks
              ? "Bits AI talk tracks"
              : onePager?.title || `${account} brief`}
        </span>
      </header>
      <article>
        {forecast ? (
          <>
            <p className="gdoc-status">{forecast.status}</p>
            <p>{forecast.body}</p>
          </>
        ) : talks ? (
          talks.tracks.map((track) => (
            <p key={track.seat}>
              <b>{track.seat}.</b> {track.line}
            </p>
          ))
        ) : onePager ? (
          onePager.sections.map((section) => (
            <p key={section.heading}>
              <b>{section.heading}.</b> {section.body}
            </p>
          ))
        ) : (
          <p>Working note for {account}.</p>
        )}
      </article>
    </div>
  );
}
