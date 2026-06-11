/* ====================== INSTITUTIONAL TRACK ====================== */
const FLAGS = window.PROPOSTA && window.PROPOSTA.flags || {};
const PROP = window.PROPOSTA || {};

/* Premium solutions overview — abertura da trilha institucional.
   Topo com espaço para a LOGO DO INTEGRADOR (não a da LITTEN). */
const SOLUCOES = [
{ t: "Sistemas de baterias <em class='ital'>premium</em>", d: "Sistemas de armazenamento de alta performance, com baterias de lítio padrão internacional e tecnologia de gestão inteligente — projetados para durabilidade, eficiência e autonomia real.", tag: "foto · sistema de baterias instalado" },
{ t: "Soluções híbridas e expansíveis", d: "A arquitetura modular permite começar com a capacidade ideal para hoje e ampliar conforme a necessidade — sem trocar o sistema.", tag: "foto · módulos de bateria empilháveis" },
{ t: "Múltiplas integrações", d: "Compatível com painéis solares, carregadores de veículos elétricos, geradores ou a própria rede elétrica.", tag: "foto · carregador de veículo elétrico" },
{ t: "Monitoramento via App", d: "Acompanhe geração, consumo e autonomia em tempo real. Gerencie horários e priorizações direto do celular.", tag: "foto · app de monitoramento" }];


