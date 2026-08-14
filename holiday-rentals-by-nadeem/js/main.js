/* ==========================================================================
   HOLIDAY RENTALS BY NADEEM — Site Behaviour
   ========================================================================== */

const WHATSAPP_NUMBER = '923001771221';
const INSTAGRAM_PROFILE = 'https://www.instagram.com/holiday_rentals_by_nadeem/';

function whatsappUrl(propertyName) {
  const message = `Hello, I am interested in booking ${propertyName}. Please share availability and booking details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---- Icon library (inline, single-stroke, no external requests) ---- */
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.2 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.87.27.13.45.19.51.31.07.11.07.62-.17 1.3Z"/></svg>`,
  airbnb: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5c.9 0 1.63.42 2.3 1.32.06.08 3.9 5.44 5.36 8.5.5 1.06.94 2.2.94 3.24 0 3.02-2.35 5.44-5.24 5.44a5.13 5.13 0 0 1-3.36-1.26 5.13 5.13 0 0 1-3.36 1.26C5.75 20 3.4 17.58 3.4 14.56c0-1.04.44-2.18.94-3.24 1.46-3.07 5.3-8.42 5.36-8.5.67-.9 1.4-1.32 2.3-1.32Zm0 2.3c-.16 0-.33.1-.53.36-.05.06-3.66 5.13-4.98 7.94-.4.86-.7 1.68-.7 2.46 0 1.7 1.32 3.14 3 3.14.98 0 1.86-.5 2.42-1.28l.8-1.13.8 1.13c.56.78 1.44 1.28 2.42 1.28 1.68 0 3-1.44 3-3.14 0-.78-.3-1.6-.7-2.46-1.32-2.8-4.93-7.88-4.98-7.94-.2-.26-.37-.36-.53-.36Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  guests: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15.5 14.1c2.8.4 4.9 2.5 4.9 5.4"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 18.5v-9a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9"/><path d="M2.5 15.5h19"/><path d="M6 9.5V13"/><path d="M6.5 9.5H11a1.5 1.5 0 0 1 1.5 1.5v2H5v-2A1.5 1.5 0 0 1 6.5 9.5Z"/></svg>`,
  bath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h16v2.5A5.5 5.5 0 0 1 14.5 20h-5A5.5 5.5 0 0 1 4 14.5V12Z"/><path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1 0 1.8.55 2.2 1.4"/><path d="M8 20v1.5M16 20v1.5"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M8 12.4l2.6 2.6L16.2 9"/></svg>`,
  luxury: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 8l4 3 5-7 5 7 4-3-2 11H5L3 8Z"/><path d="M7 22h10"/></svg>`,
  privacy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="1.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,
  safety: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M12 2.5l7.5 3v6c0 5-3.2 8.6-7.5 10-4.3-1.4-7.5-5-7.5-10v-6l7.5-3Z"/><path d="M9 12l2.2 2.2L15.5 9.5"/></svg>`,
  convenience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.6 2.1"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M17 17L7 7M7 7h8M7 7v8"/></svg>`,
};

/* ==========================================================================
   PROPERTY DATA
   Add future rentals here — cards, buttons and gallery hooks render
   automatically from this array. Do not add prices, ratings or amenities
   that have not been confirmed by the owner.
   ========================================================================== */
const PROPERTIES = [
  {
    id: 'orange-room',
    badge: 'Flagship',
    name: 'The Orange Room',
    location: 'Gulberg Greens, Islamabad',
    type: 'One-Bedroom Apartment',
    facts: [
      { icon: 'guests', label: '2 Guests' },
      { icon: 'bed', label: '1 Bedroom · 1 Bed' },
      { icon: 'bath', label: '1 Bathroom' },
    ],
    description: 'The Orange Room is a stylish one-bedroom apartment with a balcony, perfect for a couple, business traveller or anyone seeking a luxurious getaway in Islamabad. Experience comfort, safety and privacy in a centrally located unit with 24/7 restaurants, cafes, a supermarket, laundry and gym facilities at your doorstep.',
    amenities: [
      'Queen-size bed', 'Master Celeste spring mattress', 'Quality linen', '43-inch LCD Smart TV',
      'Netflix', 'YouTube', 'High-speed WiFi', 'Dedicated workspace', 'Fully equipped kitchenette',
      'Refrigerator', 'Microwave', 'Electric kettle', 'Toaster', 'Cookware', 'Crockery', 'Cutlery',
      'Ensuite bathroom', 'Fresh towels', 'Shampoo', 'Conditioner', 'Hand wash', 'Balcony',
      'Free onsite parking', 'UPS', '24/7 building security', 'Elevator',
    ],
    booking: { type: 'airbnb', url: 'https://www.airbnb.co.uk/rooms/1404090958722762901' },
    instagram: INSTAGRAM_PROFILE,
  },
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
    amenities: [],
    booking: { type: 'whatsapp' },
    instagram: 'https://www.instagram.com/p/Db-3ggYNlbt/',
  },
  {
    id: 'bahria-phase8-unit',
    badge: 'Full Unit',
    name: 'Bahria Town Phase 8',
    location: 'Bahria Town Phase 8, Islamabad',
    type: null,
    facts: [],
    description: 'Full unit available for booking in Bahria Town Phase 8, Islamabad. Celebrate freedom. Enjoy the holidays.',
    amenities: [],
    booking: { type: 'whatsapp' },
    instagram: 'https://www.instagram.com/p/Db08MMVNmjj/',
  },
];

const GALLERY_MOTIF = `<svg class="motif" viewBox="0 0 64 64" fill="none"><path d="M6 44 L26 20 L36 30 L58 8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="44" r="2.2" fill="currentColor" stroke="none"/><circle cx="58" cy="8" r="2.2" fill="currentColor" stroke="none"/></svg>`;

function placeholderImage(label) {
  return `<div class="placeholder-image" role="img" aria-label="${label} — photography placeholder">${GALLERY_MOTIF}<span class="placeholder-label">${label}</span></div>`;
}

function bookingButton(property) {
  if (property.booking.type === 'airbnb') {
    return `<a class="btn btn-airbnb" href="${property.booking.url}" target="_blank" rel="noopener">${ICONS.airbnb}Book on Airbnb</a>`;
  }
  return `<a class="btn btn-whatsapp" href="${whatsappUrl(property.name)}" target="_blank" rel="noopener">${ICONS.whatsapp}Book on WhatsApp</a>`;
}

function factRow(facts) {
  if (!facts.length) return '';
  return `<div class="property-facts">${facts.map(f => `<span>${ICONS[f.icon]}${f.label}</span>`).join('')}</div>`;
}

function amenitiesBlock(amenities) {
  if (!amenities.length) return '';
  return `
    <details class="amenities-toggle">
      <summary>Amenities (${amenities.length})</summary>
      <ul class="amenities-list">
        ${amenities.map(a => `<li>${a}</li>`).join('')}
      </ul>
    </details>`;
}

function renderPropertyCard(property) {
  return `
    <article class="property-card reveal" id="${property.id}">
      <div class="property-media">
        ${property.badge ? `<span class="property-badge">${property.badge}</span>` : ''}
        ${placeholderImage(property.name)}
      </div>
      <div class="property-body">
        <div class="property-location">${property.location}</div>
        <h3>${property.name}</h3>
        ${property.type ? `<p class="desc" style="margin-bottom:6px;color:var(--ink);font-weight:500;font-size:13.5px;">${property.type}</p>` : ''}
        ${factRow(property.facts)}
        <p class="desc">${property.description}</p>
        ${amenitiesBlock(property.amenities)}
        <div class="property-actions">
          ${bookingButton(property)}
          <a class="btn btn-instagram" href="${property.instagram}" target="_blank" rel="noopener">${ICONS.instagram}View More on Instagram</a>
        </div>
      </div>
    </article>`;
}

function renderRentals() {
  const grid = document.getElementById('rentals-grid');
  if (!grid) return;
  grid.innerHTML = PROPERTIES.map(renderPropertyCard).join('');
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

const GALLERY_IMAGES = {
  'Exterior': 'assets/images/orange-room-exterior.avif',
  'Bedroom': 'assets/images/orange-room-bedroom.avif',
  'Living Room': 'assets/images/orange-room-living-room.avif',
  'Bathroom': 'assets/images/orange-room-bathroom.avif',
};
function render() {
  const label = items[index].dataset.label;
  const src = GALLERY_IMAGES[label];
  stage.innerHTML = `<img src="${src}" alt="The Orange Room — ${label}" style="width:100%;height:100%;object-fit:cover;">`;
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
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderRentals();
  initHeader();
  initMobileNav();
  initLightbox();
  initReveal();
  initParallax();

  document.getElementById('year').textContent = new Date().getFullYear();
});
