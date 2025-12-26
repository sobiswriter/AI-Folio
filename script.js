// Typing animation for hero section
const typingTexts = [
    "AI Architect | Web Alchemist",
    "Hackathon Winner | AI Enthusiast",
    "Building Resilient & Scalable Systems",
    "Full Stack Developer",
    "Machine Learning Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
        // Typing forward
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            // Pause at end
            isDeleting = true;
            typingSpeed = 2000;
        } else {
            typingSpeed = 100;
        }
    } else {
        // Deleting
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500;
        } else {
            typingSpeed = 50;
        }
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    typeText();
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background and active link updates on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let ticking = false;

function updateOnScroll() {
    const currentScroll = window.pageYOffset;

    // Update navbar background
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Parallax effect for hero section
    if (heroSection) {
        let parallaxSpeed = 0.5;
        heroSection.style.transform = `translateY(${currentScroll * parallaxSpeed}px)`;
    }

    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateOnScroll();
        });
        ticking = true;
    }
});

// Intersection Observer for fade-in animations
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

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .achievement-card, .skill-category, .about-text, .contact-content'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerCopyright = document.querySelector('.footer-copyright');
if (footerCopyright) {
    footerCopyright.textContent = `© ${currentYear} Souradip Biswas. Built with passion and creativity.`;
}

// Reserved for future cursor trail effect implementation

// Get hero section for parallax effect
let heroSection = document.querySelector('.hero');

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Project card tilt effect on hover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add console message for developers
console.log('%c👋 Hi there, Developer!', 'color: #00F5D4; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #F72585; font-size: 16px;');
console.log('%cGitHub: https://github.com/sobiswriter', 'color: #7209B7; font-size: 14px;');
