"use client";

import { useEffect, useRef } from "react";
import { FLEET } from "@/data/fleet";
import { beatFor } from "@/data/screens";
import type { CroJob } from "@/data/types";
import type { DemoPlayback } from "@/hooks/useDemoPlayback";
import { DEFAULT_ACCOUNT } from "@/lib/account";
import { ArtifactCard } from "./ArtifactCard";
import { BotComputer } from "./BotComputer";
import { GrokFace } from "./GrokFace";

function TypingDots({ name }: { name: string }) {
  return (
    <div className="gb-row in">
      <div className="gb-meta">{name} is typing</div>
      <div className="gb-bubble in typing" aria-label={`${name} is typing`}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function GrokBotWindow({
  job,
  playback,
}: {
  job: CroJob;
  playback: DemoPlayback;
}) {
  const {
    liveThread,
    people,
    visible,
    visibleCount,
    messages,
    playing,
    done,
    typingFrom,
    sentDrafts,
    draftAccount,
    setDraftAccount,
    setPlaying,
    sendDraft,
    replay,
    applyAccount,
    current,
  } = playback;

  const streamRef = useRef<HTMLDivElement>(null);
  const threadBots = liveThread.participants.filter((p) => p.role === "bot");
  const threadIds = new Set(threadBots.map((p) => p.id));
  const speaking =
    typingFrom ||
    (current && people[current.from]?.role === "bot" ? current.from : null);
  const beat =
    beatFor(
      job.id,
      typingFrom ? messages[visibleCount]?.id : current?.id,
    ) || beatFor(job.id, messages[0]?.id);
  const group =
    threadBots.length > 2
      ? liveThread.title
      : null;

  useEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;
    stream.scrollTo({ top: stream.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typingFrom]);

  const extras = threadBots.filter(
    (bot) => !FLEET.some((item) => item.id === bot.id),
  );

  return (
    <div className="gb-window" aria-label="Grok Bot">
      <div className="gb-titlebar">
        <span className="traffic" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <GrokFace size={16} />
        <strong>Grok Bot</strong>
        {beat ? <em className="gb-pill">{beat.pill}</em> : null}
        <div className="gb-title-actions">
          <button
            type="button"
            onClick={() => (done ? replay() : setPlaying((value) => !value))}
          >
            {done ? "Replay" : playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <div className="gb-body">
        <aside className="gb-sidebar">
          <div className="gb-grok">
            <GrokFace size={28} />
            <div>
              <strong>Grok</strong>
              <span>SpaceXAI</span>
            </div>
          </div>
          <p className="gb-kicker">Bots</p>
          <ul>
            {FLEET.map((bot) => {
              const inThread = threadIds.has(bot.id);
              const active = speaking === bot.id;
              return (
                <li key={bot.id}>
                  <a
                    href={`#${bot.jobId}`}
                    className={`gb-bot${inThread ? " in-thread" : ""}${active ? " is-active" : ""}`}
                  >
                    <i style={{ background: bot.color }} />
                    <span>
                      <b>{bot.name}</b>
                      <em>{bot.blurb}</em>
                    </span>
                  </a>
                </li>
              );
            })}
            {extras.map((bot) => (
              <li key={bot.id}>
                <span
                  className={`gb-bot in-thread${speaking === bot.id ? " is-active" : ""}`}
                >
                  <i style={{ background: bot.color || "#34C759" }} />
                  <span>
                    <b>{bot.name}</b>
                    <em>{bot.persona}</em>
                  </span>
                </span>
              </li>
            ))}
          </ul>
          {group ? (
            <>
              <p className="gb-kicker">Group chats</p>
              <div className={`gb-bot in-thread${threadBots.length > 2 ? " is-active" : ""}`}>
                <i />
                <span>
                  <b>{group}</b>
                  <em>{threadBots.map((p) => p.name).join(" · ")}</em>
                </span>
              </div>
            </>
          ) : null}
        </aside>

        <section className="gb-chat">
          <header className="gb-chat-header">
            <div>
              <h3>{liveThread.title}</h3>
              <p>{liveThread.subtitle}</p>
            </div>
            <span className="gb-honesty">
              {Math.min(visibleCount, messages.length)}/{messages.length}
            </span>
          </header>
          <div className="gb-stream" ref={streamRef} role="log" aria-live="polite">
            {visible.map((message) => {
              const who = people[message.from];
              const isYou = who?.role === "you";
              const isSystem =
                message.kind === "system" || message.kind === "routine";

              if (isSystem) {
                return (
                  <div key={message.id} className="gb-system">
                    {message.kind === "routine" ? "Routine · " : ""}
                    {message.body}
                  </div>
                );
              }

              if (message.kind === "draft") {
                const sent = sentDrafts[message.id];
                return (
                  <div key={message.id} className="gb-row in">
                    <div className="gb-meta">
                      {who?.name || "Bot"} · draft
                    </div>
                    <div className="gb-bubble in draft">
                      <p className="draft-label">
                        {message.draftLabel || "Draft"} · not sent
                      </p>
                      {message.body ? (
                        <pre className="draft-body">{message.body}</pre>
                      ) : null}
                      {message.artifact ? (
                        <ArtifactCard artifact={message.artifact} />
                      ) : null}
                      {sent ? (
                        <p className="draft-sent">Sent. You approved this one.</p>
                      ) : (
                        <button
                          type="button"
                          className="draft-send"
                          onClick={() => sendDraft(message.id)}
                        >
                          Send?
                        </button>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={message.id}
                  className={`gb-row ${isYou ? "out" : "in"}`}
                >
                  {!isYou && (
                    <div className="gb-meta">
                      {who?.name || "Bot"}
                      {message.kind === "handoff" ? " · handoff" : ""}
                    </div>
                  )}
                  <div className={`gb-bubble ${isYou ? "out" : "in"}`}>
                    {message.body}
                    {message.artifact ? (
                      <ArtifactCard artifact={message.artifact} />
                    ) : null}
                    {message.kind === "handoff" ? (
                      <p className="gb-handoff">Handoff</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {typingFrom ? (
              <TypingDots name={people[typingFrom]?.name || "Bot"} />
            ) : null}
          </div>
          <form className="gb-composer" onSubmit={applyAccount}>
            <input
              value={draftAccount}
              onChange={(event) => setDraftAccount(event.target.value)}
              placeholder={`Message ${liveThread.title} · account ${DEFAULT_ACCOUNT}`}
              aria-label="Swap the account in this thread"
            />
            <button type="submit">Use name</button>
            <button type="button" className="gb-send" disabled>
              Send
            </button>
          </form>
          <p className="gb-foot">
            Walkthrough. Drafts stay unsent until you tap Send?
          </p>
        </section>

        <BotComputer jobId={job.id} playback={playback} />
      </div>
    </div>
  );
}
