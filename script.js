/***********************
 * Demo data (3 уровня)
 ***********************/
const catalog = [
    {
        id: "beef",
        title: "Говядина",
        subtitle: "Стейки, тушение, фарш",
        icon: "🥩",
        sub: [
            {
                id: "beef_steaks",
                title: "Стейки",
                subtitle: "Премиальные отрубы",
                products: [
                    {
                        id: "ribeye",
                        name: "Рибай стейк",
                        desc: "Мраморность, сочность, идеален для гриля.",
                        price: 1490,
                        unit: "кг",
                        img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/688/122/539/130/212/4/100048217574b0.jpg"
                    },
                    {
                        id: "striploin",
                        name: "Стриплойн",
                        desc: "Насыщенный вкус, тонкий жирок по краю.",
                        price: 1290,
                        unit: "кг",
                        img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/12272/494140-730x604.JPG?v=3"
                    },
                    {
                        id: "tbone",
                        name: "T-bone",
                        desc: "Два вкуса в одном: вырезка + стриплойн.",
                        price: 1690,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=96b57615b141ff1496dce4011b0d8156_l-10242960-images-thumbs&n=13"
                    }
                ]
            },
            {
                id: "beef_mince",
                title: "Фарш и котлеты",
                subtitle: "Для бургеров и домашних котлет",
                products: [
                    {
                        id: "beef_mince",
                        name: "Фарш говяжий 80/20",
                        desc: "Баланс мяса и жира — сочные котлеты.",
                        price: 690,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=d8f8ac2dcda2e851210c812bae708c7cd7dbd27f-3966851-images-thumbs&n=13"
                    },
                    {
                        id: "burger_patties",
                        name: "Котлеты для бургеров",
                        desc: "4 шт, сформированы и готовы к жарке.",
                        price: 420,
                        unit: "уп",
                        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
                    },
                    {
                        id: "beef_meatballs",
                        name: "Фрикадельки",
                        desc: "Идеальны для пасты и супов.",
                        price: 390,
                        unit: "уп",
                        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80"
                    }
                ]
            },
            {
                id: "beef_braise",
                title: "На тушение",
                subtitle: "Гуляш, бефстроганов, рагу",
                products: [
                    {
                        id: "goulash",
                        name: "Гуляш (лопатка)",
                        desc: "Нежное мясо, отлично томится.",
                        price: 790,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=2886a11220ab6d2827a71b8733791a9af1b81c73-5249092-images-thumbs&n=13"
                    },
                    {
                        id: "stroganoff",
                        name: "Бефстроганов",
                        desc: "Уже нарезано — быстро готовить.",
                        price: 860,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=398c1d8c3177509bc197c79bb4422759_l-5340812-images-thumbs&n=13"
                    }
                ]
            }
        ]
    },
    {
        id: "pork",
        title: "Свинина",
        subtitle: "Шашлык, запекание, ребра",
        icon: "🍖",
        sub: [
            {
                id: "pork_bbq",
                title: "Шашлык",
                subtitle: "Классика на мангал",
                products: [
                    {
                        id: "neck",
                        name: "Шея свиная",
                        desc: "Самый популярный выбор для шашлыка.",
                        price: 690,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=a162561b2ca31ba82f00ae614c7a5bd2733fdbee-5870252-images-thumbs&n=13"
                    },
                    {
                        id: "marinated",
                        name: "Шашлык маринованный",
                        desc: "В специях, готов к жарке.",
                        price: 790,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=8094ae1c9622970cdbcf1bdf587b1320110d283d-5876048-images-thumbs&n=13"
                    }
                ]
            },
            {
                id: "pork_ribs",
                title: "Ребра",
                subtitle: "BBQ, духовка, копчение",
                products: [
                    {
                        id: "ribs_bbq",
                        name: "Рёбра свиные",
                        desc: "Мясистые ребра для BBQ.",
                        price: 640,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=f5a6ff14e5a185f9452ecad5caf93734fe8cb88e-5644946-images-thumbs&n=13"
                    }
                ]
            },
            {
                id: "pork_roast",
                title: "Запекание",
                subtitle: "Буженина, рулеты",
                products: [
                    {
                        id: "ham",
                        name: "Окорок",
                        desc: "Для запекания и домашней ветчины.",
                        price: 610,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=038370c95fe6d505a221639471b3a443ea1723b2-4012127-images-thumbs&n=13"
                    },
                    {
                        id: "loin",
                        name: "Корейка",
                        desc: "Нежная, подходит для отбивных.",
                        price: 720,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=09df0fce9affb10d7561f0800c6fa4650f825a44-4542475-images-thumbs&n=13"
                    }
                ]
            }
        ]
    },
    {
        id: "chicken",
        title: "Птица",
        subtitle: "Курица и индейка",
        icon: "🐔",
        sub: [
            {
                id: "chicken_parts",
                title: "Курица",
                subtitle: "Филе, бедро, крылья",
                products: [
                    {
                        id: "ch_fillet",
                        name: "Филе куриное",
                        desc: "Универсально: салаты, жарка, запекание.",
                        price: 420,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=c4bdd1b8b3b767e5729e5d9916019a278b2f27f3-8377138-images-thumbs&n=13"
                    },
                    {
                        id: "ch_thigh",
                        name: "Бедро куриное",
                        desc: "Сочное мясо, идеально для гриля.",
                        price: 360,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=0b131ccd3bf08b4bf5bceccbc2d121b042473826-10814926-images-thumbs&n=13"
                    },
                    {
                        id: "ch_wings",
                        name: "Крылышки",
                        desc: "Для духовки и острых соусов.",
                        price: 330,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=88d3b76fc15d927f00a78712ff5d58bce2d857fe-5333799-images-thumbs&n=13"
                    }
                ]
            },
            {
                id: "turkey",
                title: "Индейка",
                subtitle: "Диетическое мясо",
                products: [
                    {
                        id: "turkey_fillet",
                        name: "Филе индейки",
                        desc: "Нежное, низкокалорийное.",
                        price: 690,
                        unit: "кг",
                        img: "https://avatars.mds.yandex.net/i?id=61fd13c262842a3318017274167f0a396df6e28c-5409727-images-thumbs&n=13"
                    }
                ]
            }
        ]
    }
];

