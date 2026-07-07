/* ===== MURAL (lado do cliente) + AVISOS ===== */

Screens.add('mural', {
  title: 'Mural', nav: true, back: true,
  html: `
    <h1 class="page">Mural de avisos</h1>
    <p class="page-sub">Recados e ofertas da Dispace</p>

    <div class="post">
      <div class="cover amber">Promoção: correntes com 20% OFF</div>
      <div class="pbody">
        <div class="who"><span>🏢</span> Dispace Ltda · hoje</div>
        <p>Só esta semana: toda linha de correntes Husqvarna com 20% de desconto. Aproveite e já deixe estoque na oficina.</p>
        <button class="btn btn-primary" onclick="nav('loja')"><span class="ic">🛒</span> Ver corrente na loja</button>
      </div>
    </div>

    <div class="post">
      <div class="cover">Chegou: robô Automower 2026</div>
      <div class="pbody">
        <div class="who"><span>🏢</span> Dispace Ltda · 2 dias</div>
        <p>Novo robô cortador com mais autonomia. Vire revendedor e ganhe comissão indicando pros seus clientes.</p>
        <button class="btn btn-primary" onclick="nav('loja')"><span class="ic">🛒</span> Ver na loja</button>
      </div>
    </div>
  `,
});

Screens.add('notificacoes', {
  title: 'Avisos', nav: true, back: true,
  html: `
    <h1 class="page">Avisos</h1>
    <div class="list-item"><div class="avatar amber">🛠️</div><div class="body"><div class="t1">Manutenção a vencer</div><div class="t2">Corrente do João vence em ~9 dias</div></div></div>
    <div class="list-item"><div class="avatar">📣</div><div class="body"><div class="t1">Nova oferta no mural</div><div class="t2">Correntes com 20% OFF</div></div></div>
    <div class="list-item"><div class="avatar">📥</div><div class="body"><div class="t1">Nota de compra recebida</div><div class="t2">NF-e 4471 da Dispace</div></div></div>
    <div class="list-item"><div class="avatar amber">⏳</div><div class="body"><div class="t1">Nota pendente de envio</div><div class="t2">Carlos Lima · sem sinal, vai transmitir sozinha</div></div></div>
  `,
});
