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
      subtitle: "Granola → slides + leave-behind + champion packet",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room Ops",
          role: "bot",
          persona: "Turns live notes into the pack the room needs next",
          color: "#34C759",
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
          body: "Got it. Mapping objection → proof, pilot scope, and who still needs a one-pager.",
        },
        {
          id: "m3",
          from: "room",
          kind: "draft",
          draftLabel: "Next-meeting slides (6)",
          body: "1. What we heard\n2. Security path (SSO + audit trail)\n3. Bits AI pilot in one squad\n4. Success metric for week 3\n5. Expand seats only after proof\n6. Ask: champion + security co-owner",
        },
        {
          id: "m4",
          from: "room",
          kind: "draft",
          draftLabel: "Champion packet",
          body: "Internal forwardable: problem in their words, why now, risks we already named, and the exact ask for next Tuesday.",
        },
        {
          id: "m5",
          from: "room",
          kind: "system",
          body: "Nothing sent. Slides and packet are drafts until you tap Send.",
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
      subtitle: "First meeting → 90-day attach map",
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
          body: "Building the 90-day attach map from land-2.",
        },
        {
          id: "m3",
          from: "expert",
          kind: "handoff",
          body: "Owners I would confirm before week 2: Bits AI → platform eng manager. Cloud SIEM → the security lead who joined today. Cost → FinOps alias they mentioned. RUM → frontend guild lead (not in room).",
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "90-day attach map",
          body: "Day 0–14: prove APM+Logs in one squad\nDay 15–45: Bits AI pilot + SIEM scoping call\nDay 45–90: Cost review with FinOps, RUM intro with frontend\nNext meeting: Tue 30 min with security lead + AE. Agenda already drafted.",
        },
        {
          id: "m5",
          from: "attach",
          kind: "routine",
          body: "Routine queued: after every first-meeting Gong, run this map and park the next invite as a draft.",
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
      subtitle: "Pipeline paste → gaps + Monday asks + upstairs paragraph",
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
          body: "Paste from SFDC: Acme $1.4M, stage 4, close this quarter. Notes say champion loves us, legal slow, no EB meeting yet, Comp on Cloud SIEM unclear.",
        },
        {
          id: "m2",
          from: "desk",
          kind: "text",
          body: "Three gaps that will slip this if you ignore them.",
        },
        {
          id: "m3",
          from: "desk",
          kind: "draft",
          draftLabel: "Gap list",
          body: "EB: no meeting on calendar. Paper: legal flagged as slow with no owner. Champion: strong sentiment, weak political map. Comp: SIEM attach not priced into the forecast story.",
        },
        {
          id: "m4",
          from: "desk",
          kind: "draft",
          draftLabel: "Monday questions for the AE",
          body: "1. Who is the EB and when do we meet them together?\n2. Who owns legal, and what is the dated paper path?\n3. If SIEM slips, does the $1.4M still hold?",
        },
        {
          id: "m5",
          from: "desk",
          kind: "draft",
          draftLabel: "Upstairs paragraph",
          body: "Acme is a real this-quarter shot at $1.4M if we get an EB meeting in 10 days and a dated legal path. Champion is strong. Forecast risk is paper plus SIEM attach, not product fit. I am holding commit until EB is on the calendar.",
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
      subtitle: "Launch → talk tracks + Friday one-pager",
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
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Bits AI launch this week. Competitive loss last month was on 'OSS is good enough.' Need SKO mainstage plus a Friday field pack.",
        },
        {
          id: "m2",
          from: "chief",
          kind: "text",
          body: "Routing to Talk Track. One story, three seats: AE, SE, manager 1:1.",
        },
        {
          id: "m3",
          from: "writer",
          kind: "draft",
          draftLabel: "Three talk tracks",
          body: "AE: land the problem in the buyer's words, then Bits AI as the weekly habit.\nSE: show the proof path in one demo spine, no feature tour.\nManager: inspect whether the AE has a named champion and a dated expand meeting.",
        },
        {
          id: "m4",
          from: "chief",
          kind: "draft",
          draftLabel: "Friday one-pager",
          body: "What changed. What to say. What not to say. One competitive turn on OSS. Link to the two Krista clips. Stop rewriting this in Slack.",
        },
        {
          id: "m5",
          from: "chief",
          kind: "routine",
          body: "Routine: every Friday 3pm, refresh the one-pager from that week's Gong themes. Draft only. You approve the send to the field channel.",
        },
      ],
    },
  },
  {
    id: "ramp-compression",
    number: 5,
    title: "New-hire and ramp compression",
    problem:
      "Enterprise sales at Datadog is a long interview loop. Pitch, MEDDPICC, 'OSS is good enough.' Ramp that is 'shadow the whale AE for a quarter' is too slow for the book you want.",
    botJob:
      "Bot as practice partner plus a first-90-day deal kit. Reps get reps before they burn a live Fortune 500 cycle.",
    clips: ["04-engineer-bugbot", "02-prospecting-pg"],
    demo: {
      title: "Ramp Coach",
      subtitle: "Practice partner + first-90-day deal kit",
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
          body: "Decent. Tighten it: name one incident pattern they already feel, then the attach path after land-2. Do not pitch the catalog.",
        },
        {
          id: "m5",
          from: "coach",
          kind: "draft",
          draftLabel: "First-90-day deal kit",
          body: "Week 1–2: territory map + 10 accounts with land-2 hypothesis\nWeek 3–6: three live discovery calls with Coach debrief\nWeek 7–12: one expand motion on an existing land, with Attach Mapper\nArtifacts: talk tracks, objection cards, champion packet template.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
