// Typewriter Effect
const phrases = [
    "Building automated solutions that scale.",
    "14 years of system administration expertise.",
    "Transforming manual processes into code.",
    "DevOps engineer with production experience.",
    "Seeking fully remote development roles."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && charIndex <= currentPhrase.length) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
        typewriterTimeout = setTimeout(typeWriter, 80);
    } else if (isDeleting && charIndex >= 0) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
        typewriterTimeout = setTimeout(typeWriter, 40);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Immediately show hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

// Navbar Background on Scroll
let lastScroll = 0;
const navbar = document.querySelector('.terminal-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.5)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Add Glitch Effect on Hover to Main Title
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    glitchText.addEventListener('mouseenter', () => {
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = 'glitch1 0.3s ease-in-out';
        }, 10);
    });
}

// Project Card Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Animate Stats on Scroll
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const text = target.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text.replace(/\D/g, ''));
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    let display = Math.floor(current);
                    if (hasPlus) display += '+';
                    if (hasPercent) display += '%';
                    target.textContent = display;
                }, 30);
                target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => statsObserver.observe(stat));
};

document.addEventListener('DOMContentLoaded', animateStats);

// Add Terminal Cursor to Terminal Windows
document.addEventListener('DOMContentLoaded', () => {
    const terminalBodies = document.querySelectorAll('.terminal-body');
    terminalBodies.forEach(body => {
        const cursor = document.createElement('span');
        cursor.style.cssText = `
            display: inline-block;
            width: 8px;
            height: 16px;
            background: var(--crt-amber);
            animation: blink 1s step-end infinite;
            margin-left: 4px;
        `;
        body.appendChild(cursor);
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add CRT Flicker Effect Randomly
setInterval(() => {
    const body = document.body;
    if (Math.random() < 0.05) {
        body.style.opacity = '0.98';
        setTimeout(() => {
            body.style.opacity = '1';
        }, 50);
    }
}, 3000);

// Console Easter Egg
console.log('%c$ whoami', 'color: #FF6B35; font-size: 20px; font-family: monospace;');
console.log('%cMohamed AH - Full-Stack Developer & DevOps Engineer', 'color: #F7931E; font-size: 14px; font-family: monospace;');
console.log('%c', '');
console.log('%c$ cat message.txt', 'color: #FF6B35; font-size: 16px; font-family: monospace;');
console.log('%cThanks for checking out the console! 🚀', 'color: #FFF8DC; font-size: 14px;');
console.log('%cInterested in working together? Reach out at mojed@intigriti.me', 'color: #FFF8DC; font-size: 14px;');
console.log('%c', '');
console.log('%c$ exit', 'color: #FF6B35; font-size: 16px; font-family: monospace;');
