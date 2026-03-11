// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Typing effect for index page
  const typedElement = document.getElementById('typed');
  if (typedElement) {
    const phrases = ['Architecture', 'Construction', 'Plumbing', 'Electrical'];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function type() {
      if (!typedElement) return;

      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop();
          j--;
        }

        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) i = 0;
        }

        typedElement.textContent = currentPhrase.join('');
      }
      const speed = isEnd ? 1200 : (isDeleting ? 60 : 100);
      setTimeout(type, speed);
    }
    type();
  }

  // Contact form submission alert
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! Akin Engineering will respond shortly.');
      contactForm.reset();
    });
  }

  // Highlight active page in navigation (already handled by class="active" in HTML)
});
