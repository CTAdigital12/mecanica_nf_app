/* ============================================================
   Registro de telas.
   Cada arquivo em js/screens/ se registra aqui com:
   Screens.add(nome, { title, nav, back, html })
   - title: título na topbar (null = mostra a marca)
   - nav:   mostra navegação inferior / barra de modo
   - back:  mostra botão voltar
   - html:  conteúdo da tela (template literal)
   O app.js monta as <section> na ordem de registro.
   ============================================================ */
window.Screens = {
  order: [],
  defs: {},
  add(name, def) {
    if (this.defs[name]) console.warn('Tela registrada duas vezes:', name);
    else this.order.push(name);
    this.defs[name] = def;
  },
};
