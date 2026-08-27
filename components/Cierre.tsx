"use client";

import { useT } from "@/lib/i18n";

/**
 * Cierre de la invitacion: foto de fondo a sangrado, velo oscuro para
 * sostener el texto en blanco, y el nombre en dorado resplandeciente.
 * Replica el formato pedido por la clienta (foto + texto + firma).
 *
 * El velo es un degradado mas denso arriba (donde cae el parrafo) y mas
 * ligero abajo, para que la foto se siga leyendo sin comerse el texto.
 */
export default function Cierre() {
  const t = useT();

  return (
    <section
      aria-label={t("closingName")}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "72px 26px 84px",
        isolation: "isolate",
      }}
    >
      {/* Foto de fondo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/imagenes/magy/magy-5.jpg"
        alt={t("closingAlt")}
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 62%",
          zIndex: -2,
        }}
      />

      {/* Velo: denso arriba (texto), mas abierto abajo (foto respira) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(180deg, rgba(38,18,48,0.88) 0%, rgba(38,18,48,0.80) 40%, rgba(46,24,58,0.74) 60%, rgba(46,24,58,0.84) 82%, rgba(46,24,58,0.86) 100%)",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: 19,
          lineHeight: 1.62,
          fontWeight: 500,
          color: "#ffffff",
          textAlign: "center",
          margin: "0 auto 26px",
          maxWidth: 340,
          textShadow: "0 1px 10px rgba(20,8,28,0.55)",
        }}
      >
        {t("closingText")}
      </p>

      <p
        className="gold-shine gold-shine-cierre"
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: "clamp(52px, 17vw, 76px)",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {t("closingName")}
      </p>
    </section>
  );
}
