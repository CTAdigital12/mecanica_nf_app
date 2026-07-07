/* ===== FLUXO EMITIR NOTA (wizard de 4 passos + sucesso) ===== */

Screens.add('emitirTipo', {
  title: 'Emitir nota', nav: false, back: true,
  html: `
    <div class="steps"><span class="step current"></span><span class="step"></span><span class="step"></span><span class="step"></span></div>
    <h1 class="page">O que você fez?</h1>
    <p class="page-sub">Escolha. Dá pra cobrar os dois na mesma nota.</p>

    <div class="choice" data-tipo="servico" onclick="pickTipo(this)">
      <span class="ic">🔧</span>
      <div class="body"><div class="t">Cobrei mão de obra</div><div class="s">Serviço, conserto, revisão (vira NFS-e)</div></div>
      <span class="mark">✓</span>
    </div>
    <div class="choice" data-tipo="peca" onclick="pickTipo(this)">
      <span class="ic">⚙️</span>
      <div class="body"><div class="t">Vendi peça</div><div class="s">Corrente, vela, filtro, lâmina (vira NFC-e)</div></div>
      <span class="mark">✓</span>
    </div>
    <div class="choice" data-tipo="ambos" onclick="pickTipo(this)">
      <span class="ic">🧾</span>
      <div class="body"><div class="t">Os dois (ordem de serviço)</div><div class="s">Troquei a peça e cobrei a mão de obra</div></div>
      <span class="mark">✓</span>
    </div>

    <div class="action-bar"><button class="btn btn-primary" id="tipoNext" disabled onclick="nav('emitirCliente')">Continuar <span class="ic">›</span></button></div>
  `,
});

Screens.add('emitirCliente', {
  title: 'Emitir nota', nav: false, back: true,
  html: `
    <div class="steps"><span class="step done"></span><span class="step current"></span><span class="step"></span><span class="step"></span></div>
    <h1 class="page">Para qual cliente?</h1>
    <p class="page-sub">Toque no cliente ou cadastre um novo.</p>

    <div class="field" style="margin-bottom:var(--space-3)"><input type="text" placeholder="🔍 Buscar cliente..."></div>

    <div class="list-item" onclick="nav('emitirItens')"><div class="avatar">👨‍🌾</div><div class="body"><div class="t1">João Pereira</div><div class="t2">Sítio Boa Esperança</div></div><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('emitirItens')"><div class="avatar">👩‍🌾</div><div class="body"><div class="t1">Maria Souza</div><div class="t2">Fazenda Santa Rita</div></div><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('emitirItens')"><div class="avatar">👨‍🌾</div><div class="body"><div class="t1">Antônio (Tonho)</div><div class="t2">Chácara do Tonho</div></div><span class="chev">›</span></div>

    <button class="btn btn-ghost mt4" onclick="nav('emitirItens')"><span class="ic">＋</span> Cadastrar novo cliente</button>
  `,
});

Screens.add('emitirItens', {
  title: 'Emitir nota', nav: false, back: true,
  html: `
    <div class="steps"><span class="step done"></span><span class="step done"></span><span class="step current"></span><span class="step"></span></div>
    <h1 class="page">O que entra na nota?</h1>
    <p class="page-sub">Cliente: <strong>João Pereira · Sítio Boa Esperança</strong></p>

    <div class="section-title">Favoritos (toque para adicionar)</div>
    <div class="list-item" onclick="addItem(this)"><div class="avatar">🔧</div><div class="body"><div class="t1">Revisão de motosserra</div><div class="t2">Mão de obra</div></div><div class="end"><div class="val num">R$ 120</div></div></div>
    <div class="list-item" onclick="addItem(this)">${productThumb('corrente')}<div class="body"><div class="t1">Corrente Husqvarna H30</div><div class="t2">Peça</div></div><div class="end"><div class="val num">R$ 95</div></div></div>
    <div class="list-item" onclick="addItem(this)">${productThumb('vela')}<div class="body"><div class="t1">Vela de ignição</div><div class="t2">Peça</div></div><div class="end"><div class="val num">R$ 28</div></div></div>

    <button class="btn btn-ghost mt4" onclick="addItem(this)"><span class="ic">＋</span> Adicionar outro item</button>

    <hr class="div">
    <div class="total-row"><span class="k">Total da nota</span><span class="v num" id="itensTotal">R$ 215</span></div>

    <div class="action-bar"><button class="btn btn-primary" onclick="nav('emitirRevisao')">Revisar nota <span class="ic">›</span></button></div>
  `,
});

Screens.add('emitirRevisao', {
  title: 'Revisar nota', nav: false, back: true,
  html: `
    <div class="steps"><span class="step done"></span><span class="step done"></span><span class="step done"></span><span class="step current"></span></div>
    <h1 class="page">Confira antes de enviar</h1>
    <p class="page-sub">Depois de transmitida, a nota não pode ser desfeita.</p>

    <div class="card">
      <div class="summary-row"><span class="k">Cliente</span><span class="v">João Pereira</span></div>
      <div class="summary-row"><span class="k">Máquina</span><span class="v">Motosserra Husqvarna 372</span></div>
      <div class="summary-row"><span class="k">Revisão de motosserra</span><span class="v num">R$ 120</span></div>
      <div class="summary-row"><span class="k">Corrente Husqvarna H30</span><span class="v num">R$ 95</span></div>
      <div class="total-row"><span class="k">Total</span><span class="v num">R$ 215</span></div>
    </div>

    <div class="banner banner-info mt4">
      <span class="ic">🧾</span>
      <div class="body"><div class="t">Vai gerar 2 notas</div><div class="s">NFS-e da mão de obra + NFC-e da peça. A gente cuida disso pra você.</div></div>
    </div>

    <div class="banner banner-warn mt4">
      <span class="ic">🔧</span>
      <div class="body"><div class="t">Registrar troca de peça?</div><div class="s">A corrente entra no controle de vida útil da máquina do João. Avisamos quando precisar trocar de novo.</div></div>
    </div>

    <div class="action-bar">
      <button class="btn btn-primary" style="min-height:64px;font-size:var(--fs-lg)" onclick="nav('emitirSucesso')"><span class="ic">✓</span> Transmitir nota</button>
      <button class="btn btn-ghost mt4" onclick="goBack()">Voltar e corrigir</button>
    </div>
  `,
});

Screens.add('emitirSucesso', {
  title: 'Pronto', nav: false, back: false,
  html: `
    <div class="success-screen">
      <div class="seal">✓</div>
      <h2>Nota enviada!</h2>
      <p>As 2 notas do João já foram emitidas e a troca da corrente entrou no controle de manutenção.</p>
      <button class="btn btn-green"><span class="ic">📲</span> Enviar nota pro cliente (WhatsApp)</button>
      <button class="btn btn-ghost mt4"><span class="ic">⬇️</span> Baixar PDF</button>
      <button class="btn btn-ghost mt4" onclick="nav('home')"><span class="ic">🏠</span> Voltar pro início</button>
    </div>
  `,
});
