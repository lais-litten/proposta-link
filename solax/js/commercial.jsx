/* ====================== COMMERCIAL TRACK ====================== */
const P = window.PROPOSTA;

/* Divider hero between tracks */
function CommercialIntro() {
  return (
    <section className="band commercial-hero" id="proposta" data-screen-label="Abertura comercial">
      <div className="hero-bg">
        <image-slot id="proposta-bg" shape="rect" fit="cover" src={RES("fotoUsina", "assets/foto-usina-baterias.jpg")} placeholder=""></image-slot>
      </div>
      <div className="hero-ph"><span className="ph-tag">imagem de fundo · arraste aqui</span></div>
      <div className="hero-scrim"></div>
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="kicker" style={{ marginBottom: 18 }}>Proposta comercial · {P.meta.status}</div>
          <h2 className="display" style={{ marginBottom: 22 }}>
            Conheça a seguir<br />sua <span className="acc">proposta comercial</span>
          </h2>
          <p className="lead" style={{ marginInline: "auto", fontWeight: "500", fontSize: "24px" }}>
            {P.client.project}. Dimensionada para o seu perfil de consumo — com a flexibilidade de
            escolher o kit ideal para o seu momento.
          </p>
        </Reveal>
      </div>
    </section>);

}

/* Dimensionamento */
function Sizing() {
  return (
    <section className="band-tight">
      <div className="wrap">
        <SectionHead eyebrow="Dimensionamento" title="O seu projeto, em números"
        lead="Detalhamento do projeto com baterias, baseado no seu perfil de consumo energético." />
        <div className="grid g-3" style={{ gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden" }}>
          {P.sizing.map((s, i) =>
          <Reveal key={s.label} delay={i * 50}>
              <div style={{ background: "var(--surface)", padding: "26px 26px", height: "100%" }}>
                <div className="body" style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12, fontWeight: "500" }}>{s.label}</div>
                <div style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", fontWeight: 600, letterSpacing: "-0.02em", overflowWrap: "anywhere" }}><PH name={s.ph}>{s.value}</PH></div>
              </div>
            </Reveal>
          )}
          <Reveal delay={250}>
            <div style={{ background: "var(--accent-soft)", padding: "26px", height: "100%", borderLeft: "2px solid var(--accent-ink)" }}>
              <div className="body" style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12, color: "var(--accent-ink)", fontWeight: "500" }}>Potência mínima de inversor</div>
              <div style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", fontWeight: 600, overflowWrap: "anywhere" }}><PH name="inverter_min_power">{P.minInverter}</PH></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* Cargas atendidas */
