"use client";

export default function MesaRegalos() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.25,
        marginBottom: 16,
        padding: "6px 24px 10px",
        background: "linear-gradient(135deg,#5a2170 0%,#8b3fa6 45%,#d19d01 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        overflow: "visible",
        display: "block",
      }}>
        Mesa de Regalos
      </h2>

      {/* Frase intro */}
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 19,
        color: "#5a2170",
        lineHeight: 1.65,
        letterSpacing: 0.4,
        textAlign: "center",
        maxWidth: 360,
        margin: "0 auto 30px",
      }}>
        Tu presencia es nuestro mejor regalo. Si deseas obsequiarme algo, una lluvia de sobres será muy apreciada.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>

        {/* Lluvia de sobres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg,rgba(228,194,245,0.10),rgba(209,157,1,0.14))",
          borderRadius: 26,
          border: "1px solid rgba(139,63,166,0.22)",
          boxShadow: "0 6px 28px rgba(139,63,166,0.08)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: "10%", right: "10%",
            height: 2,
            background: "linear-gradient(90deg,transparent,#8b3fa6 30%,#d19d01 70%,transparent)",
            opacity: 0.50,
          }} />

          {/* Ícono sobre */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(139,63,166,0.20),rgba(209,157,1,0.32))",
            border: "1.5px solid rgba(139,63,166,0.32)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(139,63,166,0.16)",
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5a2170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <polyline points="2,7 12,14 22,7" />
              <path d="M2 19 L9 13" opacity="0.6" />
              <path d="M22 19 L15 13" opacity="0.6" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 38,
            color: "#1f1620",
            marginBottom: 6,
            lineHeight: 1.1,
          }}>
            Lluvia de Sobres
          </h3>

          <div style={{
            width: 42,
            height: 1,
            margin: "10px auto 12px",
            background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.55),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#5a2170",
            lineHeight: 1.55,
            letterSpacing: 0.4,
          }}>
            Un sobre con tu bendición llenará mi corazón de alegría.
          </p>
        </div>

        {/* Obsequio de tu Elección */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg,rgba(209,157,1,0.14),rgba(228,194,245,0.10))",
          borderRadius: 26,
          border: "1px solid rgba(166,124,1,0.28)",
          boxShadow: "0 6px 28px rgba(166,124,1,0.10)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: "10%", right: "10%",
            height: 2,
            background: "linear-gradient(90deg,transparent,#d19d01 30%,#8b3fa6 70%,transparent)",
            opacity: 0.55,
          }} />

          {/* Ícono regalo */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(209,157,1,0.28),rgba(139,63,166,0.20))",
            border: "1.5px solid rgba(166,124,1,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(166,124,1,0.18)",
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5a2170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Caja regalo */}
              <rect x="3" y="9" width="18" height="12" rx="1" />
              {/* Tapa */}
              <rect x="2" y="6" width="20" height="4" rx="1" />
              {/* Listón vertical */}
              <line x1="12" y1="6" x2="12" y2="21" />
              {/* Moño */}
              <path d="M12 6 C 9 3, 7 5, 8 6 L 12 6" />
              <path d="M12 6 C 15 3, 17 5, 16 6 L 12 6" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 38,
            color: "#1f1620",
            marginBottom: 6,
            lineHeight: 1.1,
          }}>
            Obsequio de tu Elección
          </h3>

          <div style={{
            width: 42,
            height: 1,
            margin: "10px auto 12px",
            background: "linear-gradient(90deg,transparent,rgba(166,124,1,0.60),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#5a2170",
            lineHeight: 1.55,
            letterSpacing: 0.4,
          }}>
            Cualquier detalle elegido con cariño será atesorado por siempre.
          </p>
        </div>

      </div>
    </section>
  );
}
