// ALIXIR App Landing Page - Interactive Effects (Dark Theme)

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
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Initialize page with smooth fade-in
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for scroll animations
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
const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .faq-item');

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
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
            background: rgba(255, 255, 255, 0.2);
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
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        const heroGlow = document.querySelector('.hero-glow');
        if (heroGlow) {
            heroGlow.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`;
        }
    }
});

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-8px)';
    });
});

// Add hover effect to testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-8px)';
    });
});

// Platform item interactions
const platformItems = document.querySelectorAll('.platform-item');
platformItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('coming-soon')) {
            item.style.transform = 'translateY(-4px) scale(1.02)';
        }
    });

    item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('coming-soon')) {
            item.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Console greeting with ALIXIR dark theme
console.log('%c ◆ ALIXIR App ◆ ', 'background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #8b5cf6 100%); color: white; padding: 12px 24px; border-radius: 30px; font-weight: bold; font-size: 1.2rem; font-family: monospace;');
console.log('%c Your AI Emotional Companion ', 'color: #8b5cf6; font-size: 1rem;');

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

// Track platform interactions
document.querySelectorAll('.platform-item').forEach(item => {
    item.addEventListener('click', () => {
        const platform = item.querySelector('.platform-name').textContent;
        trackEvent('platform_click', { platform: platform });
    });
});