function PremiumSolutions() {
  return (
    <section className="band" id="institucional">
      <div className="wrap">
        <Reveal className="solucoes-logo">
          {PROP.integrator && PROP.integrator.logo ?
          <img src={PROP.integrator.logo} alt="Logo do integrador" /> :
          <span className="solucoes-logo-ph">logo do integrador</span>}
        </Reveal>
        <Reveal delay={80}>
          <Ph slot="ph-integrador-projeto" tag="foto do seu projeto · arraste aqui" style={{ aspectRatio: "16/7", minHeight: 260, marginBottom: "clamp(40px,6vw,72px)" }} />
        </Reveal>
        <SectionHead
          eyebrow="Soluções"
          title="Autonomia energética <em class='ital'>Premium</em><br>para a sua <span class='acc'>residência ou empresa</span>"
          lead="Projetamos e implementamos sistemas de armazenamento de energia que garantem segurança e performance." />
        
        <div className="grid g-2">
          {SOLUCOES.map((s, i) =>
          <Reveal key={i} delay={i % 2 * 80}>
              <article className="card card-hover" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <h3 className="h-sub" style={{ marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: s.t }} />
                <p className="body" style={{ fontSize: ".95rem", marginBottom: 20, flexGrow: 1 }}>{s.d}</p>
                <Ph tag={s.tag} style={{ height: 150, minHeight: 0 }} />
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* Trust / value props (client-facing) */
const TRUST_PROOF = [
{ icon: "spark", t: "Pioneiros em armazenamento", d: "Entre os primeiros a estruturar sistemas de baterias no Brasil — quando o assunto ainda era novidade, já se entregavam projetos reais." },
{ icon: "shield", t: "Quem já fez, sabe fazer", d: "Projetos entregues e operando. Conhecimento técnico acumulado em campo, não em teoria." },
{ icon: "layers", t: "Equipamentos de primeira linha", d: "Trabalhamos com fabricantes líderes globais — desempenho, segurança e vida útil comprovados." },
{ icon: "tool", t: "Suporte técnico de verdade", d: "Da especificação à pós-venda, um time que acompanha o sistema funcionando ao longo dos anos." }];


function WhyTrust() {
  return (
    <section className="band" id="institucional-trust">
      <div className="wrap">
        <SectionHead
          eyebrow="Por que confiar"
          title="Energia é liberdade.<br>E liberdade exige <span class='acc'>quem já fez</span>."
          lead="Não vendemos equipamento — entregamos autonomia. E autonomia se constrói com experiência real, equipamento de primeira e suporte que não some depois da instalação." />
        
        <div className="grid g-4">
          {TRUST_PROOF.map((p, i) =>
          <Reveal key={p.t} delay={i * 70}>
              <div className="card card-hover" style={{ height: "100%" }}>
                <div className="icon-chip" style={{ marginBottom: 22 }}><Icon name={p.icon} /></div>
                <h3 className="h-sub" style={{ marginBottom: 10 }}>{p.t}</h3>
                <p className="body" style={{ fontSize: ".95rem" }}>{p.d}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* Lithium battery explainer */
function LithiumExplainer() {
  return (
    <section className="band-tight">
      <div className="wrap">
        <div className="grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center", gap: "clamp(28px,5vw,72px)" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 18 }}>A peça central</div>
            <h2 className="h-sec" style={{ marginBottom: 24 }}>
              Bateria de lítio:<br /><span className="acc"><span style={{ fontStyle: "italic" }}>power bank</span> inteligente em escala</span>
            </h2>
            <div className="grid" style={{ gap: 18, maxWidth: "52ch" }}>
              <p className="body">A bateria <strong style={{ color: "var(--ink)" }}>armazena a energia gerada pelo sistema solar</strong> — e também pode ser carregada pela rede, garantindo autonomia mesmo quando o clima não ajuda ou em emergências.</p>
              <p className="body">Baseada em <strong style={{ color: "var(--ink)" }}>células de íon-lítio</strong> — a mesma tecnologia de smartphones e veículos elétricos — entrega alto desempenho, eficiência e vida útil longa.</p>
              <p className="body">Integrada ao sistema solar, transforma energia gerada em energia utilizável: conforto, previsibilidade e a liberdade de usar energia no seu ritmo.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Ph slot="ph-bateria-parede" src={RES("fotoBateriaEv", "assets/foto-bateria-EV-garagem.jpg")} tag="foto · bateria instalada na parede" style={{ aspectRatio: "4/5", minHeight: 360 }} />
          </Reveal>
        </div>
        <Punch>Não é um complemento — é a peça que torna seu sistema realmente <span className="acc">autônomo</span>.</Punch>
      </div>
    </section>);

}

/* Why batteries now — market context */
const NOW_REASONS = [
{ icon: "battery", t: "Aumento de apagões", d: "A rede está mais instável. Quedas mais frequentes e imprevisíveis." },
{ icon: "trend", t: "Tarifas de energia", d: "Reajustes e bandeiras tornam o custo imprevisível. Autonomia reduz a exposição." },
{ icon: "bolt", t: "Independência", d: "Baterias eliminam a dependência total da rede — sobretudo em crises." },
{ icon: "reg", t: "Lei 14.300", d: "Guardar energia passou a fazer mais sentido econômico do que devolver à rede." },
{ icon: "leaf", t: "Sustentabilidade", d: "Armazenar o que se produz reduz emissões e maximiza o uso do solar." },
{ icon: "building", t: "Valorização do imóvel", d: "Residências e empresas com energia própria são mais desejadas." },
{ icon: "shield", t: "Pareceres de acesso", d: "Com restrições da rede, baterias permitem gerar energia off-grid." },
{ icon: "scale", t: "Preço do lítio", d: "A tecnologia amadureceu e ficou acessível ao consumidor final." }];


function WhyNow() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead
          eyebrow="Contexto de mercado"
          title="<span class='acc'>Baterias</span>,<br>por que <span style='font-style:italic'>agora</span>?"
          lead="Oito forças que mudaram o jogo — e por que esperar custa mais caro do que agir." />
        
        <div className="grid g-4">
          {NOW_REASONS.map((r, i) =>
          <Reveal key={r.t} delay={i % 4 * 60}>
              <div className="card card-hover" style={{ height: "100%" }}>
                <Icon name={r.icon} style={{ width: 24, height: 24, color: "var(--accent-ink)", marginBottom: 16 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{r.t}</h3>
                <p className="body" style={{ fontSize: ".88rem" }}>{r.d}</p>
              </div>
            </Reveal>
          )}
        </div>
        <Punch wide>Energia é <span className="acc">liberdade</span>.<br />E liberdade é viver com segurança —<br />todos os dias.</Punch>
      </div>
    </section>);

}

/* Comparison block (generators vs batteries / solar w-wo batteries) */
function VsCard({ title, items, good, featured }) {
  return (
    <div className={"card" + (featured ? " invert vs-featured" : "")} style={featured ? {
      borderColor: "transparent",
      backgroundImage: "linear-gradient(var(--surface),var(--surface)), linear-gradient(135deg,var(--accent),color-mix(in oklch,var(--accent) 30%, #fff))",
      backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box",
      border: "2.5px solid transparent"
    } : {}}>
      <div className="flex items-center between" style={{ marginBottom: 22 }}>
        <h3 className="h-sub">{title}</h3>
        {featured && <span className="pill pill-accent">Recomendado</span>}
      </div>
      <ul className="list">
        {items.map((it, idx) =>
        <li key={idx}>
            <span className={`mk ${good ? "mk-yes" : "mk-no"}`}>{good ? "✓" : "✕"}</span>
            <span dangerouslySetInnerHTML={{ __html: it }} />
          </li>
        )}
      </ul>
    </div>);

}

/* "Com ou sem geração solar" — dois futuros do mesmo sistema solar */
function SolarFutures() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead
          eyebrow="Com ou sem baterias"
          title="<span class='acc'>Com ou sem geração solar</span>,<br>o sistema de baterias garante<br>energia contínua e sob controle"
          lead="O mesmo sistema de geração solar pode ter <em class='ital'>dois futuros</em>:" />
        
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 0.78fr", alignItems: "stretch", gap: "clamp(16px,1.8vw,22px)" }}>
          <Reveal>
            <VsCard title="Geração solar sem baterias" good={false} items={[
            "Energia gerada e injetada na rede é <strong>taxada</strong>.",
            "<strong>Dependência</strong> da rede elétrica.",
            "Tarifação crescente e <strong>imprevisível</strong>.",
            "<strong>Vulnerabilidade</strong> a quedas de energia.",
            "Ausência de controle de consumo de energia."]
            } />
          </Reveal>
          <Reveal delay={100}>
            <VsCard title="Com baterias" good={true} featured items={[
            "Energia excedente gerada é <strong>armazenada</strong>.",
            "Energia <strong>sempre disponível</strong>.",
            "<strong>Previsibilidade</strong> de custo.",
            "<strong>Autonomia</strong> mesmo em quedas.",
            "Otimização <strong>inteligente</strong> do uso.",
            "Maior eficiência e retorno preservado."]
            } />
          </Reveal>
          <Reveal delay={200}>
            <Ph tag="foto · baterias instaladas na parede" style={{ height: "100%", minHeight: 280 }} />
          </Reveal>
        </div>
      </div>
    </section>);

}

function Comparisons() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead
          eyebrow="Comparativo"
          title="Por que <span style='font-style:italic'>não</span> <span class='acc'>geradores</span>?"
          lead="Ao avaliar autonomia energética, compare tecnologia, eficiência e impacto." />
        
        <div className="grid g-2" style={{ alignItems: "stretch" }}>
          <Reveal>
            <VsCard title="Gerador a diesel" good={false} items={[
            "Alto ruído, vibração e cheiro constante",
            "Geração de CO₂ e poluentes locais",
            "Alta manutenção (óleo, filtros, combustível)",
            "Demora na partida / troca manual",
            "Energia limitada ao combustível estocado",
            "Volumoso — compromete a estética"]
            } />
          </Reveal>
          <Reveal delay={120}>
            <VsCard title="Sistema de baterias" good={true} featured items={[
            "Operação silenciosa",
            "Zero emissão local",
            "Baixa manutenção",
            "Transição instantânea",
            "Energia contínua e expansível",
            "Solução discreta e moderna"]
            } />
          </Reveal>
        </div>
        <Punch wide>Gerador reage ao problema.<br /><span className="acc">Bateria elimina a dependência</span>.</Punch>
      </div>
    </section>);

}

/* How it works — 3 steps */
const STEPS = [
{ n: "01", t: "Armazene", d: "Utilize a energia armazenada para alimentar sua casa durante uma falha de energia." },
{ n: "02", t: "Aproveite", d: "Mantenha os aparelhos em funcionamento sem interrupções." },
{ n: "03", t: "Recarregue", d: "Carregamento múltiplo: via energia solar (energia limpa), rede elétrica, gerador, etc." }];

function HowItWorks() {
  return (
    <section className="band">
      <div className="wrap">
        <SectionHead
          eyebrow="Entenda"
          title="Como funciona o sistema de <span class='acc'>baterias</span>"
          lead="A energia gerada ou injetada é armazenada e usada de forma inteligente, garantindo continuidade no consumo." />
        
        <div className="grid" style={{ gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(24px,4vw,56px)", alignItems: "center" }}>
          <Reveal>
            <div className="diagram-frame">
              <img src={RES("diagramaCasa", "assets/diagrama-casa.png")} alt="Diagrama: casa com solar, bateria, iluminação e veículo elétrico" />
            </div>
          </Reveal>
          <div className="grid" style={{ gap: 0 }}>
            {STEPS.map((s, i) =>
            <Reveal key={s.n} delay={i * 90}>
                <div style={{ display: "flex", gap: 22, padding: "22px 0", borderBottom: i < 2 ? "1px solid var(--line-2)" : "none" }}>
                  <span className="mono" style={{ color: "var(--accent-ink)", fontSize: "1.4rem", fontWeight: 600, minWidth: 44 }}>{s.n}</span>
                  <div>
                    <h3 className="h-sub" style={{ marginBottom: 8 }}>{s.t}</h3>
                    <p className="body" style={{ fontSize: ".98rem", maxWidth: "44ch" }}>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
        <Punch>Energia sempre <span className="acc">disponível</span>. Silenciosa e limpa.</Punch>
      </div>
    </section>);

}

/* Equipment partner — SolaX */
const SOLAX_FEATS = [
{ icon: "globe", t: "100% off-grid", d: "Inversores capazes de operar totalmente fora da rede, com darkstart." },
{ icon: "app", t: "Controle por app", d: "Monitoramento e otimização na palma da mão, em tempo real." },
{ icon: "layers", t: "Escalabilidade", d: "Expansível de 5,1 a 81,6 kWh, com instalação em paralelo." }];

function EquipmentPartner() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
          <Reveal>
            <div className="fab-logo">
              <image-slot id="fabricante-logo" shape="rect" fit="contain" src={RES("logoSolaxCrop", "assets/logo-solax-power-branco-crop.png")} placeholder=""></image-slot>
              <span className="fab-logo-hint">logo do fabricante · arraste aqui</span>
            </div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>O fabricante</div>
            <h2 className="h-sec" style={{ marginBottom: 20 }}>
              Solução <span className="acc">robusta e versátil</span> de alta performance
            </h2>
            <p className="body" style={{ maxWidth: "50ch", marginBottom: 18 }}>
              Líder global em inversores híbridos, presente em mais de 80 países. O sistema de armazenamento
              destaca-se pela versatilidade e compatibilidade com diversas configurações — incluindo
              <strong style={{ color: "var(--ink)" }}> retrofit</strong> de sistemas existentes.
            </p>
            <p className="body" style={{ maxWidth: "50ch" }}>
              Operação em paralelo, integração com bombas de calor e VEs, conectividade com micro-redes e
              aplicação em plataformas <strong style={{ color: "var(--ink)" }}>VPP</strong>.
            </p>
          </Reveal>
          <Reveal delay={120}><Ph slot="ph-solax-bateria" src={RES("fotoBateriaEv", "assets/foto-bateria-EV-garagem.jpg")} tag="imagem · bateria Solax (real)" fit="cover" style={{ aspectRatio: "4/5", minHeight: 360 }} /></Reveal>
        </div>
        <div className="grid g-3" style={{ marginTop: 40 }}>
          {SOLAX_FEATS.map((f, i) =>
          <Reveal key={f.t} delay={i * 70}>
              <div className="card" style={{ height: "100%" }}>
                <div className="icon-chip" style={{ marginBottom: 18 }}><Icon name={f.icon} /></div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{f.t}</h3>
                <p className="body" style={{ fontSize: ".9rem" }}>{f.d}</p>
              </div>
            </Reveal>
          )}
        </div>
        <Punch>Versatilidade e <span className="acc">integração inteligente</span>.</Punch>
      </div>
    </section>);

}

function InstitutionalTrack() {
  return (
    <>
      <PremiumSolutions />
      <div className="hr-wrap"><hr className="hr" /></div>
      {FLAGS.trustSection &&
      <>
          <WhyTrust />
          <div className="hr-wrap"><hr className="hr" /></div>
        </>
      }
      <LithiumExplainer />
      <div className="hr-wrap"><hr className="hr" /></div>
      <WhyNow />
      <div className="hr-wrap"><hr className="hr" /></div>
      <Comparisons />
      <div className="hr-wrap"><hr className="hr" /></div>
      <HowItWorks />
      <div className="hr-wrap"><hr className="hr" /></div>
      <SolarFutures />
    </>);

}

window.InstitutionalTrack = InstitutionalTrack;
window.EquipmentPartner = EquipmentPartner;