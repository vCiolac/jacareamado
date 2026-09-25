"use client";

import { useEffect, useRef } from "react";

// Patinhas que "caminham" pela lateral esquerda enquanto a página rola até a
// âncora do link clicado. Ativa em qualquer <a href="#..." data-paw-trail>.
// Sem JS, o link continua funcionando como âncora normal.

const PAW_SVG =
  '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true">' +
  '<ellipse cx="5.2" cy="9.6" rx="2.1" ry="2.7" transform="rotate(-18 5.2 9.6)"/>' +
  '<ellipse cx="9.4" cy="5.4" rx="2.1" ry="2.8" transform="rotate(-6 9.4 5.4)"/>' +
  '<ellipse cx="14.6" cy="5.4" rx="2.1" ry="2.8" transform="rotate(6 14.6 5.4)"/>' +
  '<ellipse cx="18.8" cy="9.6" rx="2.1" ry="2.7" transform="rotate(18 18.8 9.6)"/>' +
  '<path d="M12 10.6c-3.3 0-6.6 3.9-6.6 6.9 0 2.1 1.6 3.1 3.4 3.1 1.3 0 2.1-.6 3.2-.6s1.9.6 3.2.6c1.8 0 3.4-1 3.4-3.1 0-3-3.3-6.9-6.6-6.9z"/>' +
  "</svg>";

const STEP_MS = 170;

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function spawnPaw(layer: HTMLElement, y: number, step: number, down: boolean, last = false) {
  const narrow = window.innerWidth < 640;
  const x = step % 2 === 0 ? (narrow ? 6 : 18) : narrow ? 22 : 38;
  const tilt = (step % 2 === 0 ? -1 : 1) * (8 + Math.random() * 7);
  const paw = document.createElement("span");
  paw.className = last ? "paw-step is-last" : "paw-step";
  paw.innerHTML = PAW_SVG;
  paw.style.left = `${x}px`;
  paw.style.top = `${y}px`;
  paw.style.setProperty("--paw-transform", `rotate(${(down ? 180 : 0) + tilt}deg)`);
  paw.addEventListener("animationend", () => paw.remove(), { once: true });
  layer.appendChild(paw);
}

function arrive(target: HTMLElement, hash: string) {
  if (window.location.hash !== hash) history.pushState(null, "", hash);
  const focusable = target.querySelector<HTMLElement>('[tabindex="-1"]') ?? target;
  focusable.focus({ preventScroll: true });

  const map = target.querySelector<HTMLElement>("#mapa");
  if (map) {
    map.classList.remove("map-arrived");
    void map.offsetWidth; // reinicia a animação se clicar de novo
    map.classList.add("map-arrived");
    map.addEventListener("animationend", () => map.classList.remove("map-arrived"), { once: true });
  }
}

function walkTo(target: HTMLElement, hash: string, layer: HTMLElement): () => void {
  const root = document.documentElement;
  const marginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const maxY = root.scrollHeight - window.innerHeight;
  const startY = window.scrollY;
  const endY = Math.min(
    Math.max(target.getBoundingClientRect().top + startY - marginTop, 0),
    maxY
  );

  // Movimento reduzido: vai direto para a âncora, sem pegadas
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: endY, behavior: "instant" });
    arrive(target, hash);
    return () => {};
  }

  const distance = endY - startY;
  const down = distance >= 0;
  const duration = Math.min(Math.max(Math.abs(distance) * 0.8, 900), 2400);
  const header = document.querySelector("header");
  const topY = (header?.getBoundingClientRect().bottom ?? 0) + 16;
  const bottomY = window.innerHeight - 48;
  const pawY = (p: number) => (down ? topY + (bottomY - topY) * p : bottomY - (bottomY - topY) * p);

  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  let frame = 0;
  let step = 0;
  let stopped = false;
  const start = performance.now();

  const stop = () => {
    if (stopped) return;
    stopped = true;
    cancelAnimationFrame(frame);
    root.style.scrollBehavior = previousBehavior;
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };

  // Se a pessoa rolar por conta própria, a animação cede o controle
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOut(t));

    while (step * STEP_MS <= now - start && step * STEP_MS < duration) {
      spawnPaw(layer, pawY((step * STEP_MS) / duration), step, down);
      step++;
    }

    if (t < 1) {
      frame = requestAnimationFrame(tick);
    } else {
      spawnPaw(layer, pawY(1), step, down, true);
      stop();
      arrive(target, hash);
    }
  };

  frame = requestAnimationFrame(tick);
  return stop;
}

export default function PawTrail() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancel: (() => void) | null = null;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-paw-trail]");
      if (!link || !link.hash || !layerRef.current) return;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      cancel?.();
      cancel = walkTo(target, link.hash, layerRef.current);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancel?.();
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-40 w-16 overflow-hidden"
    />
  );
}
