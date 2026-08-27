"use client";
import { useT } from "@/lib/i18n";

const gcalUrl = (title: string, details: string) => {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const location = encodeURIComponent("Del Rey Event Center, 2620 Decker Lake Blvd, West Valley City, UT 84119");
  // 2026-10-03 12:00 MDT → UTC = 2026-10-03T18:00:00Z
  const dates = "20261003T180000Z/20261004T080000Z";
  return `${base}&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${location}`;
};

export default function CalendarioBtn() {
  const t = useT();
  const GCAL_URL = gcalUrl(t("calEventTitle"), t("calEventDetails"));
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
        {t("calKicker")}
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
        {t("calTitle")}
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
        {t("calSub")}
      </p>
      <a
        href={GCAL_URL}
        className="gold-btn"
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
        {t("calButton")}
      </a>
    </section>
  );
}
