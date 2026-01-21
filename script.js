// ALIXIR App Landing Page - Interactive Effects

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Typewriter effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const title = heroTitle.innerHTML;
        typeWriter(heroTitle, title, 80);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.feature-card, .gallery-item, .testimonial-card, .faq-item');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add floating animation to phone mockup
const phoneMockup = document.querySelector('.phone-mockup');
if (phoneMockup) {
    phoneMockup.addEventListener('mouseenter', () => {
        phoneMockup.style.animation = 'none';
    });

    phoneMockup.addEventListener('mouseleave', () => {
        phoneMockup.style.animation = 'float 6s ease-in-out infinite';
    });
}

// Mood chart animation
const moodBars = document.querySelectorAll('.mood-bar');
moodBars.forEach((bar, index) => {
    setTimeout(() => {
        bar.style.height = bar.style.height;
    }, index * 200);
});

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-8px) scale(1)';
    });
});

// Interactive FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                }
            });

            // Toggle current FAQ
            answer.style.display = isOpen ? 'none' : 'block';
            answer.style.transition = 'all 0.3s ease';
        });
    }
});

// Ripple effect for buttons
document.querySelectorAll('.cta-primary, .cta-secondary, .nav-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Console greeting with ALIXIR theme
console.log('%c 🌟 ALIXIR App 🌟 ', 'background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #fa709a 100%); color: white; padding: 10px 20px; border-radius: 30px; font-weight: bold; font-size: 1.2rem;');
console.log('%c Your AI Emotional Companion ', 'color: #667eea; font-size: 1rem;');

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Analytics tracking (placeholder)
function trackEvent(eventName, data = {}) {
    console.log(`[Analytics] ${eventName}:`, data);
    // Here you would integrate with your analytics service
}

// Track CTA clicks
document.querySelectorAll('.cta-primary, .cta-secondary, .nav-cta').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonType = button.classList.contains('cta-primary') ? 'primary' : 'secondary';
        const buttonText = button.textContent.trim();
        trackEvent('cta_click', { type: buttonType, text: buttonText });
    });
});