const REVIEWS_2GIS_PAGE = "https://2gis.ru/novosibirsk/firm/70000001061830407/tab/reviews";

const reviews = [
    {
        name: "Елена Сатункина",
        date: "9 ноября 2025",
        text: "Больше года беру тут мясо, всегда все очень свежее, вкусно маринованное. Очень вкусные особенно говяжие стейки 🥩, это что-то божественное, говядина вся отборная, вкусная, и все мясо чистое, правильно разделенное и вкусное, хоть на костре жарить, хоть дома в духовке, хоть на гриле одинаково вкусно😍❤️👍",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        link: REVIEWS_2GIS_PAGE
    },
    {
        name: "Кристина Грищенко",
        date: "21 октября 2025",
        text: "Всегда хорошее мясо, берем постоянно уже больше года, не понимаю, откуда плохие отзывы здесь.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        link: REVIEWS_2GIS_PAGE
    },
    {
        name: "Анна Шаповалова",
        date: "22 мая 2025",
        text: "Замечательный магазин, всегда свежее мясо! Широкий ассортимент, адекватные цены. Можно сделать предзаказ по телефону. Радушные хозяева и советом подскажут и с выбором помогут!",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
        link: REVIEWS_2GIS_PAGE
    },
    {
        name: "Иван Дружинин",
        date: "22 октября 2024",
        text: "Отличный магазин, всегда свежие продукты и адекватные цены! 5+",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        link: REVIEWS_2GIS_PAGE
    },
    {
        name: "макс Иванов",
        date: "6 июля 2024",
        text: "Мясо всегда свежее, пельмени домашние, рекомендую, цены адекватные.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        link: REVIEWS_2GIS_PAGE
    }
];


/***********************
 * State
 ***********************/
const $ = (s) => document.querySelector(s);
const elLevel1 = $("#level1");
const elLevel2 = $("#level2");
const elProducts = $("#products");
const elNoProducts = $("#noProducts");
const elCrumbs = $("#crumbs");
const elProductsMeta = $("#productsMeta");
const elQ = $("#q");

const cartModal = $("#cartModal");
const cartCount = $("#cartCount");
const cartHint = $("#cartHint");
const cartItems = $("#cartItems");
const cartEmpty = $("#cartEmpty");
const sumItems = $("#sumItems");
const sumDelivery = $("#sumDelivery");
const sumTotal = $("#sumTotal");

const CART_KEY = "meatshop_cart_v1";

let selectedL1 = catalog[0]?.id || null;
let selectedL2 = catalog[0]?.sub?.[0]?.id || null;

function money(n) {
    return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

function loadCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return {};
        const obj = JSON.parse(raw);
        return obj && typeof obj === "object" ? obj : {};
    } catch { return {}; }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartQtyTotal(cart) {
    return Object.values(cart).reduce((a, b) => a + (b.qty || 0), 0);
}

