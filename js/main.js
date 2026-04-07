const PRODUCTS = {
  home: [
    { id: 1, name: "Kimono Vermelho do Sábio", price: 389.90, oldPrice: 499.90, category: "Kimonos", tag: "DESTAQUE", description: "Réplica premium do icônico kimono vermelho de Jiraiya. Tecido de algodão japonês de alta qualidade com o kanji 油 bordado nas costas. Perfeito para colecionadores e cosplay de alto nível.", svg: "kimono_red", sizes: ["P","M","G","GG"], page: "home" },
    { id: 2, name: "Colete Vermelho Sennin", price: 249.90, oldPrice: null, category: "Vestimentas", tag: "NOVO", description: "Colete estilo Jiraiya em tecido resistente com detalhes em dourado. O kanji do óleo está bordado ao centro, símbolo do Modo Sábio. Lavagem a mão recomendada.", svg: "vest_red", sizes: ["P","M","G","GG"], page: "home" },
    { id: 3, name: "Capa do Sábio Branca", price: 459.90, oldPrice: 580.00, category: "Capas", tag: null, description: "Capa branca de grande sábio com chamas vermelhas na borda inferior. Feita em tule reforçado, com o kanji 仙 bordado. Ideal para cosplays épicos e eventos.", svg: "cape_white", sizes: ["U","P","M","G"], page: "home" },
    { id: 4, name: "Calça Ninja Verde Oliva", price: 189.90, oldPrice: null, category: "Calças", tag: null, description: "Calça em tecido reforçado na cor verde oliva, fiel ao estilo das vestimentas ninjas de Konoha. Cinto dourado incluso. Conforto e movimento livre para suas batalhas diárias.", svg: "pants_olive", sizes: ["36","38","40","42","44"], page: "home" },
    { id: 5, name: "Sandálias de Madeira Ninja", price: 179.90, oldPrice: null, category: "Calçados", tag: "LIMITADO", description: "Sandálias tradicionais japonesas de madeira (geta) no estilo ninja. Tiras em couro vermelho, solado elevado para movimentos ágeis. Numeração especial sob encomenda.", svg: "sandals_wood", sizes: ["38","39","40","41","42","43"], page: "home" },
    { id: 6, name: "Bandana de Konoha", price: 129.90, oldPrice: 159.90, category: "Acessórios", tag: "MAIS VENDIDO", description: "Réplica em metal fundido da bandana de Konoha com tarja de renegado. Tecido vermelho incluso. Material: liga de zinco e alumínio. Peso: 180g.", svg: "headband", sizes: ["U"], page: "home" },
  ],
  gamabunta: [
    { id: 7, name: "Kimono Gamabunta Escarlate", price: 420.00, oldPrice: 550.00, category: "Kimonos", tag: "DESTAQUE", description: "Kimono inspirado nas cores do Grande Sapo Gamabunta. Tom escarlate profundo com detalhes em cobre e bronze. O símbolo do clã dos sapos bordado no peito.", svg: "red_haori", sizes: ["P","M","G","GG"], page: "gamabunta" },
    { id: 8, name: "Haori Vermelho Daimyo", price: 499.90, oldPrice: null, category: "Capas", tag: "NOVO", description: "Haori no estilo japonês clássico, cor vermelha profunda como as escamas de Gamabunta. Bordas douradas e kanji de invocação nas costas. Edição limitada.", svg: "red_haori", sizes: ["P","M","G","GG"], page: "gamabunta" },
    { id: 9, name: "Estatueta Gamabunta Premium", price: 349.90, oldPrice: 420.00, category: "Colecionáveis", tag: "RARO", description: "Estatueta de resina pintada à mão de Gamabunta com seu tonel de saquê. 18cm de altura, base em madeira. Pintura detalhada com olhos dourados e pele texturizada.", svg: "toad_figurine_gamabunta", sizes: ["U"], page: "gamabunta" },
    { id: 10, name: "Caneca Sake do Chefe", price: 89.90, oldPrice: null, category: "Casa", tag: null, description: "Caneca de cerâmica japonesa no estilo do tonel de saquê de Gamabunta. Capacidade 350ml. Ilustração do grande sapo na lateral. Ideal para uso diário ou coleção.", svg: "toad_figurine_gamabunta", sizes: ["U"], page: "gamabunta" },
  ],
  fukasaku: [
    { id: 11, name: "Colar dos Sapos Sábios", price: 219.90, oldPrice: 280.00, category: "Joias", tag: "NOVO", description: "Colar artesanal em metal dourado com pingente de sapo verde inspirado em Fukasaku. Corrente de 60cm em latão envelhecido. Inclui pedras semipreciosas verdes.", svg: "toad_necklace", sizes: ["U"], page: "fukasaku" },
    { id: 12, name: "Estatueta Fukasaku Sábio", price: 299.90, oldPrice: null, category: "Colecionáveis", tag: "LIMITADO", description: "Estatueta do ancião sábio Fukasaku em resina fina. 12cm de altura com seu cajado dourado. Postura de meditação, barba branca esculpida à mão.", svg: "toad_figurine_fukasaku", sizes: ["U"], page: "fukasaku" },
    { id: 13, name: "Kit Meditação Myoboku", price: 159.90, oldPrice: null, category: "Bem-estar", tag: null, description: "Kit completo para meditação no estilo Monte Myoboku. Incenso de bambu e terra sagrada, tapete de meditação verde musgo, manual de técnicas de concentração de chakra.", svg: "oil_sage_potion", sizes: ["U"], page: "fukasaku" },
  ],
  shima: [
    { id: 14, name: "Elixir Óleo do Sábio", price: 139.90, oldPrice: 180.00, category: "Colecionáveis", tag: "DESTAQUE", description: "Frasco colecionável com óleo essencial de bambu e menta, inspirado no óleo sagrado de Myoboku. Frasco em vidro esmeralda com rótulo artesanal e cera lacre.", svg: "oil_sage_potion", sizes: ["U"], page: "shima" },
    { id: 15, name: "Bracelete Shima Sábia", price: 169.90, oldPrice: null, category: "Joias", tag: "NOVO", description: "Bracelete em couro esmeralda com fecho dourado, inspirado na Grande Sapo Shima. Gravação do clã dos sapos. Diâmetro ajustável. Inclui caixinha de presente.", svg: "toad_necklace", sizes: ["P/M","G/GG"], page: "shima" },
  ],
  gamaken: [
    { id: 16, name: "Máscara Modo Sábio", price: 289.90, oldPrice: 360.00, category: "Acessórios", tag: "RARO", description: "Máscara de resina pintada simulando os olhos do Modo Sábio de Jiraiya. Olhos dourados com pupila vertical, marcações roxas e kanji 油 na testa. Perfeita para cosplay.", svg: "sage_mode_mask", sizes: ["U"], page: "gamaken" },
    { id: 17, name: "Livro A Gesta do Shinobi Corajoso", price: 79.90, oldPrice: null, category: "Livros", tag: "BEST-SELLER", description: "Edição comemorativa ilustrada do livro fictício escrito por Jiraiya. Capa dura em vermelho com detalhes dourados. Arte conceitual exclusiva no estilo mangá. 240 páginas.", svg: "senin_book", sizes: ["U"], page: "gamaken" },
    { id: 18, name: "Pergaminho de Invocação", price: 119.90, oldPrice: 150.00, category: "Colecionáveis", tag: "LIMITADO", description: "Réplica do pergaminho de invocação dos sapos de Myoboku. Papel de arroz envelhecido com caligrafia japonesa em nanquim. Enrolado em caixinha de bambu.", svg: "scroll_summoning", sizes: ["U"], page: "gamaken" },
    { id: 19, name: "Peruca Branca do Sennin", price: 149.90, oldPrice: null, category: "Cosplay", tag: null, description: "Peruca de cabelo longo branco de altíssima qualidade sintética, fiel ao estilo de Jiraiya. Inclui bandana vermelha e suporte para bandana de Konoha. Lavável.", svg: "white_hair_wig", sizes: ["U"], page: "gamaken" },
    { id: 20, name: "Conjunto Completo Sábio", price: 899.90, oldPrice: 1200.00, category: "Conjuntos", tag: "OFERTA", description: "Conjunto completo para cosplay de Jiraiya: kimono vermelho, calça verde oliva, sandálias de madeira, bandana de Konoha e peruca branca. Tamanho sob consulta.", svg: "kimono_red", sizes: ["P","M","G","GG"], page: "gamaken" },
  ]
};

