/**
 * Portfolio App — Executive brand site
 * All content from data.js. Zero duplication.
 * Rajiv Srivastava | 2026
 */
(() => {
  'use strict';

  const D = typeof PORTFOLIO !== 'undefined' ? PORTFOLIO : null;
  if (!D) { document.getElementById('app').textContent = 'Portfolio data not found.'; return; }

  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const ghSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';

  /* Sun icon (shown in dark mode — click to go light) */
  const sunSvg = '<svg class="theme-icon theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  /* Moon icon (shown in light mode — click to go dark) */
  const moonSvg = '<svg class="theme-icon theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';

  /* ===================================================================
   * Render
   * =================================================================*/
  function render() {
    const nav = D.nav.map(n => `<li><a href="${n.href}" class="nav__link">${esc(n.label)}</a></li>`).join('');

    const beliefs = D.beliefs.map(b =>
      `<div class="belief" data-reveal>
        <h3 class="belief__title">${esc(b.title)}</h3>
        <p class="belief__body">${esc(b.body)}</p>
      </div>`
    ).join('');

    const impacts = D.impact.map(i =>
      `<div class="stat" data-reveal>
        <span class="stat__value">${esc(i.value)}</span>
        <span class="stat__label">${esc(i.label)}</span>
      </div>`
    ).join('');

    const themes = D.themes.map(t =>
      `<article class="theme" data-reveal>
        <div class="theme__bar" style="background:${t.accent}"></div>
        <div class="theme__content">
          <span class="theme__scope">${esc(t.scope)}</span>
          <h3 class="theme__title">${esc(t.title)}</h3>
          <p class="theme__body">${esc(t.body)}</p>
        </div>
      </article>`
    ).join('');

    const patents = D.patents.map(p =>
      `<div class="patent" data-reveal>
        <span class="patent__id">${p.id}</span>
        <h3 class="patent__title">${esc(p.title)}</h3>
        <span class="patent__status">Patent Filed</span>
      </div>`
    ).join('');

    document.getElementById('app').innerHTML = `
    <nav class="nav" id="nav">
      <div class="nav__inner">
        <a href="#" class="nav__logo">
          <img src="${esc(D.photo)}" alt="${esc(D.name)}" class="nav__avatar" id="nav-avatar" />
          <span class="nav__name">${esc(D.name)}</span>
          <span class="nav__divider">|</span>
          <span class="nav__role">${esc(D.role)}</span>
        </a>
        <div class="nav__actions">
          <ul class="nav__menu" id="nav-menu">
            ${nav}
            <li><button class="nav__link nav__chat-btn" id="nav-chat-btn">Chat</button></li>
          </ul>
          <button class="nav__theme-toggle" id="theme-toggle" aria-label="Toggle theme">${sunSvg}${moonSvg}</button>
          <button class="nav__toggle" id="nav-toggle" aria-label="Menu"><span></span><span></span></button>
        </div>
      </div>
    </nav>

    <section class="hero" id="hero">
      <div class="hero__inner">
        <div class="hero__text">
          <h1 class="hero__headline" data-reveal>${esc(D.hero.headline)}</h1>
          <p class="hero__sub" data-reveal>${esc(D.hero.sub)}</p>
          <div class="hero__actions" data-reveal>
            <a href="#work" class="btn btn--filled">See my impact</a>
            <a href="#connect" class="btn btn--outline">Let\u2019s talk</a>
          </div>
        </div>
      </div>
    </section>

    <section class="beliefs" id="beliefs">
      <div class="container">
        <span class="section-label" data-reveal>What I Believe</span>
        <div class="beliefs__grid">${beliefs}</div>
      </div>
    </section>

    <div class="divider"><div class="container"><hr /></div></div>

    <section class="impact" id="impact">
      <div class="container">
        <span class="section-label" data-reveal>Impact at Scale</span>
        <div class="stats__grid">${impacts}</div>
      </div>
    </section>

    <div class="divider"><div class="container"><hr /></div></div>

    <section class="work" id="work">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-label">Selected Work</span>
          <h2 class="section-title">What Scale Looks Like</h2>
        </div>
        <div class="themes__list">${themes}</div>
      </div>
    </section>

    <div class="divider"><div class="container"><hr /></div></div>

    <section class="innovation" id="innovation">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-label">Innovation</span>
          <h2 class="section-title">Intellectual Property</h2>
        </div>
        <div class="patents__grid">${patents}</div>
      </div>
    </section>

    <section class="connect" id="connect">
      <div class="container">
        <div class="connect__inner" data-reveal>
          <h2 class="connect__heading">${esc(D.connect.heading)}</h2>
          <p class="connect__text">${esc(D.connect.text)}</p>
          <div class="connect__links">
            <a href="mailto:${esc(D.email)}" class="connect__card">
              <span class="connect__icon">&#x2709;</span>
              <span class="connect__label">Email</span>
            </a>
            <a href="${esc(D.linkedin.url)}" target="_blank" rel="noopener noreferrer" class="connect__card">
              <span class="connect__icon">in</span>
              <span class="connect__label">LinkedIn</span>
            </a>
            <a href="${esc(D.github.url)}" target="_blank" rel="noopener noreferrer" class="connect__card">
              <span class="connect__icon">${ghSvg}</span>
              <span class="connect__label">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <span>&copy; ${D.copyright} ${esc(D.name)}</span>
      </div>
    </footer>

    <div class="photo-overlay" id="photo-overlay">
      <div class="photo-overlay__backdrop"></div>
      <img src="${esc(D.photo)}" alt="${esc(D.name)}" class="photo-overlay__img" />
    </div>`;
  }

  /* ===================================================================
   * Theme toggle
   * =================================================================*/
  function initTheme() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      // Update meta theme-color for mobile browsers
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#09090b' : '#f8f7f4');
    });
  }

  /* ===================================================================
   * Photo overlay
   * =================================================================*/
  function initPhotoOverlay() {
    const avatar = document.getElementById('nav-avatar');
    const overlay = document.getElementById('photo-overlay');
    if (!avatar || !overlay) return;

    avatar.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ===================================================================
   * Nav, scroll, mobile menu
   * =================================================================*/
  function initNav() {
    const nav = document.getElementById('nav');
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      const t = document.getElementById(a.getAttribute('href').substring(1));
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - (nav ? nav.offsetHeight + 20 : 92), behavior: 'smooth' });
      closeMenu();
    });
  }

  const closeMenu = () => {
    document.getElementById('nav-menu')?.classList.remove('open');
    document.getElementById('nav-toggle')?.classList.remove('open');
  };

  function initMobileMenu() {
    const tog = document.getElementById('nav-toggle'), menu = document.getElementById('nav-menu');
    if (!tog || !menu) return;
    tog.addEventListener('click', () => { menu.classList.toggle('open'); tog.classList.toggle('open'); });
    document.addEventListener('click', e => {
      if (menu.classList.contains('open') && !menu.contains(e.target) && !tog.contains(e.target)) closeMenu();
    });
  }

  /* ===================================================================
   * Scroll reveals
   * =================================================================*/
  function initReveals() {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    function check() {
      const vh = window.innerHeight;
      els.forEach(el => {
        if (el.classList.contains('visible')) return;
        if (el.getBoundingClientRect().top < vh * 0.9) {
          const p = el.parentElement;
          if (p) {
            const sibs = p.querySelectorAll(':scope > [data-reveal]');
            if (sibs.length > 1) el.style.transitionDelay = (Array.from(sibs).indexOf(el) * 100) + 'ms';
          }
          el.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', () => requestAnimationFrame(check), { passive: true });
    requestAnimationFrame(check);
  }

  /* ===================================================================
   * Scroll handler: nav bg, active link, progress, back-to-top
   * =================================================================*/
  let progressBar, topBtn;

  function createUI() {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);
    topBtn = document.createElement('button');
    topBtn.className = 'back-to-top';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.innerHTML = '\u2191';
    document.body.appendChild(topBtn);
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function onScroll() {
    requestAnimationFrame(() => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);

      let cur = '';
      const navH = nav ? nav.offsetHeight : 72;
      const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
      if (atBottom) {
        cur = 'connect';
      } else {
        document.querySelectorAll('section[id]').forEach(s => {
          const top = s.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY + navH + 40 >= top) cur = s.id;
        });
      }
      document.querySelectorAll('.nav__link').forEach(l => {
        const h = l.getAttribute('href');
        if (h) l.classList.toggle('active', h === '#' + cur);
      });

      if (topBtn) topBtn.classList.toggle('visible', window.scrollY > 500);
      if (progressBar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      }
    });
  }

  /* ===================================================================
   * Init
   * =================================================================*/
  function init() {
    render();
    initTheme();
    initPhotoOverlay();
    initNav();
    initMobileMenu();
    initReveals();
    createUI();
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
