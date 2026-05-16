/* shared.js — 투삼로지스 공통 JS */

// ── NAV ──────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');

let drawerOpen = false;
if (burger) {
  burger.addEventListener('click', () => {
    drawerOpen = !drawerOpen;
    drawer.style.display = drawerOpen ? 'flex' : 'none';
    const s = burger.querySelectorAll('span');
    s[0].style.transform = drawerOpen ? 'translateY(6.5px) rotate(45deg)' : '';
    s[1].style.opacity   = drawerOpen ? '0' : '1';
    s[2].style.transform = drawerOpen ? 'translateY(-6.5px) rotate(-45deg)' : '';
  });
}

// Active link
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-drawer a:not(.nav-drawer-btn)').forEach(a => {
  const h = a.getAttribute('href') || '';
  if (h === page || h.endsWith('/' + page)) a.classList.add('active');
});

// ── REVEAL ───────────────────────────────
const revEls = document.querySelectorAll('.rev');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.07 });
  revEls.forEach(el => io.observe(el));
} else {
  revEls.forEach(el => el.classList.add('in'));
}

// ── FAQ ──────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.nextElementSibling.classList.toggle('open', open);
  });
});

// ── KAKAO TIP ────────────────────────────
const tip = document.getElementById('kkTip');
if (tip) setTimeout(() => { tip.style.opacity = '0'; tip.style.transition = 'opacity .4s'; setTimeout(() => tip.remove(), 400); }, 5000);
