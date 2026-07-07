# Mecânica Nota Fácil (MNF) — wireframe

Protótipo navegável (fase conceito) do emissor de notas para mecânicos de agricultura familiar.

## Estrutura

```
index.html            shell do app (sidebar, topbar, bottomnav) + ordem dos scripts
tokens.css            design tokens
css/
  layout.css          shell responsivo (mobile: nav embaixo · desktop: sidebar)
  components.css      componentes reutilizáveis (card, btn, chip, list-item, product...)
js/
  registry.js         registro de telas (Screens.add)
  data.js             dados de exemplo — catálogo de produtos com fotos
  app.js              navegação (nav, goBack, setMode, abas)
  screens/            uma tela (ou fluxo) por arquivo — lado do cliente
    login.js  home.js  emitir.js  notas.js  clientes.js  loja.js  mural.js
  screens/disp/       telas do lado Dispace (admin + comercial)
    painel.js  radar.js  produtos.js  pedidos.js  clientes.js  mural.js
img/products/         fotos reais dos produtos (Wikimedia Commons, licença livre)
plano.md              plano do projeto
```

## Como adicionar uma tela

Crie um arquivo em `js/screens/`, registre com `Screens.add('nome', { title, nav, back, html })` e inclua o `<script>` no `index.html` (antes do `app.js`).

Mobile-first, alvo de toque grande, linguagem do mecânico. Método de handoff inspirado no Atlas CRM.
