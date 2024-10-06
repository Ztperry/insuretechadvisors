// main.js

// Responsive Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});

// Smooth Scrolling for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

for (const link of scrollLinks) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Placeholder for Form Validation (if needed in the future)
// You can add form validation scripts here when you create forms

// Additional Scripts
// Add any additional JavaScript functionality as needed
