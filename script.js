// Function to show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        ${message}
        <button class="close-btn" onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Single DOMContentLoaded event listener with all functionality
document.addEventListener('DOMContentLoaded', function() {
    // URL parameter check for notifications
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('success') === 'true') {
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('success') === 'false') {
        showNotification('Failed to send message. Please try again or contact us directly.', 'error');
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('main-nav');
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Loader functionality
    window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    
    // Check if we need to show notifications first
    const urlParams = new URLSearchParams(window.location.search);
    const hasNotification = urlParams.get('success') === 'true' || urlParams.get('success') === 'false';
    
    if (hasNotification) {
        // Hide loader immediately if notification needs to show
        loader.classList.add('hidden');
    } else {
        // Normal loader behavior
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1000);
    }
});

    // Intersection Observer for slide-in sections
    const sections = document.querySelectorAll('.slide-in');
    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});