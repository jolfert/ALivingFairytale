"use client";

import { useEffect, useRef } from "react";

const CONFETTI_COLORS = ["#f566bb", "#7d64ff", "#ffd67b", "#8be0c0", "#ffffff"];
const PIECES_PER_BURST = 26;

/**
 * Site-wide celebration layer. Lives in the root layout (so it survives
 * client navigations) and pops a small confetti burst from any element
 * carrying a `data-confetti` attribute when it is clicked or tapped.
 */
export function ConfettiBursts() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const burst = (x: number, y: number) => {
      for (let i = 0; i < PIECES_PER_BURST; i++) {
        const piece = document.createElement("span");
        const size = 5 + Math.random() * 6;
        const width = size;
        const height = Math.random() > 0.5 ? size : size * 0.45;
        piece.style.cssText = [
          "position:absolute",
          `left:${x}px`,
          `top:${y}px`,
          `width:${width}px`,
          `height:${height}px`,
          `background:${CONFETTI_COLORS[i % CONFETTI_COLORS.length]}`,
          `border-radius:${Math.random() > 0.6 ? "50%" : "2px"}`,
          "box-shadow:0 0 1px rgba(45,27,69,0.18)",
        ].join(";");
        overlay.appendChild(piece);

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 130;
        const dx = Math.cos(angle) * distance;
        // Launch with an upward bias, then let the keyframe's +140px read as gravity.
        const dy = Math.sin(angle) * distance - 80;
        const spin = (Math.random() - 0.5) * 720;
        const animation = piece.animate(
          [
            { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
            {
              transform: `translate(${dx}px, ${dy + 140}px) rotate(${spin}deg)`,
              opacity: 0,
            },
          ],
          {
            duration: 800 + Math.random() * 500,
            easing: "cubic-bezier(0.12, 0.8, 0.32, 1)",
          },
        );
        animation.onfinish = () => piece.remove();
      }
    };

    function onClick(event: MouseEvent) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const target = event.target as Element | null;
      if (!target?.closest?.("[data-confetti]")) return;
      burst(event.clientX, event.clientY);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
    />
  );
}
