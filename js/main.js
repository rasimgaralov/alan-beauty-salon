// ============ SCROLL TO TOP ON RELOAD ============
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ============ VIDEO INTRO ============
(function() {
  const heroDesk = document.getElementById('heroVideoDesk');
  const heroMob = document.getElementById('heroVideoMob');

  const isMobile = window.innerWidth <= 768;
  const activeHero = isMobile ? heroMob : heroDesk;

  // Lock body scroll and UI during intro
  document.body.classList.add('intro-active');

  let finished = false;
  function finishIntro() {
    if (finished) return;
    finished = true;
    if (activeHero) {
      try { activeHero.pause(); } catch(e) {}
    }
    document.body.classList.add('hero-ready');
    document.body.classList.remove('intro-active');
  }

  if (activeHero) {
    activeHero.addEventListener('ended', finishIntro, { once: true });
    activeHero.play().catch(() => {
      finishIntro();
    });
  } else {
    finishIntro();
  }

  // Safety fallback after 15s
  setTimeout(() => {
    if (!finished) {
      finishIntro();
    }
  }, 15000);
})();

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ============ SERVICE ACCORDION & MAIN TABS ============
const svcMainTabs = document.querySelectorAll('.svc-main-tab');
const svcAccordionItems = document.querySelectorAll('.svc-accordion-item');

function filterAccordionCategory(mainCat) {
  svcAccordionItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.main === mainCat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// Main Tab Click
svcMainTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    svcMainTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    filterAccordionCategory(tab.dataset.main);
  });
});

// Accordion Header Click (Toggle self, close others in same category)
svcAccordionItems.forEach(item => {
  const header = item.querySelector('.svc-accordion-header');
  if (!header) return;
  
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    const currentMain = item.dataset.main;
    
    // Close all items in the same main category
    svcAccordionItems.forEach(i => {
      if (i.dataset.main === currentMain) {
        i.classList.remove('active');
      }
    });
    
    // If it wasn't active before, open it now (toggle off if it was active)
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Initial load: show hair category
filterAccordionCategory('hair');

// ============ MOBILE MENU ============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const mobileDrawer = document.getElementById('mobileDrawer');
const navMobilePill = document.getElementById('navMobilePill');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('active');
  if (navMobilePill) navMobilePill.classList.toggle('drawer-open', isOpen);
  const spans = menuToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.remove('active');
    if (navMobilePill) navMobilePill.classList.remove('drawer-open');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ============ REVIEWS SLIDER ============
const track = document.getElementById('reviewsTrack');
const dots = document.querySelectorAll('.review-dot');
let currentSlide = 0;
const totalSlides = dots.length;

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

dots.forEach(dot => {
  dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
});

setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000);

// ============ CONTACT FORM → WHATSAPP ============
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('formName').value;
  const phone = document.getElementById('formPhone').value;
  const service = document.getElementById('formService').value;
  const message = document.getElementById('formMessage').value;

  const text = `Hello Alan Beauty Salon!%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
  window.open(`https://wa.me/96896900022?text=${text}`, '_blank');
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============ ACTIVE NAV LINK ============
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < top + height) ? 'var(--gold)' : '';
    }
  });
});
