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
        boxShadow: "0 18px 60px rgba(90,33,112,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
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
        <h2 className="gold-shine" style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 50,
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: 6,
          position: "relative",
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
          Formal
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
          {["#5a2170", "#d19d01", "#8b3fa6", "#efcaff"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>

        {/* Nota de colores reservados */}
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: 1.6,
          color: "#5a2170",
          textAlign: "center",
          margin: "0 auto 4px",
          maxWidth: 320,
          position: "relative",
        }}>
          Te pedimos con cariño reservar el lila <span style={{ whiteSpace: "nowrap" }}>(#e292fe)</span> y el dorado <span style={{ whiteSpace: "nowrap" }}>(#d19d01)</span> para la quinceañera.
        </p>

        {/* Caballeros / Damas */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 30 }}>
          <div style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/caballero.png" alt="Caballero, traje formal" width={74} height={150} style={{ display: "block", margin: "0 auto", height: 150, width: 74 }} />
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#5a2170",
              marginTop: 8,
            }}>Caballeros</div>
          </div>
          <div style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/dama.png" alt="Dama, vestido formal" width={62} height={150} style={{ display: "block", margin: "0 auto", height: 150, width: 62 }} />
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#5a2170",
              marginTop: 8,
            }}>Damas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
