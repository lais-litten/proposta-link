# +BESS — Propostas por Fabricante

Repositório das propostas comerciais geradas pela plataforma **+BESS** para integradores de energia solar.

A plataforma preenche os tokens `##token##` com os dados do integrador/cliente e serve a proposta ao cliente final. Serão **4 fabricantes**, cada um em sua própria pasta autocontida.

## Fabricantes

| Fabricante | Pasta | Status |
|---|---|---|
| Solax | [`solax/`](./solax/) | ✅ Protótipo em finalização |
| _(a definir)_ | — | ⏳ Em breve |
| _(a definir)_ | — | ⏳ Em breve |
| _(a definir)_ | — | ⏳ Em breve |

Cada pasta é **autocontida**: abre pelo seu próprio HTML de entrada e carrega seus próprios `js/`, `assets/` e `styles.css`. A documentação técnica de cada proposta fica no `README.md` de dentro da pasta.

## Como abrir uma proposta

- **Para desenvolver:** sirva a pasta do fabricante como arquivos estáticos (qualquer servidor local) e abra o HTML de entrada — ex. `solax/Proposta Solax.html`. Sem build step: React 18 + Babel Standalone transpilam o JSX no browser.
- **Só para visualizar:** se houver uma versão `… (standalone).html`, ela é self-contained (tudo embutido) e abre direto, offline.

## Estrutura compartilhada entre fabricantes

O miolo **institucional** ("Por que baterias") e **comercial** (dimensionamento, cargas, kit, técnica) é o mesmo entre fabricantes. Muda apenas o **bloco do fabricante**: logo, fotos de produto, banner, app/tecnologia e os nomes em `battery_manufacturer` / `inverter_manufacturer`.

> Detalhes de tokens, slots de imagem e tema estão no README de cada pasta — comece por [`solax/README.md`](./solax/README.md).

---

*Contato: Laís — lais@litten.com.br*
