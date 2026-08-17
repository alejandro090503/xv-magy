"use client";
import { useState, useRef } from "react";
import SplashScreen from "./SplashScreen";
import Hero from "./Hero";
import Ornament from "./Ornament";
import CountdownTimer from "./CountdownTimer";
import Ubicacion from "./Ubicacion";
import CalendarioBtn from "./CalendarioBtn";
import Itinerario from "./Itinerario";
import DressCode from "./DressCode";
import Familia from "./Familia";
import MesaRegalos from "./MesaRegalos";
import InstagramSection from "./InstagramSection";
import RSVPWrapper from "./RSVPWrapper";
import Footer from "./Footer";
import MusicFab, { type MusicFabHandle } from "./MusicFab";
import ScrollReveal from "./ScrollReveal";
import FondosScroll from "./FondosScroll";

export default function InvitacionClient() {
  const [contentVisible, setContentVisible] = useState(false);
  const [splashMounted, setSplashMounted] = useState(true);
  const musicRef = useRef<MusicFabHandle>(null);

  const handleOpen = () => {
    // Iniciar música AQUÍ — mismo call stack que el gesto del usuario → autoplay permitido
    musicRef.current?.play();
    // Fade-in del contenido en paralelo con el fade-out del splash
    setContentVisible(true);
    // Desmontar el splash tras completarse su fade (0.75s + margen)
    setTimeout(() => {
      setSplashMounted(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 820);
  };

  return (
    <>
      {/* FONDOS TEMÁTICOS QUE CAMBIAN AL SCROLLEAR */}
      <FondosScroll />

      {/* SPLASH */}
      {splashMounted && <SplashScreen onOpen={handleOpen} />}

      {/* CONTENIDO PRINCIPAL */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.85s ease",
          maxWidth: 430,
          margin: "0 auto",
          position: "relative",
          overflowX: "clip",
          zIndex: 1,
          backgroundColor: "rgba(251,247,255,0.68)",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
          backgroundImage: `
            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><g transform='translate(100,100)'><ellipse rx='16' ry='28' fill='%238b3fa6' fill-opacity='.038' transform='rotate(0) translate(0,-12)'/><ellipse rx='16' ry='28' fill='%23e4c2f5' fill-opacity='.032' transform='rotate(72) translate(0,-12)'/><ellipse rx='16' ry='28' fill='%238b3fa6' fill-opacity='.032' transform='rotate(144) translate(0,-12)'/><ellipse rx='16' ry='28' fill='%23e4c2f5' fill-opacity='.032' transform='rotate(216) translate(0,-12)'/><ellipse rx='16' ry='28' fill='%238b3fa6' fill-opacity='.032' transform='rotate(288) translate(0,-12)'/><circle r='8' fill='%23d19d01' fill-opacity='.060'/></g></svg>"),
            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><g transform='translate(50,50)'><ellipse rx='9' ry='17' fill='%23e4c2f5' fill-opacity='.030' transform='rotate(36) translate(0,-7)'/><ellipse rx='9' ry='17' fill='%238b3fa6' fill-opacity='.025' transform='rotate(108) translate(0,-7)'/><ellipse rx='9' ry='17' fill='%23e4c2f5' fill-opacity='.025' transform='rotate(180) translate(0,-7)'/><ellipse rx='9' ry='17' fill='%238b3fa6' fill-opacity='.025' transform='rotate(252) translate(0,-7)'/><ellipse rx='9' ry='17' fill='%23e4c2f5' fill-opacity='.025' transform='rotate(324) translate(0,-7)'/><circle r='4.5' fill='%23d19d01' fill-opacity='.048'/></g></svg>")
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px, 100px 100px",
          backgroundPosition: "0 0, 50px 50px",
        }}
      >
        {/* HERO — con su asset de fondo propio */}
        <Hero />

        {/* FRASE — fuera del hero; a partir de aquí mandan los fondos por scroll */}
        <ScrollReveal>
          <p style={{
            maxWidth: 360,
            margin: "0 auto",
            padding: "36px 28px 8px",
            textAlign: "center",
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.72,
            letterSpacing: 0.5,
            color: "#5a2170",
          }}>
            Hoy comienza una nueva etapa llena de sueños, ilusiones y momentos que guardaré por siempre en mi corazón. Quiero compartir contigo la emoción, la magia y la alegría de esta noche tan especial.
          </p>
        </ScrollReveal>

        {/* FAMILIA — justo después del header */}
        <ScrollReveal>
          <Familia />
        </ScrollReveal>

        {/* ORNAMENTO */}
        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* FECHA */}
        <ScrollReveal>
          <div style={{ padding: "32px 26px 10px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
              <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to right,transparent,#8b3fa6)", opacity: 0.5 }} />
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: 26,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: "#5a2170",
                textIndent: 8,
              }}>
                3 · Octubre · 2026
              </div>
              <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to left,transparent,#8b3fa6)", opacity: 0.5 }} />
            </div>
          </div>
        </ScrollReveal>

        {/* COUNTDOWN */}
        <ScrollReveal>
          <CountdownTimer />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* UBICACIÓN */}
        <ScrollReveal>
          <Ubicacion />
        </ScrollReveal>

        {/* CALENDARIO */}
        <ScrollReveal>
          <CalendarioBtn />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* ITINERARIO */}
        <ScrollReveal>
          <Itinerario />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* DRESS CODE */}
        <ScrollReveal>
          <DressCode />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* AVISO SOLO ADULTOS */}
        <ScrollReveal>
          <section style={{ padding: "0 26px 40px", textAlign: "center" }}>
            <div style={{
              maxWidth: 380,
              margin: "0 auto",
              padding: "22px 24px",
              borderRadius: 20,
              border: "1px solid rgba(139,63,166,0.22)",
              background: "linear-gradient(145deg,rgba(255,255,255,0.85),rgba(251,247,255,0.95))",
              boxShadow: "0 6px 24px rgba(90,33,112,0.08)",
            }}>
              <p style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 17,
                color: "#5a2170",
                letterSpacing: 0.4,
                lineHeight: 1.6,
                margin: 0,
              }}>
                Con cariño, este evento está pensado para nuestros invitados adultos.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* MESA DE REGALOS */}
        <ScrollReveal>
          <MesaRegalos />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* INSTAGRAM / ÁLBUM */}
        <ScrollReveal>
          <InstagramSection />
        </ScrollReveal>

        <ScrollReveal>
          <Ornament />
        </ScrollReveal>

        {/* RSVP */}
        <RSVPWrapper />

        {/* FOOTER */}
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>

      {/* FAB MÚSICA */}
      <MusicFab ref={musicRef} />
    </>
  );
}