function findProductById(pid) {
    for (const l1 of catalog) {
        for (const l2 of l1.sub) {
            for (const p of l2.products) {
                if (p.id === pid) return p;
            }
        }
    }
    return null;
}

function getSelected() {
    const l1 = catalog.find(x => x.id === selectedL1) || catalog[0];
    const l2 = (l1?.sub || []).find(x => x.id === selectedL2) || l1?.sub?.[0];
    return { l1, l2 };
}

/***********************
 * Render level 1 & 2
 ***********************/
function renderLevel1() {
    elLevel1.innerHTML = "";
    catalog.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "rowBtn" + (item.id === selectedL1 ? " active" : "");
        btn.innerHTML = `
        <span class="meta">
          <span style="font-size:18px">${item.icon}</span>
          <span>
            <b>${item.title}</b>
            <span>${item.subtitle}</span>
          </span>
        </span>
        <svg class="icon chev" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="rgba(255,255,255,.75)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
        btn.addEventListener("click", () => {
            selectedL1 = item.id;
            selectedL2 = item.sub?.[0]?.id || null;
            elQ.value = "";
            renderAll();
        });
        elLevel1.appendChild(btn);
    });
}

function renderLevel2() {
    const { l1, l2 } = getSelected();
    elLevel2.innerHTML = "";

    (l1?.sub || []).forEach(item => {
        const btn = document.createElement("button");
        btn.className = "rowBtn" + (item.id === selectedL2 ? " active" : "");
        btn.innerHTML = `
        <span class="meta">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 7h12M6 12h12M6 17h8" stroke="rgba(255,255,255,.85)" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
          <span>
            <b>${item.title}</b>
            <span>${item.subtitle || ""}</span>
          </span>
        </span>
        <span class="pill" title="Количество товаров">${item.products.length}</span>
      `;
        btn.addEventListener("click", () => {
            selectedL2 = item.id;
            elQ.value = "";
            renderLevel2();   // <-- ВАЖНО: обновит выделение
            renderProducts();
            renderCrumbs();
        });
        elLevel2.appendChild(btn);
    });

    // fallback
    if (!l2 && l1?.sub?.[0]) {
        selectedL2 = l1.sub[0].id;
    }
}

function renderCrumbs() {
    const { l1, l2 } = getSelected();
    elCrumbs.textContent = l1 && l2 ? `${l1.title} → ${l2.title}` : "Выберите раздел";
}

/***********************
 * Products
 ***********************/
function productCard(p) {
    const cart = loadCart();
    const qty = cart[p.id]?.qty || 0;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="cardImg">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="cardBody">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
      <div class="priceRow">
        <div>
          <span class="price">${money(p.price)}</span>
          <span class="per">/ ${p.unit}</span>
        </div>
        <div class="qty" aria-label="Количество">
          <button type="button" data-act="dec" aria-label="Уменьшить">−</button>
          <input type="text" value="${qty}" inputmode="numeric" aria-label="Количество" readonly>
          <button type="button" data-act="inc" aria-label="Увеличить">+</button>
        </div>
      </div>
    `;

    const input = card.querySelector("input");
    const dec = card.querySelector('[data-act="dec"]');
    const inc = card.querySelector('[data-act="inc"]');

    function setQty(newQty) {
        const cart2 = loadCart();
        if (newQty <= 0) {
            delete cart2[p.id];
        } else {
            cart2[p.id] = { qty: newQty };
        }
        saveCart(cart2);
        input.value = String(Math.max(0, newQty));
        refreshCartBadge();
    }

    dec.addEventListener("click", () => {
        const cur = parseInt(input.value || "0", 10);
        setQty(cur - 1);
    });
    inc.addEventListener("click", () => {
        const cur = parseInt(input.value || "0", 10);
        setQty(cur + 1);
    });

    return card;
}

function renderProducts() {
    const { l1, l2 } = getSelected();
    const q = (elQ.value || "").trim().toLowerCase();

    const items = (l2?.products || []).filter(p => {
        if (!q) return true;
        return (p.name + " " + p.desc).toLowerCase().includes(q);
    });

    elProducts.innerHTML = "";
    items.forEach(p => elProducts.appendChild(productCard(p)));

    elNoProducts.style.display = items.length ? "none" : "block";
    elProductsMeta.textContent = l1 && l2
        ? `${l1.title} → ${l2.title} • ${items.length} товар(ов)`
        : "—";
}

/***********************
 * Reviews
 ***********************/
