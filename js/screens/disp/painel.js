/* ===== DISPACE · PAINEL ===== */

Screens.add('dispHome', {
  title: 'Painel', nav: true, back: false,
  html: `
    <p class="label">Dispace comercial</p>
    <h1 class="page" style="margin-top:2px">Painel</h1>
    <div style="margin-bottom:var(--space-5)"><span class="sync-chip"><span class="dot"></span> Protheus sincronizado · há 5 min</span></div>

    <div class="banner banner-warn" onclick="nav('dispRadar')" style="cursor:pointer;margin-bottom:var(--space-5)">
      <span class="ic">🛰️</span>
      <div class="body"><div class="t">12 peças no ponto de troca</div><div class="s">Clientes prontos pra recompra. Acione antes da máquina parar.</div></div>
      <span style="font-size:22px;color:var(--warn)">›</span>
    </div>

    <div class="section-title">Números do mês</div>
    <div class="kpi-row">
      <div class="kpi"><div class="k-label">No ponto de troca</div><div class="k-val num">12</div><div class="k-sub">peças de desgaste</div></div>
      <div class="kpi"><div class="k-label">Contatos pendentes</div><div class="k-val num">8</div><div class="k-sub">fila do comercial</div></div>
    </div>
    <div class="kpi-row mt4">
      <div class="kpi"><div class="k-label">Recompra gerada</div><div class="k-val num">R$ 14,2k</div><div class="k-sub">via radar</div></div>
      <div class="kpi"><div class="k-label">Canal próprio</div><div class="k-val num">38%</div><div class="k-sub">vs. marketplace</div></div>
    </div>

    <div class="section-title">Fila de hoje</div>
    <div class="list-item" onclick="nav('dispRadar')">${productThumb('corrente')}<div class="body"><div class="t1">Corrente H30 · ponto de troca</div><div class="t2">Seu Zé → motosserra do Sítio Boa Esperança</div></div><span class="chev">›</span></div>
    <div class="list-item" onclick="nav('dispRadar')">${productThumb('sabre')}<div class="body"><div class="t1">Sabre 18" · fim de vida</div><div class="t2">Oficina do Carlos → cliente final</div></div><span class="chev">›</span></div>
  `,
});
