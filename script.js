document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('main-nav');
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    }); 

        // New code to handle the pre-loader
       window.addEventListener('load', function() {
        const loader = document.getElementById('loader-wrapper');
        setTimeout(function() {
            loader.classList.add('hidden');
            }, 2000);
    }); 

const sections = document.querySelectorAll('.slide-in');

  const observerOptions = {
    root: null, // viewport
    threshold: 0.2 // trigger when 20% of the element is visible
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
