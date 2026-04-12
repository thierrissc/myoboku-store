const PRODUCTS = {
  home: [
    {
      id: 1,
      name: "Kimono Vermelho do Sábio",
      price: 389.9,
      oldPrice: 499.9,
      category: "Kimonos",
      tag: "DESTAQUE",
      description:
        "Réplica premium do icônico kimono vermelho de Jiraiya. Tecido de algodão japonês de alta qualidade com o kanji 油 bordado nas costas. Perfeito para colecionadores e cosplay de alto nível.",
      svg: "kimono_red",
      sizes: ["P", "M", "G", "GG"],
      page: "home",
    },
    {
      id: 2,
      name: "Colete Vermelho Sennin",
      price: 249.9,
      oldPrice: null,
      category: "Vestimentas",
      tag: "NOVO",
      description:
        "Colete estilo Jiraiya em tecido resistente com detalhes em dourado. O kanji do óleo está bordado ao centro, símbolo do Modo Sábio. Lavagem a mão recomendada.",
      svg: "vest_red",
      sizes: ["P", "M", "G", "GG"],
      page: "home",
    },
    {
      id: 3,
      name: "Capa do Sábio Branca",
      price: 459.9,
      oldPrice: 580.0,
      category: "Capas",
      tag: null,
      description:
        "Capa branca de grande sábio com chamas vermelhas na borda inferior. Feita em tule reforçado, com o kanji 仙 bordado. Ideal para cosplays épicos e eventos.",
      svg: "cape_white",
      sizes: ["U", "P", "M", "G"],
      page: "home",
    },
    {
      id: 4,
      name: "Calça Ninja Verde Oliva",
      price: 189.9,
      oldPrice: null,
      category: "Calças",
      tag: null,
      description:
        "Calça em tecido reforçado na cor verde oliva, fiel ao estilo das vestimentas ninjas de Konoha. Cinto dourado incluso. Conforto e movimento livre para suas batalhas diárias.",
      svg: "pants_olive",
      sizes: ["36", "38", "40", "42", "44"],
      page: "home",
    },
    {
      id: 5,
      name: "Sandálias de Madeira Ninja",
      price: 179.9,
      oldPrice: null,
      category: "Calçados",
      tag: "LIMITADO",
      description:
        "Sandálias tradicionais japonesas de madeira (geta) no estilo ninja. Tiras em couro vermelho, solado elevado para movimentos ágeis. Numeração especial sob encomenda.",
      svg: "sandals_wood",
      sizes: ["38", "39", "40", "41", "42", "43"],
      page: "home",
    },
    {
      id: 6,
      name: "Bandana de Konoha",
      price: 129.9,
      oldPrice: 159.9,
      category: "Acessórios",
      tag: "MAIS VENDIDO",
      description:
        "Réplica em metal fundido da bandana de Konoha com tarja de renegado. Tecido vermelho incluso. Material: liga de zinco e alumínio. Peso: 180g.",
      svg: "headband",
      sizes: ["U"],
      page: "home",
    },
  ],
  gamabunta: [
    {
      id: 7,
      name: "Kimono Gamabunta Escarlate",
      price: 420.0,
      oldPrice: 550.0,
      category: "Kimonos",
      tag: "DESTAQUE",
      description:
        "Kimono inspirado nas cores do Grande Sapo Gamabunta. Tom escarlate profundo com detalhes em cobre e bronze. O símbolo do clã dos sapos bordado no peito.",
      svg: "red_haori",
      sizes: ["P", "M", "G", "GG"],
      page: "gamabunta",
    },
    {
      id: 8,
      name: "Haori Vermelho Daimyo",
      price: 499.9,
      oldPrice: null,
      category: "Capas",
      tag: "NOVO",
      description:
        "Haori no estilo japonês clássico, cor vermelha profunda como as escamas de Gamabunta. Bordas douradas e kanji de invocação nas costas. Edição limitada.",
      svg: "red_haori",
      sizes: ["P", "M", "G", "GG"],
      page: "gamabunta",
    },
    {
      id: 9,
      name: "Estatueta Gamabunta Premium",
      price: 349.9,
      oldPrice: 420.0,
      category: "Colecionáveis",
      tag: "RARO",
      description:
        "Estatueta de resina pintada à mão de Gamabunta com seu tonel de saquê. 18cm de altura, base em madeira. Pintura detalhada com olhos dourados e pele texturizada.",
      svg: "toad_figurine_gamabunta",
      sizes: ["U"],
      page: "gamabunta",
    },
    {
      id: 10,
      name: "Caneca Sake do Chefe",
      price: 89.9,
      oldPrice: null,
      category: "Casa",
      tag: null,
      description:
        "Caneca de cerâmica japonesa no estilo do tonel de saquê de Gamabunta. Capacidade 350ml. Ilustração do grande sapo na lateral. Ideal para uso diário ou coleção.",
      svg: "toad_figurine_gamabunta",
      sizes: ["U"],
      page: "gamabunta",
    },
  ],
  fukasaku: [
    {
      id: 11,
      name: "Colar dos Sapos Sábios",
      price: 219.9,
      oldPrice: 280.0,
      category: "Joias",
      tag: "NOVO",
      description:
        "Colar artesanal em metal dourado com pingente de sapo verde inspirado em Fukasaku. Corrente de 60cm em latão envelhecido. Inclui pedras semipreciosas verdes.",
      svg: "toad_necklace",
      sizes: ["U"],
      page: "fukasaku",
    },
    {
      id: 12,
      name: "Estatueta Fukasaku Sábio",
      price: 299.9,
      oldPrice: null,
      category: "Colecionáveis",
      tag: "LIMITADO",
      description:
        "Estatueta do ancião sábio Fukasaku em resina fina. 12cm de altura com seu cajado dourado. Postura de meditação, barba branca esculpida à mão.",
      svg: "toad_figurine_fukasaku",
      sizes: ["U"],
      page: "fukasaku",
    },
    {
      id: 13,
      name: "Kit Meditação Myoboku",
      price: 159.9,
      oldPrice: null,
      category: "Bem-estar",
      tag: null,
      description:
        "Kit completo para meditação no estilo Monte Myoboku. Incenso de bambu e terra sagrada, tapete de meditação verde musgo, manual de técnicas de concentração de chakra.",
      svg: "oil_sage_potion",
      sizes: ["U"],
      page: "fukasaku",
    },
  ],
  shima: [
    {
      id: 14,
      name: "Elixir Óleo do Sábio",
      price: 139.9,
      oldPrice: 180.0,
      category: "Colecionáveis",
      tag: "DESTAQUE",
      description:
        "Frasco colecionável com óleo essencial de bambu e menta, inspirado no óleo sagrado de Myoboku. Frasco em vidro esmeralda com rótulo artesanal e cera lacre.",
      svg: "oil_sage_potion",
      sizes: ["U"],
      page: "shima",
    },
    {
      id: 15,
      name: "Bracelete Shima Sábia",
      price: 169.9,
      oldPrice: null,
      category: "Joias",
      tag: "NOVO",
      description:
        "Bracelete em couro esmeralda com fecho dourado, inspirado na Grande Sapo Shima. Gravação do clã dos sapos. Diâmetro ajustável. Inclui caixinha de presente.",
      svg: "toad_necklace",
      sizes: ["P/M", "G/GG"],
      page: "shima",
    },
  ],
  gamahiro: [
    {
      id: 21,
      name: "Armadura Ninja Azul Celeste",
      price: 349.9,
      oldPrice: 430.0,
      category: "Vestimentas",
      tag: "NOVO",
      description:
        "Armadura leve inspirada nas escamas de Gamahiro. Azul celeste intenso com detalhes em prata. Tecido reforçado com bordados do símbolo do clã dos sapos. Ideal para cosplay e colecionadores.",
      svg: "vest_red",
      sizes: ["P", "M", "G", "GG"],
      page: "gamahiro",
    },
    {
      id: 22,
      name: "Katana Dupla Gamahiro",
      price: 289.9,
      oldPrice: null,
      category: "Colecionáveis",
      tag: "LIMITADO",
      description:
        "Réplica em resina das duas katanas carregadas por Gamahiro. Acabamento cromado com detalhes em azul. Suporte de parede incluso. 70cm cada lâmina. Edição numerada.",
      svg: "scroll_summoning",
      sizes: ["U"],
      page: "gamahiro",
    },
    {
      id: 23,
      name: "Estatueta Gamahiro Guerreiro",
      price: 319.9,
      oldPrice: 390.0,
      category: "Colecionáveis",
      tag: "RARO",
      description:
        "Estatueta de resina pintada à mão de Gamahiro em posição de ataque com suas duas katanas. 20cm de altura, base em pedra preta. Olhos dourados detalhados e pele azul texturizada.",
      svg: "toad_figurine_gamabunta",
      sizes: ["U"],
      page: "gamahiro",
    },
    {
      id: 24,
      name: "Máscara Azul do Guerreiro",
      price: 199.9,
      oldPrice: null,
      category: "Acessórios",
      tag: null,
      description:
        "Máscara de resina pintada em azul celeste inspirada em Gamahiro. Olhos dourados com expressão determinada. Perfeita para cosplay e decoração. Elástico ajustável.",
      svg: "sage_mode_mask",
      sizes: ["U"],
      page: "gamahiro",
    },
  ],
  gamaken: [
    {
      id: 16,
      name: "Máscara Modo Sábio",
      price: 289.9,
      oldPrice: 360.0,
      category: "Acessórios",
      tag: "RARO",
      description:
        "Máscara de resina pintada simulando os olhos do Modo Sábio de Jiraiya. Olhos dourados com pupila vertical, marcações roxas e kanji 油 na testa. Perfeita para cosplay.",
      svg: "sage_mode_mask",
      sizes: ["U"],
      page: "gamaken",
    },
    {
      id: 17,
      name: "Livro A Gesta do Shinobi Corajoso",
      price: 79.9,
      oldPrice: null,
      category: "Livros",
      tag: "BEST-SELLER",
      description:
        "Edição comemorativa ilustrada do livro fictício escrito por Jiraiya. Capa dura em vermelho com detalhes dourados. Arte conceitual exclusiva no estilo mangá. 240 páginas.",
      svg: "senin_book",
      sizes: ["U"],
      page: "gamaken",
    },
    {
      id: 18,
      name: "Pergaminho de Invocação",
      price: 119.9,
      oldPrice: 150.0,
      category: "Colecionáveis",
      tag: "LIMITADO",
      description:
        "Réplica do pergaminho de invocação dos sapos de Myoboku. Papel de arroz envelhecido com caligrafia japonesa em nanquim. Enrolado em caixinha de bambu.",
      svg: "scroll_summoning",
      sizes: ["U"],
      page: "gamaken",
    },
    {
      id: 19,
      name: "Peruca Branca do Sennin",
      price: 149.9,
      oldPrice: null,
      category: "Cosplay",
      tag: null,
      description:
        "Peruca de cabelo longo branco de altíssima qualidade sintética, fiel ao estilo de Jiraiya. Inclui bandana vermelha e suporte para bandana de Konoha. Lavável.",
      svg: "white_hair_wig",
      sizes: ["U"],
      page: "gamaken",
    },
    {
      id: 20,
      name: "Conjunto Completo Sábio",
      price: 899.9,
      oldPrice: 1200.0,
      category: "Conjuntos",
      tag: "OFERTA",
      description:
        "Conjunto completo para cosplay de Jiraiya: kimono vermelho, calça verde oliva, sandálias de madeira, bandana de Konoha e peruca branca. Tamanho sob consulta.",
      svg: "kimono_red",
      sizes: ["P", "M", "G", "GG"],
      page: "gamaken",
    },
  ],
  naruto: [
    {
      id: 25,
      name: "Agasalho Laranja de Konoha",
      price: 349.9,
      oldPrice: 429.9,
      category: "Vestimentas",
      tag: "DESTAQUE",
      description:
        "Agasalho laranja de alta qualidade inspirado no icônico traje de Naruto Uzumaki. Zíper frontal, gola alta e o símbolo de Konoha bordado nas costas. Tecido resistente ideal para treinos e cosplay.",
      svg: "vest_red",
      sizes: ["P", "M", "G", "GG"],
      page: "naruto",
    },
    {
      id: 26,
      name: "Bandana de Konoha Dourada",
      price: 149.9,
      oldPrice: null,
      category: "Acessórios",
      tag: "NOVO",
      description:
        "Réplica premium da bandana de Konoha em metal dourado. Tecido laranja incluso, como o estilo de Naruto Uzumaki. Material: liga de zinco dourada. Peso: 200g. Edição especial do aluno do Sennin.",
      svg: "headband",
      sizes: ["U"],
      page: "naruto",
    },
    {
      id: 27,
      name: "Estatueta Naruto Modo Sábio",
      price: 399.9,
      oldPrice: 510.0,
      category: "Colecionáveis",
      tag: "RARO",
      description:
        "Estatueta de resina pintada à mão de Naruto em Modo Sábio com olhos de sapo. 22cm de altura, base em pedra preta. Detalhes em dourado e pigmento laranja vibrante. Edição limitada e numerada.",
      svg: "sage_mode_mask",
      sizes: ["U"],
      page: "naruto",
    },
    {
      id: 28,
      name: "Calça Ninja Laranja",
      price: 199.9,
      oldPrice: null,
      category: "Calças",
      tag: null,
      description:
        "Calça em tecido reforçado na cor laranja vibrante, fiel ao estilo de Naruto. Com faixas ninja nas coxas e bolsos laterais. Perfeita para treinos intensos ou eventos de cosplay.",
      svg: "pants_olive",
      sizes: ["36", "38", "40", "42", "44"],
      page: "naruto",
    },
    {
      id: 29,
      name: "Caneca Ramen Ichiraku",
      price: 79.9,
      oldPrice: null,
      category: "Casa",
      tag: "MAIS VENDIDO",
      description:
        "Caneca de cerâmica temática do Ramen Ichiraku, o restaurante favorito de Naruto. Capacidade 400ml. Ilustração de Naruto comendo ramen na lateral. Perfeita para colecionadores e uso diário.",
      svg: "toad_figurine_gamabunta",
      sizes: ["U"],
      page: "naruto",
    },
    {
      id: 30,
      name: "Conjunto Completo Naruto",
      price: 849.9,
      oldPrice: 1100.0,
      category: "Conjuntos",
      tag: "OFERTA",
      description:
        "Conjunto completo para cosplay de Naruto: agasalho laranja, calça laranja, bandana de Konoha dourada e peruca loira spike. O visual completo do Hokage mais jovem. Tamanho sob consulta.",
      svg: "kimono_red",
      sizes: ["P", "M", "G", "GG"],
      page: "naruto",
    },
  ],
};