function Loads() {
  return (
    <section className="band-tight">
      <div className="wrap">
        <SectionHead eyebrow="Cargas atendidas" title="O que a bateria mantém ligado"
        lead="Equipamentos considerados no projeto para estimar a autonomia.<br>A autonomia real é maior quando o consumo é menor." />
        <Reveal>
          <div className="card" style={{ padding: 0, overflow: "hidden", color: "var(--ink)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".98rem" }}>
              <thead>
                <tr style={{ background: "var(--surface-2)", textAlign: "left" }}>
                  <th style={{ padding: "16px 24px", fontWeight: 600, color: "var(--ink-2)", letterSpacing: ".04em", fontSize: ".78rem", textTransform: "uppercase" }}>Equipamento</th>
                  <th style={{ padding: "16px 24px", fontWeight: 600, color: "var(--ink-2)", letterSpacing: ".04em", fontSize: ".78rem", textTransform: "uppercase", textAlign: "center" }}>Qtd.</th>
                  <th style={{ padding: "16px 24px", fontWeight: 600, color: "var(--ink-2)", letterSpacing: ".04em", fontSize: ".78rem", textTransform: "uppercase", textAlign: "right" }}>Potência (W)</th>
                </tr>
              </thead>
              <tbody>
                {P.loads.map((l, i) =>
                <tr key={i} style={{ borderTop: "1px solid var(--line-2)" }}>
                    <td style={{ padding: "16px 24px", fontWeight: 500 }}><PH name={`equip_${l.n}_name`}>{l.name}</PH></td>
                    <td style={{ padding: "16px 24px", textAlign: "center", color: "var(--ink)" }}><PH name={`equip_${l.n}_qty`}>{l.qty}</PH></td>
                    <td style={{ padding: "16px 24px", textAlign: "right", color: "var(--ink)" }}><PH name={`equip_${l.n}_power`}>{typeof l.power === "number" ? l.power.toLocaleString("pt-BR") : l.power}</PH></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="loads-note">
            <span className="icon-chip" style={{ flex: "0 0 auto" }}><Icon name="battery" /></span>
            <p style={{ fontWeight: 500 }}>
              A autonomia é calculada considerando o <strong>uso simultâneo de todos os equipamentos</strong>.
              Quando o consumo for menor, <span className="acc" style={{ fontWeight: "500" }}>o tempo será maior</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* Technical data + warranties */
function Technical() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead eyebrow="Dados técnicos" title="Escopo do projeto e garantias"
        lead="Especificações do projeto e cobertura de garantia." />
        <div className="grid g-2">
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <h3 className="h-sub" style={{ marginBottom: 22 }}>Escopo do projeto</h3>
              <div className="grid" style={{ gap: 0 }}>
                {P.scope.map((s, i) =>
                <div key={s.label} className="flex between items-center" style={{ padding: "14px 0", borderTop: i ? "1px solid var(--line-2)" : "none" }}>
                    <span className="body" style={{ fontWeight: "500" }}>{s.label}</span>
                    <span style={{ fontWeight: 600 }}><PH name={s.ph}>{s.value}</PH></span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card" style={{ height: "100%" }}>
              <h3 className="h-sub" style={{ marginBottom: 22 }}>Garantias</h3>
              <div className="grid" style={{ gap: 0 }}>
                {P.warranties.map((s, i) =>
                <div key={s.label} className="flex between items-center" style={{ padding: "14px 0", borderTop: i ? "1px solid var(--line-2)" : "none" }}>
                    <span className="body" style={{ fontWeight: "500" }}>{s.label}</span>
                    <span className="pill pill-accent" style={{ borderRadius: "1px" }}>{s.ph ? <PH name={s.ph}>{s.value}</PH> : s.value}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* "Sua Proposta Comercial" — resumo do KIT ESCOLHIDO (sem o seletor de 3 kits).
   Reinserido a partir do PDF Solax (pág. 14), a pedido do cliente. */
function ProposalKit() {
  const kit = P.kits.find((k) => k.recommended) || P.kits[0];
  const box = { background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "22px" };
  const boxCap = { fontSize: ".74rem", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6 };
  return (
    <section className="band" id="sua-proposta">
      <div className="wrap">
        <SectionHead eyebrow="Sua proposta comercial"
        title="O kit <span class='acc'>dimensionado para você</span>"
        lead="Configuração recomendada para o seu perfil de consumo — autonomia, capacidade e investimento." />
        <Reveal>
          <div className="card invert" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "center" }}>
            <div>
              <span className="pill pill-accent" style={{ marginBottom: 16 }}>{kit.brand} · {kit.tier}</span>
              <h3 className="h-sec" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: 18 }}>{kit.headline}</h3>
              <ul className="list" style={{ marginBottom: 24 }}>
                {kit.highlights.map((h) =>
                <li key={h}><span className="mk mk-yes">✓</span><span>{h}</span></li>
                )}
              </ul>
              <Ph tag={`foto · equipamentos do kit ${kit.tier}`} style={{ height: 150, minHeight: 0, marginBottom: 24, borderRadius: 12 }} />
              <a href="#contato" className="btn btn-primary">Quero esta solução <Icon name="arrow" className="ar" style={{ width: 18, height: 18 }} /></a>
            </div>
            <div className="grid g-2" style={{ gap: 16 }}>
              <div style={box}>
                <div style={{ fontSize: "2.2rem", fontWeight: 600, lineHeight: 1, color: "var(--accent-ink)" }}><PH name="h">{kit.autonomy100}</PH></div>
                <div className="body" style={{ fontSize: ".82rem", marginTop: 8 }}>de autonomia<br /><strong style={{ color: "var(--ink)" }}>100% da carga</strong></div>
              </div>
              <div style={box}>
                <div style={{ fontSize: "2.2rem", fontWeight: 600, lineHeight: 1, color: "var(--accent-ink)" }}><PH name="h2">{kit.autonomy50}</PH></div>
                <div className="body" style={{ fontSize: ".82rem", marginTop: 8 }}>de autonomia<br /><strong style={{ color: "var(--ink)" }}>50% da carga</strong></div>
              </div>
              <div style={box}>
                <div className="body" style={boxCap}>Energia armazenável</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--ink)" }}><PH name="battery_capacity_kwh">{kit.storable}</PH></div>
              </div>
              <div style={box}>
                <div className="body" style={boxCap}>Potência de inversor</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--ink)" }}><PH name="total_inverter_power_kw">{kit.inverter}</PH></div>
              </div>
              <div style={{ gridColumn: "1 / -1", background: "var(--accent)", color: "var(--on-accent)", borderRadius: 14, padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontWeight: 600, fontSize: ".95rem" }}>Investimento total</span>
                <span style={{ fontWeight: 700, fontSize: "1.5rem" }}><PH name="final_price">{kit.investment}</PH></span>
              </div>
            </div>
          </div>
        </Reveal>
        <p className="body" style={{ textAlign: "center", marginTop: 18, fontSize: ".85rem" }}>
          Autonomia prolongada quando integrada aos painéis fotovoltaicos.
        </p>
      </div>
    </section>);

}

/* Divisor SolaX — abre o bloco do fabricante (PDF pág. 11) */
function FlexibleDivider() {
  return (
    <section className="band-tight flex-divider-section">
      <Reveal>
        <div className="flex-divider-banner">
          <image-slot id="ph-solax-produto" class="flex-divider-bg" shape="rect" fit="cover" src={RES("fotoSistema", "assets/foto-sistema-residencia.jpg")} placeholder="imagem · sistema Solax instalado"></image-slot>
          <div className="flex-divider-scrim"></div>
          <div className="flex-divider-content">
            <div className="flex-divider-logo">
              <image-slot id="flex-divider-solax-logo" shape="rect" fit="contain" src={RES("logoSolax", "assets/logo-solax-power-branco.png")} placeholder="logo Solax · arraste aqui"></image-slot>
            </div>
            <h2 className="h-sec flex-divider-title">
              Um sistema <span className="acc">flexível</span>, projetado para <span className="acc">evoluir</span> junto com cada projeto.
            </h2>
          </div>
        </div>
      </Reveal>
    </section>);

}

/* Tecnologia SolaX — showcase full-bleed "Monitoramento e Otimização" (PDF pág. 13) */
function SolaxTech() {
  return (
    <section className="tech-showcase" id="tecnologia" data-screen-label="Tecnologia · Gestão inteligente">
      <div className="hero-bg"><image-slot id="tech-bg" shape="rect" placeholder=""></image-slot></div>
      <div className="tech-ph"><span className="ph-tag">imagem de fundo (estádio / marca) · arraste aqui</span></div>
      <div className="tech-scrim"></div>
      <div className="wrap">
        <Reveal>
          <h2 className="h-sec tech-title">Monitoramento e <span className="acc">Otimização</span></h2>
          <p className="lead tech-sub">Informações claras, otimização contínua e controle na palma da mão.</p>
        </Reveal>
        <div className="tech-grid">
          <Reveal className="tech-phone-col">
            <div className="tech-phone">
              <image-slot id="tech-app" shape="rect" radius="30" placeholder=""></image-slot>
              <span className="tech-phone-hint mono">print do app SolaX<br />arraste aqui</span>
            </div>
          </Reveal>
          <Reveal delay={120} className="tech-side">
            <div className="bvb-badge">
              <span className="bvb-logo"><image-slot id="bvb-logo" shape="circle" placeholder=""></image-slot></span>
              <p><strong>SolaX Power</strong> é parceira oficial do <strong>Borussia Dortmund</strong>,
renomado time de futebol alemão.</p>
            </div>
            <div className="tech-card">
              <div className="eyebrow">Tecnologia</div>
              <h3>Gestão <span className="acc">inteligente</span></h3>
              <p>Acompanhe <strong>geração, consumo, autonomia e fluxos energéticos em tempo real</strong> — direto do App.</p>
              <p>A inteligência do sistema ajusta prioridades e otimiza o uso da energia produzida, garantindo mais controle, eficiência e economia.</p>
              <div className="tech-pills">
                <span className="tech-pill"><span className="dot"></span>Monitoramento em Tempo Real</span>
                <span className="tech-pill"><span className="dot"></span>Otimização Automática</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function CommercialTrack() {
  return (
    <>
      <CommercialIntro />
      <Sizing />
      <Loads />
      <div className="hr-wrap"><hr className="hr" /></div>
      <FlexibleDivider />
      <EquipmentPartner />
      <SolaxTech />
      <div className="hr-wrap"><hr className="hr" /></div>
      <ProposalKit />
      <div className="hr-wrap"><hr className="hr" /></div>
      <Technical />
    </>);

}

window.CommercialTrack = CommercialTrack;