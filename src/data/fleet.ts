import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  jobId: JobId;
  color: string;
  cluster?: "sko" | "ramp";
};

export const FLEET: FleetBot[] = [
  {
    id: "cos",
    name: "Chief of Staff",
    blurb: "Router, one-offs, group chats",
    jobId: "sko-enablement",
    color: "#E8E8ED",
  },
  {
    id: "room",
    name: "Room Ops",
    blurb: "Granola notes to slides, a one-pager, and a note they can forward",
    jobId: "standardize-room",
    color: "#34C759",
  },
  {
    id: "paper",
    name: "Paper",
    blurb: "Reads Europe redlines overnight. Draft waiting in the morning",
    jobId: "legal-redlines",
    color: "#FF375F",
  },
  {
    id: "attach",
    name: "Account Mapper",
    blurb: "90-day plan for the next products",
    jobId: "attach-engine",
    color: "#FF9500",
  },
  {
    id: "expert",
    name: "Customer Expert",
    blurb: "Per-account usage and exec brief",
    jobId: "attach-engine",
    color: "#AF52DE",
  },
  {
    id: "desk",
    name: "Deal Desk",
    blurb: "Paste the pipeline. Gaps, Monday questions, a note for your boss",
    jobId: "deal-inspection",
    color: "#007AFF",
  },
  {
    id: "forecast",
    name: "Forecast",
    blurb: "SFDC next steps",
    jobId: "deal-inspection",
    color: "#64D2FF",
  },
  {
    id: "chief",
    name: "Enablement Chief",
    blurb: "Kickoff talk and Friday one-pager",
    jobId: "sko-enablement",
    color: "#FF2D55",
    cluster: "sko",
  },
  {
    id: "writer",
    name: "Talk Track",
    blurb: "What the field can say out loud",
    jobId: "sko-enablement",
    color: "#5856D6",
    cluster: "sko",
  },
  {
    id: "eng",
    name: "Engineer",
    blurb: "Live product answer / Bugbot",
    jobId: "ramp-compression",
    color: "#32ADE6",
  },
  {
    id: "coach",
    name: "Practice Coach",
    blurb: "Practice partner and first-90 kit",
    jobId: "ramp-compression",
    color: "#0A84FF",
    cluster: "ramp",
  },
  {
    id: "buyer",
    name: "Skeptical Buyer",
    blurb: "Open source is good enough, cold",
    jobId: "ramp-compression",
    color: "#8E8E93",
    cluster: "ramp",
  },
  {
    id: "prospect",
    name: "Prospecting",
    blurb: "Five accounts, five contacts. Gmail drafts only",
    jobId: "ramp-compression",
    color: "#30D158",
  },
];
