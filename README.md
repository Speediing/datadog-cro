# Datadog CRO leave-behind

Passworded follow-up site Jason Wiker (Cursor Field Engineering) sends after the Datadog CRO conversation.

## What it is

Five GTM jobs on one page. Each job has a short problem statement, an interactive Grok Bot iMessage demo, and the matching Krista Letz GTM clip as native video. Below that: the full eight-clip gallery and the public Grok Bot quote wall.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Krista clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

Commit the mp4 files so Vercel can serve them.

## Deploy

Preview only under the `jasonwiker` Vercel team, project name `datadog-cro`. Set `SITE_PASSWORD=land2expand`. Do not promote to a public production domain until Jason says so.
