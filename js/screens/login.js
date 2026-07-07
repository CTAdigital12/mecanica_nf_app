/* ===== ONBOARDING / LOGIN + "ainda não tenho CNPJ" ===== */

Screens.add('login', {
  title: null, nav: false, back: false,
  html: `
    <div style="text-align:center; padding: var(--space-7) 0 var(--space-6)">
      <div style="width:88px;height:88px;border-radius:22px;background:var(--green);color:#fff;display:grid;place-items:center;font-size:34px;font-weight:800;margin:0 auto var(--space-4);letter-spacing:-.02em">DP</div>
      <h1 class="page" style="font-size:var(--fs-2xl)">Dispace</h1>
      <p class="page-sub">Peças, notas e recompra num lugar só.</p>
    </div>

    <div class="banner banner-info" style="margin-bottom:var(--space-5)">
      <span class="ic">🧪</span>
      <div class="body">
        <div class="t">Modo demonstração</div>
        <div class="s">Escolha por onde entrar. Dá pra alternar entre as duas visões a qualquer momento.</div>
      </div>
    </div>

    <button class="btn btn-primary" style="min-height:60px;font-size:var(--fs-md)" onclick="enter('disp')"><span class="ic">💼</span> Entrar como Dispace (admin)</button>
    <button class="btn btn-green mt4" style="min-height:60px;font-size:var(--fs-md)" onclick="enter('mec')"><span class="ic">👷</span> Entrar como Cliente</button>
    <button class="btn btn-ghost mt4" onclick="nav('semCnpj')"><span class="ic">❓</span> Sou mecânico e ainda não tenho CNPJ</button>

    <p class="wf-note">Protótipo navegável. Nenhuma nota é emitida de verdade.</p>
  `,
});

Screens.add('semCnpj', {
  title: 'Sem CNPJ', nav: false, back: true,
  html: `
    <h1 class="page">Vamos te ajudar a virar MEI</h1>
    <p class="page-sub">Sem CNPJ não dá pra emitir nota. Mas dá pra resolver rápido e de graça.</p>
    <div class="card"><div style="display:flex;gap:12px"><span style="font-size:26px">📋</span><div><div style="font-weight:600">1. Abrir o MEI</div><div class="muted" style="font-size:var(--fs-sm)">Gratuito, no site do governo (Portal do Empreendedor). Leva uns 15 minutos.</div></div></div></div>
    <div class="card"><div style="display:flex;gap:12px"><span style="font-size:26px">🔑</span><div><div style="font-weight:600">2. Conta Gov.br nível prata</div><div class="muted" style="font-size:var(--fs-sm)">Necessária para emitir a nota com segurança.</div></div></div></div>
    <div class="card"><div style="display:flex;gap:12px"><span style="font-size:26px">✅</span><div><div style="font-weight:600">3. Voltar aqui e começar</div><div class="muted" style="font-size:var(--fs-sm)">A gente cuida do resto.</div></div></div></div>
    <div class="action-bar">
      <a class="btn btn-primary" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei" target="_blank" rel="noopener" style="text-decoration:none"><span class="ic">🏛️</span> Abrir meu MEI no site do governo</a>
      <button class="btn btn-ghost mt4" onclick="nav('login')"><span class="ic">‹</span> Voltar</button>
    </div>
  `,
});