let cart = [];
let currentModal = null;
let currentQty = 1;
let currentSize = null;
let carouselIndex = 0;
let carouselItems = [];

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
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
    const loader = document.getElementById("loading");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1800);
}

function lockScroll() {
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.dataset.scrollY = scrollY;
}

function unlockScroll() {
  const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  window.scrollTo(0, scrollY);
  delete document.body.dataset.scrollY;
}

function isMobile() {
  return window.innerWidth <= 768;
}

function addSwipeToClose(element, closeFn) {
  let startY = 0;
  let startTime = 0;
  let isDragging = false;

  element.addEventListener(
    "touchstart",
    (e) => {
      const box = element.querySelector(
        ".modal-box, .checkout-box, .info-modal-box, #cart-panel",
      );
      if (!box) return;

      if (box.scrollTop > 10) return;
      startY = e.touches[0].clientY;
      startTime = Date.now();
      isDragging = true;
    },
    { passive: true },
  );

  element.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      const deltaY = e.touches[0].clientY - startY;
      if (deltaY < 0) {
        isDragging = false;
        return;
      }
      const box = element.querySelector(
        ".modal-box, .checkout-box, .info-modal-box",
      );
      if (box) box.style.transform = `translateY(${deltaY * 0.4}px)`;
    },
    { passive: true },
  );

  element.addEventListener(
    "touchend",
    (e) => {
      if (!isDragging) return;
      isDragging = false;
      const deltaY = e.changedTouches[0].clientY - startY;
      const elapsed = Date.now() - startTime;
      const box = element.querySelector(
        ".modal-box, .checkout-box, .info-modal-box",
      );
      if (box) box.style.transform = "";

      if (deltaY > 80 || (deltaY > 40 && elapsed < 250)) {
        closeFn();
      }
    },
    { passive: true },
  );
}

