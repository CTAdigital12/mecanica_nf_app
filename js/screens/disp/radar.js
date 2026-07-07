/* ===== DISPACE · RADAR DE VIDA ÚTIL ===== */

Screens.add('dispRadar', {
  title: 'Radar de vida útil', nav: true, back: false,
  html: `
    <h1 class="page">Radar de vida útil</h1>
    <p class="page-sub">Peças de desgaste que a Dispace vendeu, chegando no ponto de troca. Acione o cliente pra oferecer a troca ou manutenção.</p>

    <div class="tabs">
      <button class="active" onclick="switchTab(this,'rad-troca')">No ponto de troca</button>
      <button onclick="switchTab(this,'rad-uso')">Em uso</button>
      <button onclick="switchTab(this,'rad-venc')">Vencidas</button>
    </div>

    <div data-tab="rad-troca">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:10px">
          <div style="display:flex;gap:10px;align-items:center">${productThumb('corrente')}<div><div style="font-weight:600;font-size:var(--fs-md)">Corrente Husqvarna H30 · 18"</div><div class="muted" style="font-size:var(--fs-sm)">Peça de desgaste · vendida 12/mai · SKU 100245</div></div></div>
          <span class="chip chip-warn">ponto de troca</span>
        </div>
        <div class="life"><div class="life-bar"><span style="width:92%;background:var(--warn)"></span></div><div class="life-meta"><span>92% da vida útil estimada</span><span style="color:var(--warn);font-weight:600">~1 corrente restante</span></div></div>
        <div class="muted mt2" style="font-size:var(--fs-sm)">Cliente: <strong>Seu Zé</strong> · máquina final: motosserra do Sítio Boa Esperança</div>
        <div class="btn-row mt4">
          <button class="btn btn-primary" style="min-height:48px"><span class="ic">📲</span> WhatsApp</button>
          <button class="btn btn-ghost" style="min-height:48px"><span class="ic">📞</span> Ligar</button>
        </div>
        <button class="btn btn-green mt4" style="min-height:48px" onclick="nav('dispPedidos')"><span class="ic">🛒</span> Oferecer troca (montar pedido)</button>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:10px">
          <div style="display:flex;gap:10px;align-items:center">${productThumb('pinhao')}<div><div style="font-weight:600;font-size:var(--fs-md)">Pinhão / coroa 3/8"</div><div class="muted" style="font-size:var(--fs-sm)">Peça de desgaste · vendida 28/mar · SKU 100733</div></div></div>
          <span class="chip chip-warn">ponto de troca</span>
        </div>
        <div class="life"><div class="life-bar"><span style="width:88%;background:var(--warn)"></span></div><div class="life-meta"><span>troca a cada 2-3 correntes</span><span style="color:var(--warn);font-weight:600">na 3ª corrente</span></div></div>
        <div class="muted mt2" style="font-size:var(--fs-sm)">Cliente: <strong>Oficina do Carlos</strong></div>
        <div class="btn-row mt4">
          <button class="btn btn-primary" style="min-height:48px"><span class="ic">📲</span> WhatsApp</button>
          <button class="btn btn-ghost" style="min-height:48px"><span class="ic">📞</span> Ligar</button>
        </div>
        <button class="btn btn-green mt4" style="min-height:48px" onclick="nav('dispPedidos')"><span class="ic">🛒</span> Oferecer troca (montar pedido)</button>
      </div>
    </div>

    <div data-tab="rad-uso" style="display:none">
      <div class="list-item">${productThumb('filtro')}<div class="body"><div class="t1">Filtro de ar FS</div><div class="t2">Seu Zé · 40% da vida</div></div><span class="chip chip-green">em uso</span></div>
      <div class="list-item">${productThumb('vela')}<div class="body"><div class="t1">Vela NGK</div><div class="t2">Maria Souza · 55% da vida</div></div><span class="chip chip-green">em uso</span></div>
    </div>

    <div data-tab="rad-venc" style="display:none">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:10px">
          <div style="display:flex;gap:10px;align-items:center">${productThumb('sabre')}<div><div style="font-weight:600;font-size:var(--fs-md)">Sabre / barra guia 18"</div><div class="muted" style="font-size:var(--fs-sm)">Peça de desgaste · dura ~4 correntes · SKU 100150</div></div></div>
          <span class="chip chip-danger">vencida</span>
        </div>
        <div class="muted mt2" style="font-size:var(--fs-sm)">Cliente: <strong>Antônio (Tonho)</strong> · risco de danificar a corrente nova</div>
        <button class="btn btn-primary mt4" style="min-height:48px"><span class="ic">📲</span> Acionar cliente com urgência</button>
      </div>
    </div>
  `,
});
