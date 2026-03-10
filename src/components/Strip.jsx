import React from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Instrument+Mono:wght@400&display=swap');

  @keyframes scrollUp {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollDown {
    0%   { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.9; }
  }

  .strip-track-up   { animation: scrollUp   var(--spd) linear infinite; }
  .strip-track-down { animation: scrollDown var(--spd) linear infinite; }

  .strip-wrap:hover .strip-track-up,
  .strip-wrap:hover .strip-track-down {
    animation-play-state: paused;
  }

  .strip-wrap {
    width: 110px;
    overflow: hidden;
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: width .5s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .strip-wrap:hover {
    width: 155px;
    box-shadow: 0 0 40px var(--glow), 0 0 80px var(--glow-far);
    border-color: var(--accent-dim);
  }

  /* top & bottom fade masks */
  .strip-wrap::before,
  .strip-wrap::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 80px;
    z-index: 2;
    pointer-events: none;
  }
  .strip-wrap::before {
    top: 0;
    background: linear-gradient(to bottom, var(--bg) 0%, transparent 100%);
  }
  .strip-wrap::after {
    bottom: 0;
    background: linear-gradient(to top, var(--bg) 0%, transparent 100%);
  }

  /* ambient glow dot in center */
  .strip-glow-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--accent);
    filter: blur(30px);
    opacity: 0;
    z-index: 0;
    transition: opacity .4s ease;
    animation: pulseGlow 3s ease-in-out infinite;
  }
  .strip-wrap:hover .strip-glow-dot { opacity: 0.25; }

  .strip-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    position: relative;
    z-index: 1;
  }

  .strip-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 12px;
    width: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .strip-img-wrap {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgba(255,255,255,0.05);
    padding: 9px;
    border: 1px solid rgba(255,255,255,0.08);
    transition: transform .3s ease, background .3s ease, border-color .3s ease;
    backdrop-filter: blur(4px);
  }
  .strip-wrap:hover .strip-img-wrap {
    transform: scale(1.12);
    background: rgba(255,255,255,0.1);
    border-color: var(--accent-dim);
  }
  .strip-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: var(--img-filter);
    transition: filter .3s ease;
  }

  .strip-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--accent-dim);
    border-radius: 999px;
    padding: 3px 10px;
    transition: background .3s ease;
  }
  .strip-wrap:hover .strip-badge {
    background: rgba(255,255,255,0.1);
  }

  .strip-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .strip-num {
    font-family: 'Instrument Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    color: var(--accent);
  }

  .strip-divider {
    width: 24px;
    height: 1px;
    margin: 2px auto;
    flex-shrink: 0;
    background: var(--accent);
    opacity: 0.15;
    border-radius: 999px;
  }
`;

function Strip({ item, palette, index }) {
  const direction = index % 2 === 0 ? "strip-track-up" : "strip-track-down";
  const speed = 7 + index * 1.2;
  const allCards = [...Array(16)].fill(item);

  const style = {
    "--bg": palette.bg,
    "--accent": palette.accent,
    "--accent-dim": palette.accentDim,
    "--glow": palette.glow,
    "--glow-far": palette.glowFar,
    "--img-filter": palette.imgFilter,
    background: palette.bg,
  };

  return (
    <>
      <style>{css}</style>
      <div className="strip-wrap" style={style}>
        <div className="strip-glow-dot" />
        <div className="strip-inner">
          <div
            className={`strip-track-${index % 2 === 0 ? "up" : "down"}`}
            style={{ "--spd": `${speed}s`, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
          >
            {allCards.map((itm, i) => (
              <div key={i} style={{ width: "100%" }}>
                <div className="strip-card">
                  <div className="strip-img-wrap">
                    <img src={itm.url} alt="" />
                  </div>
                  <div className="strip-badge">
                    <div className="strip-dot" />
                    <span className="strip-num">
                      {String(itm.number).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                {i < allCards.length - 1 && <div className="strip-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Strip;