// Portfolio data
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "web",
        description: "Modern e-commerce solution with advanced features and seamless user experience.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        icon: "🛒"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "mobile",
        description: "Secure mobile banking application with biometric authentication and real-time transactions.",
        technologies: ["React Native", "Firebase", "Redux", "Biometrics"],
        icon: "📱"
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "branding",
        description: "Complete brand identity package including logo, color palette, and brand guidelines.",
        technologies: ["Figma", "Illustrator", "Photoshop", "InDesign"],
        icon: "🎨"
    },
    {
        id: 4,
        title: "Task Management Dashboard",
        category: "web",
        description: "Comprehensive project management tool with team collaboration features.",
        technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
        icon: "📊"
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        category: "mobile",
        description: "Health and fitness application with workout plans and progress tracking.",
        technologies: ["Flutter", "Dart", "SQLite", "HealthKit"],
        icon: "💪"
    },
    {
        id: 6,
        title: "Restaurant Brand Package",
        category: "branding",
        description: "Full branding suite for luxury restaurant including menu design and signage.",
        technologies: ["Adobe CC", "Print Design", "Typography", "Photography"],
        icon: "🍽️"
    }
];

// Load projects on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects('all');
    setupFilterButtons();
    animateOnLoad();
    console.log("Hey... 👀");
    console.log("You are using DevTools like a pro. Still useless though🤖");
});

function loadProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
    
    // Clear existing projects with animation
    projectsGrid.style.opacity = '0';
    
    setTimeout(() => {
        projectsGrid.innerHTML = '';
        
        filteredProjects.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
            
            // Animate in
            setTimeout(() => {
                projectCard.style.opacity = '1';
                projectCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        projectsGrid.style.opacity = '1';
    }, 300);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    
    card.innerHTML = `
        <div class="project-image">
            ${project.icon}
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category.replace('-', ' ')}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    return card;
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter projects
            const filter = button.dataset.filter;
            loadProjects(filter);
        });
    });
}

function navigateToContact() {
    document.body.style.opacity = '0.7';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        window.location.href = 'contact.html';
    }, 300);
}

function showRandomPages() {
    const randomPages = ['about.html', 'blog.html'];
    const randomPage = randomPages[Math.floor(Math.random() * randomPages.length)];
    
    // Create modal to show available pages
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); text-align: center; color: #333;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3 style="margin-bottom: 2rem;">Explore More Pages</h3>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="window.location.href='about.html'" class="btn" style="background: rgba(79, 172, 254, 0.8); color: white; border: 1px solid rgba(255, 255, 255, 0.2);">
                    About Us
                </button>
                <button onclick="window.location.href='blog.html'" class="btn" style="background: rgba(168, 237, 234, 0.8); color: white; border: 1px solid rgba(255, 255, 255, 0.2);">
                    Blog
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
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
    
    // Animate filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        setTimeout(() => {
            button.style.transition = 'all 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
}

// Smooth scroll to portfolio grid when filter is clicked
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('.portfolio-grid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    });
});