function starSvg() {
    return `
      <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.1 6.6 7.3 1-5.3 5.1 1.3 7.2L12 18.8 5.6 22l1.3-7.2L1.6 9.6l7.3-1L12 2Z"
          fill="rgba(255,154,61,.95)" />
      </svg>`;
}

function starSvg() {
    return `
    <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l3.1 6.6 7.3 1-5.3 5.1 1.3 7.2L12 18.8 5.6 22l1.3-7.2L1.6 9.6l7.3-1L12 2Z"
        fill="rgba(255,154,61,.95)" />
    </svg>`;
}

const REV_PER_PAGE = 2;
let revPage = 0;
let revTimer = null;

function pagesCount() {
    return Math.max(1, Math.ceil(reviews.length / REV_PER_PAGE));
}

function renderReviewsCarousel() {
    const track = document.querySelector("#revTrack");
    const dots = document.querySelector("#revDots");
    if (!track || !dots) return;

    track.innerHTML = "";
    dots.innerHTML = "";

    // Рендерим ВСЕ отзывы как слайды шириной 50%
    reviews.forEach((r) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `
      <div class="reviewCard">
        <div class="reviewTop">
          <div class="avatar"><img src="${r.avatar}" alt="${escapeHtml(r.name)}"></div>
          <div>
            <b>${escapeHtml(r.name)}</b>
            <small>${escapeHtml(r.date || "")}</small>
          </div>
          <div class="stars" aria-label="Рейтинг ${r.stars} из 5">
            ${Array.from({ length: Math.max(0, Math.min(5, r.stars || 0)) }).map(starSvg).join("")}
          </div>
        </div>
        <p>${escapeHtml(r.text)}</p>
        <a href="${r.link || REVIEWS_2GIS_PAGE}" target="_blank" rel="noreferrer">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M10 14a5 5 0 0 0 7.1 0l2.9-2.9a5 5 0 0 0-7.1-7.1L11.6 5"
                  stroke="rgba(255,255,255,.85)" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M14 10a5 5 0 0 0-7.1 0L4 12.9a5 5 0 1 0 7.1 7.1L12.4 19"
                  stroke="rgba(255,255,255,.85)" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
          Читать в 2ГИС
        </a>
      </div>
    `;
        track.appendChild(slide);
    });

    // Точки теперь по страницам (по 2 отзыва)
    const pc = pagesCount();
    for (let i = 0; i < pc; i++) {
        const d = document.createElement("button");
        d.className = "dot" + (i === revPage ? " active" : "");
        d.type = "button";
        d.addEventListener("click", () => {
            revPage = i;
            updateReviewsCarousel();
            resetReviewsAutoplay();
        });
        dots.appendChild(d);
    }

    updateReviewsCarousel();
}

function updateReviewsCarousel() {
    const track = document.querySelector("#revTrack");
    const dots = document.querySelectorAll("#revDots .dot");
    if (!track) return;

    const pc = pagesCount();
    if (revPage < 0) revPage = pc - 1;
    if (revPage >= pc) revPage = 0;

    // 1 страница = сдвиг на 100% контейнера (т.к. 2 слайда по 50%)
    track.style.transform = `translateX(${-revPage * 100}%)`;

    dots.forEach((d, i) => d.classList.toggle("active", i === revPage));
}

function nextReview() {
    revPage += 1;
    updateReviewsCarousel();
}

function prevReview() {
    revPage -= 1;
    updateReviewsCarousel();
}

function resetReviewsAutoplay() {
    if (revTimer) clearInterval(revTimer);
    revTimer = setInterval(() => {
        nextReview();
    }, 6000);
}

function resetReviewsAutoplay() {
    if (revTimer) clearInterval(revTimer);
    // автопрокрутка каждые 6 секунд
    revTimer = setInterval(() => {
        nextReview();
    }, 6000);
}

