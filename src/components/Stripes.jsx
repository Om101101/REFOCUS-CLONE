import React from "react";
import Strip from "./Strip";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Instrument+Mono:wght@400&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .stripes-root {
    font-family: 'Space Grotesk', sans-serif;
    background: #080808;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 24px;
    gap: 56px;
    position: relative;
    overflow: hidden;
  }

  /* subtle grid bg */
  .stripes-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  /* radial vignette */
  .stripes-root::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #080808 100%);
    pointer-events: none;
  }

  .heading-block {
    text-align: center;
    animation: fadeUp .9s ease both;
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    font-family: 'Instrument Mono', monospace;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #444;
    margin: 0 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .eyebrow::before,
  .eyebrow::after {
    content: '';
    width: 32px;
    height: 1px;
    background: #333;
  }

  .heading-block h1 {
    font-size: clamp(2.4rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1;
    margin: 0 0 14px;
    letter-spacing: -2.5px;
    background: linear-gradient(120deg, #fff 20%, #888 50%, #fff 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .heading-block p {
    font-family: 'Instrument Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    color: #3a3a3a;
    margin: 0;
    text-transform: uppercase;
  }

  .strips-row {
    display: flex;
    gap: 6px;
    height: 500px;
    animation: fadeUp .9s .15s ease both;
    position: relative;
    z-index: 1;
  }

  .strips-footer {
    font-family: 'Instrument Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #2a2a2a;
    animation: fadeUp .9s .3s ease both;
    position: relative;
    z-index: 1;
  }
`;

const PALETTES = [
  {
    bg: "#100d1a",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.25)",
    glow: "rgba(192,132,252,0.3)",
    glowFar: "rgba(192,132,252,0.05)",
    imgFilter: "invert(1) brightness(2) sepia(1) hue-rotate(200deg) saturate(3)",
  },
  {
    bg: "#0d1a15",
    accent: "#34d399",
    accentDim: "rgba(52,211,153,0.25)",
    glow: "rgba(52,211,153,0.3)",
    glowFar: "rgba(52,211,153,0.05)",
    imgFilter: "invert(1) brightness(1.8) sepia(1) hue-rotate(100deg) saturate(3)",
  },
  {
    bg: "#1a1000",
    accent: "#fbbf24",
    accentDim: "rgba(251,191,36,0.25)",
    glow: "rgba(251,191,36,0.3)",
    glowFar: "rgba(251,191,36,0.05)",
    imgFilter: "invert(1) brightness(1.8) sepia(1) hue-rotate(10deg) saturate(4)",
  },
  {
    bg: "#001a1a",
    accent: "#22d3ee",
    accentDim: "rgba(34,211,238,0.25)",
    glow: "rgba(34,211,238,0.3)",
    glowFar: "rgba(34,211,238,0.05)",
    imgFilter: "invert(1) brightness(1.8) sepia(1) hue-rotate(160deg) saturate(3)",
  },
  {
    bg: "#1a0d10",
    accent: "#fb7185",
    accentDim: "rgba(251,113,133,0.25)",
    glow: "rgba(251,113,133,0.3)",
    glowFar: "rgba(251,113,133,0.05)",
    imgFilter: "invert(1) brightness(2) sepia(1) hue-rotate(300deg) saturate(4)",
  },
  {
    bg: "#0d0d1a",
    accent: "#818cf8",
    accentDim: "rgba(129,140,248,0.25)",
    glow: "rgba(129,140,248,0.3)",
    glowFar: "rgba(129,140,248,0.05)",
    imgFilter: "invert(1) brightness(2) sepia(1) hue-rotate(190deg) saturate(3)",
  },
];

const data = [
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg",  number: 48 },
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",  number: 2  },
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",     number: 11 },
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg", number: 48 },
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ed1253edc0166ecbad_Lavendar-logo-black.svg",  number: 2  },
  { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg", number: 11 },
];

function Stripes() {
  return (
    <>
      <style>{css}</style>
      <div className="stripes-root">
        <div className="heading-block">
          <p className="eyebrow">Trusted Worldwide</p>
          <h1>Our Partners</h1>
          <p>Powering the next generation of products</p>
        </div>

        <div className="strips-row">
          {data.map((item, index) => (
            <Strip key={index} item={item} palette={PALETTES[index]} index={index} />
          ))}
        </div>

        <p className="strips-footer">6 partners · 100+ integrations</p>
      </div>
    </>
  );
}

export default Stripes;