function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const drops = [];
  const COUNT = 18;

  class Drop {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = 0;
      this.maxR = Math.random() * 120 + 60;
      this.speed = Math.random() * 0.5 + 0.2;
      this.opacity = Math.random() * 0.06 + 0.02;
      this.color =
        Math.random() > 0.6
          ? "#C0392B"
          : Math.random() > 0.5
            ? "#5D6B2E"
            : "#C9A84C";
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

  const kanjis = ["油", "仙", "召", "忍", "蝦", "蟇"];
  const floaters = Array.from({ length: 8 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    kanji: kanjis[Math.floor(Math.random() * kanjis.length)],
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.04 + 0.01,
    size: Math.random() * 40 + 20,
    drift: (Math.random() - 0.5) * 0.2,
  }));

  for (let i = 0; i < COUNT; i++) drops.push(new Drop());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    drops.forEach((d) => {
      d.update();
      d.draw();
    });

    ctx.globalAlpha = 1;
    floaters.forEach((f) => {
      f.y -= f.speed;
      f.x += f.drift;
      if (f.y < -50) {
        f.y = canvas.height + 50;
        f.x = Math.random() * canvas.width;
      }
      if (f.x < -50 || f.x > canvas.width + 50)
        f.x = Math.random() * canvas.width;
      ctx.globalAlpha = f.opacity;
      ctx.font = `${f.size}px 'Cinzel Decorative', serif`;
      ctx.fillStyle = "#C0392B";
      ctx.fillText(f.kanji, f.x, f.y);
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
}

function initSidebar() {
  const overlay = document.getElementById("sidebar-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  const dropdown = document.querySelector(".nav-dropdown");
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      if (e.target.closest(".nav-dropdown-item")) return;
      dropdown.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
}

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sidebar-overlay");
  const isActive = sb.classList.contains("active");
  if (isActive) {
    closeSidebar();
  } else {
    sb.classList.add("active");
    ov.classList.add("active");
    if (isMobile()) lockScroll();
  }
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebar-overlay").classList.remove("active");

  const cartOpen = document
    .getElementById("cart-panel")
    .classList.contains("active");
  if (isMobile() && !cartOpen) unlockScroll();
}

function toggleSidebarCollections() {
  const col = document.getElementById("sidebar-collections");
  const trigger = document.getElementById("collections-trigger");
  if (!col || !trigger) return;
  const isOpen = col.classList.contains("open");
  col.classList.toggle("open", !isOpen);
  trigger.classList.toggle("open", !isOpen);
}

function initPageNavigation() {
  const col = document.getElementById("sidebar-collections");
  const trigger = document.getElementById("collections-trigger");
  if (col) col.classList.add("open");
  if (trigger) trigger.classList.add("open");
  navigateTo("home");
}

function navigateTo(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");

    if (isMobile()) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeSidebar();
    updateNavActive(pageId);

    const collectionPages = [
      "jiraiya",
      "gamabunta",
      "fukasaku",
      "shima",
      "gamaken",
      "gamahiro",
      "naruto",
    ];
    if (collectionPages.includes(pageId)) {
      const col = document.getElementById("sidebar-collections");
      const trigger = document.getElementById("collections-trigger");
      if (col) col.classList.add("open");
      if (trigger) trigger.classList.add("open");
    }
    if (collectionPages.includes(pageId)) {
      renderToadPage(pageId);
    }
    if (pageId === "produtos") {
      renderProdutosPage("all");
    }
  }
}

