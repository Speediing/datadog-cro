"use client";

import { useEffect, useRef } from "react";
import { DEFAULT_ACCOUNT } from "@/lib/account";
import type { DemoPlayback } from "@/hooks/useDemoPlayback";
import { ArtifactCard } from "./ArtifactCard";

function TypingDots({ name }: { name: string }) {
  return (
    <div className="imessage-row bot">
      <div className="imessage-meta">{name} is typing</div>
      <div className="imessage-bubble bot typing" aria-label={`${name} is typing`}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function ImessageDemo({ playback }: { playback: DemoPlayback }) {
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
  } = playback;
  const streamRef = useRef<HTMLDivElement>(null);
  const bots = liveThread.participants.filter((p) => p.role === "bot");

  useEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;
    stream.scrollTo({ top: stream.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typingFrom]);

  const fieldId = `account-${liveThread.title.replace(/\s+/g, "-")}`;

  return (
    <div className="imessage">
      <div className="imessage-notch" aria-hidden />
      <header className="imessage-header">
        <div className="imessage-avatars">
          {bots.map((p) => (
            <span
              key={p.id}
              className="imessage-avatar"
              style={{ background: p.color || "#34C759" }}
              title={p.persona || p.name}
            >
              {p.name.slice(0, 1)}
            </span>
          ))}
        </div>
        <div>
          <p className="imessage-title">{liveThread.title}</p>
          <p className="imessage-subtitle">{liveThread.subtitle}</p>
        </div>
      </header>

      <div className="imessage-thread" ref={streamRef} role="log" aria-live="polite">
        {visible.map((message) => {
          const who = people[message.from];
          const isYou = who?.role === "you";
          const isSystem =
            message.kind === "system" || message.kind === "routine";

          if (isSystem) {
            return (
              <div key={message.id} className="imessage-system">
                {message.kind === "routine" ? "Routine · " : ""}
                {message.body}
              </div>
            );
          }

          if (message.kind === "draft") {
            const sent = sentDrafts[message.id];
            return (
              <div key={message.id} className="imessage-row bot">
                <div className="imessage-meta">
                  {who?.name || "Bot"} · draft
                </div>
                <div className="imessage-bubble bot draft">
                  {message.draftLabel ? (
                    <p className="draft-label">{message.draftLabel} · not sent</p>
                  ) : (
                    <p className="draft-label">Draft · not sent</p>
                  )}
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
              className={`imessage-row ${isYou ? "you" : "bot"}`}
            >
              {!isYou && (
                <div className="imessage-meta">
                  {who?.name || "Bot"}
                  {message.kind === "handoff" ? " · handoff" : ""}
                </div>
              )}
              <div className={`imessage-bubble ${isYou ? "you" : "bot"}`}>
                {message.body}
                {message.artifact ? (
                  <ArtifactCard artifact={message.artifact} />
                ) : null}
              </div>
            </div>
          );
        })}
        {typingFrom ? (
          <TypingDots name={people[typingFrom]?.name || "Bot"} />
        ) : null}
      </div>

      <footer className="imessage-footer">
        <div className="imessage-controls">
          <button
            type="button"
            className="imessage-advance"
            onClick={() => (done ? replay() : setPlaying((value) => !value))}
          >
            {done ? "Replay" : playing ? "Pause" : "Play"}
          </button>
          {!done ? (
            <button type="button" className="imessage-replay" onClick={replay}>
              Replay
            </button>
          ) : null}
        </div>
        <span className="imessage-progress">
          {Math.min(visibleCount, messages.length)}/{messages.length}
        </span>
      </footer>

      <form className="imessage-account" onSubmit={applyAccount}>
        <label htmlFor={fieldId}>Swap the account in this thread</label>
        <div>
          <input
            id={fieldId}
            value={draftAccount}
            onChange={(event) => setDraftAccount(event.target.value)}
            placeholder={DEFAULT_ACCOUNT}
          />
          <button type="submit">Use name</button>
        </div>
      </form>
    </div>
  );
}