let cart = [];
let currentModal = null;
let currentQty = 1;
let currentSize = null;
let carouselIndex = 0;
let carouselItems = [];

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initHeroCanvas();
  initCarousel();
  initSidebar();
  initCart();
  initModal();
  initReveal();
  initPageNavigation();
  updateCartBadge();
});

function initLoading() {
  setTimeout(() => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.classList.add('hidden');
    }
  }, 1800);
}

function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const drops = [];
  const COUNT = 18;

  class Drop {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = 0;
      this.maxR = Math.random() * 120 + 60;
      this.speed = Math.random() * 0.5 + 0.2;
      this.opacity = Math.random() * 0.06 + 0.02;
      this.color = Math.random() > 0.6 ? '#C0392B' : Math.random() > 0.5 ? '#5D6B2E' : '#C9A84C';
    }
    update() {
      this.r += this.speed;
      if (this.r > this.maxR) this.reset();
    }
    draw() {
      const alpha = this.opacity * (1 - this.r / this.maxR);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  const kanjis = ['油', '仙', '召', '忍', '蝦', '蟇'];
  const floaters = Array.from({length: 8}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    kanji: kanjis[Math.floor(Math.random() * kanjis.length)],
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.04 + 0.01,
    size: Math.random() * 40 + 20,
    drift: (Math.random() - 0.5) * 0.2
  }));

  for (let i = 0; i < COUNT; i++) drops.push(new Drop());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    drops.forEach(d => { d.update(); d.draw(); });

    ctx.globalAlpha = 1;
    floaters.forEach(f => {
      f.y -= f.speed;
      f.x += f.drift;
      if (f.y < -50) { f.y = canvas.height + 50; f.x = Math.random() * canvas.width; }
      if (f.x < -50 || f.x > canvas.width + 50) f.x = Math.random() * canvas.width;
      ctx.globalAlpha = f.opacity;
      ctx.font = `${f.size}px 'Cinzel Decorative', serif`;
      ctx.fillStyle = '#C0392B';
      ctx.fillText(f.kanji, f.x, f.y);
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
}

function initSidebar() {
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  const isActive = sb.classList.contains('active');
  if (isActive) {
    closeSidebar();
  } else {
    sb.classList.add('active');
    ov.classList.add('active');
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function initPageNavigation() {
  navigateTo('home');
}

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
    updateNavActive(pageId);
    if (['gamabunta','fukasaku','shima','gamaken'].includes(pageId)) {
      renderToadPage(pageId);
    }
    if (pageId === 'jiraiya') {
      renderToadPage('jiraiya');
    }
    if (pageId === 'produtos') {
      renderProdutosPage('all');
    }
  }
}

function updateNavActive(pageId) {
  document.querySelectorAll('[data-page]').forEach(el => {
    const isMatch = el.dataset.page === pageId;
    el.classList.toggle('active', isMatch);
    if (el.classList.contains('sidebar-link') && isMatch) {
    }
  });
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-page]');
  sidebarLinks.forEach(el => el.classList.remove('active'));
  const exactMatch = document.querySelector(`.sidebar-link[data-page="${pageId}"]:not([onclick*="scrollIntoView"])`);
  if (exactMatch) exactMatch.classList.add('active');
}

