"use client";

const GCAL_URL = (() => {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const title = encodeURIComponent("XV Años de Magy");
  const details = encodeURIComponent(
    "Celebración de XV Años de Magaly · West Valley City, UT."
  );
  const location = encodeURIComponent("West Valley City, UT, USA");
  // 2026-10-03 12:00 MDT → UTC = 2026-10-03T18:00:00Z
  const dates = "20261003T180000Z/20261004T080000Z";
  return `${base}&text=${title}&dates=${dates}&details=${details}&location=${location}`;
})();

export default function CalendarioBtn() {
  return (
    <section style={{ padding: "40px 26px 64px", textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#6d2c86",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        No lo olvides
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 48,
        lineHeight: 1.25,
        marginBottom: 16,
        padding: "4px 20px 8px",
        background: "linear-gradient(135deg,#5a2170 0%,#8b3fa6 45%,#d19d01 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        overflow: "visible",
        display: "inline-block",
      }}>
        Guárdalo
      </h2>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 17,
        color: "#1f1620",
        opacity: 0.70,
        marginBottom: 20,
      }}>
        Agrega el evento a tu calendario
      </p>
      <a
        href={GCAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "linear-gradient(135deg,#8b3fa6,#5a2170)",
          color: "#FFFFFF",
          borderRadius: 30,
          fontFamily: "var(--font-lato), sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 3,
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(90,33,112,0.30)",
          transition: "opacity .3s,transform .3s",
        }}
      >
        Añadir a Google Calendar
      </a>
    </section>
  );
}
