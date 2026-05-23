// ------- Reusable UI bits for REMA -------

const { useState, useEffect, useRef } = React;

function Container({ children, className = "" }) {
  return <div className={"container " + className}>{children}</div>;
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

function ArrowRight({ size = 16 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -50% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, opts);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function FadeIn({ children, as = "div", delay = 0, className = "" }) {
  // Lightweight reveal: simply renders a wrapper. Real entrance animation
  // is handled via CSS @keyframes so it works without IntersectionObserver
  // and survives screenshot tools that don't dispatch scroll events.
  const Tag = as;
  return (
    <Tag className={"reveal " + className} style={{ animationDelay: delay + "ms" }}>
      {children}
    </Tag>
  );
}

// Photo placeholder that looks like blinds — sized to fill its container.
function StorenPlaceholder({ color = "#0077c0", angle = "180deg", label, window: showWindow = true }) {
  return (
    <div className="placeholder" style={{ "--col": color, "--ang": angle }}>
      {showWindow && <div className="ph-window" />}
      {showWindow && <div className="ph-bar" />}
      {label && <span className="badge">{label}</span>}
    </div>
  );
}

// Stylised silhouette portrait for team placeholders
function TeamPortrait({ color = "#0077c0", initials = "" }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: color, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* horizontal slat stripes */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 16px, rgba(0,0,0,.08) 16px, rgba(0,0,0,.08) 17px)"
      }}/>
      <svg viewBox="0 0 100 120" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <circle cx="50" cy="44" r="18" fill="rgba(15,20,25,.18)"/>
        <path d="M14 120 C14 86 30 70 50 70 C70 70 86 86 86 120 Z" fill="rgba(15,20,25,.18)"/>
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Geist Mono, ui-monospace, monospace",
        fontSize: 11, letterSpacing: ".14em",
        color: "rgba(255,255,255,.85)",
        background: "rgba(15,20,25,.55)",
        padding: "5px 10px",
        borderRadius: 999,
        textTransform: "uppercase",
        backdropFilter: "blur(6px)"
      }}>{initials} · Portrait</span>
    </div>
  );
}

Object.assign(window, { Container, Eyebrow, ArrowRight, useScrolled, useActiveSection, FadeIn, StorenPlaceholder, TeamPortrait });
