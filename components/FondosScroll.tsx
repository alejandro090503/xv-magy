"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fondos fijos que se relevan con crossfade al hacer scroll.
 * Mismo mecanismo que xv-mia-psi (capas position:fixed + opacidad
 * cruzada por progreso de scroll), reescrito sin GSAP.
 *
 * - Cada capa es un <img> a pantalla completa con object-fit:cover.
 * - La opacidad se escribe directo sobre el nodo dentro de un rAF,
 *   así no hay re-render de React en cada scroll.
 * - Las imágenes se montan solo cuando el scroll se acerca a su tramo
 *   (lazy manual; `loading="lazy"` no es fiable en capas fixed).
 */

const FONDOS = [
  "01-linternas-lago",
  "02-linternas-lila",
  "03-cielo-lavanda",
  "04-bokeh-estrellas",
  "05-linternas-oro",
] as const;

const MAX_OPACITY = 0.65;
const N = FONDOS.length;

export default function FondosScroll() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  // cuántas capas ya se pueden descargar (siempre la 1ª de entrada)
  const [cargadas, setCargadas] = useState(1);
  const cargadasRef = useRef(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    let ultimoY = -1;
    let ultimoH = -1;

    const pintar = () => {
      const doc = document.documentElement;
      const alcance = doc.scrollHeight - window.innerHeight;
      const p = alcance > 0 ? Math.min(1, Math.max(0, window.scrollY / alcance)) : 0;

      // posición del "cursor" sobre las N capas: 0 → capa 0, N-1 → última
      const pos = p * (N - 1);

      for (let i = 0; i < N; i++) {
        const d = Math.abs(pos - i);
        const op = d >= 1 ? 0 : (1 - d) * MAX_OPACITY;
        const el = refs.current[i];
        if (el) el.style.opacity = op.toFixed(3);
      }

      // precargar la capa siguiente a la que se acerca el usuario
      const necesarias = Math.min(N, Math.ceil(pos) + 2);
      if (necesarias > cargadasRef.current) {
        cargadasRef.current = necesarias;
        setCargadas(necesarias);
      }
    };

    // Bucle rAF con detección de cambio: no dependemos del evento `scroll`
    // (hay entornos y contenedores donde no llega a window) y el coste por
    // frame cuando nada se mueve es una simple comparación.
    const tick = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight;
      if (y !== ultimoY || h !== ultimoH) {
        ultimoY = y;
        ultimoH = h;
        pintar();
      }
      raf = requestAnimationFrame(tick);
    };

    // El bucle rAF se congela si la pestaña pasa a segundo plano, así que
    // los listeners cubren el caso de volver a ella ya scrolleada.
    const onScroll = () => pintar();

    pintar();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {FONDOS.map((nombre, i) => (
        <div
          key={nombre}
          ref={(el) => {
            refs.current[i] = el;
          }}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === 0 ? MAX_OPACITY : 0,
            transition: "opacity 260ms linear",
            willChange: "opacity",
          }}
        >
          {i < cargadas && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`/fondos/${nombre}.jpg`}
              srcSet={`/fondos/${nombre}-m.jpg 800w, /fondos/${nombre}.jpg 1920w`}
              sizes="100vw"
              alt=""
              decoding="async"
              fetchPriority={i === 0 ? "high" : "low"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          )}
        </div>
      ))}

      {/* Velo lila/dorado para unificar y sostener el contraste del texto */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(251,247,255,0.55) 0%, rgba(239,202,255,0.28) 35%, rgba(239,202,255,0.30) 65%, rgba(251,247,255,0.58) 100%)",
        }}
      />
    </div>
  );
}
