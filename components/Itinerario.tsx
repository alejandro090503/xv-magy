"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useT, type TKey } from "@/lib/i18n";

const ITEMS: { time: string; key: TKey; gem: number }[] = [
  { time: "12:00 pm", key: "itMass", gem: 0 },
  { time: "5:00 pm", key: "itDinner", gem: 1 },
  { time: "7:00 pm", key: "itWaltz", gem: 2 },
  { time: "8:00 pm", key: "itDance", gem: 0 },
  { time: "1:00 am", key: "itEnd", gem: 1 },
];

const GEM_COLORS = [
  { bg: "linear-gradient(135deg,#e4c2f5 30%,#5a2170)", shadow: "0 0 0 4px rgba(139,63,166,0.10),0 0 18px rgba(139,63,166,0.40)" },
  { bg: "linear-gradient(135deg,#d19d01 30%,#b8930a)", shadow: "0 0 0 4px rgba(209,157,1,0.12),0 0 18px rgba(209,157,1,0.42)" },
  { bg: "linear-gradient(135deg,#d9a6f0 30%,#8b3fa6)", shadow: "0 0 0 4px rgba(217,166,240,0.12),0 0 18px rgba(217,166,240,0.42)" },
];

/* Orbe que sigue el scroll a través de la sección */
function GlowOrb({ trackRef }: { trackRef: React.RefObject<HTMLDivElement | null> }) {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      const orb = orbRef.current;
      if (!track || !orb) return;

      const rect = track.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progreso: 0 cuando la sección entra por abajo, 1 cuando sale por arriba
      const start = viewH * 0.58;
      const end = viewH * 0.42;
      const rawProgress = (start - rect.top) / (rect.height + start - end);
      const progress = Math.max(0, Math.min(1, rawProgress));
      const maxTop = track.offsetHeight - 55;
      orb.style.top = `${progress * maxTop}px`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [trackRef]);

  return (
    <div
      ref={orbRef}
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: 0,
        width: 5,
        height: 110,
        background: "linear-gradient(to bottom,transparent,rgba(217,166,240,0.65) 20%,rgba(139,63,166,0.90) 50%,rgba(228,194,245,0.65) 80%,transparent)",
        filter: "blur(3px)",
        borderRadius: 6,
        zIndex: 1,
        pointerEvents: "none",
        transition: "top 0.05s linear",
      }}
    />
  );
}

function ItinerarioItem({
  time,
  event,
  gemIdx,
  delay,
}: {
  time: string;
  event: string;
  gemIdx: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const gem = GEM_COLORS[gemIdx];

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "30px 16px 4px",
        width: "100%",
      }}
    >
      {/* Gema — pop spring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 420, damping: 14, delay }}
        style={{
          width: 9,
          height: 9,
          background: gem.bg,
          transform: "rotate(45deg)",
          borderRadius: 2,
          boxShadow: gem.shadow,
          marginBottom: 18,
          flexShrink: 0,
        }}
      />

      {/* Hora */}
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: delay + 0.08 }}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: 8,
          color: "#1f1620",
          lineHeight: 1,
          marginBottom: 6,
          textIndent: 8,
        }}
      >
        {time}
      </motion.div>

      {/* Evento */}
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: delay + 0.16 }}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 17,
          color: "rgba(31,22,32,0.86)",
          letterSpacing: 2,
          lineHeight: 1.5,
        }}
      >
        {event}
      </motion.div>
    </div>
  );
}

export default function Itinerario() {
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ padding: "64px 24px", overflow: "visible" }}>
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
        {t("itinTitle")}
      </h2>

      <div
        ref={trackRef}
        style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        {/* Línea central estática */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom,transparent 0%,rgba(217,166,240,0.30) 10%,rgba(139,63,166,0.22) 45%,rgba(228,194,245,0.28) 80%,transparent 100%)",
        }} />

        {/* Orbe animado con scroll scrub */}
        <GlowOrb trackRef={trackRef} />

        {ITEMS.map((item, i) => (
          <ItinerarioItem
            key={i}
            time={item.time}
            event={t(item.key)}
            gemIdx={item.gem}
            delay={0}
          />
        ))}
      </div>
    </section>
  );
}
