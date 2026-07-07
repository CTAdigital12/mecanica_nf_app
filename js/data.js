/* ============================================================
   Dados de exemplo do wireframe.
   Catálogo único de produtos: alimenta a loja do cliente,
   a lista de produtos da Dispace e as miniaturas nas listas.
   ============================================================ */
const PRODUCTS = [
  { id: 'corrente', nome: 'Corrente Husqvarna H30 · 18"', sku: '100245', preco: 95,  estoque: 12, canal: { label: 'Loja + ML',     chip: 'chip-green' }, img: 'img/products/corrente.jpg' },
  { id: 'vela',     nome: 'Vela de ignição NGK',          sku: '100388', preco: 28,  estoque: 40, canal: { label: 'Loja + ML',     chip: 'chip-green' }, img: 'img/products/vela.jpg' },
  { id: 'filtro',   nome: 'Filtro de ar roçadeira FS',    sku: '100512', preco: 34,  estoque: 8,  canal: { label: 'só ML',         chip: 'chip-muted' }, img: 'img/products/filtro.jpg' },
  { id: 'pinhao',   nome: 'Pinhão / coroa 3/8"',          sku: '100733', preco: 42,  estoque: 15, canal: { label: 'Loja + ML',     chip: 'chip-green' }, img: 'img/products/pinhao.jpg' },
  { id: 'oleo',     nome: 'Óleo 2 tempos 500ml',          sku: '100901', preco: 22,  estoque: 60, canal: { label: 'Loja + ML',     chip: 'chip-green' }, img: 'img/products/oleo.jpg' },
  { id: 'sabre',    nome: 'Sabre / barra guia 18"',       sku: '100150', preco: 140, estoque: 5,  canal: { label: 'estoque baixo', chip: 'chip-warn'  }, img: 'img/products/sabre.jpg' },
];

const product = id => PRODUCTS.find(p => p.id === id);

/* miniatura com foto real, usada no lugar do emoji nas listas */
const productThumb = id => {
  const p = product(id);
  return `<img class="avatar-img" src="${p.img}" alt="${p.nome}">`;
};
