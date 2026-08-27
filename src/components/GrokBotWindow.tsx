"use client";

import { useEffect, useRef } from "react";
import { beatFor } from "@/data/screens";
import type { CroJob } from "@/data/types";
import type { DemoPlayback } from "@/hooks/useDemoPlayback";
import { DEFAULT_ACCOUNT } from "@/lib/account";
import { ArtifactCard } from "./ArtifactCard";
import { BotComputer } from "./BotComputer";

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
  const speaking =
    typingFrom ||
    (current && people[current.from]?.role === "bot" ? current.from : null);
  const beat =
    beatFor(
      job.id,
      typingFrom ? messages[visibleCount]?.id : current?.id,
    ) || beatFor(job.id, messages[0]?.id);

  useEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;
    stream.scrollTo({ top: stream.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typingFrom]);

  return (
    <div className="gb-window" aria-label="Grok Bot">
      <div className="gb-titlebar">
        <span className="traffic" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <strong>Grok Bot</strong>
        <span className="gb-status">{beat?.pill}</span>
        <div className="gb-title-actions">
          <button
            type="button"
            onClick={() => (done ? replay() : setPlaying((value) => !value))}
          >
            {done ? "Replay" : playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <div className="gb-strip">
        {threadBots.map((bot) => (
          <span
            key={bot.id}
            className={speaking === bot.id ? "is-on" : undefined}
          >
            {bot.name}
          </span>
        ))}
        <em>
          {Math.min(visibleCount, messages.length)}/{messages.length}
        </em>
      </div>

      <div className="gb-body">
        <section className="gb-chat">
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
              placeholder={`Account name · ${DEFAULT_ACCOUNT}`}
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
