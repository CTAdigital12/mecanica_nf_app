/* ===== DISPACE · CLIENTES (mecânicos que compram e emitem) ===== */

Screens.add('dispClientes', {
  title: 'Clientes', nav: true, back: false,
  html: `
    <h1 class="page">Clientes</h1>
    <p class="page-sub">Quem compra peça e emite nota pela Dispace</p>
    <div class="field" style="margin-bottom:var(--space-4)"><input type="text" placeholder="🔍 Buscar cliente..."></div>
    <div class="list-item" onclick="nav('dispRadar')"><div class="avatar">👷</div><div class="body"><div class="t1">Seu Zé</div><div class="t2">MEI · 3 peças no ponto de troca</div></div><span class="chip chip-warn">recompra</span><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('dispRadar')"><div class="avatar">🧑‍🔧</div><div class="body"><div class="t1">Oficina do Carlos</div><div class="t2">ME · 2 peças no ponto de troca</div></div><span class="chip chip-warn">recompra</span><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('dispRadar')"><div class="avatar">👨‍🔧</div><div class="body"><div class="t1">Antônio (Tonho)</div><div class="t2">MEI · 1 peça vencida</div></div><span class="chip chip-danger">urgente</span><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('dispRadar')"><div class="avatar">🧑‍🔧</div><div class="body"><div class="t1">Marcos Ferragens</div><div class="t2">ME · em dia</div></div><span class="chev">›</span></div>
  `,
});
