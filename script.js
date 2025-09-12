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
});


