/* ============================================================================
   ⚠️  SEÇÕES GUARDADAS — REMOVIDAS DA PROPOSTA SOLAX (não implementar agora)
   ----------------------------------------------------------------------------
   Estas 3 seções foram retiradas de solax/js/commercial.jsx a pedido do cliente
   (ainda não vamos implementá-las no código nesta rodada). O conteúdo está
   preservado aqui, idêntico ao original, para reinserção futura.

   Para reativar qualquer uma:
     1) cole a função de volta em solax/js/commercial.jsx;
     2) adicione o componente em <CommercialTrack> (com o <hr> divisor);
     3) confira os dados em solax/js/data.js (P.kits, P.compareRows,
        P.timeline, P.included, P.payment).

   Seções guardadas:
     • KitComparator   → "Comparador de kits" / "Compare e escolha o kit ideal"
     • Implementation  → "Implementação ponta-a-ponta" / "Cuidamos de cada etapa"
                          + "O que está incluso na sua solução"
     • Payment         → "Investimento" / "Como você prefere realizar o investimento?"

   OBS: estas seções continuam visíveis e renderizadas no "Proposta Modelo
   Base.html" (template mestre), caso precise vê-las funcionando.
   ============================================================================ */

/* ⭐ COMPARADOR DE KITS — centerpiece */
function KitComparator() {
  const [sel, setSel] = useState((P.kits.find((k) => k.recommended) || P.kits[0]).id);
  const chosen = P.kits.find((k) => k.id === sel);

  return (
    <section className="band" id="comparador">
      <div className="wrap wrap-wide">
        <SectionHead eyebrow="Comparador de kits"
        title="Compare e escolha<br/>o kit <span class='acc'>ideal para você</span>"
        lead="Três configurações dimensionadas para o seu projeto. Selecione uma para ver a autonomia, o investimento e o que está incluso." />

        {/* selectable kit cards */}
        <div className="grid g-3" style={{ alignItems: "stretch", marginBottom: 26 }}>
          {P.kits.map((k, i) => {
            const active = k.id === sel;
            return (
              <Reveal key={k.id} delay={i * 80}>
                <button
                  onClick={() => setSel(k.id)}
                  className="kit-card"
                  style={{
                    width: "100%", textAlign: "left", cursor: "pointer", height: "100%",
                    background: active ? "var(--surface-2)" : "var(--surface)",
                    border: active ? "1.5px solid var(--accent-ink)" : "1px solid var(--line)",
                    borderRadius: 18, padding: "26px 24px", color: "inherit", font: "inherit",
                    transition: "all .3s var(--ease)",
                    transform: active ? "translateY(-4px)" : "none",
                    boxShadow: active ? "0 24px 60px -30px var(--accent)" : "none"
                  }}>
                  
                  <Ph tag={`foto · kit ${k.tier}`} style={{ height: 132, minHeight: 0, marginBottom: 18, borderRadius: 12 }} />
                  <div className="flex between items-center" style={{ marginBottom: 16 }}>
                    <span className="mono" style={{ fontSize: ".78rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em" }}>{k.brand}</span>
                    {k.recommended && <span className="pill pill-accent">Recomendado</span>}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{k.tier}</h3>
                  <p className="body" style={{ fontSize: ".9rem", marginBottom: 18 }}>{k.headline}</p>
                  <div className="flex" style={{ gap: 18, marginBottom: 18, flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "1.7rem", fontWeight: 600, lineHeight: 1 }}>{k.storable}</div>
                      <div className="body" style={{ fontSize: ".74rem", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 4 }}>armazenável</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "1.7rem", fontWeight: 600, lineHeight: 1 }}>{k.autonomyRange}</div>
                      <div className="body" style={{ fontSize: ".74rem", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 4 }}>autonomia</div>
                    </div>
                  </div>
                  <div style={{ paddingTop: 16, borderTop: "1px solid var(--line-2)" }}>
                    <div className="body" style={{ fontSize: ".74rem", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4 }}>Investimento total</div>
                    <div style={{ fontSize: "1.3rem", fontWeight: 600, color: active ? "var(--accent-ink)" : "var(--ink)" }}>{k.investment}</div>
                  </div>
                  <div className="flex items-center gap-s" style={{ marginTop: 18, color: active ? "var(--accent-ink)" : "var(--ink-3)", fontSize: ".85rem", fontWeight: 600 }}>
                    <span style={{ width: 16, height: 16, borderRadius: 999, border: active ? "5px solid var(--accent-ink)" : "1.5px solid var(--ink-3)", display: "inline-block", transition: "all .2s" }} />
                    {active ? "Selecionado" : "Selecionar"}
                  </div>
                </button>
              </Reveal>);

          })}
        </div>

        {/* comparison matrix */}
        <Reveal>
          <div className="card" style={{ padding: 0, overflow: "hidden", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".95rem", minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={{ padding: "16px 22px", textAlign: "left", fontWeight: 600, color: "var(--ink-2)", fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".06em", background: "var(--surface-2)" }}>Especificação</th>
                  {P.kits.map((k) =>
                  <th key={k.id} style={{
                    padding: "16px 22px", textAlign: "center", fontWeight: 600,
                    background: k.id === sel ? "var(--accent-soft)" : "var(--surface-2)",
                    color: k.id === sel ? "var(--accent-ink)" : "var(--ink)",
                    borderBottom: k.id === sel ? "2px solid var(--accent-ink)" : "2px solid transparent"
                  }}>{k.tier}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {P.compareRows.map((row) =>
                <tr key={row.key} style={{ borderTop: "1px solid var(--line-2)" }}>
                    <td style={{ padding: "15px 22px", color: "var(--ink-2)", fontWeight: row.strong ? 600 : 400 }}>{row.label}</td>
                    {P.kits.map((k) =>
                  <td key={k.id} style={{
                    padding: "15px 22px", textAlign: "center",
                    fontWeight: row.strong ? 700 : k.id === sel ? 600 : 500,
                    color: k.id === sel ? "var(--accent-ink)" : row.strong ? "var(--ink)" : "var(--ink-2)",
                    background: k.id === sel ? "var(--accent-soft)" : "transparent",
                    fontSize: row.strong ? "1.02rem" : ".95rem"
                  }}>{k[row.key]}</td>
                  )}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* chosen detail */}
        <Reveal>
          <div className="card invert" style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "center" }}>
            <div>
              <span className="pill pill-accent" style={{ marginBottom: 16 }}>{chosen.brand} · {chosen.tier}</span>
              <h3 className="h-sec" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: 18 }}>{chosen.headline}</h3>
              <ul className="list" style={{ marginBottom: 24 }}>
                {chosen.highlights.map((h) =>
                <li key={h}><span className="mk mk-yes">✓</span><span>{h}</span></li>
                )}
              </ul>
              <Ph tag={`foto · equipamentos do kit ${chosen.tier}`} style={{ height: 150, minHeight: 0, marginBottom: 24, borderRadius: 12 }} />
              <a href="#contato" className="btn btn-primary">Quero esta solução <Icon name="arrow" className="ar" style={{ width: 18, height: 18 }} /></a>
            </div>
            <div className="grid g-2" style={{ gap: 16 }}>
              <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "22px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 600, lineHeight: 1, color: "var(--accent-ink)" }}>{chosen.autonomy100}</div>
                <div className="body" style={{ fontSize: ".82rem", marginTop: 8 }}>de autonomia<br /><strong style={{ color: "var(--ink)" }}>100% da carga</strong></div>
              </div>
              <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "22px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 600, lineHeight: 1, color: "var(--accent-ink)" }}>{chosen.autonomy50}</div>
                <div className="body" style={{ fontSize: ".82rem", marginTop: 8 }}>de autonomia<br /><strong style={{ color: "var(--ink)" }}>50% da carga</strong></div>
              </div>
              <div style={{ gridColumn: "1 / -1", background: "var(--accent)", color: "var(--on-accent)", borderRadius: 14, padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontWeight: 600, fontSize: ".95rem" }}>Investimento total</span>
                <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>{chosen.investment}</span>
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

/* Implementation timeline + included */
function Implementation() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead eyebrow="Implementação ponta-a-ponta" title="Cuidamos de <span class='acc'>cada etapa</span>"
        lead="Da assinatura à troca do medidor — mínima intervenção, máxima segurança." />
        <Reveal>
          <div className="grid steps-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 40 }}>
            {P.timeline.map((t, i) =>
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px", position: "relative" }}>
                <div className="mono" style={{ color: "var(--accent-ink)", fontWeight: 600, fontSize: ".9rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: ".92rem", fontWeight: 500, lineHeight: 1.35 }}>{t}</div>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal>
          <h3 className="h-sub" style={{ textAlign: "center", marginBottom: 28 }}>O que está <span className="acc">incluso</span> na sua solução</h3>
          <div className="grid incl-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
            {P.included.map((it) =>
            <div key={it.t} style={{ textAlign: "center", padding: "8px" }}>
                <div className="icon-chip" style={{ margin: "0 auto 14px" }}><Icon name={it.icon} /></div>
                <div style={{ fontSize: ".9rem", fontWeight: 500 }}>{it.t}</div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

/* Payment */
function Payment() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead eyebrow="Investimento" title="Como você prefere <span class='acc'>realizar o investimento?</span>"
        lead="Escolha a opção que melhor se adapta ao seu fluxo financeiro." />
        <Reveal>
          <div className="card" style={{ marginBottom: 18 }}>
            <div className="body" style={{ fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 20, fontWeight: "500" }}>Por etapa</div>
            <div className="flex wrap-row items-center" style={{ gap: 12 }}>
              {P.payment.stages.map((s, i) =>
              <React.Fragment key={i}>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 12, padding: "16px 22px", flex: "1 1 160px" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 600, color: "var(--accent-ink)" }}>{s.pct}</div>
                    <div className="body" style={{ fontSize: ".82rem", marginTop: 4, fontWeight: "500" }}>{s.note}</div>
                  </div>
                  {i < P.payment.stages.length - 1 && <Icon name="arrow" style={{ width: 18, height: 18, color: "var(--ink-3)", flex: "0 0 auto" }} />}
                </React.Fragment>
              )}
            </div>
          </div>
        </Reveal>
        <div className="grid g-2">
          <Reveal>
            <div className="card flex between items-center">
              <span className="h-sub">À vista</span>
              <span className="pill pill-accent">{P.payment.cash}</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card flex between items-center">
              <span className="h-sub">Cartão</span>
              <span className="pill pill-accent">{P.payment.card}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}