// Мини-утилита: чтобы безопасно вставлять текст (если копипастишь отзывы)
function escapeHtml(s) {
    return String(s ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function initReviewsControls() {
    const prevBtn = document.querySelector("#revPrev");
    const nextBtn = document.querySelector("#revNext");
    const wrap = document.querySelector("#revTrackWrap");

    if (prevBtn) prevBtn.addEventListener("click", () => { prevReview(); resetReviewsAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { nextReview(); resetReviewsAutoplay(); });

    // свайп
    if (wrap) {
        let startX = 0;
        let active = false;

        wrap.addEventListener("pointerdown", (e) => {
            active = true;
            startX = e.clientX;
            wrap.setPointerCapture?.(e.pointerId);
        });

        wrap.addEventListener("pointerup", (e) => {
            if (!active) return;
            active = false;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 40) {
                dx < 0 ? nextReview() : prevReview();
                resetReviewsAutoplay();
            }
        });

        wrap.addEventListener("pointercancel", () => { active = false; });
    }
}

/***********************
 * Cart modal
 ***********************/
function refreshCartBadge() {
    const cart = loadCart();
    const total = cartQtyTotal(cart);
    cartCount.textContent = String(total);
    cartCount.style.display = total ? "grid" : "none";
}

function openCart() {
    cartModal.classList.add("open");
    cartModal.setAttribute("aria-hidden", "false");
    renderCartModal();
}

function closeCart() {
    cartModal.classList.remove("open");
    cartModal.setAttribute("aria-hidden", "true");
}

function renderCartModal() {
    const cart = loadCart();
    const ids = Object.keys(cart);

    cartItems.innerHTML = "";
    cartEmpty.style.display = ids.length ? "none" : "block";

    let itemsSum = 0;

    ids.forEach(pid => {
        const p = findProductById(pid);
        if (!p) return;

        const qty = cart[pid].qty || 0;
        const line = p.price * qty;
        itemsSum += line;

        const row = document.createElement("div");
        row.className = "cartItem";
        row.innerHTML = `
        <div class="thumb"><img src="${p.img}" alt="${p.name}"></div>
        <div class="info">
          <b>${p.name}</b>
          <small>${money(p.price)} / ${p.unit} • Кол-во: <span style="font-family:var(--mono)">${qty}</span></small>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn" data-act="dec" style="padding:8px 10px;">
              <span style="font-family:var(--mono)">−</span>
              Меньше
            </button>
            <button class="btn" data-act="inc" style="padding:8px 10px;">
              <span style="font-family:var(--mono)">+</span>
              Больше
            </button>
            <button class="btn ghost" data-act="rm" style="padding:8px 10px;">
              Удалить
            </button>
          </div>
        </div>
        <div class="sum">
          <b>${money(line)}</b>
          <small>${qty} × ${money(p.price)}</small>
        </div>
      `;

        function setQty(newQty) {
            const cart2 = loadCart();
            if (newQty <= 0) delete cart2[pid];
            else cart2[pid] = { qty: newQty };
            saveCart(cart2);
            refreshCartBadge();
            renderCartModal();
            // Также перерендерим товары, чтобы числа в карточках совпадали
            renderProducts();
        }

        row.querySelector('[data-act="dec"]').addEventListener("click", () => setQty(qty - 1));
        row.querySelector('[data-act="inc"]').addEventListener("click", () => setQty(qty + 1));
        row.querySelector('[data-act="rm"]').addEventListener("click", () => setQty(0));

        cartItems.appendChild(row);
    });

    // простая "доставка": 0 до 2000, иначе 0 (демо)
    const delivery = itemsSum > 0 && itemsSum < 2000 ? 199 : 0;
    const total = itemsSum + delivery;

    sumItems.textContent = money(itemsSum);
    sumDelivery.textContent = money(delivery);
    sumTotal.textContent = money(total);

    const qtyTotal = cartQtyTotal(cart);
    cartHint.textContent = qtyTotal ? `${qtyTotal} шт` : "пусто";
}

/***********************
 * Events
 ***********************/
$("#openCart").addEventListener("click", openCart);
$("#openCart2").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);

cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) closeCart();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cartModal.classList.contains("open")) closeCart();
});

$("#clearCart").addEventListener("click", () => {
    saveCart({});
    refreshCartBadge();
    renderCartModal();
    renderProducts();
});

$("#checkout").addEventListener("click", () => {
    const cart = loadCart();
    if (cartQtyTotal(cart) === 0) {
        alert("Корзина пустая 🙂");
        return;
    }
    alert("Демо: здесь подключается оформление заказа (форма/оплата/отправка в Telegram).");
});

elQ.addEventListener("input", () => {
    renderProducts();
});

$("#clearFilters").addEventListener("click", () => {
    selectedL1 = catalog[0]?.id || null;
    selectedL2 = catalog[0]?.sub?.[0]?.id || null;
    elQ.value = "";
    renderAll();
});

/***********************
 * Render all
 ***********************/
function renderAll() {
    renderLevel1();
    renderLevel2();
    renderCrumbs();
    renderProducts();
    refreshCartBadge();
}

// Init
renderAll();
renderReviewsCarousel();
initReviewsControls();
resetReviewsAutoplay();
refreshCartBadge();