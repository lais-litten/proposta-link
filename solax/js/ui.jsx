/* ============================ UI PRIMITIVES ============================ */
const { useState, useEffect, useRef } = React;

/* ---- Icon: simple stroke line icons (standard iconography) ---- */
const ICONS = {
  solar: '<path d="M12 2v3M4.2 6.2 6.3 8.3M2 12h3M19.8 6.2 17.7 8.3M22 12h-3M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="m12 17 0 5M7 22h10"/>',
  battery: '<rect x="3" y="7" width="16" height="11" rx="2"/><path d="M22 11v3M9 11v3l2-2v3"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8a8 8 0 0 1-10 7.7Z"/><path d="M11 20c0-2.5 2-4 5-4"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5"/>',
  trend: '<path d="M3 17 9 11l4 4 8-8"/><path d="M17 7h4v4"/>',
  scale: '<path d="M12 3v18M5 7l-3 7h6l-3-7ZM19 7l-3 7h6l-3-7ZM4 7h16"/>',
  reg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  home: '<path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  app: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  dollar: '<path d="M12 2v20M16 6.5C16 4.6 14.2 3.5 12 3.5S8 4.6 8 6.5 9.8 9 12 9.5s4 1.6 4 3.5-1.8 3-4 3-4-1.1-4-3"/>',
  ruler: '<path d="M3 16 16 3l5 5L8 21Z"/><path d="m7 11 2 2M11 7l2 2M15 12l2 2"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
  activity: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
  tool: '<path d="M14.5 5.5a3.5 3.5 0 0 0-4.6 4.6L3 17l4 4 6.9-6.9a3.5 3.5 0 0 0 4.6-4.6l-2.5 2.5-2-2 2.5-2.5Z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  flame: '<path d="M12 3c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.5-2-1-3 2 1 4 3.5 4 7a7 7 0 0 1-14 0c0-4 4-6 7-11Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 17l9 5 9-5" opacity=".5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>'
};
function Icon({ name, style, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" style={style} className={className}
    dangerouslySetInnerHTML={{ __html: ICONS[name] || ICONS.bolt }} />);

}

/* ---- Reveal on scroll ---- */
function Reveal({ children, delay = 0, className = "", as = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal immediately if already in (or near) the viewport at mount.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      const id = setTimeout(() => el.classList.add("in"), delay);
      return () => clearTimeout(id);
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {setTimeout(() => el.classList.add("in"), delay);io.unobserve(el);}
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} {...rest}>{children}</Tag>;
}

/* ---- Section header (respects layout direction) ---- */
function SectionHead({ eyebrow, title, lead, id }) {
  return (
    <Reveal className="sec-head" id={id}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h-sec" dangerouslySetInnerHTML={{ __html: title }} />
      {lead && <p className="lead" dangerouslySetInnerHTML={{ __html: lead }} style={{ fontWeight: 500 }} />}
    </Reveal>);}
/* ---- Image placeholder ----
   Modo padrão: faixa listrada com legenda (tag).
   Modo imagem: passe `slot` (id único) + `src` (imagem padrão) → vira um
   <image-slot> arrastável. A imagem padrão aparece, mas o usuário pode
   arrastar outra por cima a qualquer momento pra trocar (e limpar volta ao src). */
function Ph({ tag, style, className = "", slot, src, fit = "cover" }) {
  if (slot) {
    return (
      <div className={`ph ph-img ${className}`} style={style}>
        <image-slot id={slot} shape="rect" fit={fit} src={src || ""} placeholder={tag}></image-slot>
      </div>);

  }
  return (
    <div className={`ph ${className}`} style={style}>
      <span className="ph-tag">{tag}</span>
    </div>);

}

/* ---- Punchline ---- */
function Punch({ children, wide }) {
  return <Reveal as="p" className={"punch" + (wide ? " punch-wide" : "")}>{children}</Reveal>;
}

/* ---- PH: marcador de PLACEHOLDER (campo dinâmico preenchido pela plataforma) ----
   Envolve um valor variável. Sempre emite data-ph="<nome>" para o dev localizar
   (busca no HTML/DOM). Com o modo placeholder ligado (body.show-ph), destaca o
   valor em amarelo e mostra um selo com o nome do campo. Default: invisível. */
function PH({ name, children, block = false }) {
  const Tag = block ? "div" : "span";
  return (
    <Tag className={"ph-var" + (block ? " ph-block" : "")} data-ph={name}>
      <span className="ph-flag" aria-hidden="true">{name}</span>
      {children}
    </Tag>);

}

/* ---- RES: resolve um asset para a versão standalone ----
   Na versão de dev devolve o caminho relativo normal. Quando empacotado
   (super_inline_html), window.__resources[id] traz a blob URL inlinada. */
function RES(id, fallback) {
  return (window.__resources && window.__resources[id]) || fallback;
}

Object.assign(window, { Icon, Reveal, SectionHead, Ph, Punch, PH, RES, useState, useEffect, useRef });