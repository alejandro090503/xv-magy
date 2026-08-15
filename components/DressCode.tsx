"use client";

export default function DressCode() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(155deg,#fbf7ff 0%,#f1e0fb 55%,#fbf7ff 100%)",
        borderRadius: 28,
        padding: "36px 24px 32px",
        border: "1px solid rgba(166,124,1,0.30)",
        boxShadow: "0 18px 60px rgba(139,63,166,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}>
        {/* Luces de fondo suaves */}
        <div style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at 18% 18%,rgba(139,63,166,0.10) 0%,transparent 60%), radial-gradient(ellipse at 82% 82%,rgba(209,157,1,0.14) 0%,transparent 60%)",
        }} />
        {/* Línea superior dorada */}
        <div style={{
          position: "absolute",
          top: -1,
          left: "18%",
          right: "18%",
          height: 2,
          background: "linear-gradient(90deg,transparent,#8b3fa6 30%,#d19d01 70%,transparent)",
          opacity: 0.75,
        }} />

        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#5a2170",
          textAlign: "center",
          marginBottom: 4,
          position: "relative",
          opacity: 0.85,
        }}>
          Etiqueta
        </p>
        <h2 style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 50,
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: 6,
          position: "relative",
          background: "linear-gradient(135deg,#5a2170 0%,#8b3fa6 45%,#d19d01 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 14px rgba(139,63,166,0.25))",
        }}>
          Dress Code
        </h2>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 17,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#5a2170",
          textAlign: "center",
          marginBottom: 22,
          position: "relative",
          opacity: 0.92,
        }}>
          Formal — detalles por confirmar
        </p>

        {/* Barra de paleta */}
        <div style={{
          display: "flex",
          height: 6,
          borderRadius: 3,
          overflow: "hidden",
          marginBottom: 26,
          boxShadow: "0 2px 10px rgba(90,33,112,0.20)",
          position: "relative",
        }}>
          {["#e4c2f5", "#d19d01", "#d9a6f0", "#ffffff"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>

        {/* Nota de colores a evitar */}
        <div style={{
          position: "relative",
          textAlign: "center",
          padding: "16px 18px",
          border: "1px solid rgba(139,63,166,0.30)",
          borderRadius: 14,
          background: "rgba(255,255,255,0.55)",
          marginTop: 8,
        }}>
          <div style={{
            position: "absolute",
            top: -11,
            left: "50%",
            transform: "translateX(-50%)",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#fbf7ff",
            border: "1.5px solid rgba(139,63,166,0.45)",
            fontSize: 11,
            lineHeight: "20px",
            textAlign: "center",
            color: "#5a2170",
            fontWeight: 700,
          }}>
            ✕
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 17,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#5a2170",
            letterSpacing: 0.5,
            lineHeight: 1.55,
          }}>
            Por favor evitar los colores lila/morado y dorado/mostaza — son los colores del evento
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 10 }}>
            <div style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#efcaff",
              border: "2px solid rgba(255,255,255,0.95)",
              boxShadow: "0 2px 8px rgba(139,63,166,0.25)",
            }} />
            <div style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#d19d01",
              border: "2px solid rgba(255,255,255,0.95)",
              boxShadow: "0 2px 8px rgba(139,63,166,0.25)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
