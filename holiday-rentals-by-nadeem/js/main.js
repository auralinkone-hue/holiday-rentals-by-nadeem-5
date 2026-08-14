/* ==========================================================================
   HOLIDAY RENTALS BY NADEEM — Site Behaviour v2
   ========================================================================== */

const WHATSAPP_NUMBER = '923001771221';
const INSTAGRAM_PROFILE = 'https://www.instagram.com/holiday_rentals_by_nadeem/';
const ICON_WHATSAPP = 'assets/icons/whatsapp-icon.png';
const ICON_INSTAGRAM = 'assets/icons/instagramicon.png';

function whatsappUrl(propertyName) {
  const message = `Hello, I am interested in booking ${propertyName}. Please share availability and booking details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---- Small inline icon set (non-brand utility icons only) ---- */
const ICONS = {
  guests: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15.5 14.1c2.8.4 4.9 2.5 4.9 5.4"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 18.5v-9a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9"/><path d="M2.5 15.5h19"/><path d="M6 9.5V13"/><path d="M6.5 9.5H11a1.5 1.5 0 0 1 1.5 1.5v2H5v-2A1.5 1.5 0 0 1 6.5 9.5Z"/></svg>`,
  bath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h16v2.5A5.5 5.5 0 0 1 14.5 20h-5A5.5 5.5 0 0 1 4 14.5V12Z"/><path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1 0 1.8.55 2.2 1.4"/><path d="M8 20v1.5M16 20v1.5"/></svg>`,
};

/* ==========================================================================
   RENTAL PROPERTIES (WhatsApp / direct bookings)
   The Orange Room (Airbnb) is rendered separately, directly in index.html.

   To show a real Instagram Reel instead of the placeholder image, paste the
   reel URL into that property's `reel` field and commit — no other changes
   needed. Leave it null to keep the placeholder.
   ========================================================================== */
const RENTAL_PROPERTIES = [
  {
    id: 'bahria-phase8-villa',
    badge: 'Villa',
    name: 'Premium Stay in Bahria Town Phase 8',
    location: 'Bahria Town Phase 8, Islamabad',
    type: 'Fully Equipped 2-Bedroom Villa',
    facts: [
      { icon: 'guests', label: 'Up to 4 Guests' },
      { icon: 'bed', label: '2 Bedrooms' },
    ],
    description: 'Premium stay in Bahria Town Phase 8, Islamabad. A fully equipped two-bedroom villa, comfortable for up to four guests.',
    instagram: 'https://www.instagram.com/p/Db-3ggYNlbt/',
    reel: 'https://www.instagram.com/p/Db-3ggYNlbt/',
  },
  {
    id: 'bahria-phase8-unit',
    badge: 'Full Unit',
    name: 'Bahria Town Phase 8',
    location: 'Bahria Town Phase 8, Islamabad',
    type: null,
    facts: [],
    description: 'Full unit available for booking in Bahria Town Phase 8, Islamabad. Celebrate freedom. Enjoy the holidays.',
    instagram: 'https://www.instagram.com/p/Db08MMVNmjj/',
    reel: 'https://www.instagram.com/p/Db08MMVNmjj/',
  },
];

const MOTIF = `<svg class="motif" viewBox="0 0 64 64" fill="none" stroke="currentColor"><path d="M6 44 L26 20 L36 30 L58 8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="44" r="2.2" fill="currentColor" stroke="none"/><circle cx="58" cy="8" r="2.2" fill="currentColor" stroke="none"/></svg>`;

function placeholderImage(label) {
  return `<div class="placeholder-image" role="img" aria-label="${label} — photography placeholder">${MOTIF}<span class="placeholder-label">${label}</span></div>`;
}

function reelEmbed(url) {
  return `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="margin:0;width:100%;"></blockquote>`;
}

function factRow(facts) {
  if (!facts.length) return '';
  return `<div class="property-facts">${facts.map(f => `<span>${ICONS[f.icon]}${f.label}</span>`).join('')}</div>`;
}

function renderPropertyCard(property) {
  const mediaClass = property.reel ? 'property-media has-reel' : 'property-media';
  const mediaContent = property.reel ? reelEmbed(property.reel) : placeholderImage(property.name);
  return `
    <article class="property-card reveal" id="${property.id}">
      <div class="${mediaClass}">
        ${property.badge ? `<span class="property-badge">${property.badge}</span>` : ''}
        ${mediaContent}
      </div>
      <div class="property-body">
        <div class="property-location">${property.location}</div>
        <h3>${property.name}</h3>
        ${property.type ? `<p class="desc" style="margin-bottom:6px;color:var(--ink);font-weight:500;font-size:13.5px;">${property.type}</p>` : ''}
        ${factRow(property.facts)}
        <p class="desc">${property.description}</p>
        <div class="property-actions">
          <a class="btn btn-whatsapp-solid" href="${whatsappUrl(property.name)}" target="_blank" rel="noopener">
            <img src="${ICON_WHATSAPP}" class="btn-icon" alt="" aria-hidden="true">Book on WhatsApp
          </a>
          <a class="btn btn-instagram-outline" href="${property.instagram}" target="_blank" rel="noopener">
            <img src="${ICON_INSTAGRAM}" class="btn-icon" alt="" aria-hidden="true">View More on Instagram
          </a>
        </div>
      </div>
    </article>`;
}

function renderRentals() {
  const grid = document.getElementById('rentals-grid');
  if (!grid) return;
  grid.innerHTML = RENTAL_PROPERTIES.map(renderPropertyCard).join('');
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
}

/* ==========================================================================
   HEADER STATE
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('site-header');
  const toggle = () => header.classList.toggle('scrolled', window.scrollY > 60);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

/* ==========================================================================
   MOBILE NAV
   ========================================================================== */
function initMobileNav() {
  const root = document.body;
  const hamburger = document.getElementById('hamburger');
  const panel = document.getElementById('mobile-panel');
  if (!hamburger || !panel) return;
  const close = () => root.classList.remove('nav-open');
  hamburger.addEventListener('click', () => root.classList.toggle('nav-open'));
  panel.querySelectorAll('a, button').forEach(el => el.addEventListener('click', close));
}

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger, .route-divider');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(t => observer.observe(t));
}

/* ==========================================================================
   HERO PARALLAX
   ========================================================================== */
function initParallax() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        bg.style.transform = `translateY(${y * 0.22}px)`;
      }
      ticking = false;
    });
  }, { passive: true });
}

/* ==========================================================================
   LIGHTBOX (Orange Room gallery)
   ========================================================================== */
function initLightbox() {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  if (!items.length || !lightbox) return;
  const stage = document.getElementById('lightbox-stage');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  let index = 0;

  function render() {
    const img = items[index].querySelector('img');
    const label = items[index].dataset.label;
    if (img) {
      stage.innerHTML = `<img src="${img.getAttribute('src')}" alt="${img.getAttribute('alt') || label}">`;
    } else {
      stage.innerHTML = placeholderImage(label);
    }
  }
  function open(i) {
    index = i;
    render();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function step(delta) {
    index = (index + delta + items.length) % items.length;
    render();
  }

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}

/* ==========================================================================
   FOLLOW CARD — cursor-follow glow
   ========================================================================== */
function initFollowGlow() {
  const card = document.getElementById('follow-card');
  if (!card) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderRentals();
  initHeader();
  initMobileNav();
  initLightbox();
  initReveal();
  initParallax();
  initFollowGlow();

  document.getElementById('year').textContent = new Date().getFullYear();
});
