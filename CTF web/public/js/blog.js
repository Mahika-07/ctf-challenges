// Blog data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2025",
        date: "January 15, 2025",
        excerpt: "Exploring the latest trends and technologies shaping the web development landscape this year.",
        tags: ["Web Development", "Trends", "Technology"],
        icon: "🚀"
    },
    {
        id: 2,
        title: "Creating Accessible Web Experiences",
        date: "January 10, 2025",
        excerpt: "A comprehensive guide to building websites that are inclusive and accessible to all users.",
        tags: ["Accessibility", "UX", "Design"],
        icon: "♿"
    },
    {
        id: 3,
        title: "Mobile-First Design Strategies",
        date: "January 5, 2025",
        excerpt: "Best practices for designing and developing with mobile users as the primary focus.",
        tags: ["Mobile", "Design", "Responsive"],
        icon: "📱"
    },
    {
        id: 4,
        title: "Performance Optimization Techniques",
        date: "December 28, 2024",
        excerpt: "Advanced strategies to improve website speed and performance for better user experience.",
        tags: ["Performance", "Optimization", "Speed"],
        icon: "⚡"
    },
    {
        id: 5,
        title: "The Art of Micro-Interactions",
        date: "December 20, 2024",
        excerpt: "How small animations and interactions can significantly enhance user engagement.",
        tags: ["Animation", "UX", "Interaction"],
        icon: "✨"
    },
    {
        id: 6,
        title: "Building Secure Web Applications",
        date: "December 15, 2024",
        excerpt: "Essential security practices every developer should implement in their web applications.",
        tags: ["Security", "Development", "Best Practices"],
        icon: "🔒"
    }
];

// Load blog posts on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    animateOnLoad();
});

function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    
    blogPosts.forEach((post, index) => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
        
        // Animate in with delay
        setTimeout(() => {
            blogCard.style.opacity = '1';
            blogCard.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    
    card.innerHTML = `
        <div class="blog-image">
            ${post.icon}
        </div>
        <div class="blog-content-card">
            <p class="blog-date">${post.date}</p>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add hover effects
    card.addEventListener('mouseenter', () =>  {
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'none';
    });
    
    // Add click handler for blog post details
    card.addEventListener('click', () => {
        showBlogPostDetails(post);
    });
    
    return card;
}

function showBlogPostDetails(post) {
    // Create modal for blog post details
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); color: #333; max-width: 700px; max-height: 80vh; overflow-y: auto;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div style="padding: 2rem 0;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">${post.icon}</div>
                    <p style="color: #a8edea; font-size: 0.9rem; margin-bottom: 0.5rem;">${post.date}</p>
                    <h2 style="color: #333; margin-bottom: 1rem; font-size: 2rem;">${post.title}</h2>
                    <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                        ${post.tags.map(tag => `<span style="background: rgba(168, 237, 234, 0.2); color: #a8edea; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">${tag}</span>`).join('')}
                    </div>
                </div>
                <div style="text-align: left; line-height: 1.8; color: #666;">
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">${post.excerpt}</p>
                    <p style="margin-bottom: 1.5rem;">This is a detailed blog post about ${post.title.toLowerCase()}. In this comprehensive guide, we'll explore various aspects of this topic and provide practical insights that you can apply to your projects.</p>
                    <p style="margin-bottom: 1.5rem;">Our team has extensive experience in this area and we're excited to share our knowledge with the community. Whether you're a beginner or an experienced professional, you'll find valuable information in this post.</p>
                    <p style="margin-bottom: 2rem;">Stay tuned for more insights and don't forget to check out our other services and portfolio for more examples of our work.</p>
                </div>
                <div style="text-align: center; border-top: 1px solid rgba(168, 237, 234, 0.3); padding-top: 2rem;">
                    <button onclick="window.location.href='contact.html'" style="background: #a8edea; color: white; border: none; padding: 1rem 2rem; border-radius: 10px; font-weight: 600; cursor: pointer; margin-right: 1rem;">
                        Contact Us
                    </button>
                    <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" style="background: rgba(168, 237, 234, 0.2); color: #a8edea; border: 1px solid #a8edea; padding: 1rem 2rem; border-radius: 10px; font-weight: 600; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal in
    const content = modal.querySelector('.modal-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(-50px) scale(0.9)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.4s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0) scale(1)';
    }, 10);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function animateOnLoad() {
    // Animate page elements
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    const elements = [pageTitle, pageSubtitle];
    
    elements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        }
    });
}


//WW91X3Rob3VnaHRfSWRfbGVhdmVfdGhlX2ZsYWdfaW5fdGhlX0hUTUw/X0N1dGUu


// Add search functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create search bar

    const blogHero = document.querySelector('.blog-hero .container');
    if (blogHero) {
        const searchContainer = document.createElement('div');
        searchContainer.style.marginTop = '2rem';
        searchContainer.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto; position: relative;">
                <input type="text" id="blogSearch" placeholder="Search blog posts..." style="width: 100%; padding: 1rem 1rem 1rem 3rem; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 50px; background: rgba(255, 255, 255, 0.1); color: white; font-size: 1rem; backdrop-filter: blur(10px);">
                <div style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: rgba(255, 255, 255, 0.7); font-size: 1.2rem;">🔍</div>
            </div>
        `;
        blogHero.appendChild(searchContainer);
        
        // Add search functionality
        const searchInput = document.getElementById('blogSearch');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const blogCards = document.querySelectorAll('.blog-card');
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.blog-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
        
        // Style the search input
        searchInput.addEventListener('focus', () => {
            searchInput.style.background = 'rgba(255, 255, 255, 0.2)';
            searchInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.style.background = 'rgba(255, 255, 255, 0.1)';
            searchInput.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
    }
});