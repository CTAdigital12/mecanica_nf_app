/* ===== HOME do cliente (mecânico) ===== */

Screens.add('home', {
  title: null, nav: true, back: false,
  html: `
    <p class="label">Bom dia,</p>
    <h1 class="page" style="margin-top:2px">Seu Zé</h1>

    <button class="btn btn-primary" style="min-height:64px;font-size:var(--fs-lg)" onclick="nav('emitirTipo')">
      <span class="ic">🧾</span> Emitir nota agora
    </button>

    <div class="section-title">Atalhos</div>
    <div class="action-grid">
      <button class="action-tile" onclick="nav('notas')"><span class="ic">📂</span><span class="ttl">Minhas notas</span><span class="sub">Emitidas e de compra</span></button>
      <button class="action-tile" onclick="nav('clientes')"><span class="ic">👨‍🌾</span><span class="ttl">Meus clientes</span><span class="sub">8 cadastrados</span></button>
      <button class="action-tile" onclick="nav('loja')"><span class="ic">🛒</span><span class="ttl">Loja Dispace</span><span class="sub">Peças originais</span></button>
      <button class="action-tile" onclick="nav('mural')"><span class="ic">📣</span><span class="ttl">Mural</span><span class="sub">2 ofertas novas</span><span class="badge-count" style="position:absolute;top:12px;right:12px">2</span></button>
    </div>

    <div class="section-title">Este mês</div>
    <div class="kpi-row">
      <div class="kpi"><div class="k-label">Faturei</div><div class="k-val num">R$ 3.480</div><div class="k-sub">14 notas emitidas</div></div>
      <div class="kpi"><div class="k-label">A receber</div><div class="k-val num">R$ 920</div><div class="k-sub">3 notas</div></div>
    </div>
  `,
});
