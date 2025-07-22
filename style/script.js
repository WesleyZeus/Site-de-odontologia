// Versão à prova de falhas
function smoothScroll() {
  const navHeight = document.querySelector('nav').offsetHeight;
  
  document.body.addEventListener('click', function(e) {
    if (e.target.closest('a.nav-link[href^="#"]')) {
      e.preventDefault();
      const target = document.querySelector(e.target.closest('a').getAttribute('href'));
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        
        // Animação manual para navegadores antigos
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let startTime = null;
        
        function animation(currentTime) {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
          t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  document.getElementById('menu-btn')?.addEventListener('click', function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });
  
  // Scroll suave
  smoothScroll();
});

function smoothScrollTo(selector) {
  const navHeight = document.querySelector('nav').offsetHeight;
  const target = document.querySelector(selector);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
    
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
}
