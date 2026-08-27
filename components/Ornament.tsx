"use client";

export default function Ornament() {
  return (
    <div className="flex justify-center py-3 px-4">
      <svg viewBox="0 0 300 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 300, height: 42 }}>
        <line x1="0" y1="20" x2="96" y2="20" stroke="#8b3fa6" strokeWidth="0.85" opacity="0.34"/>
        <line x1="0" y1="23" x2="88" y2="23" stroke="#8b3fa6" strokeWidth="0.38" opacity="0.16"/>
        <path d="M96 21.5 Q104 7 116 21.5" stroke="#8b3fa6" strokeWidth="0.95" fill="none" opacity="0.46"/>
        <path d="M122 21.5 L126.5 15.5 L131 21.5 L126.5 27.5 Z" fill="#e4c2f5" fillOpacity="0.40" stroke="#e4c2f5" strokeWidth="0.4" opacity="0.5"/>
        {/* Hoja de enredadera — el verde entra aqui, al lado del rombo */}
        <path d="M135 21.5 Q130 14 136.5 11.5 Q140 17 135 21.5 Z" fill="var(--green-soft)" fillOpacity="0.62" stroke="var(--green)" strokeWidth="0.5" opacity="0.72"/>
        <path d="M150 6 L165 21.5 L150 37 L135 21.5 Z" fill="rgba(139,63,166,0.09)" stroke="#8b3fa6" strokeWidth="1.05" opacity="0.50"/>
        <circle cx="150" cy="21.5" r="4.5" fill="rgba(209,157,1,0.35)" stroke="#d19d01" strokeWidth="0.7" opacity="0.70"/>
        {/* Hoja espejo */}
        <path d="M165 21.5 Q170 14 163.5 11.5 Q160 17 165 21.5 Z" fill="var(--green-soft)" fillOpacity="0.62" stroke="var(--green)" strokeWidth="0.5" opacity="0.72"/>
        <path d="M169 21.5 L173.5 15.5 L178 21.5 L173.5 27.5 Z" fill="#e4c2f5" fillOpacity="0.40" stroke="#e4c2f5" strokeWidth="0.4" opacity="0.5"/>
        <path d="M184 21.5 Q196 7 204 21.5" stroke="#8b3fa6" strokeWidth="0.95" fill="none" opacity="0.46"/>
        <line x1="204" y1="20" x2="300" y2="20" stroke="#8b3fa6" strokeWidth="0.85" opacity="0.34"/>
        <line x1="212" y1="23" x2="300" y2="23" stroke="#8b3fa6" strokeWidth="0.38" opacity="0.16"/>
      </svg>
    </div>
  );
}
