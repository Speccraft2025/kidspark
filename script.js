// ========================================
// KidSpark - Single Screen Animations
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    init3DCardTilt();
});

// Floating Particles in Logo Section
function initParticles() {
    const container = document.getElementById('particles-container');
    const colors = ['#ff7b00', '#ffeb3b', '#4caf50', '#9c27b0', '#e91e63'];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 15 + 5;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 40}vw;
            top: ${Math.random() * 100}vh;
            animation-duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 5}s;
        `;

        container.appendChild(particle);
    }
}

// 3D Card Tilt Effect
function init3DCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Random sparkles around the sun
setInterval(() => {
    const logoSection = document.querySelector('.logo-section');
    if (!logoSection) return;

    const sparkle = document.createElement('div');
    sparkle.textContent = ['✨', '⭐', '🌟'][Math.floor(Math.random() * 3)];
    sparkle.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 1.5 + 0.8}rem;
        left: ${20 + Math.random() * 60}%;
        top: ${20 + Math.random() * 60}%;
        pointer-events: none;
        animation: sparkle-fade 2s forwards;
        z-index: 5;
    `;

    logoSection.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}, 600);

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-fade {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('🌟 KidSpark - Learning is Fun! 🌟');

// Mouse Trail Animation
document.addEventListener('mousemove', (e) => {
    createTrailDot(e.clientX, e.clientY);
});

function createTrailDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';

    const colors = ['#ff7b00', '#ffeb3b', '#4caf50', '#9c27b0', '#e91e63'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        animation: fade-trail 0.8s forwards;
    `;

    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
}

// Add trail animation style
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes fade-trail {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(trailStyle);
