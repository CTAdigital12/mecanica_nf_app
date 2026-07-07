/* ===== DISPACE · PEDIDOS ===== */

Screens.add('dispPedidos', {
  title: 'Pedidos', nav: true, back: false,
  html: `
    <h1 class="page">Pedidos</h1>
    <p class="page-sub">Compras dos clientes · sincroniza com o Protheus</p>
    <div style="margin-bottom:var(--space-4)"><span class="sync-chip"><span class="dot"></span> Nota fiscal automática pelo Protheus</span></div>

    <div class="tabs">
      <button class="active" onclick="switchTab(this,'ped-abertos')">Em aberto</button>
      <button onclick="switchTab(this,'ped-enviados')">Enviados</button>
    </div>

    <div data-tab="ped-abertos">
      <div class="list-item"><div class="avatar amber">🧾</div><div class="body"><div class="t1">Seu Zé · #4471</div><div class="t2">Corrente H30 (troca do radar) · hoje</div></div><div class="end"><div class="val num">R$ 95</div><span class="chip chip-warn" style="margin-top:4px">separar</span></div></div>
      <div class="list-item"><div class="avatar amber">🧾</div><div class="body"><div class="t1">Oficina do Carlos · #4470</div><div class="t2">Pinhão + sabre · hoje</div></div><div class="end"><div class="val num">R$ 182</div><span class="chip chip-warn" style="margin-top:4px">separar</span></div></div>
      <div class="list-item"><div class="avatar amber">🧾</div><div class="body"><div class="t1">Marcos Ferragens · #4468</div><div class="t2">Óleo 2T (x10) · ontem</div></div><div class="end"><div class="val num">R$ 220</div><span class="chip chip-info" style="margin-top:4px">faturar</span></div></div>
    </div>
    <div data-tab="ped-enviados" style="display:none">
      <div class="list-item"><div class="avatar">📦</div><div class="body"><div class="t1">Seu Zé · #4460</div><div class="t2">NF-e emitida · a caminho</div></div><div class="end"><div class="val num">R$ 410</div><span class="chip chip-green" style="margin-top:4px">enviado</span></div></div>
    </div>
  `,
});
