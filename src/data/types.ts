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

export type ParticipantRole = "you" | "bot";

export type Participant = {
  id: string;
  name: string;
  role: ParticipantRole;
  persona?: string;
  color?: string;
};

export type MessageKind = "text" | "draft" | "routine" | "handoff" | "system";

export type SlideVoice = "them" | "us";

export type SlideCard = {
  n: number;
  title: string;
  body: string;
  kicker?: string;
  voice?: SlideVoice;
};

export type StoryScene =
  | "call"
  | "demo"
  | "voice"
  | "notes"
  | "deck"
  | "map"
  | "inspect"
  | "launch"
  | "drill"
  | "send";

export type StoryBeat = {
  label: string;
  scene: StoryScene;
  slides?: SlideCard[];
};

export type Artifact =
  | {
      kind: "slides";
      title: string;
      cards: SlideCard[];
    }
  | {
      kind: "one-pager";
      title: string;
      eyebrow?: string;
      sections: { heading: string; body: string }[];
    }
  | {
      kind: "packet";
      title: string;
      fields: { label: string; value: string }[];
    }
  | {
      kind: "table";
      title: string;
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      kind: "talk-tracks";
      title: string;
      tracks: { seat: string; line: string }[];
    }
  | {
      kind: "forecast";
      title: string;
      status: string;
      body: string;
    }
  | {
      kind: "gaps";
      title: string;
      items: { label: string; body: string }[];
    }
  | {
      kind: "questions";
      title: string;
      items: string[];
    }
  | {
      kind: "scorecard";
      title: string;
      score: string;
      notes: string[];
      betterAnswer: string;
    }
  | {
      kind: "deal-kit";
      title: string;
      weeks: { label: string; body: string }[];
      pack: string[];
    }
  | {
      kind: "gmail";
      title: string;
      to: string;
      subject: string;
      body: string;
    }
  | {
      kind: "slack";
      title: string;
      channel: string;
      body: string;
    };

export type DemoMessage = {
  id: string;
  from: string;
  kind: MessageKind;
  body?: string;
  draftLabel?: string;
  artifact?: Artifact;
  delayMs?: number;
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
  poster: string;
  title: string;
  caption: string;
};

export type CroJob = {
  id: JobId;
  number: number;
  title: string;
  problem: string;
  botJob: string;
  storyboard: StoryBeat[];
  unlock: string;
  outcome: string;
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
