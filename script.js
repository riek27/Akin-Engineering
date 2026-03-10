// ===== script.js (single for all pages) =====
(function() {
  // navbar background change on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }

  // TYPEWRITER EFFECT (only on homepage where elements exist)
  const typedTextSpan = document.getElementById('typed-text');
  const cursorSpan = document.getElementById('cursor');
  if (typedTextSpan && cursorSpan) {
    const phrases = [
      "Architecture Designs",
      "Building & Construction",
      "Plumbing Installations",
      "Electrical Installations"
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;
    const typingSpeed = 90, deletingSpeed = 50, delayBetween = 1800;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
    setTimeout(type, 800);
  }

  // active nav link based on current page (simple)
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
    else if (currentPage === '' && href === 'index.html') link.classList.add('active');
  });

  // contact form alert (prevent actual submit)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out. Akin Engineering will contact you soon.');
      contactForm.reset();
    });
  }

  // any other form with class .contact-form but not specific id
  const forms = document.querySelectorAll('.contact-form form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent (demo). We will reply shortly.');
    });
  });
})();
