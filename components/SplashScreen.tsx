"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: Props) {
  const monogramRef  = useRef<HTMLDivElement>(null);
  const nameRef      = useRef<HTMLDivElement>(null);
  const lineRef      = useRef<HTMLDivElement>(null);
  const hintRef      = useRef<HTMLButtonElement>(null);
  const screenRef    = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);

  /* Entrada escalonada */
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    requestAnimationFrame(() => { if (el) el.style.opacity = "1"; });

    const schedule = [
      { ref: monogramRef, delay: 300, styles: { opacity: "1", transform: "scale(1)" } },
      { ref: nameRef,     delay: 700, styles: { opacity: "1" } },
      { ref: lineRef,     delay: 1000, styles: { opacity: "1" } },
      { ref: hintRef,     delay: 1400, styles: { opacity: "1" } },
    ];
    const timers = schedule.map(({ ref, delay, styles }) =>
      setTimeout(() => { if (ref.current) Object.assign(ref.current.style, styles); }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Crossfade: notifica al padre de inmediato y se desvanece en paralelo */
  const handleOpen = () => {
    if (exiting) return;
    setExiting(true);
    const el = screenRef.current;
    if (el) {
      el.style.transition = "opacity 0.75s cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "0";
    }
    onOpen();
  };

  return (
    <div
      ref={screenRef}
      onClick={handleOpen}
      role="button"
      aria-label="Toca para ver la invitación"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        overflow: "visible",
        cursor: "pointer",
        background: "linear-gradient(160deg,#fbf7ff 0%,#f1e0fb 50%,#fbf7ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.6s ease",
        clipPath: "inset(0)",
      }}
    >
      {/* Fondo sólido detrás para evitar bleed-through */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1,
        background: "linear-gradient(160deg,#fbf7ff 0%,#f1e0fb 50%,#fbf7ff 100%)" }} />

      {/* Glow radial central rosado para profundidad */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(228,194,245,0.32) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Particles />

      {/* Monograma — más grande, gradiente rosa fuerte → dorado */}
      <div
        ref={monogramRef}
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 280,
          lineHeight: 1.2,
          padding: "30px 70px 22px",
          background: "linear-gradient(135deg,#8b3fa6 0%,#d19d01 45%,#5a2170 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 4px 32px rgba(139,63,166,0.30))",
          opacity: 0,
          transform: "scale(0.86)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        M
      </div>

      {/* Nombre — más grande, rosa fuerte */}
      <div
        ref={nameRef}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: 19,
          letterSpacing: 11,
          textTransform: "uppercase",
          color: "#5a2170",
          marginTop: 6,
          opacity: 0,
          transition: "opacity 0.7s ease",
          textIndent: 11,
        }}
      >
        Magaly · XV Años
      </div>

      {/* Línea ornamental */}
      <div
        ref={lineRef}
        style={{
          width: 80,
          height: 1,
          margin: "26px auto 22px",
          background: "linear-gradient(90deg,transparent,#8b3fa6,#d19d01,#8b3fa6,transparent)",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Hint button */}
      <button
        ref={hintRef}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 12,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: "#5a2170",
          opacity: 0,
          cursor: "pointer",
          whiteSpace: "nowrap",
          padding: "14px 44px",
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(139,63,166,0.32)",
          borderRadius: 40,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          position: "relative",
          animation: "hintFloat 3.2s ease-in-out infinite",
          transition: "opacity 0.7s ease",
          fontWeight: 600,
          textIndent: 8,
          boxShadow: "0 4px 18px rgba(139,63,166,0.15)",
        }}
      >
        Toca para abrir
      </button>
    </div>
  );
}

/* Partículas — colores que destacan en fondo blush */
const PARTICLES = [
  { left: "8%",  size: 5, dur: 8,  del: 0,   color: "#8b3fa6" },
  { left: "22%", size: 3, dur: 11, del: 1.2, color: "#d19d01" },
  { left: "38%", size: 7, dur: 7,  del: 0.5, color: "#d9a6f0" },
  { left: "53%", size: 4, dur: 9,  del: 2.1, color: "#8b3fa6" },
  { left: "67%", size: 5, dur: 10, del: 0.8, color: "#d19d01" },
  { left: "81%", size: 3, dur: 8,  del: 1.7, color: "#d9a6f0" },
  { left: "15%", size: 6, dur: 12, del: 3,   color: "#8b3fa6" },
  { left: "47%", size: 4, dur: 9,  del: 2.5, color: "#d19d01" },
  { left: "72%", size: 5, dur: 11, del: 0.3, color: "#d9a6f0" },
  { left: "91%", size: 3, dur: 8,  del: 1.5, color: "#8b3fa6" },
  { left: "31%", size: 6, dur: 10, del: 3.5, color: "#d19d01" },
  { left: "60%", size: 4, dur: 7,  del: 2.8, color: "#d9a6f0" },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: "fixed",
          bottom: -10,
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: 0.55,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}
    </>
  );
}
