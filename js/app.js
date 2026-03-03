/**
 * Portfolio App — Animations, Scroll Effects & Navigation
 * Rajiv Srivastava | 2026
 *
 * Vanilla JS, no dependencies.
 * Self-executing function to avoid polluting the global scope.
 */
(() => {
  'use strict';

  /* ===================================================================
   * Utility helpers
   * =================================================================*/

  /** Debounce — collapses rapid calls into one after `wait` ms. */
  const debounce = (fn, wait = 100) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  };

  /** Ease-out cubic for counter animation. */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  /** True when the viewport is wider than 768 px (desktop). */
  const isDesktop = () => window.innerWidth > 768;

  /* ===================================================================
   * 1. Smooth-Scroll Navigation + Active Link Tracking
   * =================================================================*/

  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Smooth-scroll when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile menu if open
      closeMobileMenu();
    });
  });

  // Also handle hero CTA buttons and career bar links that link to sections
  document.querySelectorAll('a[href^="#"]:not(.nav-link)').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Offset scroll to account for fixed navbar
        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        // If clicking a career bar item targeting a timeline entry,
        // center it on screen and highlight it
        if (targetId.startsWith('exp-')) {
          const card = target.querySelector('.timeline-card');
          const elHeight = (card || target).offsetHeight;
          const centeredPosition = target.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (elHeight / 2);
          window.scrollTo({ top: centeredPosition, behavior: 'smooth' });
          highlightTimelineCard(target);
          return; // skip the default scroll above
        }
      }
    });
  });

  /** Briefly highlight a timeline card so the user sees which one was targeted. */
  const highlightTimelineCard = (timelineItem) => {
    // Remove any existing highlight
    document.querySelectorAll('.timeline-item.highlighted').forEach((el) => {
      el.classList.remove('highlighted');
    });
    // Add highlight after scroll finishes
    setTimeout(() => {
      timelineItem.classList.add('highlighted');
      // Auto-remove after 2 seconds
      setTimeout(() => {
        timelineItem.classList.remove('highlighted');
      }, 2000);
    }, 600);
  };

  /** Determine which section is currently in view and highlight its nav link. */
  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120; // offset for navbar height
    let currentId = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  };

  /* ===================================================================
   * 2. Navbar Scroll Effect — transparent -> solid on scroll
   * =================================================================*/

  const handleNavbarScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  };

  /* ===================================================================
   * 3. Scroll-Triggered Animations (Intersection Observer)
   * =================================================================*/

  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const animType = el.getAttribute('data-animate');

          // If the element's parent contains multiple animated siblings,
          // stagger them by adding incremental delay.
          const parent = el.parentElement;
          if (parent) {
            const siblings = parent.querySelectorAll(':scope > [data-animate]');
            if (siblings.length > 1) {
              const index = Array.from(siblings).indexOf(el);
              el.style.transitionDelay = `${index * 100}ms`;
            }
          }

          el.classList.add('visible');
          observer.unobserve(el); // animate only once
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  };

  /* ===================================================================
   * 4. Hero Section Typing Effect
   * =================================================================*/

  const initTypingEffect = () => {
    const el =
      document.querySelector('.typing-text') ||
      document.getElementById('typing-text');
    if (!el) return; // HTML does not have a typing element — skip silently

    const phrases = [
      'Group Engineering Manager',
      'GenAI & Platform Leader',
      '19+ Years of Innovation',
      'Building at Microsoft',
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBetween = 2000;

    const tick = () => {
      const current = phrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, typeSpeed);
          return;
        }
        setTimeout(tick, deleteSpeed);
      } else {
        charIdx++;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === current.length) {
          isDeleting = true;
          setTimeout(tick, pauseBetween);
          return;
        }
        setTimeout(tick, typeSpeed);
      }
    };

    tick();
  };

  /* ===================================================================
   * 5. Parallax Effect on Hero Background
   * =================================================================*/

  const heroBg = document.querySelector('.hero-bg');
  let parallaxTicking = false;

  const applyParallax = () => {
    if (!heroBg || !isDesktop()) return;
    const scrollY = window.scrollY;
    // Move hero background at half-speed relative to scroll
    heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
    parallaxTicking = false;
  };

  const onScrollParallax = () => {
    if (!parallaxTicking) {
      requestAnimationFrame(applyParallax);
      parallaxTicking = true;
    }
  };

  /* ===================================================================
   * 6. Stats Counter Animation
   * =================================================================*/

  const initStatsCounter = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          observer.unobserve(el);

          // Parse the target number from the text (e.g. "19+" -> 19)
          const raw = el.textContent.trim();
          const target = parseInt(raw, 10);
          if (isNaN(target)) return;

          const hasSuffix = raw.includes('+');
          const duration = 2000;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(easeOutCubic(progress) * target);
            el.textContent = value + (hasSuffix ? '+' : '');
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          // Briefly set to 0 then start counting
          el.textContent = '0' + (hasSuffix ? '+' : '');
          requestAnimationFrame(animate);
        });
      },
      { threshold: 0.3 }
    );

    statNumbers.forEach((el) => observer.observe(el));
  };

  /* ===================================================================
   * 7. Mobile Menu Toggle
   * =================================================================*/

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  const closeMobileMenu = () => {
    navMenu?.classList.remove('open');
    navToggle?.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  const initMobileMenu = () => {
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close when clicking outside the menu
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  };

  /* ===================================================================
   * 8. Career Journey Bar Animation
   * =================================================================*/

  const initCareerBarAnimation = () => {
    const track = document.querySelector('.career-bar-track');
    if (!track) return;

    const items = track.querySelectorAll('.career-bar-item');
    const arrows = track.querySelectorAll('.career-bar-arrow');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          // Stagger items left-to-right
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, i * 200);
          });

          // Stagger arrows with a slight extra delay
          arrows.forEach((arrow, i) => {
            setTimeout(() => {
              arrow.classList.add('visible');
            }, i * 200 + 100);
          });

          // On mobile, scroll to show current (rightmost) company
          if (window.innerWidth <= 768) {
            setTimeout(() => {
              track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
            }, items.length * 200 + 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(track);
  };

  /* ===================================================================
   * 9. Skill Cards 3D Tilt Effect (desktop only)
   * =================================================================*/

  const initSkillCardTilt = () => {
    if (!isDesktop()) return;

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Max tilt of 8 degrees
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform =
          'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
    });
  };

  /* ===================================================================
   * 10. Project Cards Hover Parallax
   * =================================================================*/

  const initProjectCardHover = () => {
    if (!isDesktop()) return;

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `translateY(-6px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;

        // Subtle inner content parallax
        const content = card.querySelector('.project-content');
        if (content) {
          content.style.transform = `translateX(${x * 6}px) translateY(${y * 6}px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        const content = card.querySelector('.project-content');
        if (content) {
          content.style.transform = '';
        }
      });
    });
  };

  /* ===================================================================
   * 11. Back to Top Button
   * =================================================================*/

  let backToTopBtn = null;

  const createBackToTopButton = () => {
    backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '&#x2191;'; // up arrow
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleBackToTopVisibility = () => {
    if (!backToTopBtn) return;
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
  };

  /* ===================================================================
   * 12. Unified Scroll Handler (rAF-throttled)
   * =================================================================*/

  let scrollTicking = false;

  const onScroll = () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleNavbarScroll();
        updateActiveLink();
        handleBackToTopVisibility();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  /* ===================================================================
   * 13. Page Load Animation
   * =================================================================*/

  const initPageLoad = () => {
    // Slight delay so CSS transitions actually play
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    // Stagger hero children
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const children = heroContent.children;
      Array.from(children).forEach((child, i) => {
        child.style.transitionDelay = `${200 + i * 120}ms`;
      });
    }
  };

  /* ===================================================================
   * Resize handler — re-evaluate desktop-only features
   * =================================================================*/

  const onResize = debounce(() => {
    // Re-init tilt / parallax if user resizes into desktop range
    // A full re-init is cheap — the listeners just get re-attached.
    initSkillCardTilt();
    initProjectCardHover();
  }, 250);

  /* ===================================================================
   * Bootstrap everything on DOMContentLoaded
   * =================================================================*/

  const init = () => {
    initPageLoad();
    initMobileMenu();
    initScrollAnimations();
    initTypingEffect();
    initStatsCounter();
    initCareerBarAnimation();
    initSkillCardTilt();
    initProjectCardHover();
    createBackToTopButton();

    // Attach scroll listener (passive for perf)
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Run once to set initial state
    handleNavbarScroll();
    updateActiveLink();
    handleBackToTopVisibility();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already ready (script at bottom of body)
    init();
  }
})();
