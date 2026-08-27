"use client";

import { useEffect, useRef } from "react";
import type { CroJob } from "@/data/types";
import { useDemoPlayback } from "@/hooks/useDemoPlayback";
import { ImessageDemo } from "./ImessageDemo";
import { BotComputer } from "./BotComputer";

export function JobDemo({ job }: { job: CroJob }) {
  const playback = useDemoPlayback(job.demo);
  const rootRef = useRef<HTMLDivElement>(null);
  const setInView = playback.setInView;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.28 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [setInView]);

  return (
    <div className="job-split" ref={rootRef}>
      <ImessageDemo playback={playback} />
      <BotComputer jobId={job.id} playback={playback} />
    </div>
  );
}
