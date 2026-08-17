"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "50px 20px", textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 200,
        lineHeight: 1.4,
        background: "linear-gradient(135deg,#8b3fa6 0%,#d19d01 50%,#5a2170 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        padding: "28px 60px 28px 48px",
        filter: "drop-shadow(0 4px 22px rgba(139,63,166,0.30))",
        overflow: "visible",
        display: "inline-block",
      }}>
        M
      </div>
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#6d2c86",
        marginTop: 6,
      }}>
        III · Octubre · MMXXVI
      </div>
      <div style={{
        width: 48,
        height: 1,
        margin: "18px auto 14px",
        background: "linear-gradient(90deg,transparent,#8b3fa6,transparent)",
        opacity: 0.35,
      }} />
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        color: "rgba(31,22,32,0.68)",
        letterSpacing: 1,
      }}>
        Con mucho cariño por{" "}
        <a
          href="https://www.instagram.com/elysium.invitaciones"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6d2c86", textDecoration: "none" }}
        >
          @elysium.invitaciones
        </a>
      </p>
    </footer>
  );
}
