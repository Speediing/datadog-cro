"use client";

import { useMemo, useState } from "react";
import type { DemoThread, Participant } from "@/data/types";

function participantMap(thread: DemoThread): Record<string, Participant> {
  return Object.fromEntries(thread.participants.map((p) => [p.id, p]));
}

export function ImessageDemo({ thread }: { thread: DemoThread }) {
  const people = useMemo(() => participantMap(thread), [thread]);
  const [visibleCount, setVisibleCount] = useState(1);
  const [sentDrafts, setSentDrafts] = useState<Record<string, boolean>>({});

  const visible = thread.messages.slice(0, visibleCount);
  const done = visibleCount >= thread.messages.length;

  function advance() {
    setVisibleCount((count) => Math.min(count + 1, thread.messages.length));
  }

  function sendDraft(id: string) {
    setSentDrafts((prev) => ({ ...prev, [id]: true }));
  }

  return (
    <div className="imessage">
      <div className="imessage-notch" aria-hidden />
      <header className="imessage-header">
        <div className="imessage-avatars">
          {thread.participants
            .filter((p) => p.role === "bot")
            .map((p) => (
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
        <div className="imessage-title-block">
          <p className="imessage-title">{thread.title}</p>
          <p className="imessage-subtitle">{thread.subtitle}</p>
        </div>
      </header>

      <div className="imessage-thread" role="log" aria-live="polite">
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
                <div className="imessage-meta">{who?.name || "Bot"}</div>
                <div className="imessage-bubble bot draft">
                  <p className="draft-label">
                    {message.draftLabel || "Draft"} · not sent
                  </p>
                  <pre className="draft-body">{message.body}</pre>
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
              </div>
            </div>
          );
        })}
      </div>

      <footer className="imessage-footer">
        {done ? (
          <button
            type="button"
            className="imessage-advance"
            onClick={() => {
              setVisibleCount(1);
              setSentDrafts({});
            }}
          >
            Replay thread
          </button>
        ) : (
          <button
            type="button"
            className="imessage-advance"
            onClick={advance}
          >
            Continue
          </button>
        )}
        <span className="imessage-progress">
          {visibleCount}/{thread.messages.length}
        </span>
      </footer>
    </div>
  );
}