let carouselAutoTimer = null;

function initCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  // Combine a few products from each collection for the highlight carousel
  const highlights = [
    ...PRODUCTS.home.slice(0, 3),
    ...PRODUCTS.gamabunta.slice(0, 2),
    ...PRODUCTS.fukasaku.slice(0, 1),
    ...PRODUCTS.shima.slice(0, 1),
    ...PRODUCTS.gamaken.slice(0, 2),
  ];
  carouselItems = highlights;
  track.innerHTML = '';

  // Clone items for infinite loop: original + clone at end
  const allItems = [...highlights, ...highlights];
  allItems.forEach(product => {
    const card = createProductCard(product);
    track.appendChild(card);
  });

  carouselIndex = 0;

  // Start auto-scroll
  startCarouselAuto();

  // Pause on hover
  const wrapper = track.parentElement;
  wrapper.addEventListener('mouseenter', stopCarouselAuto);
  wrapper.addEventListener('mouseleave', startCarouselAuto);
}

function startCarouselAuto() {
  stopCarouselAuto();
  carouselAutoTimer = setInterval(() => {
    moveCarouselAuto();
  }, 3200);
}

function stopCarouselAuto() {
  if (carouselAutoTimer) {
    clearInterval(carouselAutoTimer);
    carouselAutoTimer = null;
  }
}

function moveCarouselAuto() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const cards = track.querySelectorAll('.product-card');
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth + 24;
  const half = cards.length / 2;

  carouselIndex++;

  // Smooth scroll
  track.style.transition = 'transform 0.9s cubic-bezier(0.4,0,0.2,1)';
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;

  // When we reach the cloned set, silently reset
  if (carouselIndex >= half) {
    setTimeout(() => {
      track.style.transition = 'none';
      carouselIndex = 0;
      track.style.transform = `translateX(0)`;
    }, 950);
  }
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => openModal(product.id);

  const svgContent = PRODUCT_SVGS[product.svg] || createDefaultSVG(product.category);

  card.innerHTML = `
    <div class="product-img-wrap">
      ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
      <div class="product-img-svg">${svgContent}</div>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div>
        <span class="product-price">R$ ${product.price.toFixed(2).replace('.',',')}</span>
        ${product.oldPrice ? `<span class="product-price-old">R$ ${product.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
      </div>
      <button class="product-add-btn">Ver Produto</button>
    </div>
  `;
  return card;
}

function createDefaultSVG(category) {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="30" width="140" height="140" rx="8" fill="rgba(192,57,43,0.15)" stroke="rgba(192,57,43,0.3)" stroke-width="1"/>
    <text x="100" y="115" text-anchor="middle" font-size="14" fill="rgba(240,230,211,0.4)" font-family="Cinzel, serif">${category}</text>
  </svg>`;
}

