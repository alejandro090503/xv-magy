"use client";

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

      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "stretch" }}>

        {/* Padres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "30px 26px",
          background: "linear-gradient(145deg,rgba(255,255,255,0.82),rgba(255,245,249,0.95))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(139,63,166,0.13)",
          boxShadow: "0 6px 30px rgba(90,33,112,0.07),inset 0 1px 0 rgba(255,255,255,0.88)",
          borderRadius: "24px 24px 0 0",
        }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            margin: "0 auto 14px",
            background: "linear-gradient(135deg,rgba(139,63,166,0.14),rgba(228,194,245,0.26))",
            border: "1.5px solid rgba(139,63,166,0.32)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(90,33,112,0.11)",
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#8b3fa6" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
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
            marginBottom: 14,
            opacity: 1,
          }}>
            Con la bendición de
          </p>
          {/* PENDIENTE: nombres de padres/padrinos aún no confirmados por el cliente */}
          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 21,
            color: "#1f1620",
            lineHeight: 1.85,
          }}>
            mis padres
            <span style={{ display: "block", fontSize: 15, opacity: 0.6 }}>— por confirmar —</span>
          </div>
        </div>

        {/* Divisor */}
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 46,
          position: "relative",
          background: "rgba(255,255,255,0.55)",
          borderLeft: "1px solid rgba(139,63,166,0.13)",
          borderRight: "1px solid rgba(139,63,166,0.13)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.18),transparent)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.18),transparent)" }} />
          <svg viewBox="0 0 100 26" fill="none" style={{ width: 100, height: 26 }}>
            <line x1="0" y1="13" x2="32" y2="13" stroke="#8b3fa6" strokeWidth="0.7" opacity="0.32"/>
            <path d="M32 13 Q38 5 44 13" stroke="#8b3fa6" strokeWidth="0.8" fill="none" opacity="0.44"/>
            <path d="M50 4 L57 13 L50 22 L43 13 Z" fill="rgba(139,63,166,0.10)" stroke="#8b3fa6" strokeWidth="0.9" opacity="0.48"/>
            <circle cx="50" cy="13" r="3" fill="rgba(209,157,1,0.35)" stroke="#d19d01" strokeWidth="0.6" opacity="0.70"/>
            <path d="M56 13 Q62 5 68 13" stroke="#8b3fa6" strokeWidth="0.8" fill="none" opacity="0.44"/>
            <line x1="68" y1="13" x2="100" y2="13" stroke="#8b3fa6" strokeWidth="0.7" opacity="0.32"/>
          </svg>
        </div>

        {/* Divisor 2 */}
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 46,
          position: "relative",
          background: "rgba(255,255,255,0.55)",
          borderLeft: "1px solid rgba(139,63,166,0.13)",
          borderRight: "1px solid rgba(139,63,166,0.13)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.18),transparent)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.18),transparent)" }} />
          <svg viewBox="0 0 100 26" fill="none" style={{ width: 100, height: 26 }}>
            <line x1="0" y1="13" x2="32" y2="13" stroke="#8b3fa6" strokeWidth="0.7" opacity="0.32"/>
            <path d="M32 13 Q38 5 44 13" stroke="#8b3fa6" strokeWidth="0.8" fill="none" opacity="0.44"/>
            <path d="M50 4 L57 13 L50 22 L43 13 Z" fill="rgba(139,63,166,0.10)" stroke="#8b3fa6" strokeWidth="0.9" opacity="0.48"/>
            <circle cx="50" cy="13" r="3" fill="rgba(209,157,1,0.35)" stroke="#d19d01" strokeWidth="0.6" opacity="0.70"/>
            <path d="M56 13 Q62 5 68 13" stroke="#8b3fa6" strokeWidth="0.8" fill="none" opacity="0.44"/>
            <line x1="68" y1="13" x2="100" y2="13" stroke="#8b3fa6" strokeWidth="0.7" opacity="0.32"/>
          </svg>
        </div>

        {/* Cortejo de Honor */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "30px 26px",
          background: "linear-gradient(145deg,rgba(255,255,255,0.82),rgba(251,247,255,0.95))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(139,63,166,0.13)",
          borderTop: "none",
          boxShadow: "0 6px 30px rgba(90,33,112,0.07),inset 0 1px 0 rgba(255,255,255,0.88)",
          borderRadius: "0 0 24px 24px",
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
              {/* Estrella decorativa con destellos */}
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
            marginBottom: 16,
            opacity: 1,
          }}>
            Cortejo de Honor
          </p>
          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            fontSize: 19,
            color: "#1f1620",
            lineHeight: 2.1,
          }}>
            Jedrek Gutierrez<br />
            Ulysses Torres<br />
            Isac Aburto<br />
            Alexis Bermudez<br />
            Andy Camacho<br />
            Matthew Cisneros<br />
            Luis Avila
          </div>
        </div>

      </div>
    </section>
  );
}
