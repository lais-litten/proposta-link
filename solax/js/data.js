/* =========================================================================
   DADOS DA PROPOSTA — PLACEHOLDERS no formato do dev: ##snake_case##
   --------------------------------------------------------------------------
   Os valores ##token## são exatamente os que o sistema do integrador substitui.
   Copiados 1:1 do PDF base (INTEGRADOR_CanadianEPCUBE_PropostaCompleta).
   Campos SEM token = texto fixo (não são preenchidos pela plataforma).
   O campo `ph` espelha o token p/ o marcador visual (toggle 🔖 Placeholders).
   ========================================================================= */
window.PROPOSTA = {
  meta: {
    status: "INTRANSFERÍVEL",
    validUntil: "##quote_validity##",
    quoteDate: "##quote_date##",
  },

  integrator: {
    tagline: "Soluções em energia",
    logo: "",   // ##logo## — injetado pela plataforma (URL da imagem)
    photo: "",  // foto do consultor (sem token específico no PDF base)
    userNome: "##user_nome##",
    userSobrenome: "##user_sobrenome##",
    phone: "##user_telefone##",
    address: "##user_endereco##",
  },

  client: {
    name: "##client_name##",
    project: "Projeto de sistema de armazenamento de energia", // texto fixo no PDF
  },

  /* Flags por integrador — controlam quais seções entram na proposta. */
  flags: {
    trustSection: false,
  },

  /* Dimensionamento do projeto (PDF pág. 9) */
  sizing: [
    { label: "Potência do projeto fotovoltaico", value: "##total_pv_power_kwp## kWp", ph: "total_pv_power_kwp" },
    { label: "Geração estimada", value: "##monthly_generation_kwh## kWh/mês", ph: "monthly_generation_kwh" },
    { label: "Energia armazenável", value: "##battery_capacity_kwh## kWh", ph: "battery_capacity_kwh" },
    { label: "Autonomia sem reduções", value: "##h## a ##h2## horas", ph: "h / h2" },
    { label: "Economia mensal estimada", value: "R$ ##monthly_savings_r## /mês", ph: "monthly_savings_r" },
  ],

  /* Cargas atendidas (PDF pág. 10) — 10 linhas fixas (equip_1..10). */
  loads: [
    { name: "##equip_1_name##",  qty: "##equip_1_qty##",  power: "##equip_1_power##",  n: 1 },
    { name: "##equip_2_name##",  qty: "##equip_2_qty##",  power: "##equip_2_power##",  n: 2 },
    { name: "##equip_3_name##",  qty: "##equip_3_qty##",  power: "##equip_3_power##",  n: 3 },
    { name: "##equip_4_name##",  qty: "##equip_4_qty##",  power: "##equip_4_power##",  n: 4 },
    { name: "##equip_5_name##",  qty: "##equip_5_qty##",  power: "##equip_5_power##",  n: 5 },
    { name: "##equip_6_name##",  qty: "##equip_6_qty##",  power: "##equip_6_power##",  n: 6 },
    { name: "##equip_7_name##",  qty: "##equip_7_qty##",  power: "##equip_7_power##",  n: 7 },
    { name: "##equip_8_name##",  qty: "##equip_8_qty##",  power: "##equip_8_power##",  n: 8 },
    { name: "##equip_9_name##",  qty: "##equip_9_qty##",  power: "##equip_9_power##",  n: 9 },
    { name: "##equip_10_name##", qty: "##equip_10_qty##", power: "##equip_10_power##", n: 10 },
  ],
  minInverter: "##inverter_min_power##",

  /* Kit da proposta (PDF pág. 14). O comparador de 3 kits foi removido;
     apenas o kit RECOMENDADO é exibido em "Sua Proposta Comercial".
     brand/tier/headline/highlights = texto fixo (copy da SolaX, sem token). */
  kits: [
    {
      id: "essencial",
      brand: "SolaX", tier: "Essencial", headline: "Backup do essencial", recommended: false,
      storable: "14 kWh", inverter: "5 kW",
      autonomyRange: "3,4 a 6,8 h", autonomy100: "3,4 h", autonomy50: "6,8 h",
      investment: "R$ 58.400,00",
      highlights: ["Cargas críticas", "Modular — expansível", "Operação silenciosa"],
    },
    {
      id: "premium",
      brand: "SolaX", tier: "Premium", headline: "Equilíbrio ideal", recommended: true,
      storable: "##battery_capacity_kwh##",
      inverter: "##total_inverter_power_kw##",
      autonomyRange: "##h## a ##h2## horas",
      autonomy100: "##h##",
      autonomy50: "##h2##",
      investment: "R$ ##final_price##",
      highlights: ["Autonomia da casa toda", "Pronto para VE e bombas de calor", "Gestão inteligente via app"],
    },
    {
      id: "performance",
      brand: "SolaX", tier: "Performance", headline: "Autonomia estendida", recommended: false,
      storable: "46 kWh", inverter: "12 kW",
      autonomyRange: "11,3 a 22,6 h", autonomy100: "11,3 h", autonomy50: "22,6 h",
      investment: "R$ 164.900,00",
      highlights: ["Off-grid prolongado", "Operação em paralelo", "Pronto para VPP"],
    },
  ],

  /* Linhas comparativas (comparador removido — mantido p/ reinserção futura) */
  compareRows: [
    { key: "storable",      label: "Energia armazenável" },
    { key: "inverter",      label: "Potência de inversor" },
    { key: "autonomyRange", label: "Autonomia" },
    { key: "autonomy100",   label: "Autonomia · 100% da carga" },
    { key: "autonomy50",    label: "Autonomia · 50% da carga" },
    { key: "investment",    label: "Investimento total", strong: true },
  ],

  /* Dados técnicos (PDF pág. 15) */
  scope: [
    { label: "Módulos fotovoltaicos", value: "##pv_modules_qty##", ph: "pv_modules_qty" },
    { label: "Potência do projeto FV", value: "##total_pv_power_kwp##", ph: "total_pv_power_kwp" },
    { label: "Fabricante da bateria", value: "##battery_manufacturer##", ph: "battery_manufacturer" },
    { label: "Inversores", value: "##inverter_manufacturer##", ph: "inverter_manufacturer" },
  ],
  warranties: [
    { label: "Módulos fotovoltaicos", value: "##pv_module_warranty_years## anos", ph: "pv_module_warranty_years" },
    { label: "Inversores", value: "##inverter_warranty_years## anos", ph: "inverter_warranty_years" },
    { label: "Bateria", value: "##battery_warranty_years## anos", ph: "battery_warranty_years" },
    { label: "Instalação", value: "1 ano" },           // fixo — sem token
    { label: "Assistência técnica", value: "1 ano" },   // fixo — sem token
  ],

  /* Implementação (SEÇÃO REMOVIDA do Solax — guardada em _GUARDADO).
     Token ##prazo_instalacao## vive aqui; só volta com a seção. */
  timeline: [
    "Assinatura do contrato",
    "Pagamento do sinal",
    "Visita técnica",
    "Projeto de engenharia",
    "Solicitação do parecer de acesso",
    "Entrega dos equipamentos",
    "Instalação",
    "Vistoria e troca de medidor bidirecional",
  ],
  included: [
    { t: "Dimensionamento do projeto", icon: "ruler" },
    { t: "Equipamentos necessários", icon: "box" },
    { t: "Monitoramento e assistência", icon: "activity" },
    { t: "Instalação em até ##prazo_instalacao## dias", icon: "tool" },
    { t: "Homologação na concessionária", icon: "doc" },
  ],

  /* Pagamento (SEÇÃO REMOVIDA do Solax — guardada em _GUARDADO).
     Tokens ##desconto_a_vista## e ##qtd_vezes_maxima## vivem aqui. */
  payment: {
    stages: [
      { pct: "10%", note: "Entrada" },
      { pct: "+50%", note: "Equipamento" },
      { pct: "+30%", note: "Instalação" },
      { pct: "+10%", note: "30 dias após a instalação" },
    ],
    cash: "##desconto_a_vista##% de desconto",
    card: "Em até ##qtd_vezes_maxima##",
  },

  /* CTA final */
  cta: {
    eyebrow: "Pronto para começar?",
    primary: "Agendar visita técnica",
    secondary: "Baixar proposta (PDF)",
    primaryHref: "#contato",
  },
};
