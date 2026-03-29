// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add a simple starry background effect
    createStars();
});

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;

    // Create 70 stars for the background
    for (let i = 0; i < 70; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random positioning
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Random size (0.5px to 2.5px)
        const size = 0.5 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random animation duration (3s to 8s)
        const duration = 3 + Math.random() * 5;
        star.style.animationDuration = `${duration}s`;

        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;

        // Slightly random opacity
        star.style.opacity = 0.1 + Math.random() * 0.3;

        starsContainer.appendChild(star);
    }
}
