// Service modal content
const serviceContent = {
    'web-development': {
        title: 'Web Development Services',
        description: 'We create modern, responsive websites and web applications that drive business growth and provide exceptional user experiences.',
        features: [
            'Custom Website Development',
            'Progressive Web Applications (PWA)',
            'E-commerce Solutions',
            'Content Management Systems',
            'API Development & Integration',
            'Performance Optimization',
            'Security Implementation',
            'Maintenance & Support'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'Python', 'PHP'],
        process: [
            'Requirements Analysis',
            'Technical Architecture Planning',
            'UI/UX Design Integration',
            'Development & Testing',
            'Deployment & Launch'
        ]
    },
    'ui-ux-design': {
        title: 'UI/UX Design Services',
        description: 'Creating intuitive and visually appealing interfaces that enhance user engagement and drive conversions.',
        features: [
            'User Research & Analysis',
            'Information Architecture',
            'Wireframing & Prototyping',
            'Visual Design & Branding',
            'Usability Testing',
            'Design System Creation',
            'Mobile-First Design',
            'Accessibility Compliance'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
        process: [
            'User Research',
            'Information Architecture',
            'Wireframing',
            'Visual Design',
            'Prototyping & Testing'
        ]
    },
    'mobile-apps': {
        title: 'Mobile Application Development',
        description: 'Building high-performance mobile applications for iOS and Android platforms with native and cross-platform solutions.',
        features: [
            'Native iOS Development',
            'Native Android Development',
            'Cross-Platform Solutions',
            'App Store Optimization',
            'Push Notifications',
            'Offline Functionality',
            'Third-party Integrations',
            'App Analytics & Monitoring'
        ],
        technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Firebase'],
        process: [
            'Platform Strategy',
            'Technical Architecture',
            'Development & Testing',
            'App Store Submission',
            'Post-Launch Support'
        ]
    },
    'ecommerce': {
        title: 'E-commerce Solutions',
        description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.',
        features: [
            'Custom E-commerce Development',
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Processing System',
            'Customer Account Management',
            'Multi-vendor Support',
            'Analytics & Reporting',
            'SEO Optimization'
        ],
        technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe', 'PayPal'],
        process: [
            'Business Requirements',
            'Platform Selection',
            'Custom Development',
            'Payment Integration',
            'Testing & Launch'
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    animateOnLoad();
    setupServiceCards();
});

function openServiceModal(serviceId) {
    const service = serviceContent[serviceId];
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2 style="color: #333; margin-bottom: 1rem; font-size: 2rem;">${service.title}</h2>
        <p style="color: #666; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">${service.description}</p>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.3rem;">Key Features</h3>
            <ul style="color: #666; line-height: 1.8;">
                ${service.features.map(feature => `<li style="margin-bottom: 0.5rem;">✓ ${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.3rem;">Technologies We Use</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${service.technologies.map(tech => `<span style="background: rgba(102, 126, 234, 0.1); color: #667eea; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.3rem;">Our Process</h3>
            <ol style="color: #666; line-height: 1.8;">
                ${service.process.map(step => `<li style="margin-bottom: 0.5rem;">${step}</li>`).join('')}
            </ol>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="window.location.href='contact.html'" style="background: #667eea; color: white; border: none; padding: 1rem 2rem; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                Get Started
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add animation
    const content = modal.querySelector('.modal-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(-50px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.3s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 10);
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const content = modal.querySelector('.modal-content');
    
    content.style.opacity = '0';
    content.style.transform = 'translateY(-50px)';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    const observerOptions = {
        threshold: 0.3,
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
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `all 0.8s ease ${index * 0.2}s`;
        observer.observe(step);
    });
}

function animateOnLoad() {
    // Animate page title
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    if (pageTitle) {
        pageTitle.style.opacity = '0';
        pageTitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            pageTitle.style.transition = 'all 0.8s ease';
            pageTitle.style.opacity = '1';
            pageTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (pageSubtitle) {
        pageSubtitle.style.opacity = '0';
        pageSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            pageSubtitle.style.transition = 'all 0.8s ease';
            pageSubtitle.style.opacity = '1';
            pageSubtitle.style.transform = 'translateY(0)';
        }, 400);
    }
    
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 600 + (index * 200));
    });
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Navigate to random pages from services
function navigateToRandomPage() {
    const randomPages = ['about.html', 'blog.html'];
    const randomPage = randomPages[Math.floor(Math.random() * randomPages.length)];
    
    document.body.style.opacity = '0.7';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        window.location.href = randomPage;
    }, 300);
}

// Add navigation to random pages when service modal is opened
document.addEventListener('DOMContentLoaded', () => {
    // Add a button to explore more pages in service cards
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            if (index === 1 || index === 2) { // Add to 2nd and 3rd service cards
                const exploreBtn = document.createElement('button');
                exploreBtn.textContent = 'Explore More';
                exploreBtn.className = 'service-btn';
                exploreBtn.style.marginLeft = '1rem';
                exploreBtn.style.background = 'rgba(116, 75, 162, 0.8)';
                exploreBtn.onclick = navigateToRandomPage;
                
                const existingBtn = card.querySelector('.service-btn');
                if (existingBtn && existingBtn.parentNode) {
                    existingBtn.parentNode.appendChild(exploreBtn);
                }
            }
        });
    }, 1000);
});