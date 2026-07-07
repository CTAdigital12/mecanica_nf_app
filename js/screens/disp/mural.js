/* ===== DISPACE · MURAL (publicar comunicados) ===== */

Screens.add('dispMural', {
  title: 'Mural', nav: true, back: false,
  html: `
    <h1 class="page">Mural</h1>
    <p class="page-sub">Publique ofertas e novidades pros clientes</p>
    <button class="btn btn-primary" style="margin-bottom:var(--space-5)"><span class="ic">＋</span> Novo comunicado</button>

    <div class="post">
      <div class="cover amber">Promoção: correntes com 20% OFF</div>
      <div class="pbody">
        <div class="who"><span>👁️</span> 128 clientes viram · 14 abriram a loja</div>
        <div class="list-item" style="margin-bottom:var(--space-3)">${productThumb('corrente')}<div class="body"><div class="t1">Produto vinculado</div><div class="t2 num">Corrente H30 · SKU 100245</div></div><span class="chip chip-green">ativo</span></div>
        <div class="btn-row"><button class="btn btn-ghost" style="flex:1"><span class="ic">✏️</span> Editar</button><button class="btn btn-ghost" style="flex:1"><span class="ic">🔗</span> Trocar produto</button></div>
      </div>
    </div>

    <div class="post">
      <div class="cover">Chegou: robô Automower 2026</div>
      <div class="pbody">
        <div class="who"><span>👁️</span> 96 clientes viram · 9 abriram a loja</div>
        <div class="btn-row"><button class="btn btn-ghost" style="flex:1"><span class="ic">✏️</span> Editar</button><button class="btn btn-primary" style="flex:1" onclick="nav('dispProdutos')"><span class="ic">🔗</span> Vincular produto</button></div>
      </div>
    </div>
  `,
});
