/* ===== MINHAS NOTAS (emitidas + de compra) ===== */

Screens.add('notas', {
  title: 'Notas', nav: true, back: false,
  html: `
    <h1 class="page">Minhas notas</h1>
    <div class="tabs">
      <button class="active" onclick="switchTab(this,'notas-emitidas')">Emitidas</button>
      <button onclick="switchTab(this,'notas-recebidas')">De compra</button>
    </div>

    <div data-tab="notas-emitidas">
      <div class="list-item"><div class="avatar">🧾</div><div class="body"><div class="t1">João Pereira</div><div class="t2">NFS-e + NFC-e · hoje</div></div><div class="end"><div class="val num">R$ 215</div><span class="chip chip-green" style="margin-top:4px">✓ Emitida</span></div></div>
      <div class="list-item"><div class="avatar">🧾</div><div class="body"><div class="t1">Maria Souza</div><div class="t2">NFS-e · ontem</div></div><div class="end"><div class="val num">R$ 180</div><span class="chip chip-warn" style="margin-top:4px">A receber</span></div></div>
      <div class="list-item"><div class="avatar">🧾</div><div class="body"><div class="t1">Antônio (Tonho)</div><div class="t2">NFC-e · 12/jun</div></div><div class="end"><div class="val num">R$ 95</div><span class="chip chip-green" style="margin-top:4px">✓ Paga</span></div></div>
      <div class="list-item"><div class="avatar amber">⏳</div><div class="body"><div class="t1">Carlos Lima</div><div class="t2">Não transmitida · sem sinal</div></div><div class="end"><div class="val num">R$ 60</div><span class="chip chip-muted" style="margin-top:4px">Pendente</span></div></div>
    </div>

    <div data-tab="notas-recebidas" style="display:none">
      <div class="banner banner-info" style="margin-bottom:var(--space-4)"><span class="ic">📥</span><div class="body"><div class="t">Notas das peças que você comprou</div><div class="s">Chegam direto da Dispace quando você compra na loja.</div></div></div>
      <div class="list-item"><div class="avatar amber">📦</div><div class="body"><div class="t1">Dispace Ltda</div><div class="t2">NF-e 4471 · 3 itens · 20/jun</div></div><div class="end"><div class="val num">R$ 410</div><span class="chip chip-green" style="margin-top:4px">✓ Recebida</span></div></div>
      <div class="list-item"><div class="avatar amber">📦</div><div class="body"><div class="t1">Dispace Ltda</div><div class="t2">NF-e 4388 · 5 itens · 08/jun</div></div><div class="end"><div class="val num">R$ 730</div><span class="chip chip-green" style="margin-top:4px">✓ Recebida</span></div></div>
    </div>
  `,
});
