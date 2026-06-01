# Proposta Solax — Documentação para Desenvolvimento

> **Status:** Protótipo visual em finalização. HTML e assets sendo entregues em paralelo.  
> Dúvidas: Laís — lais@litten.com.br

---

## O que é este projeto

Gerador de propostas personalizadas para integradores de energia solar (baterias Solax).  
O integrador preenche um formulário na plataforma → os dados são injetados nos tokens `##token##` → a proposta é gerada e exibida ao cliente final.

**Três perfis de conteúdo:**
- **Plataforma / dev** — injeta os tokens e serve os arquivos
- **Integrador** — preenche os dados e sobe suas próprias imagens
- **Fabricante (Solax)** — imagens e logos já vêm embutidos na proposta

---

## Stack & arquitetura

- **Sem build step.** React 18 + Babel Standalone transpilam JSX direto no browser.
- Basta servir os arquivos estáticos — não há bundler, npm install ou processo de build.

**Ponto de entrada:** `Proposta Solax.html`  
Carrega os arquivos nesta ordem:

```
styles.css
js/data.js
js/image-slot.js
js/tweaks-panel.jsx
js/ui.jsx
js/institutional.jsx
js/commercial.jsx
js/app.jsx
```

---

## Estrutura de arquivos

| Arquivo | Papel |
|---|---|
| `js/data.js` | Toda a copy e os placeholders. **É o arquivo que o dev mais mexe.** |
| `js/ui.jsx` | Helpers compartilhados: `Ph` (slot de imagem), `PH` (placeholder de texto), `Reveal`, `Icon`, `SectionHead` |
| `js/institutional.jsx` | Trilha 1 — "Por que baterias" + bloco "O fabricante" |
| `js/commercial.jsx` | Trilha 2 — proposta comercial (dimensionamento, cargas, kit, técnica, tecnologia) |
| `js/app.jsx` | Shell: Hero, Topbar, toggle de tema, contato, CTA, rodapé |
| `assets/` | Imagens e logos |

---

## Placeholders de texto — formato `##snake_case##`

A plataforma substitui os tokens `##token##` diretamente no conteúdo. Eles vivem em `data.js`.  
O componente `<PH name="token">` apenas espelha o token para o marcador visual (toggle 🔖 "Placeholders" no canto superior direito) — não interfere na substituição.

### Lista completa por seção

| Seção | Tokens |
|---|---|
| Meta | `quote_validity`, `quote_date` |
| Integrador | `logo` (URL da imagem), `user_nome`, `user_sobrenome`, `user_telefone`, `user_endereco` |
| Cliente | `client_name` |
| Dimensionamento | `total_pv_power_kwp`, `monthly_generation_kwh`, `battery_capacity_kwh`, `h`, `h2`, `monthly_savings_r` |
| Cargas atendidas | `equip_1_name` … `equip_10_name` (+ `_qty` e `_power` para cada um, 1–10) |
| Inversor | `inverter_min_power`, `total_inverter_power_kw` |
| Kit recomendado | `battery_capacity_kwh`, `total_inverter_power_kw`, `h`, `h2`, `final_price` |
| Dados técnicos | `pv_modules_qty`, `total_pv_power_kwp`, `battery_manufacturer`, `inverter_manufacturer` |
| Garantias | `pv_module_warranty_years`, `inverter_warranty_years`, `battery_warranty_years` |

**Tokens em standby** (seções removidas, podem voltar):  
`prazo_instalacao`, `desconto_a_vista`, `qtd_vezes_maxima` — só reativar se as seções de Implementação/Pagamento forem reinseridas.

> **Nota técnica:** Tokens longos sem espaço estouravam a tabela de dimensionamento — já corrigido com `minmax(0,1fr)` + `overflow-wrap`. Valores reais (curtos) não têm esse problema.

---

## Slots de imagem (`<image-slot id="...">`)

Cada slot persiste a imagem arrastada pelo usuário via `id`.

### Imagens do INTEGRADOR (ele preenche na plataforma)

| ID do slot | Descrição |
|---|---|
| `ph-integrador-projeto` | Foto do projeto dele — aparece no topo da proposta |
| `proposta-bg` | Fundo da abertura comercial |
| `avatar` | Foto do consultor |
| via `##logo##` | Logo da empresa do integrador |

### Imagens do FABRICANTE — Solax (já vêm na proposta)

| ID do slot | Descrição |
|---|---|
| `fabricante-logo` | Logo Solax — default: `logo-solax-power-branco-crop.png` |
| `flex-divider-solax-logo` | Logo Solax sobre o banner full-bleed |
| `ph-solax-bateria` | Foto de produto |
| `ph-solax-produto` | Foto de produto |
| `ph-bateria-parede` | Foto de instalação |
| `tech-bg` | Background seção de tecnologia |
| `tech-app` | Imagem do app |
| `bvb-logo` | Logo da parceria Borussia Dortmund |

---

## Tema (claro / escuro)

- **Default:** escuro
- Definido em `app.jsx` e num script inline no `<head>` (evita flash no carregamento)
- Persistido em `localStorage["bess-theme"]` com valores `"dark"` / `"light"`
- Toggle visível no canto superior direito da proposta

**Toggle de placeholders:** `localStorage["bess-showph"]`, ativa a classe `body.show-ph`

---

## Observações gerais

- As imagens em `assets/` podem estar incompletas — sendo adicionadas em paralelo.
- O HTML é referência visual e de comportamento, não necessariamente código de produção.
- Seções marcadas como `_GUARDADO` no protótipo foram removidas temporariamente e podem ser reinseridas.

---

*Documentação em construção — confirmando informações com Laís conforme avança.*
