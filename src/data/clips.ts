import type { Clip, ClipId } from "./types";

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": {
    id: "01-morning-inbox",
    file: "/media/krista-clips/01-morning-inbox.mp4",
    title: "Morning inbox",
    blurb: "Krista opens the day with a bot that triages before she does.",
  },
  "02-prospecting-pg": {
    id: "02-prospecting-pg",
    file: "/media/krista-clips/02-prospecting-pg.mp4",
    title: "Prospecting",
    blurb: "A practice loop that sounds like a real first call, not a script dump.",
  },
  "03-slides-granola": {
    id: "03-slides-granola",
    file: "/media/krista-clips/03-slides-granola.mp4",
    title: "Slides from the room",
    blurb: "Granola notes become the next deck and the leave-behind while you are still in the meeting.",
  },
  "04-engineer-bugbot": {
    id: "04-engineer-bugbot",
    file: "/media/krista-clips/04-engineer-bugbot.mp4",
    title: "Practice partner",
    blurb: "A bot that pushes back like a skeptical buyer, so ramp is not just shadowing.",
  },
  "05-forecast-sfdc": {
    id: "05-forecast-sfdc",
    file: "/media/krista-clips/05-forecast-sfdc.mp4",
    title: "Forecast from the book",
    blurb: "Pipeline notes in, Monday questions and a one-paragraph forecast out.",
  },
  "06-customer-expert": {
    id: "06-customer-expert",
    file: "/media/krista-clips/06-customer-expert.mp4",
    title: "Customer expert",
    blurb: "Who owns the next product attach, and what meeting lands it.",
  },
  "07-customer-exec-brief": {
    id: "07-customer-exec-brief",
    file: "/media/krista-clips/07-customer-exec-brief.mp4",
    title: "Exec brief",
    blurb: "The altitude view of a deal you cannot sit in every hour of.",
  },
  "08-chief-groupchat": {
    id: "08-chief-groupchat",
    file: "/media/krista-clips/08-chief-groupchat.mp4",
    title: "Chief group chat",
    blurb: "One launch story routed into talk tracks the whole org can repeat.",
  },
};

export const ALL_CLIPS: Clip[] = Object.values(CLIPS);