function moveCarousel(dir) {
  const track = document.getElementById('carousel-track');
  const cards = track.querySelectorAll('.product-card');
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth + 24;
  const half = cards.length / 2;

  carouselIndex = Math.max(0, Math.min(half - 1, carouselIndex + dir));
  track.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;

  // Reset auto timer on manual nav
  startCarouselAuto();
}

function renderToadPage(pageId) {
  const gridId = pageId === 'jiraiya' ? 'grid-jiraiya' : `grid-${pageId}`;
  const productKey = pageId === 'jiraiya' ? 'home' : pageId;
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const products = PRODUCTS[productKey] || [];
  grid.innerHTML = '';
  products.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

let currentProdutosFilter = 'all';

function renderProdutosPage(filter) {
  currentProdutosFilter = filter;
  const grid = document.getElementById('grid-produtos');
  if (!grid) return;

  let products = [];
  if (filter === 'all') {
    Object.values(PRODUCTS).forEach(arr => products.push(...arr));
  } else {
    products = PRODUCTS[filter] || [];
  }

  grid.innerHTML = '';
  products.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

function filterProdutos(filter) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  const tabs = document.querySelectorAll('.filter-tab');
  const map = { all: 0, home: 1, gamabunta: 2, fukasaku: 3, shima: 4, gamaken: 5 };
  if (tabs[map[filter]]) tabs[map[filter]].classList.add('active');
  renderProdutosPage(filter);
}

function initModal() {
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeModal);
}

function findProduct(id) {
  for (const key of Object.keys(PRODUCTS)) {
    const found = PRODUCTS[key].find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function openModal(productId) {
  const product = findProduct(productId);
  if (!product) return;

  currentModal = product;
  currentQty = 1;
  currentSize = product.sizes[0] || null;

  const modal = document.getElementById('product-modal');
  const svgContent = PRODUCT_SVGS[product.svg] || createDefaultSVG(product.category);

  document.getElementById('modal-img').innerHTML = svgContent;
  document.getElementById('modal-category').textContent = product.category;
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-price').textContent = `R$ ${product.price.toFixed(2).replace('.',',')}`;
  document.getElementById('modal-price-old').textContent = product.oldPrice ? `R$ ${product.oldPrice.toFixed(2).replace('.',',')}` : '';
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-qty-display').textContent = currentQty;

  const sizesEl = document.getElementById('modal-sizes');
  sizesEl.innerHTML = '';
  product.sizes.forEach(size => {
    const btn = document.createElement('button');
    btn.className = 'size-pill' + (size === currentSize ? ' selected' : '');
    btn.textContent = size;
    btn.onclick = () => {
      sizesEl.querySelectorAll('.size-pill').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentSize = size;
    };
    sizesEl.appendChild(btn);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
  document.body.style.overflow = '';
  currentModal = null;
}

function changeQty(delta) {
  currentQty = Math.max(1, Math.min(10, currentQty + delta));
  document.getElementById('modal-qty-display').textContent = currentQty;
}

function addToCart() {
  if (!currentModal) return;

  const key = `${currentModal.id}-${currentSize}`;
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({
      key,
      id: currentModal.id,
      name: currentModal.name,
      price: currentModal.price,
      svg: currentModal.svg,
      category: currentModal.category,
      size: currentSize,
      qty: currentQty
    });
  }

  updateCartBadge();
  renderCartItems();
  closeModal();
  showToast(`${currentModal.name} adicionado ao carrinho`);
  openCart();
}

function initCart() {
  renderCartItems();
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  const ov = document.getElementById('sidebar-overlay');
  if (panel.classList.contains('active')) {
    closeCart();
  } else {
    openCart();
  }
}

function openCart() {
  document.getElementById('cart-panel').classList.add('active');
  document.getElementById('sidebar-overlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cart-panel').classList.remove('active');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i>Seu carrinho está vazio</div>`;
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const svgSmall = PRODUCT_SVGS[item.svg] || '';
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">${svgSmall}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.',',')}</div>
        <div class="cart-item-qty">Tam: ${item.size || '—'} | Qtd: ${item.qty}</div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${index})"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(el);
  });

  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.',',')}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCartItems();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function checkout() {
  if (!cart.length) { showToast('Adicione itens ao carrinho primeiro'); return; }
  showToast('Redirecionando para o checkout...');
  setTimeout(() => { cart = []; renderCartItems(); updateCartBadge(); closeCart(); }, 1500);
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
