// script.js
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTopBtn');

    // Show the button when scrolled down 100px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
