"use client";

function LocationCard({
  title,
  city,
  time,
  mapsUrl,
}: {
  title: string;
  city: string;
  time: string;
  mapsUrl: string;
}) {
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(158deg,rgba(255,255,255,0.92),rgba(251,247,255,0.97))",
      backdropFilter: "blur(22px)",
      WebkitBackdropFilter: "blur(22px)",
      borderRadius: 28,
      border: "1px solid rgba(139,63,166,0.16)",
      boxShadow: "0 14px 56px rgba(90,33,112,0.10),inset 0 1px 0 rgba(255,255,255,0.96)",
      marginBottom: 22,
    }}>
      {/* Barra lateral izquierda */}
      <div style={{
        position: "absolute",
        left: 0,
        top: "12%",
        bottom: "12%",
        width: 2.5,
        background: "linear-gradient(to bottom,transparent,#d9a6f0 25%,#8b3fa6 55%,#e4c2f5 80%,transparent)",
        opacity: 0.52,
      }} />

      <div style={{ padding: "34px 28px 0", textAlign: "center" }}>
        {/* Ícono PIN */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          margin: "0 auto 16px",
          background: "linear-gradient(135deg,rgba(139,63,166,0.14),rgba(139,63,166,0.26))",
          border: "1.5px solid rgba(139,63,166,0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(90,33,112,0.13)",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#8b3fa6">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>

        <div style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: "clamp(30px, 8.2vw, 38px)",
          background: "linear-gradient(135deg,#1f1620 20%,#8b3fa6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1.15,
          marginBottom: 10,
        }}>
          {title}
        </div>


        <div style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 15,
          color: "rgba(31,22,32,.86)",
          letterSpacing: 0.4,
          lineHeight: 1.75,
          marginBottom: 8,
        }}>
          {city}
        </div>

        <div style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#5a2170",
          letterSpacing: 3,
          marginBottom: 4,
        }}>
          {time}
        </div>

        <div style={{
          width: 48,
          height: 1,
          margin: "18px auto 22px",
          background: "linear-gradient(90deg,transparent,#8b3fa6,transparent)",
          opacity: 0.32,
        }} />
      </div>

      <div style={{ textAlign: "center", padding: "0 22px 30px" }}>
        <a
          href={mapsUrl}
          className="gold-btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 8,
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
            transition: "opacity .3s,transform .3s",
            boxShadow: "0 4px 16px rgba(90,33,112,0.30)",
          }}
        >
          Cómo Llegar
        </a>
      </div>
    </div>
  );
}

export default function Ubicacion() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#6d2c86",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Te esperamos en
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
        Ubicación
      </h2>

      <LocationCard
        title="St. Martin de Porres Catholic Church"
        city="West Valley City, Utah"
        time="12:00 PM"
        mapsUrl="https://maps.app.goo.gl/Basx8tHwjSJSwvTm9?g_st=ic"
      />

      <LocationCard
        title="Del Rey Event Center"
        city="West Valley City, Utah"
        time="5:00 PM"
        mapsUrl="https://maps.app.goo.gl/FGaVRKYWj7LACq8c9?g_st=ic"
      />
    </section>
  );
}
