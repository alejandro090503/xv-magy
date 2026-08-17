"use client";
import { useEffect, useState } from "react";

const CORTEJO = [
  "Jedrek Gutierrez",
  "Ulysses Torres",
  "Isac Aburto",
  "Alexis Bermudez",
  "Andy Camacho",
  "Matthew Cisneros",
  "Luis Avila",
];

/** Tiempo visible por nombre (ms) y duración del fade */
const HOLD = 2800;
const FADE = 600;

function CortejoRotativo() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let out: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setVisible(false);
      out = setTimeout(() => {
        setI((p) => (p + 1) % CORTEJO.length);
        setVisible(true);
      }, FADE);
    }, HOLD + FADE);
    return () => { clearInterval(cycle); clearTimeout(out); };
  }, [reduced]);

  const nameStyle: React.CSSProperties = {
    fontFamily: "var(--font-cormorant), serif",
    fontWeight: 600,
    fontSize: 24,
    color: "#1f1620",
    letterSpacing: 0.6,
    lineHeight: 1.6,
  };

  /* Accesibilidad: sin movimiento → lista completa estática */
  if (reduced) {
    return (
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {CORTEJO.map((n) => (
          <li key={n} style={{ ...nameStyle, fontSize: 21, lineHeight: 2 }}>{n}</li>
        ))}
      </ul>
    );
  }

  return (
    <div aria-live="off">
      {/* Lista completa para lectores de pantalla y buscadores */}
      <span style={{
        position: "absolute", width: 1, height: 1, overflow: "hidden",
        clip: "rect(0 0 0 0)", clipPath: "inset(50%)", whiteSpace: "nowrap",
      }}>
        {CORTEJO.join(", ")}
      </span>

      <div
        aria-hidden="true"
        style={{
          minHeight: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            ...nameStyle,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: `opacity ${FADE}ms ease, transform ${FADE}ms ease`,
          }}
        >
          {CORTEJO[i]}
        </span>
      </div>

      {/* Indicador de posición */}
      <div aria-hidden="true" style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 14 }}>
        {CORTEJO.map((_, k) => (
          <span key={k} style={{
            width: 5, height: 5, borderRadius: "50%",
            background: k === i ? "#d19d01" : "rgba(139,63,166,0.25)",
            transition: "background .4s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

export default function Familia() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#5a2170",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.95,
      }}>
        Acompañada de
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.25,
        marginBottom: 30,
        padding: "6px 24px 10px",
        background: "linear-gradient(135deg,#5a2170 0%,#8b3fa6 45%,#d19d01 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        overflow: "visible",
        display: "block",
      }}>
        Mi Familia
      </h2>

      {/* Cortejo de Honor */}
      <div style={{
        width: "100%",
        textAlign: "center",
        padding: "32px 26px",
        background: "linear-gradient(145deg,rgba(255,255,255,0.82),rgba(251,247,255,0.95))",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(139,63,166,0.13)",
        boxShadow: "0 6px 30px rgba(90,33,112,0.07),inset 0 1px 0 rgba(255,255,255,0.88)",
        borderRadius: 24,
        position: "relative",
      }}>
        <div style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          margin: "0 auto 14px",
          background: "linear-gradient(135deg,rgba(217,166,240,0.22),rgba(139,63,166,0.22))",
          border: "1.5px solid rgba(217,166,240,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(217,166,240,0.20)",
        }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#d9a6f0" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L13.7 8.4 L20 9 L15 13.5 L16.5 20 L12 16.5 L7.5 20 L9 13.5 L4 9 L10.3 8.4 Z"/>
          </svg>
        </div>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#5a2170",
          marginBottom: 18,
          opacity: 1,
        }}>
          Cortejo de Honor
        </p>

        <CortejoRotativo />
      </div>
    </section>
  );
}
