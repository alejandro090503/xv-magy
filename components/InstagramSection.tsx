"use client";

export default function InstagramSection() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#5a2170",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.9,
      }}>
        Comparte el momento
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 30,
        background: "linear-gradient(135deg,#5a2170 0%,#8b3fa6 45%,#d19d01 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        Álbum Compartido
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.85),rgba(255,245,249,0.95))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 26,
        border: "1px solid rgba(139,63,166,0.16)",
        boxShadow: "0 8px 36px rgba(90,33,112,0.09)",
        textAlign: "center",
        overflow: "hidden",
      }}>
        {/* Barra superior */}
        <div style={{
          height: 2,
          background: "linear-gradient(90deg,transparent,#8b3fa6 30%,#d19d01 70%,transparent)",
          opacity: 0.55,
        }} />

        <div style={{ padding: "34px 26px 32px" }}>
          {/* Mensaje principal */}
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#5a2170",
            lineHeight: 1.6,
            letterSpacing: 0.4,
            marginBottom: 24,
            maxWidth: 320,
            margin: "0 auto 24px",
          }}>
            Escanea el código y comparte los mejores momentos de la fiesta en el álbum.
          </p>

          {/* Caja placeholder — PENDIENTE: generar QR real cuando se tenga la URL del álbum de Magy */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            margin: "0 auto 18px",
            padding: 14,
            background: "#fbf7ff",
            border: "1px dashed rgba(166,124,1,0.55)",
            borderRadius: 18,
            boxShadow: "0 4px 22px rgba(166,124,1,0.20), inset 0 0 0 4px rgba(255,255,255,0.7)",
            position: "relative",
          }}>
            {/* Esquinas decorativas doradas */}
            {(["tl","tr","bl","br"] as const).map((corner) => {
              const pos: React.CSSProperties =
                corner === "tl" ? { top: -1, left: -1 } :
                corner === "tr" ? { top: -1, right: -1, transform: "rotate(90deg)", transformOrigin: "top right" } :
                corner === "br" ? { bottom: -1, right: -1, transform: "rotate(180deg)", transformOrigin: "bottom right" } :
                                  { bottom: -1, left: -1, transform: "rotate(270deg)", transformOrigin: "bottom left" };
              return (
                <div key={corner} style={{ position: "absolute", ...pos }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M2 2 L2 11" stroke="#a67c01" strokeWidth="1.3" strokeLinecap="round" opacity="0.9"/>
                    <path d="M2 2 L11 2" stroke="#a67c01" strokeWidth="1.3" strokeLinecap="round" opacity="0.9"/>
                    <circle cx="2" cy="2" r="1.8" fill="#a67c01" opacity="1"/>
                  </svg>
                </div>
              );
            })}
            <span style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: 17,
              color: "#5a2170",
              opacity: 0.75,
              textAlign: "center",
            }}>
              Próximamente
            </span>
          </div>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 15,
            color: "rgba(31,22,32,0.65)",
            letterSpacing: 0.4,
            lineHeight: 1.55,
            marginBottom: 0,
          }}>
            Cada foto que captures hará este día aún más especial.
          </p>

          <div style={{
            width: 40,
            height: 1,
            margin: "20px auto 14px",
            background: "linear-gradient(90deg,transparent,rgba(139,63,166,0.45),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 13,
            color: "rgba(31,22,32,0.50)",
            letterSpacing: 1,
            fontStyle: "italic",
          }}>
            Con mucho cariño por{" "}
            <a
              href="https://www.instagram.com/elysium.invitaciones"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#8b3fa6", textDecoration: "none", fontWeight: 600 }}
            >
              @elysium.invitaciones
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
