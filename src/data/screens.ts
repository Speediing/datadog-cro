import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gong = { id: "gong", host: "app.gong.io", label: "Gong" };
const sfdc = {
  id: "sfdc",
  host: "datadog.lightning.force.com",
  label: "Salesforce",
};
const sheets = {
  id: "sheets",
  host: "docs.google.com",
  label: "Sheets",
};
const slack = { id: "slack", host: "app.slack.com", label: "Slack" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening Granola",
      host: "granola.app",
      path: "/notes/acme-datadog",
      title: "Acme <> Datadog",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "In Granola",
      host: "granola.app",
      path: "/notes/acme-datadog",
      title: "Acme <> Datadog",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Pulling Granola, still on the call",
      host: "granola.app",
      path: "/notes/acme-datadog",
      title: "Acme <> Datadog",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Updating the tail of the deck",
      host: "figma.com",
      path: "/file/acme-next-meeting",
      title: "Acme next meeting",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Drafting the one-pager",
      host: "figma.com",
      path: "/file/acme-leave-behind",
      title: "Acme one-pager",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m6: {
      pill: "Building the inside note",
      host: "figma.com",
      path: "/file/acme-champion-packet",
      title: "Inside note",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m7: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
    m8: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Opening Gong",
      host: "app.gong.io",
      path: "/call/acme-first-meeting",
      title: "Acme first meeting",
      site: "gong",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m2: {
      pill: "In Gong",
      host: "app.gong.io",
      path: "/call/acme-first-meeting",
      title: "Acme first meeting",
      site: "clip",
      clip: "05-forecast-sfdc",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m3: {
      pill: "Opening Salesforce",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Account/acme",
      title: "Acme | Account",
      site: "sfdc-account",
      clip: "06-customer-expert",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m4: {
      pill: "Writing the 90-day plan",
      host: "docs.google.com",
      path: "/spreadsheets/d/acme-90-day",
      title: "Acme next 90 days",
      site: "sheets",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m5: {
      pill: "In Salesforce",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Account/acme",
      title: "Acme | Account",
      site: "sfdc-account",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m6: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gong, sfdc, sheets, gmail],
    },
    m7: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gong, sfdc, sheets, gmail],
    },
  },
  "deal-inspection": {
    m1: {
      pill: "Opening Salesforce",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Opportunity/acme-1-4m",
      title: "Acme $1.4M | Opportunity",
      site: "sfdc-opp",
      tabs: [sfdc, gdoc, slack],
    },
    m2: {
      pill: "In Salesforce",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Opportunity/acme-1-4m",
      title: "Acme $1.4M | Opportunity",
      site: "clip",
      clip: "05-forecast-sfdc",
      tabs: [sfdc, gdoc, slack],
    },
    m3: {
      pill: "Highlighting gaps",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Opportunity/acme-1-4m",
      title: "Acme $1.4M | Opportunity",
      site: "sfdc-opp",
      tabs: [sfdc, gdoc, slack],
    },
    m4: {
      pill: "In Salesforce",
      host: "datadog.lightning.force.com",
      path: "/lightning/r/Opportunity/acme-1-4m",
      title: "Acme $1.4M | Opportunity",
      site: "sfdc-opp",
      tabs: [sfdc, gdoc, slack],
    },
    m5: {
      pill: "Writing the exec brief",
      host: "docs.google.com",
      path: "/document/d/acme-forecast",
      title: "Acme forecast note",
      site: "gdoc",
      clip: "07-customer-exec-brief",
      tabs: [sfdc, gdoc, slack],
    },
    m6: {
      pill: "Drafting in Slack, not sent",
      host: "app.slack.com",
      path: "/client/TDD/ae-acme",
      title: "#ae-Acme",
      site: "slack",
      tabs: [sfdc, gdoc, slack],
    },
    m7: {
      pill: "Drafting in Slack, not sent",
      host: "app.slack.com",
      path: "/client/TDD/ae-acme",
      title: "#ae-Acme",
      site: "slack",
      tabs: [sfdc, gdoc, slack],
    },
  },
  "sko-enablement": {
    m1: {
      pill: "Opening Slack",
      host: "app.slack.com",
      path: "/client/TDD/gtm-field",
      title: "#gtm-field",
      site: "slack",
      tabs: [slack, gdoc],
    },
    m2: {
      pill: "In Slack",
      host: "app.slack.com",
      path: "/client/TDD/gtm-field",
      title: "#gtm-field",
      site: "clip",
      clip: "08-chief-groupchat",
      tabs: [slack, gdoc],
    },
    m3: {
      pill: "In Slack",
      host: "app.slack.com",
      path: "/client/TDD/gtm-field",
      title: "#gtm-field",
      site: "slack",
      tabs: [slack, gdoc],
    },
    m4: {
      pill: "Writing talk tracks",
      host: "docs.google.com",
      path: "/document/d/bits-ai-talk-tracks",
      title: "Bits AI talk tracks",
      site: "gdoc",
      tabs: [slack, gdoc],
    },
    m5: {
      pill: "Friday one-pager",
      host: "docs.google.com",
      path: "/document/d/bits-ai-friday",
      title: "Bits AI field pack",
      site: "gdoc",
      clip: "01-morning-inbox",
      tabs: [slack, gdoc],
    },
    m6: {
      pill: "Drafting in Slack, not sent",
      host: "app.slack.com",
      path: "/client/TDD/gtm-field",
      title: "#gtm-field",
      site: "slack",
      tabs: [slack, gdoc],
    },
    m7: {
      pill: "Drafting in Slack, not sent",
      host: "app.slack.com",
      path: "/client/TDD/gtm-field",
      title: "#gtm-field",
      site: "slack",
      tabs: [slack, gdoc],
    },
  },
  "ramp-compression": {
    m1: {
      pill: "Opening Gmail",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, sheets],
    },
    m2: {
      pill: "Practice partner",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "clip",
      clip: "04-engineer-bugbot",
      tabs: [gmail, sheets],
    },
    m3: {
      pill: "Practice partner",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, sheets],
    },
    m4: {
      pill: "Scoring the drill",
      host: "docs.google.com",
      path: "/spreadsheets/d/first-90",
      title: "First-90 kit",
      site: "sheets",
      tabs: [gmail, sheets],
    },
    m5: {
      pill: "Scoring the drill",
      host: "docs.google.com",
      path: "/spreadsheets/d/first-90",
      title: "First-90 kit",
      site: "sheets",
      tabs: [gmail, sheets],
    },
    m6: {
      pill: "Writing the 5x5 sheet",
      host: "docs.google.com",
      path: "/spreadsheets/d/first-90",
      title: "5 accounts x 5 prospects",
      site: "sheets",
      clip: "02-prospecting-pg",
      tabs: [gmail, sheets],
    },
    m7: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, sheets],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
