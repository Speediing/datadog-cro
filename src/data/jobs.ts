import type { CroJob } from "./types";

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Standardize the room, not the logo",
    problem:
      "Your problem is not that AEs need AI. The best reps already run the meeting in their head. Everyone else shows up with last quarter's deck and hopes the champion fills the gaps.",
    botJob:
      "Granola or Gong notes go into a Grok Bot mid-meeting. It drafts the next slides, the leave-behind, and a champion packet while you are still in the room.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Room Ops",
      subtitle: "Granola, Slides, champion packet",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room Ops",
          role: "bot",
          persona: "Turns live notes into the pack the room needs next",
          color: "#34C759",
        },
        {
          id: "slides",
          name: "Slides",
          role: "bot",
          persona: "Builds the next-meeting deck from the transcript",
          color: "#007AFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Pull the last 20 min from Granola. We just got the security objection and a soft yes on a Bits AI pilot.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "Transcript is in. Mapping the objection, the Bits AI pilot, and who still needs a one-pager. Drafts only.",
        },
        {
          id: "m3",
          from: "slides",
          kind: "draft",
          draftLabel: "Next-meeting deck",
          artifact: {
            kind: "slides",
            title: "Acme next meeting · 6 cards",
            cards: [
              {
                n: 1,
                title: "What we heard",
                body: "Land-2 is APM + Logs in one squad. Security blocked on SSO and an audit trail. Soft yes on a Bits AI pilot if those two are named.",
              },
              {
                n: 2,
                title: "Security path",
                body: "SSO + audit trail before any expand. Security lead from today's call is the co-owner, not a later intro.",
              },
              {
                n: 3,
                title: "Bits AI pilot",
                body: "One squad only. Same squad that lands APM + Logs. No platform tour.",
              },
              {
                n: 4,
                title: "Week-3 success metric",
                body: "MTTR on that squad's Sev-2s, with Bits AI in the weekly habit. If the number does not move, we do not expand seats.",
              },
              {
                n: 5,
                title: "Expand only after proof",
                body: "Seats and product attach wait on the week-3 number. Cost and RUM stay off this meeting's ask.",
              },
              {
                n: 6,
                title: "The ask",
                body: "Champion + security co-owner on Tuesday. Dated path for SSO and audit. Pilot scope in writing.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "room",
          kind: "draft",
          draftLabel: "Leave-behind",
          artifact: {
            kind: "one-pager",
            title: "Acme leave-behind",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "What we covered",
                body: "APM + Logs as land-2. Security objection on SSO and audit. Bits AI as a one-squad pilot, not a rollout.",
              },
              {
                heading: "Security path",
                body: "SSO and audit trail named before any expand. Security lead from this call stays on the next meeting.",
              },
              {
                heading: "Pilot",
                body: "Bits AI in the same squad that lands APM + Logs. Week-3 MTTR is the gate. Expand seats only after that number.",
              },
              {
                heading: "What we need from you",
                body: "Tuesday with champion + security co-owner. Bring the paper path owner if legal will slow SSO.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "Champion packet",
          artifact: {
            kind: "packet",
            title: "Forward this inside Acme",
            fields: [
              {
                label: "Problem in their words",
                value:
                  "We cannot tell a Sev-2 story across APM and logs without stitching tools, and security will not let another agent in without SSO and an audit trail.",
              },
              {
                label: "Why now",
                value:
                  "The squad already agreed to land APM + Logs. Bits AI is useful in that same week-3 window, not after a platform tour next quarter.",
              },
              {
                label: "Risks already named",
                value:
                  "SSO + audit trail. Legal may slow paper. Cost came up once and is not in this ask. RUM is not in the room.",
              },
              {
                label: "Exact ask for next Tuesday",
                value:
                  "30 minutes. Champion + security co-owner. Dated SSO path. Written Bits AI pilot scope for one squad.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to champion",
          artifact: {
            kind: "gmail",
            title: "Champion forward",
            to: "Acme champion",
            subject: "Acme / Datadog. Tuesday packet (SSO, Bits AI pilot)",
            body: "Forwarding the internal packet from today's room. Problem is in your words. Tuesday ask is champion + security co-owner, dated SSO path, and a one-squad Bits AI pilot. Nothing else is in the ask.",
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "system",
          body: "Nothing sent. Deck, leave-behind, packet, and Gmail stay drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 2,
    title: "Attach is the real quota engine",
    problem:
      "Datadog lands in two products and expands toward six to nineteen. Net retention is still in the low-120%s. Fortune 500 median ARR is still small relative to the platform. Heads are not the lever. Attach is.",
    botJob:
      "After every first meeting, the bot spits a 90-day attach map. Who owns Bits AI, Cloud SIEM, Cost, and RUM. What the exact next meeting is. Raise ACV without adding heads.",
    clips: ["05-forecast-sfdc", "06-customer-expert"],
    demo: {
      title: "Attach Mapper",
      subtitle: "Land-2 to 90-day attach",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Attach Mapper",
          role: "bot",
          persona: "Owns the land-2-expand path after every first meeting",
          color: "#FF9500",
        },
        {
          id: "expert",
          name: "Customer Expert",
          role: "bot",
          persona: "Names the economic buyer and product owner per line",
          color: "#AF52DE",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "First meeting done. Landed APM + Logs. Security lead was in the room. Cost came up once.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "Land-2 is APM + Logs. Building the 90-day attach map. Customer Expert is naming owners per line.",
        },
        {
          id: "m3",
          from: "expert",
          kind: "handoff",
          body: "Economic buyer is still unconfirmed. Treat the security lead from today's call as the SIEM owner, not as EB. Product owners I would confirm before week 2 are below, on the map.",
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "90-day attach map",
          artifact: {
            kind: "table",
            title: "Acme 90-day attach",
            caption:
              "Next meeting. Tue 30 min with security lead + AE. Agenda is SIEM scope, not a product tour.",
            columns: ["Product", "Owner", "Window", "Next move"],
            rows: [
              [
                "Bits AI",
                "Platform eng manager",
                "Day 15 to 45",
                "Pilot in the APM + Logs squad",
              ],
              [
                "Cloud SIEM",
                "Security lead from today's call",
                "Day 15 to 45",
                "Tue 30 min scoping with AE",
              ],
              [
                "Cost",
                "FinOps alias they mentioned",
                "Day 45 to 90",
                "Review after land-2 proof",
              ],
              [
                "RUM",
                "Frontend guild lead (not in room)",
                "Day 45 to 90",
                "Intro once APM is stable",
              ],
            ],
          },
        },
        {
          id: "m5",
          from: "expert",
          kind: "draft",
          draftLabel: "Owner card",
          artifact: {
            kind: "packet",
            title: "Who owns the expand",
            fields: [
              {
                label: "Economic buyer",
                value:
                  "Not in the room. Do not let the champion stand in. Confirm name before the SIEM meeting, or the attach map is a wish list.",
              },
              {
                label: "Bits AI",
                value: "Platform eng manager. Same squad as land-2 APM + Logs.",
              },
              {
                label: "Cloud SIEM",
                value: "Security lead who joined today. Co-owner on Tuesday.",
              },
              {
                label: "Cost",
                value: "FinOps alias from the one Cost mention. Not this week's meeting.",
              },
              {
                label: "RUM",
                value: "Frontend guild lead. Not in the room. Day 45 to 90.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "attach",
          kind: "draft",
          draftLabel: "Gmail invite",
          artifact: {
            kind: "gmail",
            title: "Next meeting",
            to: "Acme security lead, AE",
            subject: "Tue 30 min. Acme Cloud SIEM scope (land-2 already APM + Logs)",
            body: "Agenda. 1. SSO + audit trail status. 2. Cloud SIEM scope for the same squad that landed APM + Logs. 3. Whether Bits AI stays a one-squad pilot. Cost and RUM are not on this agenda.",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "routine",
          body: "After every first-meeting Gong, run this map and park the next invite as a draft. You tap Send.",
        },
      ],
    },
  },
  {
    id: "deal-inspection",
    number: 3,
    title: "Deal inspection at his altitude",
    problem:
      "You cannot sit in every $1M+ deal. You still need the quarterback view your HP recs describe, applied to the whole book. Gaps show up late. Forecast language upstairs stays vague.",
    botJob:
      "Paste pipeline notes. Get EB gaps, paper-process risk, champion risk, Monday questions, and a one-paragraph forecast you can take upstairs.",
    clips: ["05-forecast-sfdc", "07-customer-exec-brief"],
    demo: {
      title: "Deal Desk",
      subtitle: "SFDC paste to upstairs paragraph",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "desk",
          name: "Deal Desk",
          role: "bot",
          persona: "Inspects the book the way you would if you had the hours",
          color: "#007AFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Paste from SFDC. Acme $1.4M, stage 4, close this quarter. Notes say champion loves us, legal slow, no EB meeting yet, Comp on Cloud SIEM unclear.",
        },
        {
          id: "m2",
          from: "desk",
          kind: "text",
          body: "Reading at your altitude. Four gaps. Three Monday questions. One paragraph you can take upstairs. Commit stays held.",
        },
        {
          id: "m3",
          from: "desk",
          kind: "draft",
          draftLabel: "Gap list",
          artifact: {
            kind: "gaps",
            title: "Acme $1.4M · stage 4",
            items: [
              {
                label: "EB",
                body: "No meeting on the calendar. Champion sentiment is not an economic buyer.",
              },
              {
                label: "Paper process",
                body: "Legal flagged as slow. No named owner and no dated path.",
              },
              {
                label: "Champion risk",
                body: "Strong sentiment, weak political map. Cannot carry $1.4M upstairs alone.",
              },
              {
                label: "SIEM attach",
                body: "Comp on Cloud SIEM is unclear and is not in the forecast story. If SIEM slips, the $1.4M story changes.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "desk",
          kind: "draft",
          draftLabel: "Monday questions",
          artifact: {
            kind: "questions",
            title: "For the AE on Monday",
            items: [
              "Who is the EB, and when do we meet them together?",
              "Who owns legal, and what is the dated paper path?",
              "If Cloud SIEM slips, does the $1.4M still hold?",
            ],
          },
        },
        {
          id: "m5",
          from: "desk",
          kind: "draft",
          draftLabel: "Upstairs paragraph",
          artifact: {
            kind: "forecast",
            title: "Take this upstairs",
            status: "Hold commit until EB is on the calendar",
            body: "Acme is a real this-quarter shot at $1.4M if we get an EB meeting in 10 days and a dated legal path. Champion is strong. Forecast risk is paper plus Cloud SIEM attach, not product fit. I am holding commit until EB is on the calendar.",
          },
        },
        {
          id: "m6",
          from: "desk",
          kind: "draft",
          draftLabel: "Slack to AE",
          artifact: {
            kind: "slack",
            title: "Monday ping",
            channel: "#ae-Acme",
            body: "Three questions before forecast call. 1. EB name and meeting date. 2. Legal owner and dated paper path. 3. If Cloud SIEM slips, does $1.4M still hold? Draft only. I have not posted this.",
          },
        },
        {
          id: "m7",
          from: "desk",
          kind: "system",
          body: "Nothing posted to SFDC or Slack. Commit language stays held until you tap Send.",
        },
      ],
    },
  },
  {
    id: "sko-enablement",
    number: 4,
    title: "SKO and weekly enablement that does not die in Slack",
    problem:
      "You already do mainstage SKO. The story still dies in a Slack channel by Friday. A global sales org needs one talk track, not nineteen versions of Bits AI.",
    botJob:
      "Point the bot at a launch (Bits AI, MCP, a competitive loss). Get three talk tracks and a Friday one-pager the field can actually use.",
    clips: ["08-chief-groupchat", "01-morning-inbox"],
    demo: {
      title: "Enablement Chief",
      subtitle: "Bits AI launch + OSS loss",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "chief",
          name: "Enablement Chief",
          role: "bot",
          persona: "Routes one launch story to the whole field",
          color: "#FF2D55",
        },
        {
          id: "writer",
          name: "Talk Track",
          role: "bot",
          persona: "Writes what an AE can say out loud",
          color: "#5856D6",
        },
        {
          id: "eng",
          name: "Engineer",
          role: "bot",
          persona: "Names the proof path, not the catalog",
          color: "#32ADE6",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Bits AI launch this week. Competitive loss last month was on OSS is good enough. Need SKO mainstage plus a Friday field pack.",
        },
        {
          id: "m2",
          from: "chief",
          kind: "text",
          body: "Group chat is live. One story, three seats. Engineer on the OSS proof path. Talk Track on language the field can say out loud.",
        },
        {
          id: "m3",
          from: "eng",
          kind: "handoff",
          body: "OSS turn is not 'we have more features.' It is one incident they already felt, then land-2 APM + Logs, then Bits AI as the weekly habit. MCP is a later proof, not the opener.",
        },
        {
          id: "m4",
          from: "writer",
          kind: "draft",
          draftLabel: "Three talk tracks",
          artifact: {
            kind: "talk-tracks",
            title: "Say these out loud",
            tracks: [
              {
                seat: "AE",
                line: "You already pay for the Sev-2 in context-switching. Land APM + Logs in one squad. Bits AI is the weekly habit in that squad, not a platform announcement.",
              },
              {
                seat: "SE",
                line: "One demo spine. Incident in, Bits AI habit, SSO + audit if security is in the room. No feature tour. MCP only if they ask how the bot talks to their tools.",
              },
              {
                seat: "Manager 1:1",
                line: "Inspect two things. Named champion. Dated expand meeting for Bits AI or Cloud SIEM. If both are missing, this is a logo land, not attach.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "chief",
          kind: "draft",
          draftLabel: "Friday one-pager",
          artifact: {
            kind: "one-pager",
            title: "Bits AI field pack",
            eyebrow: "Friday one-pager",
            sections: [
              {
                heading: "What changed",
                body: "Bits AI is the launch. Same land-2 motion. APM + Logs first. Attach is the quota engine. Net retention is still in the low-120%s, so the story is expand, not more heads.",
              },
              {
                heading: "What to say",
                body: "One squad. Week-3 MTTR. Bits AI as the weekly habit. Champion + security co-owner if SSO is in the way.",
              },
              {
                heading: "What not to say",
                body: "Do not pitch the catalog. Do not lead with MCP. Do not promise Cost or RUM in the first meeting.",
              },
              {
                heading: "Competitive turn on OSS",
                body: "Prometheus and Grafana are fine until the incident crosses two tools. Then MTTR is a people problem. Land-2 is how you stop stitching. Bits AI is how the squad keeps the habit.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "chief",
          kind: "draft",
          draftLabel: "Slack to the field",
          artifact: {
            kind: "slack",
            title: "Field channel",
            channel: "#gtm-field",
            body: "Friday pack is in the thread. Three talk tracks (AE / SE / manager) plus the OSS turn. Bits AI launch. Do not rewrite this in 19 versions. Draft only until Enablement Chief taps Send.",
          },
        },
        {
          id: "m7",
          from: "chief",
          kind: "routine",
          body: "Every Friday 3pm, refresh the one-pager from that week's Gong themes. Draft only to #gtm-field. You approve the send.",
        },
      ],
    },
  },
  {
    id: "ramp-compression",
    number: 5,
    title: "New-hire and ramp compression",
    problem:
      "Enterprise sales at Datadog is a long interview loop. Pitch, MEDDPICC, OSS is good enough. Ramp that is shadow the whale AE for a quarter is too slow for the book you want.",
    botJob:
      "Bot as practice partner plus a first-90-day deal kit. Reps get reps before they burn a live Fortune 500 cycle.",
    clips: ["04-engineer-bugbot", "02-prospecting-pg"],
    demo: {
      title: "Ramp Coach",
      subtitle: "OSS drill + first-90 kit",
      participants: [
        { id: "you", name: "New AE", role: "you" },
        {
          id: "coach",
          name: "Ramp Coach",
          role: "bot",
          persona: "Runs drills and builds the first-90 kit",
          color: "#32ADE6",
        },
        {
          id: "buyer",
          name: "Skeptical Buyer",
          role: "bot",
          persona: "Plays the OSS-is-good-enough objection cold",
          color: "#8E8E93",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Drill me on the OSS objection. Then give me a first-90 kit for my open territory.",
        },
        {
          id: "m2",
          from: "buyer",
          kind: "text",
          body: "We already have Prometheus and Grafana. Why would I pay Datadog?",
        },
        {
          id: "m3",
          from: "you",
          kind: "text",
          body: "Because when you stitch six tools the MTTR story falls apart across teams.",
        },
        {
          id: "m4",
          from: "coach",
          kind: "text",
          body: "Decent. You named the pain and skipped the catalog. Tighten it. One incident they already felt, then the land-2 attach path. MEDDPICC still needs a champion and a dated next meeting after the drill.",
        },
        {
          id: "m5",
          from: "coach",
          kind: "draft",
          draftLabel: "Scored drill",
          artifact: {
            kind: "scorecard",
            title: "OSS objection · scored",
            score: "6 / 10. Direction is right. Too abstract to win a live cycle.",
            notes: [
              "Kept Prometheus and Grafana in the frame. Good.",
              "Stitching tools is true and still generic.",
              "No incident pattern. No land-2. No Bits AI habit.",
            ],
            betterAnswer:
              "Last quarter on-call jumped Prometheus, Grafana, and a log pile to explain one latency spike. Land APM + Logs in that squad this month. Bits AI attaches after that squad has a week-3 MTTR number, not after a platform tour.",
          },
        },
        {
          id: "m6",
          from: "coach",
          kind: "draft",
          draftLabel: "First-90-day deal kit",
<<<<<<< HEAD
          body: "Week 1-2: territory map + 10 accounts with land-2 hypothesis\nWeek 3-6: three live discovery calls with Coach debrief\nWeek 7-12: one expand motion on an existing land, with Attach Mapper\nArtifacts: talk tracks, objection cards, champion packet template.",
=======
          artifact: {
            kind: "deal-kit",
            title: "Open territory kit",
            weeks: [
              {
                label: "Week 1 to 2",
                body: "Territory map. 10 accounts with a land-2 hypothesis (APM + Logs). Name a likely champion and the OSS objection you expect.",
              },
              {
                label: "Week 3 to 6",
                body: "Three live discovery calls. Coach debrief after each. MEDDPICC filled for metrics, economic buyer, and decision process. No catalog pitch.",
              },
              {
                label: "Week 7 to 12",
                body: "One expand motion on an existing land. Bits AI, Cloud SIEM, Cost, or RUM. Attach Mapper runs the 90-day map. Still not shadowing the whale AE for a quarter.",
              },
            ],
            pack: [
              "Talk tracks (AE / SE / manager)",
              "OSS objection card with the scored better answer",
              "Champion packet template",
              "Land-2 hypothesis sheet for the 10 accounts",
            ],
          },
        },
        {
          id: "m7",
          from: "coach",
          kind: "system",
          body: "Practice only. Nothing went to a live account. Run the drill again before you burn a Fortune 500 cycle.",
>>>>>>> b073bcd (Show the Grok Bot computer next to each Datadog job)
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
