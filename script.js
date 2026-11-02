// ──────────── NAVBAR SCROLL ACTIVE OBSERVER ────────────
const navLinks = document.querySelectorAll('.nav-link');
const sections = Array.from(document.querySelectorAll('section[id]'));

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  let current = '';
  sections.forEach(s => {
    if (scrollPos >= s.offsetTop) {
      current = s.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ──────────── HAMBURGER MENU ────────────
const hamburger = document.getElementById('hamburger');
const navLinksWrap = document.getElementById('nav-links');

if (hamburger && navLinksWrap) {
  hamburger.addEventListener('click', () => {
    navLinksWrap.classList.toggle('open');
  });

  navLinksWrap.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinksWrap.classList.remove('open');
    });
  });
}

// ──────────── CATALOG CATEGORY FILTER ────────────
const catBtns = document.querySelectorAll('.cat-btn');
const prodCards = document.querySelectorAll('.products-grid .pcard');

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    prodCards.forEach(card => {
      const cat = card.dataset.category;
      if (filter === 'all' || cat === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ──────────── SELECT SERVICE HELPER ────────────
window.selectService = function(val) {
  const select = document.getElementById('fservice');
  if (select && val) {
    select.value = val;
  }
};

// ──────────── CONTACT & QUOTE FORM ────────────
const quoteForm = document.getElementById('quote-form');
const submitBtn = document.getElementById('submit-btn');
const formSuccess = document.getElementById('form-success');

if (quoteForm) {
  quoteForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const service = document.getElementById('fservice').value;
    const msg = document.getElementById('fmsg').value.trim();

    if (!name || !email || !phone || !service || !msg) {
      alert('Please fill in all required fields.');
      return;
    }

    submitBtn.textContent = 'Submitting…';
    submitBtn.disabled = true;

    setTimeout(() => {
      quoteForm.reset();
      submitBtn.textContent = 'Send Message →';
      submitBtn.disabled = false;
      if (formSuccess) {
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 6000);
      }
    }, 1200);
  });
}