function updateNavActive(pageId) {
  const collectionPages = [
    "jiraiya",
    "gamabunta",
    "fukasaku",
    "shima",
    "gamaken",
    "gamahiro",
    "naruto",
  ];
  document.querySelectorAll("[data-page]").forEach((el) => {
    const isMatch = el.dataset.page === pageId;
    el.classList.toggle("active", isMatch);
  });
  const sidebarLinks = document.querySelectorAll(".sidebar-link[data-page]");
  sidebarLinks.forEach((el) => el.classList.remove("active"));
  const exactMatch = document.querySelector(
    `.sidebar-link[data-page="${pageId}"]`,
  );
  if (exactMatch) exactMatch.classList.add("active");

  const trigger = document.querySelector(".nav-dropdown-trigger");
  if (trigger) {
    trigger.classList.toggle("active", collectionPages.includes(pageId));
  }
}

let carouselAutoTimer = null;
let carouselOffset = 0;
let carouselAnimating = false;

function initCarousel() {
  const track = document.getElementById("carousel-track");
  if (!track) return;

  const highlights = [
    ...PRODUCTS.home.slice(0, 3),
    ...PRODUCTS.gamabunta.slice(0, 2),
    ...PRODUCTS.fukasaku.slice(0, 1),
    ...PRODUCTS.shima.slice(0, 1),
    ...PRODUCTS.gamaken.slice(0, 2),
    ...PRODUCTS.gamahiro.slice(0, 2),
  ];
  carouselItems = highlights;
  track.innerHTML = "";

  const allItems = [...highlights, ...highlights, ...highlights];
  allItems.forEach((product) => {
    const card = createProductCard(product);
    track.appendChild(card);
  });

  requestAnimationFrame(() => {
    const cards = track.querySelectorAll(".product-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 24;
    carouselOffset = highlights.length * cardWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(-${carouselOffset}px)`;
    carouselIndex = highlights.length;
    startCarouselAuto();
  });

  const wrapper = track.parentElement;
  wrapper.addEventListener("mouseenter", stopCarouselAuto);
  wrapper.addEventListener("mouseleave", startCarouselAuto);

  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchDeltaX = 0;
      isSwiping = false;
      stopCarouselAuto();
    },
    { passive: true },
  );

  track.addEventListener(
    "touchmove",
    (e) => {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if (!isSwiping && Math.abs(dy) > Math.abs(dx)) return;
      isSwiping = true;
      touchDeltaX = dx;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    () => {
      if (!isSwiping) {
        startCarouselAuto();
        return;
      }
      if (Math.abs(touchDeltaX) > 40) {
        moveCarousel(touchDeltaX < 0 ? 1 : -1);
      }
      setTimeout(startCarouselAuto, 1200);
    },
    { passive: true },
  );
}

function startCarouselAuto() {
  stopCarouselAuto();
  carouselAutoTimer = setInterval(moveCarouselAuto, 2800);
}

function stopCarouselAuto() {
  if (carouselAutoTimer) {
    clearInterval(carouselAutoTimer);
    carouselAutoTimer = null;
  }
}

function moveCarouselAuto() {
  const track = document.getElementById("carousel-track");
  if (!track || carouselAnimating) return;
  const cards = track.querySelectorAll(".product-card");
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth + 24;
  const totalItems = cards.length;
  const setSize = totalItems / 3;

  carouselIndex++;
  carouselOffset = carouselIndex * cardWidth;

  carouselAnimating = true;
  track.style.transition = "transform 0.72s cubic-bezier(0.33, 1, 0.68, 1)";
  track.style.transform = `translateX(-${carouselOffset}px)`;

  track.addEventListener(
    "transitionend",
    function onEnd() {
      track.removeEventListener("transitionend", onEnd);
      carouselAnimating = false;
      if (carouselIndex >= setSize * 2) {
        carouselIndex = setSize;
        carouselOffset = carouselIndex * cardWidth;
        track.style.transition = "none";
        track.style.transform = `translateX(-${carouselOffset}px)`;
      }
      if (carouselIndex < setSize) {
        carouselIndex = setSize * 2 - 1;
        carouselOffset = carouselIndex * cardWidth;
        track.style.transition = "none";
        track.style.transform = `translateX(-${carouselOffset}px)`;
      }
    },
    { once: true },
  );
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.onclick = () => openModal(product.id);

  const svgContent =
    PRODUCT_SVGS[product.svg] || createDefaultSVG(product.category);

  card.innerHTML = `
    <div class="product-img-wrap">
      ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      <div class="product-img-svg">${svgContent}</div>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div>
        <span class="product-price">R$ ${product.price.toFixed(2).replace(".", ",")}</span>
        ${product.oldPrice ? `<span class="product-price-old">R$ ${product.oldPrice.toFixed(2).replace(".", ",")}</span>` : ""}
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
  const track = document.getElementById("carousel-track");
  if (!track || carouselAnimating) return;
  const cards = track.querySelectorAll(".product-card");
  if (!cards.length) return;

  stopCarouselAuto();

  const cardWidth = cards[0].offsetWidth + 24;
  const totalItems = cards.length;
  const setSize = totalItems / 3;

  carouselIndex += dir;
  carouselOffset = carouselIndex * cardWidth;

  carouselAnimating = true;
  track.style.transition = "transform 0.52s cubic-bezier(0.33, 1, 0.68, 1)";
  track.style.transform = `translateX(-${carouselOffset}px)`;

  track.addEventListener(
    "transitionend",
    function onEnd() {
      track.removeEventListener("transitionend", onEnd);
      carouselAnimating = false;

      if (carouselIndex >= setSize * 2) {
        carouselIndex = setSize;
        carouselOffset = carouselIndex * cardWidth;
        track.style.transition = "none";
        track.style.transform = `translateX(-${carouselOffset}px)`;
      }
      if (carouselIndex < setSize) {
        carouselIndex = setSize * 2 - 1;
        carouselOffset = carouselIndex * cardWidth;
        track.style.transition = "none";
        track.style.transform = `translateX(-${carouselOffset}px)`;
      }
      startCarouselAuto();
    },
    { once: true },
  );
}

function renderToadPage(pageId) {
  const gridId = pageId === "jiraiya" ? "grid-jiraiya" : `grid-${pageId}`;
  const productKey = pageId === "jiraiya" ? "home" : pageId;
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const products = PRODUCTS[productKey] || [];
  grid.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

let currentProdutosFilter = "all";

function renderProdutosPage(filter) {
  currentProdutosFilter = filter;
  const grid = document.getElementById("grid-produtos");
  if (!grid) return;

  let products = [];
  if (filter === "all") {
    Object.values(PRODUCTS).forEach((arr) => products.push(...arr));
  } else {
    products = PRODUCTS[filter] || [];
  }

  grid.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

function filterProdutos(filter) {
  document
    .querySelectorAll(".filter-tab")
    .forEach((t) => t.classList.remove("active"));
  const tabs = document.querySelectorAll(".filter-tab");
  const map = {
    all: 0,
    home: 1,
    gamabunta: 2,
    fukasaku: 3,
    shima: 4,
    gamaken: 5,
    gamahiro: 6,
    naruto: 7,
  };
  if (tabs[map[filter]]) tabs[map[filter]].classList.add("active");
  renderProdutosPage(filter);
}

function initModal() {
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeModal);
}

function findProduct(id) {
  for (const key of Object.keys(PRODUCTS)) {
    const found = PRODUCTS[key].find((p) => p.id === id);
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

  const modal = document.getElementById("product-modal");
  const svgContent =
    PRODUCT_SVGS[product.svg] || createDefaultSVG(product.category);

  document.getElementById("modal-img").innerHTML = svgContent;
  document.getElementById("modal-category").textContent = product.category;
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-price").textContent =
    `R$ ${product.price.toFixed(2).replace(".", ",")}`;
  document.getElementById("modal-price-old").textContent = product.oldPrice
    ? `R$ ${product.oldPrice.toFixed(2).replace(".", ",")}`
    : "";
  document.getElementById("modal-desc").textContent = product.description;
  document.getElementById("modal-qty-display").textContent = currentQty;

  const sizesEl = document.getElementById("modal-sizes");
  sizesEl.innerHTML = "";
  product.sizes.forEach((size) => {
    const btn = document.createElement("button");
    btn.className = "size-pill" + (size === currentSize ? " selected" : "");
    btn.textContent = size;
    btn.onclick = () => {
      sizesEl
        .querySelectorAll(".size-pill")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      currentSize = size;
    };
    sizesEl.appendChild(btn);
  });

  modal.classList.add("active");
  if (isMobile()) {
    lockScroll();
    addSwipeToClose(modal, closeModal);
  } else {
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("active");
  if (isMobile()) {
    unlockScroll();
  } else {
    document.body.style.overflow = "";
  }
  currentModal = null;
}

function changeQty(delta) {
  currentQty = Math.max(1, Math.min(10, currentQty + delta));
  document.getElementById("modal-qty-display").textContent = currentQty;
}

function addToCart() {
  if (!currentModal) return;

  const key = `${currentModal.id}-${currentSize}`;
  const existing = cart.find((i) => i.key === key);

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
      qty: currentQty,
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
  const panel = document.getElementById("cart-panel");
  const ov = document.getElementById("sidebar-overlay");
  if (panel.classList.contains("active")) {
    closeCart();
  } else {
    openCart();
  }
}

function openCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("sidebar-overlay");
  panel.classList.add("active");
  overlay.classList.add("active");
  if (isMobile()) {
    lockScroll();
    let startY = 0;
    let dragging = false;
    panel.addEventListener(
      "touchstart",
      (e) => {
        if (panel.scrollTop > 5) return;
        startY = e.touches[0].clientY;
        dragging = true;
      },
      { passive: true, once: false },
    );
    panel._swipeMove = (e) => {
      if (!dragging) return;
      const dy = e.touches[0].clientY - startY;
      if (dy > 0) panel.style.transform = `translateY(${dy * 0.45}px)`;
    };
    panel._swipeEnd = (e) => {
      if (!dragging) return;
      dragging = false;
      const dy = e.changedTouches[0].clientY - startY;
      panel.style.transform = "";
      if (dy > 80) closeCart();
    };
    panel.addEventListener("touchmove", panel._swipeMove, { passive: true });
    panel.addEventListener("touchend", panel._swipeEnd, { passive: true });
  }
}

function closeCart() {
  const panel = document.getElementById("cart-panel");
  panel.classList.remove("active");
  document.getElementById("sidebar-overlay").classList.remove("active");
  if (isMobile()) {
    unlockScroll();
    if (panel._swipeMove)
      panel.removeEventListener("touchmove", panel._swipeMove);
    if (panel._swipeEnd) panel.removeEventListener("touchend", panel._swipeEnd);
  }
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i>Seu carrinho está vazio</div>`;
    if (totalEl) totalEl.textContent = "R$ 0,00";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const svgSmall = PRODUCT_SVGS[item.svg] || "";
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="cart-item-img">${svgSmall}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace(".", ",")}</div>
        <div class="cart-item-qty">Tam: ${item.size || "—"} | Qtd: ${item.qty}</div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${index})"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(el);
  });

  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCartItems();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? "flex" : "none";
  }
}

function checkout() {
  if (!cart.length) {
    showToast("Adicione itens ao carrinho primeiro");
    return;
  }
  closeCart();
  openCheckout();
}

let checkoutCurrentStep = 1;

function openCheckout() {
  checkoutCurrentStep = 1;
  const modal = document.getElementById("checkout-modal");
  modal.classList.add("active");
  if (isMobile()) {
    lockScroll();
    addSwipeToClose(modal, closeCheckout);
  } else {
    document.body.style.overflow = "hidden";
  }

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShip = document.getElementById("ship-free");
  const stdShip = document.getElementById("ship-standard");
  if (freeShip) {
    if (cartTotal >= 199) {
      freeShip.style.display = "flex";
      freeShip.querySelector("input").checked = true;
    } else {
      freeShip.style.display = "none";
      if (stdShip) stdShip.checked = true;
    }
  }
  showCheckoutPanel(1);
}

function closeCheckout() {
  document.getElementById("checkout-modal").classList.remove("active");
  if (isMobile()) {
    unlockScroll();
  } else {
    document.body.style.overflow = "";
  }
}

function checkoutNextStep(step) {
  if (step > checkoutCurrentStep) {
    if (checkoutCurrentStep === 1) {
      const nome = document.getElementById("cf-nome").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const cpf = document.getElementById("cf-cpf").value.trim();
      const tel = document.getElementById("cf-tel").value.trim();
      const errors = [];
      if (!nome) errors.push("cf-nome");
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.push("cf-email");
      if (!cpf || cpf.replace(/\D/g, "").length < 11) errors.push("cf-cpf");
      if (!tel || tel.replace(/\D/g, "").length < 10) errors.push("cf-tel");
      if (errors.length) {
        highlightCheckoutErrors(errors);
        showToast("Preencha todos os campos corretamente.");
        return;
      }
    }
    if (checkoutCurrentStep === 2) {
      const cep = document.getElementById("cf-cep").value.trim();
      const rua = document.getElementById("cf-rua").value.trim();
      const num = document.getElementById("cf-num").value.trim();
      const bairro = document.getElementById("cf-bairro").value.trim();
      const cidade = document.getElementById("cf-cidade").value.trim();
      const uf = document.getElementById("cf-uf").value.trim();
      const errors = [];
      if (!cep || cep.replace(/\D/g, "").length < 8) errors.push("cf-cep");
      if (!rua) errors.push("cf-rua");
      if (!num) errors.push("cf-num");
      if (!bairro) errors.push("cf-bairro");
      if (!cidade) errors.push("cf-cidade");
      if (!uf || uf.length < 2) errors.push("cf-uf");
      if (errors.length) {
        highlightCheckoutErrors(errors);
        showToast("Preencha todos os campos de entrega.");
        return;
      }
    }
  }
  checkoutCurrentStep = step;
  showCheckoutPanel(step);
  if (step === 3) buildCheckoutSummary();
}

function highlightCheckoutErrors(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.borderColor = "var(--red)";
    el.style.boxShadow = "0 0 0 2px rgba(192,57,43,0.25)";
    el.addEventListener(
      "input",
      function clear() {
        el.style.borderColor = "";
        el.style.boxShadow = "";
      },
      { once: true },
    );
  });
  const first = document.getElementById(ids[0]);
  if (first) first.focus();
}

function showCheckoutPanel(step) {
  document
    .querySelectorAll(".checkout-panel")
    .forEach((p) => p.classList.remove("active"));
  const panel = document.getElementById("cpanel-" + step);
  if (panel) panel.classList.add("active");

  document.querySelectorAll(".checkout-step").forEach((s, i) => {
    s.classList.toggle("active", i + 1 === step);
    s.classList.toggle("done", i + 1 < step);
  });
}

function buildCheckoutSummary() {
  const el = document.getElementById("checkout-summary");
  if (!el) return;
  const shippingInput = document.querySelector(
    'input[name="shipping"]:checked',
  );
  const shippingVal = shippingInput ? parseFloat(shippingInput.value) : 19.9;
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingVal;

  el.innerHTML = `
    <div class="summary-title">Resumo do Pedido</div>
    <div class="summary-rows">
      ${cart
        .map(
          (i) => `
        <div class="summary-row">
          <span>${i.name} (${i.size || "U"}) x${i.qty}</span>
          <span>R$ ${(i.price * i.qty).toFixed(2).replace(".", ",")}</span>
        </div>`,
        )
        .join("")}
      <div class="summary-row">
        <span>Frete</span>
        <span>${shippingVal === 0 ? '<strong style="color:#7DB87A">GRÁTIS</strong>' : "R$ " + shippingVal.toFixed(2).replace(".", ",")}</span>
      </div>
      <div class="summary-row total-row">
        <span>Total</span>
        <span>R$ ${total.toFixed(2).replace(".", ",")}</span>
      </div>
    </div>
  `;
}

function selectPayTab(btn, type) {
  document
    .querySelectorAll(".pay-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  document
    .querySelectorAll(".pay-panel")
    .forEach((p) => p.classList.remove("active"));
  const panel = document.getElementById("ppanel-" + type);
  if (panel) panel.classList.add("active");
}

function confirmCheckout() {
  showCheckoutPanel("success");
  document.querySelectorAll(".checkout-step").forEach((s) => {
    s.classList.add("done");
    s.classList.remove("active");
  });
  const orderId = "MY-" + Date.now().toString().slice(-6);
  const now = new Date();
  const trackCodes = [
    "BR" + Math.random().toString(36).slice(2, 10).toUpperCase() + "BR",
  ];
  const orderData = {
    id: orderId,
    date: now.toLocaleDateString("pt-BR"),
    dateRaw: now.toISOString(),
    statusCode: 0,
    statusLabel: "Confirmado",
    trackCode: trackCodes[0],
    items: cart.map((item) => ({
      name: item.name,
      size: item.size,
      qty: item.qty,
      price: item.price,
    })),
  };
  if (typeof saveOrderToTracking === "function") saveOrderToTracking(orderData);
  const successEl = document.querySelector("#cpanel-success p");
  if (successEl)
    successEl.innerHTML = `Obrigado pela sua compra, shinobi! Pedido <strong>${orderId}</strong> confirmado. Acompanhe pelo <a onclick="closeCheckout();openInfoModal('rastrear')" style="color:var(--red);cursor:pointer;text-decoration:underline">Rastrear Pedido</a>.`;
  setTimeout(() => {
    cart = [];
    renderCartItems();
    updateCartBadge();
  }, 500);
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
