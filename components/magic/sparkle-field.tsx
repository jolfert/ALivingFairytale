"use client";

import { useEffect, useRef } from "react";

const SPARKLE_COLORS = ["#f566bb", "#7d64ff", "#f2a93b"];
const SPAWN_INTERVAL_MS = 45;
const MAX_LIVE_SPARKLES = 24;

/**
 * Invisible overlay that leaves a trail of tiny stars behind the pointer.
 * Drop it inside any `position: relative` container; it listens on the
 * parent element so the content underneath stays fully interactive.
 */
export function SparkleField() {
  const hostRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const host = hostRef.current;
    const parent = host?.parentElement;
    if (!host || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onPointerMove(event: PointerEvent) {
      const now = performance.now();
      if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;
      if (!host || host.childElementCount >= MAX_LIVE_SPARKLES) return;
      lastSpawnRef.current = now;

      const rect = host.getBoundingClientRect();
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle-bit";
      sparkle.textContent = "✦";
      sparkle.style.left = `${event.clientX - rect.left + (Math.random() - 0.5) * 28}px`;
      sparkle.style.top = `${event.clientY - rect.top + (Math.random() - 0.5) * 28}px`;
      sparkle.style.fontSize = `${8 + Math.random() * 10}px`;
      sparkle.style.color =
        SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      sparkle.addEventListener("animationend", () => sparkle.remove());
      host.appendChild(sparkle);
    }

    parent.addEventListener("pointermove", onPointerMove);
    return () => parent.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    />
  );
}
