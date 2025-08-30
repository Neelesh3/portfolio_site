document.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('active');
    primaryNav.setAttribute('aria-hidden', String(expanded));
  });

  // SMOOTH SCROLL
  const links = Array.from(document.querySelectorAll('[data-link]'));
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        if (primaryNav.classList.contains('active')) {
          primaryNav.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Active nav on scroll
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const observerOpts = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const navLink = document.querySelector(`[href="#${id}"]`);
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }, observerOpts);
  sections.forEach(s => observer.observe(s));

  // PROJECT MODAL
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalExample = document.getElementById('modalExample');
  const modalCode = document.getElementById('modalCode');
  const modalLive = document.getElementById('modalLive');
  const closeBtn = modal.querySelector('.modal-close');

  // project metadata (edit URLs here later)
  const projectData = {
    1: {
      title: 'Credit Card Fraud Detection',
      desc: 'Logistic regression model with feature engineering achieving ~87% accuracy. Tools: Python, Pandas, NumPy, Matplotlib, scikit-learn.',
      code: 'https://github.com/Neelesh3/credit-card-fraud-detection',
      live: 'https://neelesh3.github.io/credit-card-fraud-detection'
    },
    2: {
      title: 'Student Performance Prediction',
      desc: 'Prediction pipeline reaching ~96% accuracy; data cleaning and encoding applied.',
      code: 'https://github.com/Neelesh3/student-performance-prediction',
      live: 'https://neelesh3.github.io/student-performance-prediction'
    },
    3: {
      title: 'Full-stack Demo App',
      desc: 'A full-stack demo with auth, CRUD and responsive frontend. (Placeholder — add links later.)',
      code: '#',
      live: '#'
    }
  };

  function openModal(id){
    const data = projectData[id];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    // show thumbnail inside modalExample if available
    modalExample.innerHTML = '<img src=\"thumbs/project' + id + '.svg\" alt=\"thumbnail\" style=\"width:100%;border-radius:8px;\" />';
    modalCode.href = data.code;
    modalLive.href = data.live;
    modal.setAttribute('aria-hidden','false');
    modal.style.display = 'flex';
    closeBtn.focus();
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modal.style.display = 'none';
  }

  document.querySelectorAll('.view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.projectId;
      openModal(id);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // CONTACT FORM validation (client-side)
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    success.textContent = '';
    const fields = [
      { el: form.name, validator: v => v.trim().length >= 2, msg: 'Please enter your name (min 2 chars).' },
      { el: form.email, validator: v => /\S+@\S+\.\S+/.test(v), msg: 'Please enter a valid email.' },
      { el: form.message, validator: v => v.trim().length >= 10, msg: 'Message must be at least 10 characters.' }
    ];
    fields.forEach(f => {
      const errorEl = f.el.nextElementSibling; // the small.error
      if (!f.validator(f.el.value)) {
        errorEl.textContent = f.msg;
        valid = false;
      } else {
        errorEl.textContent = '';
      }
    });

    if (!valid) return;
    // Simulate send (in real usage call fetch to server/API)
    success.textContent = 'Message sent — thanks! (Demo only)';
    form.reset();
    setTimeout(()=> success.textContent = '', 4000);
  });

  // set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
