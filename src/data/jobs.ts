import type { CroJob, SlideCard } from "./types";

export const ACME_TAIL_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "They said · 4 min ago",
    voice: "them",
    title: "The Sev-2",
    body: "We cannot tell a Sev-2 story across APM and logs without stitching tools.",
  },
  {
    n: 5,
    kicker: "Mapped live",
    voice: "us",
    title: "Start with APM + Logs",
    body: "Same team that already feels the outage. Start there this quarter.",
  },
  {
    n: 6,
    kicker: "They said · 4 min ago",
    voice: "them",
    title: "The security bar",
    body: "Security will not let another agent in without SSO and an audit trail.",
  },
  {
    n: 7,
    kicker: "Mapped live",
    voice: "us",
    title: "SSO, then Bits AI",
    body: "Named on this call. One team. Bits AI after they see a faster fix.",
  },
];

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "The deck from this call",
    problem:
      "The best reps already run the meeting in their head. Everyone else walks in with last quarter's deck and hopes the inside contact fills the gaps.",
    botJob:
      "Granola notes go in while you are still on. Room Ops writes the last slides in their words, plus a one-pager they can forward.",
    storyboard: [
      {
        when: "Minute 8",
        label: "Still on the first call. They have not seen a slide.",
        scene: "call",
      },
      {
        when: "Minute 22",
        label: "You switch to the product. They start saying how they actually work.",
        scene: "demo",
      },
      {
        when: "Minute 31",
        label: "Granola is already taking notes. You have not hung up.",
        scene: "notes",
      },
      {
        when: "Minute 35",
        label: "The last slides use their words. Next meeting, not last quarter.",
        scene: "deck",
        slides: ACME_TAIL_SLIDES,
      },
    ],
    unlock:
      "A recap slide in their words, plus how Datadog helps, while you are still on the call.",
    outcome:
      "You change the slides while you are still on the call. The next meeting is about SSO and a Bits AI trial in that team. Not another first meeting.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Room Ops",
      subtitle: "Granola live · rewriting the open deck",
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
          body: "Still on the first call. They have not seen a slide. Switching to the product. Stay on Granola. Do not start a new deck.",
        },
        {
          id: "m2",
          from: "you",
          kind: "text",
          body: "They just named the Sev-2 and the security bar, in their words, on this demo. Pull Granola. We are still on. Rewrite the last slides of the open deck, not a recap after.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "Still on. Granola 14:31. Writing the What we heard slide from this call. Their Sev-2 and security bar, then how Datadog maps. Your contact can already hear themselves.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Last slides of the open deck · still on",
          artifact: {
            kind: "slides",
            title: "What we heard",
            cards: ACME_TAIL_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-pager they can forward",
          artifact: {
            kind: "one-pager",
            title: "Acme one-pager",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "What we covered",
                body: "Start with APM + Logs. Security needs SSO and an audit trail. Bits AI as a one-team trial, not a company-wide rollout.",
              },
              {
                heading: "Security path",
                body: "SSO and audit trail named before any extra products. The security lead from this call stays on the next meeting.",
              },
              {
                heading: "Trial",
                body: "Bits AI in the same team that starts APM + Logs. Week-3 time-to-fix is the gate. Add seats only after that number.",
              },
              {
                heading: "What we need from you",
                body: "Tuesday with your contact plus a security co-owner. Bring the contract owner if legal will slow SSO.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Note they can send inside",
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
                  "The team already agreed to start APM + Logs. Bits AI is useful in that same week-3 window, not after a product tour next quarter.",
              },
              {
                label: "Risks already named",
                value:
                  "SSO + audit trail. Legal may slow the contract. Cost came up once and is not in this ask. RUM is not in the room.",
              },
              {
                label: "Exact ask for next Tuesday",
                value:
                  "30 minutes. Your contact + a security co-owner. Dated SSO path. Written Bits AI trial scope for one team.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to your contact",
          artifact: {
            kind: "gmail",
            title: "Forward to your contact",
            to: "Acme contact",
            subject: "Acme / Datadog. Tuesday packet (SSO, Bits AI trial)",
            body: "Forwarding the internal note from today's room. Problem is in your words. Tuesday ask is your contact + a security co-owner, a dated SSO path, and a one-team Bits AI trial. Nothing else is in the ask.",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. Deck, one-pager, note, and Gmail stay drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 2,
    title: "More products in the account",
    problem:
      "You close APM and Logs. Then the deal stalls. Nobody owns the next product. The next meeting never gets a date.",
    botJob:
      "After the first meeting, the bot writes a 90-day plan: who owns Bits AI, Cloud SIEM, Cost, and RUM, and what the next meeting is.",
    storyboard: [
      {
        when: "Just hung up",
        label: "First meeting just ended. They have APM and Logs.",
        scene: "call",
      },
      {
        when: "That afternoon",
        label: "Security was in the room. Nobody booked the next talk.",
        scene: "notes",
      },
      {
        when: "Before you close the laptop",
        label: "The 90-day plan is a draft. Tuesday is already on it.",
        scene: "map",
      },
      {
        when: "Tuesday",
        label: "The next meeting has a date. Cloud SIEM, not another product tour.",
        scene: "map",
        artifact: {
          kind: "attach-map",
          title: "Acme next 90 days",
          days: 90,
          meeting: {
            when: "Tue · 30 min",
            who: "Security lead + you",
            agenda: "Cloud SIEM scope. Not a product tour.",
          },
          lanes: [
            {
              product: "Bits AI",
              owner: "Platform eng manager",
              from: 15,
              to: 45,
              move: "Trial in the APM + Logs team",
            },
            {
              product: "Cloud SIEM",
              owner: "Security lead from today's call",
              from: 15,
              to: 45,
              move: "Tue 30 min scoping with you",
              punch: true,
            },
            {
              product: "Cost",
              owner: "FinOps alias they mentioned",
              from: 45,
              to: 90,
              move: "Review after APM + Logs is live",
            },
            {
              product: "RUM",
              owner: "Frontend guild lead",
              from: 45,
              to: 90,
              move: "Intro once APM is stable",
            },
          ],
        },
      },
    ],
    unlock: "Owners, time windows, and the next invite parked as a draft.",
    outcome:
      "Sell more Datadog products to the same company, without adding people. The next meeting already has a date.",
    clips: ["05-forecast-sfdc", "06-customer-expert"],
    demo: {
      title: "Account Mapper",
      subtitle: "First close to a 90-day plan",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Account Mapper",
          role: "bot",
          persona: "Owns the next-products path after every first meeting",
          color: "#FF9500",
        },
        {
          id: "expert",
          name: "Customer Expert",
          role: "bot",
          persona: "Names who can sign and who owns each product",
          color: "#AF52DE",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "First meeting done. They have APM + Logs. Security lead was in the room. Cost came up once.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "APM + Logs is in. Building the 90-day plan. Customer Expert is naming owners per product.",
        },
        {
          id: "m3",
          from: "expert",
          kind: "handoff",
          body: "The person who can sign was not on the call. Treat the security lead from today as the Cloud SIEM owner, not as the signer. Product owners I would confirm before week 2 are below, on the plan.",
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "90-day plan",
          artifact: {
            kind: "table",
            title: "Acme next 90 days",
            caption:
              "Next meeting. Tue 30 min with security lead + you. Agenda is Cloud SIEM scope, not a product tour.",
            columns: ["Product", "Owner", "Window", "Next move"],
            rows: [
              [
                "Bits AI",
                "Platform eng manager",
                "Day 15 to 45",
                "Trial in the APM + Logs team",
              ],
              [
                "Cloud SIEM",
                "Security lead from today's call",
                "Day 15 to 45",
                "Tue 30 min scoping with you",
              ],
              [
                "Cost",
                "FinOps alias they mentioned",
                "Day 45 to 90",
                "Review after APM + Logs is live",
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
            title: "Who owns the next products",
            fields: [
              {
                label: "Who can sign",
                value:
                  "Not in the room. Do not let your contact stand in. Confirm a name before the Cloud SIEM meeting, or the plan is a wish list.",
              },
              {
                label: "Bits AI",
                value: "Platform eng manager. Same team as APM + Logs.",
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
            to: "Acme security lead, you",
            subject: "Tue 30 min. Acme Cloud SIEM scope (APM + Logs already in)",
            body: "Agenda. 1. SSO + audit trail status. 2. Cloud SIEM scope for the same team that started APM + Logs. 3. Whether Bits AI stays a one-team trial. Cost and RUM are not on this agenda.",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "routine",
          body: "After every first-meeting Gong, run this plan and park the next invite as a draft. You tap Send.",
        },
      ],
    },
  },
  {
    id: "deal-inspection",
    number: 3,
    title: "Check a big deal from your desk",
    problem:
      "You cannot sit in every $1M+ deal. Gaps show up late. The note you take to your boss stays vague.",
    botJob:
      "Paste pipeline notes. The bot names gaps: who can sign, the contract, your contact, and Cloud SIEM. It writes Monday questions and a note for your boss.",
    storyboard: [
      {
        when: "You open the deal",
        label: "You paste the $1.4M. You are not joining Monday's call.",
        scene: "inspect",
      },
      {
        when: "Twelve minutes in",
        label: "Four gaps. No signer. Slow legal. A contact who cannot sell it inside.",
        scene: "notes",
      },
      {
        when: "You close the laptop",
        label: "You are not calling this a sure thing. The note is for your boss.",
        scene: "send",
      },
      {
        when: "Forecast",
        label: "The note for your boss. Wait until the signer is on the calendar.",
        scene: "send",
        artifact: {
          kind: "forecast",
          title: "Take this to your boss",
          account: "Acme",
          amount: "$1.4M · stage 4",
          status: "Do not call this a sure thing until the signer is on the calendar",
          body: "Acme is a real this-quarter shot at $1.4M if we get a meeting with the person who can sign in 10 days, and a dated path through legal. Your contact is strong. Forecast risk is the contract plus Cloud SIEM, not product fit. I am not calling this a sure thing until the signer is on the calendar.",
          gaps: [
            {
              label: "Who can sign",
              body: "No meeting on the calendar.",
            },
            {
              label: "Contract",
              body: "Legal is slow. No dated path.",
            },
            {
              label: "Inside contact",
              body: "Likes us. Cannot sell $1.4M inside the company alone.",
            },
            {
              label: "Cloud SIEM",
              body: "Not in the story. If it slips, the $1.4M changes.",
            },
          ],
        },
      },
    ],
    unlock: "Four gaps, three Monday questions, one paragraph for your boss.",
    outcome:
      "In one sitting, you know if this deal is real. Or if it is just a logo. You know before you put it in the forecast.",
    clips: ["05-forecast-sfdc", "07-customer-exec-brief"],
    demo: {
      title: "Deal Desk",
      subtitle: "Salesforce paste to a note for your boss",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "desk",
          name: "Deal Desk",
          role: "bot",
          persona: "Reads the deal the way you would if you had the hours",
          color: "#007AFF",
        },
        {
          id: "forecast",
          name: "Forecast",
          role: "bot",
          persona: "Salesforce next steps and the note for your boss",
          color: "#64D2FF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Paste from Salesforce. Acme $1.4M, stage 4, close this quarter. Notes say the contact loves us, legal is slow, no meeting with the person who can sign, and Cloud SIEM is not clearly in the deal.",
        },
        {
          id: "m2",
          from: "desk",
          kind: "text",
          body: "Four gaps. Three Monday questions. One paragraph you can take to your boss. Do not call this a sure thing yet.",
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
                label: "Who can sign",
                body: "No meeting on the calendar. A contact who likes us is not the person who can sign.",
              },
              {
                label: "Contract path",
                body: "Legal flagged as slow. No named owner and no dated path.",
              },
              {
                label: "Inside contact",
                body: "Strong like, weak inside map. Cannot carry $1.4M to leadership alone.",
              },
              {
                label: "Cloud SIEM",
                body: "Cloud SIEM is not clearly in this $1.4M. If it slips, the story changes.",
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
            title: "For the account exec on Monday",
            items: [
              "Who can sign, and when do we meet them together?",
              "Who owns legal, and what is the dated contract path?",
              "If Cloud SIEM slips, does the $1.4M still hold?",
            ],
          },
        },
        {
          id: "m5",
          from: "forecast",
          kind: "draft",
          draftLabel: "Note for your boss",
          artifact: {
            kind: "forecast",
            title: "Take this to your boss",
            status: "Do not call this a sure thing until the signer is on the calendar",
            body: "Acme is a real this-quarter shot at $1.4M if we get a meeting with the person who can sign in 10 days, and a dated path through legal. Your contact is strong. Forecast risk is the contract plus Cloud SIEM, not product fit. I am not calling this a sure thing until the signer is on the calendar.",
          },
        },
        {
          id: "m6",
          from: "desk",
          kind: "draft",
          draftLabel: "Slack to the account exec",
          artifact: {
            kind: "slack",
            title: "Monday ping",
            channel: "#ae-Acme",
            body: "Three questions before the forecast call. 1. Name of the person who can sign, and a meeting date. 2. Legal owner and dated contract path. 3. If Cloud SIEM slips, does $1.4M still hold? Draft only. I have not posted this.",
          },
        },
        {
          id: "m7",
          from: "desk",
          kind: "system",
          body: "Nothing posted to Salesforce or Slack. Sure-thing language stays held until you tap Send.",
        },
      ],
    },
  },
  {
    id: "sko-enablement",
    number: 4,
    title: "One story the whole team says",
    problem:
      "You already do a kickoff talk. By Friday the story is a Slack thread. A global sales team needs one Bits AI line they can say out loud.",
    botJob:
      "Point the bot at a launch or a lost deal. It writes lines for the account exec, the sales engineer, and the manager, plus a Friday one-pager.",
    storyboard: [
      {
        when: "Monday",
        label: "Launch week. The Bits AI story is already a Slack thread.",
        scene: "launch",
      },
      {
        when: "Wednesday",
        label: "One story, three jobs. Account exec, engineer, manager.",
        scene: "notes",
      },
      {
        when: "Friday 3pm",
        label: "The pack is ready. Monday they say the same thing.",
        scene: "deck",
      },
      {
        when: "Monday morning",
        label: "Account exec, engineer, manager. One pack for Monday.",
        scene: "send",
        artifact: {
          kind: "talk-tracks",
          title: "Say these out loud",
          tracks: [
            {
              seat: "Account exec",
              line: "You already pay for the Sev-2 in context-switching. Start APM + Logs in one team. Bits AI is the weekly habit in that team, not a platform announcement.",
            },
            {
              seat: "Sales engineer",
              line: "One demo path. Outage in, Bits AI habit, SSO + audit if security is in the room. No feature tour. MCP only if they ask how the bot talks to their tools.",
            },
            {
              seat: "Manager 1:1",
              line: "Check two things. A named inside contact. A next meeting on the calendar for Bits AI or Cloud SIEM. If both are missing, you only won a logo.",
            },
          ],
        },
      },
    ],
    unlock: "Three talk tracks and a Friday one-pager.",
    outcome:
      "One story the sales team can say this week. Bits AI does not turn into 19 different Slack posts.",
    clips: ["08-chief-groupchat", "01-morning-inbox"],
    demo: {
      title: "Enablement Chief",
      subtitle: "Bits AI launch + open source loss",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "cos",
          name: "Chief of Staff",
          role: "bot",
          persona: "Opens the group chat and routes the one-off",
          color: "#E8E8ED",
        },
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
          persona: "Writes what an account exec can say out loud",
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
          body: "Bits AI launch this week. We lost last month because they said open source is good enough. Need a kickoff talk plus a Friday field pack.",
        },
        {
          id: "m2",
          from: "cos",
          kind: "text",
          body: "Group chat is live. One story, three jobs. Engineer on the open-source proof path. Talk Track on language the field can say out loud.",
        },
        {
          id: "m3",
          from: "eng",
          kind: "handoff",
          body: "The open-source turn is not 'we have more features.' It is one outage they already felt, then APM + Logs, then Bits AI as the weekly habit. MCP is a later proof, not the opener.",
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
                seat: "Account exec",
                line: "You already pay for the Sev-2 in context-switching. Start APM + Logs in one team. Bits AI is the weekly habit in that team, not a platform announcement.",
              },
              {
                seat: "Sales engineer",
                line: "One demo path. Outage in, Bits AI habit, SSO + audit if security is in the room. No feature tour. MCP only if they ask how the bot talks to their tools.",
              },
              {
                seat: "Manager 1:1",
                line: "Check two things. A named inside contact. A next meeting on the calendar for Bits AI or Cloud SIEM. If both are missing, you only won a logo.",
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
                body: "Bits AI is the launch. Same motion as always. APM + Logs first. Selling more products in the account is how the number moves. Keep the story on more products, not on hiring more people.",
              },
              {
                heading: "What to say",
                body: "One team. Week-3 time-to-fix. Bits AI as the weekly habit. Inside contact + a security co-owner if SSO is in the way.",
              },
              {
                heading: "What not to say",
                body: "Do not pitch the catalog. Do not lead with MCP. Do not promise Cost or RUM in the first meeting.",
              },
              {
                heading: "When they say open source is good enough",
                body: "Prometheus and Grafana are fine until the outage crosses two tools. Then time-to-fix is a people problem. APM + Logs is how you stop stitching. Bits AI is how the team keeps the habit.",
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
            body: "Friday pack is in the thread. Three talk tracks (account exec / sales engineer / manager) plus the open-source turn. Bits AI launch. Do not rewrite this in 19 versions. Draft only until Enablement Chief taps Send.",
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
    title: "Practice before a real customer",
    problem:
      "Enterprise sales at Datadog is a long interview loop. Pitch. Who buys. Open source is good enough. Shadowing the top account exec for a quarter is too slow for the book you want.",
    botJob:
      "The bot is a practice partner. New reps drill the open-source objection and leave with a first-90-day deal kit.",
    storyboard: [
      {
        when: "First drill",
        label: "New account exec. Open source is good enough is coming.",
        scene: "drill",
      },
      {
        when: "They answer",
        label: "The first line is true and still too vague.",
        scene: "voice",
      },
      {
        when: "Coach cuts",
        label: "The line that wins names a real outage.",
        scene: "inspect",
      },
      {
        when: "Before a live customer",
        label: "The weak line vs the one that wins.",
        scene: "send",
        artifact: {
          kind: "scorecard",
          title: "Open source is good enough · scored",
          score: "6 / 10",
          weakLine:
            "Because when you stitch six tools the time-to-fix story falls apart across teams.",
          notes: [
            "Kept Prometheus and Grafana in the frame.",
            "Stitching tools is true and still generic.",
            "No outage. No APM + Logs start. No Bits AI habit.",
          ],
          betterAnswer:
            "Last quarter on-call jumped Prometheus, Grafana, and a log pile to explain one latency spike. Start APM + Logs in that team this month. Bits AI comes after that team has a week-3 number on time-to-fix, not after a product tour.",
        },
      },
    ],
    unlock: "A scored open-source drill and a first-90 kit.",
    outcome:
      "New reps practice first. They do not burn a Fortune 500 account on week one.",
    clips: ["04-engineer-bugbot", "02-prospecting-pg"],
    demo: {
      title: "Practice Coach",
      subtitle: "Open-source drill + first-90 kit",
      participants: [
        { id: "you", name: "New rep", role: "you" },
        {
          id: "coach",
          name: "Practice Coach",
          role: "bot",
          persona: "Runs drills and builds the first-90 kit",
          color: "#32ADE6",
        },
        {
          id: "buyer",
          name: "Skeptical Buyer",
          role: "bot",
          persona: "Plays the open-source-is-good-enough objection cold",
          color: "#8E8E93",
        },
        {
          id: "eng",
          name: "Engineer",
          role: "bot",
          persona: "Live product answer / Bugbot",
          color: "#32ADE6",
        },
        {
          id: "prospect",
          name: "Prospecting",
          role: "bot",
          persona: "Five accounts, five contacts. Gmail drafts only",
          color: "#30D158",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "you",
          kind: "text",
          body: "Drill me on open source is good enough. Then give me a first-90 kit for my open territory.",
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
          body: "Because when you stitch six tools the time-to-fix story falls apart across teams.",
        },
        {
          id: "m4",
          from: "coach",
          kind: "text",
          body: "Decent. You named the pain and skipped the catalog. Tighten it. One outage they already felt, then APM + Logs in that team. After the drill, name who cares inside, who can sign, and a dated next meeting.",
        },
        {
          id: "m5",
          from: "coach",
          kind: "draft",
          draftLabel: "Scored drill",
          artifact: {
            kind: "scorecard",
            title: "Open source is good enough · scored",
            score: "6 / 10. Direction is right. Too vague to win a live customer.",
            notes: [
              "Kept Prometheus and Grafana in the frame. Good.",
              "Stitching tools is true and still generic.",
              "No outage. No APM + Logs start. No Bits AI habit.",
            ],
            betterAnswer:
              "Last quarter on-call jumped Prometheus, Grafana, and a log pile to explain one latency spike. Start APM + Logs in that team this month. Bits AI comes after that team has a week-3 number on time-to-fix, not after a product tour.",
          },
        },
        {
          id: "m6",
          from: "prospect",
          kind: "draft",
          draftLabel: "First-90-day deal kit",
          artifact: {
            kind: "deal-kit",
            title: "Open territory kit",
            weeks: [
              {
                label: "Week 1 to 2",
                body: "Territory map. 10 accounts with a start plan (APM + Logs). Name a likely inside contact and the open-source objection you expect.",
              },
              {
                label: "Week 3 to 6",
                body: "Three live first meetings. Coach debrief after each. Fill in metrics, who can sign, and how they decide. No catalog pitch.",
              },
              {
                label: "Week 7 to 12",
                body: "One extra product on an existing close. Bits AI, Cloud SIEM, Cost, or RUM. Account Mapper runs the 90-day plan. Still not shadowing the top account exec for a quarter.",
              },
            ],
            pack: [
              "Talk tracks (account exec / sales engineer / manager)",
              "Open-source objection card with the scored better answer",
              "Inside-contact note template",
              "Start plan sheet for the 10 accounts",
            ],
          },
        },
        {
          id: "m7",
          from: "coach",
          kind: "system",
          body: "Practice only. Nothing went to a live account. Run the drill again before you burn a Fortune 500 customer.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
