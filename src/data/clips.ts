import type { Clip, ClipId } from "./types";

function clip(
  id: ClipId,
  title: string,
  caption: string,
): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Morning inbox",
    "She sets a 7:30am weekday scan. The bot flags what needs a reply and stays quiet if the inbox is empty.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Prospecting",
    "Five drafted emails sit in the Prospecting bot. None of them send until she says so.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Slides from the room",
    "Granola notes in. The Slides bot writes the Northstar What we heard cards while she is still on the call.",
  ),
  "04-engineer-bugbot": clip(
    "04-engineer-bugbot",
    "Engineer",
    "Engineer bot, wired to the repo, answers a customer setup question without her leaving the thread.",
  ),
  "05-forecast-sfdc": clip(
    "05-forecast-sfdc",
    "Forecast",
    "She dumps the week's demo notes. Forecasting writes the next steps in the format her manager actually wants.",
  ),
  "06-customer-expert": clip(
    "06-customer-expert",
    "Customer expert",
    "Customer Expert on Candlewick: who is in the account, what they use, and the questions sitting in Slack.",
  ),
  "07-customer-exec-brief": clip(
    "07-customer-exec-brief",
    "Exec brief",
    "She asks Customer Expert to turn what it just watched her do into an exec brief.",
  ),
  "08-chief-groupchat": clip(
    "08-chief-groupchat",
    "Chief group chat",
    "She opens a group channel, drops in Chief of Staff plus Slides and Engineer, and splits the work.",
  ),
};

export const ALL_CLIPS: Clip[] = Object.values(CLIPS);
