// About page animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    animateOnLoad();
    setupTeamInteractions();
});

function animateOnLoad() {
    // Animate page elements
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    const storyContent = document.querySelector('.story-content');
    
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
    
    // Animate story content
    if (storyContent) {
        const storyElements = storyContent.querySelectorAll('h2, p');
        storyElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 800 + (index * 200));
        });
    }
    
    // Animate team members with intersection observer
    const teamMembers = document.querySelectorAll('.team-member');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);
    
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(50px) scale(0.9)';
        member.style.transition = `all 0.8s ease ${index * 0.2}s`;
        observer.observe(member);
    });
}

function setupTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-15px) scale(1.05)';
            member.style.zIndex = '10';
            
            // Add spotlight effect
            //Hint: The flag is where your patience ends.
            member.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
            member.style.background = 'rgba(255, 255, 255, 0.25)';
        });
        
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0) scale(1)';
            member.style.zIndex = '1';
            member.style.boxShadow = 'none';
            member.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        // Add click interaction for team member details
        member.addEventListener('click', () => {
            showTeamMemberDetails(member);
        });
    });
}

function showTeamMemberDetails(memberElement) {
    const memberName = memberElement.querySelector('h3').textContent;
    const memberRole = memberElement.querySelector('.member-role').textContent;
    const memberBio = memberElement.querySelector('.member-bio').textContent;
    const memberEmoji = memberElement.querySelector('.member-image').textContent;
    
    // Create modal for team member details
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); text-align: center; color: #333; max-width: 500px;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div style="padding: 2rem 0;">
                <div style="font-size: 5rem; margin-bottom: 1rem;">${memberEmoji}</div>
                <h2 style="color: #333; margin-bottom: 0.5rem;">${memberName}</h2>
                <p style="color: #ff9a9e; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.5rem;">${memberRole}</p>
                <p style="color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${memberBio}</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" style="background: #ff9a9e; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 10px; font-weight: 600; cursor: pointer;">
                        Close
                    </button>
                    <button onclick="window.location.href='contact.html'" style="background: rgba(255, 154, 158, 0.8); color: white; border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.75rem 1.5rem; border-radius: 10px; font-weight: 600; cursor: pointer;">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal in
    const content = modal.querySelector('.modal-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(-50px) scale(0.8)';
    
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

// Add floating animation to team member images
document.addEventListener('DOMContentLoaded', () => {
    const memberImages = document.querySelectorAll('.member-image');
    
    memberImages.forEach((image, index) => {
        // Create floating animation with different delays
        setInterval(() => {
            image.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 5}px)`;
        }, 50);
    });
});

// Parallax effect for story section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const storySection = document.querySelector('.story-section');
    
    if (storySection) {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        storySection.style.transform = `translateY(${yPos}px)`;
    }
});