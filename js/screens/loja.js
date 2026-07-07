/* ===== LOJA DISPACE (vitrine do cliente) =====
   O grid é gerado a partir do catálogo em js/data.js — foto real por produto. */

const lojaGrid = PRODUCTS.map(p => `
  <div class="product">
    <div class="ph"><img src="${p.img}" alt="${p.nome}" loading="lazy"></div>
    <div class="info">
      <div class="nm">${p.nome}</div>
      <div class="label num">SKU ${p.sku} · ${p.estoque} em estoque</div>
      <div class="pr num">R$ ${p.preco}</div>
      <div class="add"><button class="btn btn-green"><span class="ic">＋</span> Adicionar</button></div>
    </div>
  </div>`).join('');

Screens.add('loja', {
  title: 'Loja Dispace', nav: true, back: false,
  html: `
    <h1 class="page">Loja Dispace</h1>
    <p class="page-sub">Peças originais, entrega na sua oficina</p>
    <div style="margin-bottom:var(--space-4)"><span class="sync-chip"><span class="dot"></span> Estoque e preço em tempo real (Protheus)</span></div>
    <div class="field" style="margin-bottom:var(--space-4)"><input type="text" placeholder="🔍 Buscar peça ou código..."></div>

    <div class="product-grid">${lojaGrid}</div>

    <div class="banner banner-green mt6"><span class="ic">🚚</span><div class="body"><div class="t">Frete grátis acima de R$ 300</div><div class="s">A nota de compra cai direto em "Minhas notas" e a peça entra no seu controle de vida útil.</div></div></div>
  `,
});
