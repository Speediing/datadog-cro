export type ClipId =
  | "01-morning-inbox"
  | "02-prospecting-pg"
  | "03-slides-granola"
  | "04-engineer-bugbot"
  | "05-forecast-sfdc"
  | "06-customer-expert"
  | "07-customer-exec-brief"
  | "08-chief-groupchat";

export type JobId =
  | "standardize-room"
  | "attach-engine"
  | "deal-inspection"
  | "sko-enablement"
  | "ramp-compression";

export type ParticipantRole = "you" | "bot" | "system";

export type Participant = {
  id: string;
  name: string;
  role: ParticipantRole;
  /** Short persona line shown in the chat header */
  persona?: string;
  color?: string;
};

export type MessageKind =
  | "text"
  | "draft"
  | "routine"
  | "handoff"
  | "system";

export type DemoMessage = {
  id: string;
  from: string;
  kind: MessageKind;
  body: string;
  /** Drafts wait for an explicit Send tap and never auto-send */
  draftLabel?: string;
};

export type DemoThread = {
  title: string;
  subtitle: string;
  participants: Participant[];
  messages: DemoMessage[];
};

export type Clip = {
  id: ClipId;
  file: string;
  title: string;
  blurb: string;
};

export type CroJob = {
  id: JobId;
  number: number;
  title: string;
  /** Problem stated in his language */
  problem: string;
  /** What the bot does for this seat */
  botJob: string;
  clips: ClipId[];
  demo: DemoThread;
};

export type Quote = {
  name: string;
  handle: string;
  date: string;
  avatar: string;
  quote: string;
  source: string;
};
