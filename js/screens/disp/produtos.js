/* ===== DISPACE · PRODUTOS (loja admin, Protheus) + EDITAR =====
   A lista é gerada do catálogo em js/data.js — mesma fonte da loja do cliente. */

const dispProdutosLista = ['corrente', 'pinhao', 'sabre', 'vela', 'filtro'].map(id => {
  const p = product(id);
  return `<div class="list-item" onclick="nav('dispProdutoEdit')">${productThumb(id)}<div class="body"><div class="t1">${p.nome}</div><div class="t2 num">SKU ${p.sku} · ${p.estoque} un · R$ ${p.preco}</div></div><span class="chip ${p.canal.chip}">${p.canal.label}</span><span class="chev">›</span></div>`;
}).join('');

Screens.add('dispProdutos', {
  title: 'Produtos', nav: true, back: false,
  html: `
    <h1 class="page">Produtos</h1>
    <p class="page-sub">Loja da Dispace · edite preço, estoque e canais</p>
    <div style="margin-bottom:var(--space-4)"><span class="sync-chip"><span class="dot"></span> Protheus sincronizado · há 5 min</span></div>

    <div class="banner banner-info" style="margin-bottom:var(--space-4)"><span class="ic">🔗</span><div class="body"><div class="t">Antes: só Mercado Livre</div><div class="s">O mesmo cadastro do Protheus abastece a loja própria e o ML. Editou aqui, atualiza nos dois.</div></div></div>

    <button class="btn btn-primary" style="margin-bottom:var(--space-4)" onclick="nav('dispProdutoEdit')"><span class="ic">＋</span> Novo produto</button>

    ${dispProdutosLista}
  `,
});

Screens.add('dispProdutoEdit', {
  title: 'Editar produto', nav: false, back: true,
  html: `
    <h1 class="page">Editar produto</h1>
    <p class="page-sub">Grava no Protheus e atualiza loja + Mercado Livre</p>

    <div class="field"><label>Foto do produto</label>
      <div style="display:flex;gap:12px;align-items:center">
        <img src="${product('corrente').img}" alt="Corrente Husqvarna H30" style="width:88px;height:88px;border-radius:var(--radius-md);object-fit:cover;border:1px solid var(--border)">
        <button class="btn btn-ghost" style="width:auto"><span class="ic">📷</span> Trocar foto</button>
      </div>
    </div>
    <div class="field"><label>Nome do produto</label><input type="text" value="Corrente Husqvarna H30 · 18&quot;"></div>
    <div class="btn-row">
      <div class="field" style="flex:1"><label>SKU (Protheus)</label><input type="text" value="100245"></div>
      <div class="field" style="flex:1"><label>Preço (R$)</label><input type="text" value="95,00" inputmode="numeric"></div>
    </div>
    <div class="btn-row">
      <div class="field" style="flex:1"><label>Estoque</label><input type="text" value="12" inputmode="numeric"></div>
      <div class="field" style="flex:1"><label>Categoria</label><input type="text" value="Peça de desgaste"></div>
    </div>
    <div class="field"><label>Vida útil estimada (pro radar)</label><input type="text" value="1 corrente ≈ 90 dias de uso médio"></div>
    <div class="field"><label>Canais de venda</label>
      <div class="choice selected"><span class="ic">🛒</span><div class="body"><div class="t">Loja própria Dispace</div><div class="s">Vende no site do cliente</div></div><span class="mark">✓</span></div>
      <div class="choice selected"><span class="ic">📦</span><div class="body"><div class="t">Mercado Livre</div><div class="s">Mantém o anúncio no marketplace</div></div><span class="mark">✓</span></div>
    </div>

    <div class="action-bar">
      <button class="btn btn-primary" onclick="nav('dispProdutos')"><span class="ic">✓</span> Salvar no Protheus</button>
      <button class="btn btn-ghost mt4" onclick="goBack()">Cancelar</button>
    </div>
  `,
});
