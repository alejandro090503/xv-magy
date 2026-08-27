"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useLang, type TKey } from "@/lib/i18n";

const PANEL_API = "https://panel-invitados.vercel.app/api/confirmar";
const RSVP_URL  = "xv-magy";
/* PENDIENTE: fecha límite de RSVP no confirmada por el cliente — se congela hasta el día del evento */
const RSVP_DEADLINE = new Date(2026, 9, 3, 11, 0, 0, 0);

type Choice = "yes" | "no" | "";

export default function RSVPSection() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const [para, setPara]       = useState<string | null>(null);
  const [names, setNames]     = useState<string[]>([""]);
  const [choice, setChoice]   = useState<Choice>("yes");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; color: string } | null>(null);
  const [frozen, setFrozen]   = useState(false);
  const [btnKey, setBtnKey] = useState<TKey>("rsvpSubmit");

  /* Parse query params + check deadline */
  useEffect(() => {
    const paraQ = searchParams.get("para");

    setPara(paraQ);
    setFrozen(Date.now() > RSVP_DEADLINE.getTime());
  }, [searchParams]);

  /* Pre-fill desde el panel si hay ?para= */
  const preFill = useCallback(async () => {
    if (!para) return;
    try {
      const url = `${PANEL_API}?nombre=${encodeURIComponent(para)}&url_boda=${encodeURIComponent(RSVP_URL)}`;
      const r = await fetch(url);
      const d = await r.json();
      if (!d?.ok || !d.invitado) return;
      const inv = d.invitado;
      if (inv.estado === "confirmado") {
        setChoice("yes");
        const nm: string[] = Array.isArray(inv.nombres_confirmados) ? inv.nombres_confirmados : [];
        if (nm.length) setNames(nm);
      } else if (inv.estado === "declino") {
        setChoice("no");
      }
    } catch { /* silencioso */ }
  }, [para]);

  useEffect(() => { preFill(); }, [preFill]);

  const MAX_NOMBRES = 20;

  const addName = () =>
    setNames(prev => (prev.length >= MAX_NOMBRES ? prev : [...prev, ""]));

  const removeName = (i: number) =>
    setNames(prev => (prev.length <= 1 ? prev : prev.filter((_, k) => k !== i)));

  const handleName = (i: number, val: string) => {
    setNames(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  function setFb(msg: string, color: string) {
    setFeedback({ msg, color });
  }

  async function postConfirm(estado: "confirmado" | "declino", nombresArr: string[]) {
    setLoading(true);
    setBtnKey("rsvpSending");
    setFeedback(null);
    try {
      const r = await fetch(PANEL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre:              para || "Invitado",
          estado,
          pases_confirmados:   estado === "confirmado" ? nombresArr.length : 0,
          nombres_confirmados: estado === "confirmado" ? nombresArr : [],
          url_boda:            RSVP_URL,
        }),
      });
      const d = await r.json();
      if (d?.ok) {
        setBtnKey(estado === "confirmado" ? "rsvpConfirmed" : "rsvpSent");
        setFb(t(estado === "confirmado" ? "rsvpThanksYes" : "rsvpThanksNo"), "#5a2170");
        setTimeout(() => setBtnKey("rsvpUpdate"), 2400);
      } else {
        setBtnKey("rsvpSubmit");
        setFb(t("rsvpErrSend"), "#b91c1c");
      }
    } catch {
      setBtnKey("rsvpSubmit");
      setFb(t("rsvpErrNet"), "#b91c1c");
    } finally {
      setLoading(false);
    }
  }

  const handleConfirm = () => {
    if (frozen) { setFb(t("rsvpClosedShort"), "#b91c1c"); return; }
    if (!choice) { setFb(t("rsvpPickOne"), "#b91c1c"); return; }
    if (choice === "no") { postConfirm("declino", []); return; }
    const filled = names.map(n => n.trim()).filter(n => n);
    if (filled.length === 0) {
      setFb(t("rsvpAtLeastOne"), "#b91c1c");
      return;
    }
    postConfirm("confirmado", filled);
  };

  /* === Estilos compartidos === */
  const toggleBtnStyle = (active: boolean, isYes: boolean): React.CSSProperties => ({
    flex: 1,
    padding: "12px 8px",
    minHeight: 44,
    borderRadius: 12,
    border: active
      ? `1.5px solid ${isYes ? "#8b3fa6" : "#5a2170"}`
      : "1.5px solid rgba(139,63,166,0.20)",
    background: active
      ? (isYes ? "linear-gradient(135deg,rgba(139,63,166,0.14),rgba(228,194,245,0.18))"
               : "rgba(90,33,112,0.10)")
      : "rgba(255,245,249,0.60)",
    fontFamily: "var(--font-cormorant), serif",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 1.5,
    color: active ? (isYes ? "#5a2170" : "#5a2170") : "#653552",
    cursor: frozen ? "not-allowed" : "pointer",
    transition: "all .2s",
    opacity: frozen ? 0.55 : 1,
  });

  return (
    <section style={{ padding: "64px 26px" }}>
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
        {t("rsvpTitle")}
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.88),rgba(255,245,249,0.97))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(139,63,166,0.18)",
        borderRadius: 24,
        padding: "28px 22px",
        boxShadow: "0 4px 20px rgba(90,33,112,0.08)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Barra superior */}
        <div style={{
          position: "absolute", top: 0, left: "15%", right: "15%",
          height: 1.5,
          background: "linear-gradient(90deg,transparent,#8b3fa6 25%,#d19d01 50%,#e4c2f5 75%,transparent)",
        }} />

        {/* Banner deadline si está congelado */}
        {frozen && (
          <div style={{
            marginBottom: 18,
            padding: "14px 16px",
            borderRadius: 12,
            background: "rgba(166,124,1,0.10)",
            border: "1px solid rgba(166,124,1,0.30)",
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 14,
            lineHeight: 1.5,
            color: "#5a2170",
            textAlign: "center",
          }}>
            {t("rsvpClosed")}<br />
            {t("rsvpClosedNote")}
          </div>
        )}

        {/* Fecha límite */}
        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic", fontWeight: 500, fontSize: 15,
          color: "#6d2c86", letterSpacing: 2, marginBottom: 18,
        }}>
          {t("rsvpSub")}
        </p>

        {/* Toggle Sí/No asistiré */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          <button
            type="button"
            disabled={frozen}
            onClick={() => { setChoice("yes"); setFeedback(null); }}
            style={toggleBtnStyle(choice === "yes", true)}
          >
            {t("rsvpYes")}
          </button>
          <button
            type="button"
            disabled={frozen}
            onClick={() => { setChoice("no"); setFeedback(null); }}
            style={toggleBtnStyle(choice === "no", false)}
          >
            {t("rsvpNo")}
          </button>
        </div>

        {/* Campos de nombre — solo si choice === yes */}
        {choice === "yes" && (
          <div style={{ marginBottom: 8 }}>
            {names.map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                  background: "linear-gradient(135deg,#8b3fa6,#e4c2f5)",
                  color: "#fff", fontSize: 13,
                  fontFamily: "var(--font-cormorant), serif",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700,
                  opacity: frozen ? 0.55 : 1,
                }}>
                  {i + 1}
                </div>

                <input
                  type="text"
                  disabled={frozen}
                  placeholder={i === 0 ? t("rsvpNamePlaceholder") : `${t("rsvpCompanion")} ${i + 1}`}
                  value={names[i] ?? ""}
                  onChange={(e) => handleName(i, e.target.value)}
                  style={{
                    flex: 1, padding: "14px 16px", minHeight: 50,
                    border: "1.5px solid rgba(139,63,166,0.25)",
                    borderRadius: 12,
                    background: frozen ? "rgba(241,237,231,0.7)" : "rgba(255,245,249,0.80)",
                    fontFamily: "var(--font-lato), sans-serif",
                    fontWeight: 500, fontSize: 16, color: "#1f1620",
                    outline: "none", transition: "border-color 0.3s",
                    WebkitAppearance: "none",
                    cursor: frozen ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => { if (!frozen) e.currentTarget.style.borderColor = "#8b3fa6"; }}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(139,63,166,0.25)")}
                />

                {names.length > 1 && (
                  <button
                    type="button"
                    disabled={frozen}
                    onClick={() => removeName(i)}
                    aria-label={t("rsvpRemove")}
                    style={{
                      flexShrink: 0, width: 34, height: 34, borderRadius: "50%",
                      border: "1px solid rgba(139,63,166,0.22)",
                      background: "rgba(255,245,249,0.70)",
                      color: "#8b3fa6", fontSize: 18, lineHeight: 1,
                      cursor: frozen ? "not-allowed" : "pointer",
                      opacity: frozen ? 0.55 : 1,
                    }}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}

            {names.length < MAX_NOMBRES && (
              <button
                type="button"
                disabled={frozen}
                onClick={addName}
                style={{
                  display: "block", margin: "2px auto 0",
                  padding: "9px 20px", minHeight: 40,
                  borderRadius: 30,
                  border: "1px dashed rgba(139,63,166,0.40)",
                  background: "transparent",
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic", fontWeight: 600,
                  fontSize: 15, letterSpacing: 1.5,
                  color: "#5a2170",
                  cursor: frozen ? "not-allowed" : "pointer",
                  opacity: frozen ? 0.55 : 1,
                }}
              >
                {t("rsvpAddCompanion")}
              </button>
            )}
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <p style={{
            textAlign: "center", marginTop: 12, marginBottom: 4,
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic", fontSize: 14,
            color: feedback.color,
          }}>
            {feedback.msg}
          </p>
        )}

        {/* Botón confirmar */}
        <button
          className={frozen ? undefined : "gold-btn"}
          onClick={handleConfirm}
          disabled={loading || frozen}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", marginTop: 12, padding: "16px", minHeight: 52,
            background: frozen
              ? "linear-gradient(135deg,#bba,#998)"
              : "linear-gradient(135deg,#8b3fa6,#5a2170)",
            color: "#fff", borderRadius: 30, border: "none",
            cursor: (loading || frozen) ? "not-allowed" : "pointer",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 15, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 3,
            transition: "opacity .3s, transform .3s",
            boxShadow: "0 4px 22px rgba(90,33,112,0.28)",
            opacity: (loading || frozen) ? 0.55 : 1,
          }}
          onMouseEnter={(e) => {
            if (loading || frozen) return;
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            if (loading || frozen) return;
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {frozen ? t("rsvpClosedBtn") : t(btnKey)}
        </button>
      </div>
    </section>
  );
}
