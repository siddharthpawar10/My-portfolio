const projects = [

    {
        title: 'Task Management App',
        description: 'A productivity app for managing daily tasks and projects',
        image: 'https://picsum.photos/id/2/400/300',
        technologies: ['Vue.js', 'Firebase', 'Vuetify'],
        link: 'https://github.com'
    },
    {
        title: 'Music Player Project',
        description: 'An interactive music player with playlist management and audio visualization',
        image: 'https://picsum.photos/id/1/400/300',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
        link: 'https://github.com'
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather application using OpenWeather API',
        image: 'https://picsum.photos/id/3/400/300',
        technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
        link: 'https://github.com'
    }
];

// Load projects when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupFormSubmission();
    setupScrollAnimation();
});

// Function to load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => <span class="tech-tag">${tech}</span>).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Function to handle form submission
function setupFormSubmission() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // In a real application, you would send this data to a backend server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Function to handle smooth scroll animation
function setupScrollAnimation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});