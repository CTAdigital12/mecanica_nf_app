/* ============================================================
   Navegação do protótipo.
   As telas vêm do registro (js/registry.js + js/screens/*).
   ============================================================ */

/* monta as <section class="screen"> na ordem de registro */
const screenWrap = document.getElementById('screenWrap');
Screens.order.forEach(name => {
  const def = Screens.defs[name];
  const sec = document.createElement('section');
  sec.className = 'screen' + (def.nav ? '' : ' no-nav');
  sec.dataset.screen = name;
  sec.innerHTML = def.html;
  screenWrap.appendChild(sec);
});

let navHistory = ['login'];

function nav(name, push = true) {
  const cfg = Screens.defs[name] || {};
  const app = document.getElementById('app');
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.dataset.screen === name));
  screenWrap.scrollTop = 0;

  // estado do shell (dirige o CSS responsivo)
  app.dataset.screen = name;
  app.dataset.home = (name === 'home' || name === 'dispHome') ? 'true' : 'false';
  app.classList.toggle('no-shell', name === 'login' || name === 'semCnpj');

  // topbar
  document.getElementById('topTitle').textContent = cfg.title || 'Início';
  document.getElementById('backBtn').style.display = cfg.back ? 'grid' : 'none';

  // nav de baixo + barra de modo (mobile) escondidas em telas de fluxo focado
  document.getElementById('bottomnav').style.display = cfg.nav ? 'flex' : 'none';
  document.getElementById('modebar').style.display = cfg.nav ? 'flex' : 'none';

  // estado ativo nos dois menus (baixo + lateral)
  document.querySelectorAll('[data-navfor]').forEach(b =>
    b.classList.toggle('active', b.dataset.navfor === name));

  if (push) { if (navHistory[navHistory.length - 1] !== name) navHistory.push(name); }
}

function goBack() {
  if (navHistory.length > 1) { navHistory.pop(); nav(navHistory[navHistory.length - 1], false); }
  else { nav('home', false); }
}

/* entra pelo lado escolhido no login (Dispace ou mecânico) */
function enter(mode) { setMode(mode); navHistory = [mode === 'mec' ? 'home' : 'dispHome']; }

/* alterna entre lado do mecânico e lado da Dispace comercial */
function setMode(mode) {
  const app = document.getElementById('app');
  app.dataset.mode = mode;
  document.querySelectorAll('.modeseg button').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
  nav(mode === 'mec' ? 'home' : 'dispHome');
}

/* seleção de tipo (passo 1 do emitir) */
function pickTipo(el) {
  document.querySelectorAll('[data-tipo]').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('tipoNext').disabled = false;
}

/* abas */
function switchTab(btn, tab) {
  const tabsWrap = btn.closest('.tabs');
  tabsWrap.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const screen = btn.closest('.screen');
  screen.querySelectorAll('[data-tab]').forEach(t => t.style.display = (t.dataset.tab === tab) ? '' : 'none');
}

/* feedback leve ao adicionar item (wireframe) */
function addItem(el) {
  el.style.transition = 'background .15s';
  el.style.background = 'var(--green-soft)';
  setTimeout(() => el.style.background = '', 200);
}

// start — aceita deep-link por hash (ex.: index.html#loja)
const start = Screens.defs[location.hash.slice(1)] ? location.hash.slice(1) : 'login';
setModeVisual(start.startsWith('disp') ? 'disp' : 'mec');
nav(start, false);

function setModeVisual(mode) {
  document.getElementById('app').dataset.mode = mode;
  document.querySelectorAll('.modeseg button').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
}
