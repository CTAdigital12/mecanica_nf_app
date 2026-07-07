/* ===== MEUS CLIENTES (lista + detalhe com máquinas) ===== */

Screens.add('clientes', {
  title: 'Clientes', nav: true, back: false,
  html: `
    <h1 class="page">Meus clientes</h1>
    <div class="field" style="margin-bottom:var(--space-4)"><input type="text" placeholder="🔍 Buscar cliente ou máquina..."></div>
    <div class="list-item" onclick="nav('clienteDetalhe')"><div class="avatar">👨‍🌾</div><div class="body"><div class="t1">João Pereira</div><div class="t2">Sítio Boa Esperança · 3 máquinas</div></div><span class="chip chip-warn">1 a vencer</span><span class="chev">›</span></div>
    <div class="list-item"><div class="avatar">👩‍🌾</div><div class="body"><div class="t1">Maria Souza</div><div class="t2">Fazenda Santa Rita · 2 máquinas</div></div><span class="chev">›</span></div>
    <div class="list-item"><div class="avatar">👨‍🌾</div><div class="body"><div class="t1">Antônio (Tonho)</div><div class="t2">Chácara do Tonho · 1 máquina</div></div><span class="chip chip-danger">vencida</span><span class="chev">›</span></div>
    <button class="btn btn-ghost mt4"><span class="ic">＋</span> Cadastrar cliente</button>
  `,
});

Screens.add('clienteDetalhe', {
  title: 'Cliente', nav: true, back: true,
  html: `
    <h1 class="page">João Pereira</h1>
    <p class="page-sub">Sítio Boa Esperança · (45) 99999-0000</p>

    <div class="btn-row" style="margin-bottom:var(--space-5)">
      <button class="btn btn-primary" onclick="nav('emitirItens')"><span class="ic">🧾</span> Emitir</button>
      <button class="btn btn-ghost"><span class="ic">📲</span> WhatsApp</button>
    </div>

    <div class="section-title">Máquinas</div>
    <div class="card">
      <div style="display:flex;gap:12px;align-items:center"><span style="font-size:28px">🪚</span><div style="flex:1"><div style="font-weight:600">Motosserra Husqvarna 372 XP</div><div class="muted" style="font-size:var(--fs-sm)">Corrente trocada 12/jun</div></div></div>
      <div class="life"><div class="life-bar"><span style="width:78%;background:var(--warn)"></span></div><div class="life-meta"><span>Corrente: 78% da vida</span><span style="color:var(--warn);font-weight:600">trocar em ~9 dias</span></div></div>
    </div>
    <div class="card">
      <div style="display:flex;gap:12px;align-items:center"><span style="font-size:28px">🌿</span><div style="flex:1"><div style="font-weight:600">Roçadeira Stihl FS 220</div><div class="muted" style="font-size:var(--fs-sm)">Vela trocada 02/abr</div></div></div>
      <div class="life"><div class="life-bar"><span style="width:40%;background:var(--green)"></span></div><div class="life-meta"><span>Vela: 40% da vida</span><span>ok</span></div></div>
    </div>
    <div class="card">
      <div style="display:flex;gap:12px;align-items:center"><span style="font-size:28px">🤖</span><div style="flex:1"><div style="font-weight:600">Robô Husqvarna Automower 430X</div><div class="muted" style="font-size:var(--fs-sm)">Lâminas trocadas 15/mai</div></div></div>
      <div class="life"><div class="life-bar"><span style="width:55%;background:var(--green)"></span></div><div class="life-meta"><span>Lâminas: 55% da vida</span><span>ok</span></div></div>
    </div>
  `,
});
