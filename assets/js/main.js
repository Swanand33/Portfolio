document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Typing animation for Role Rotation
    const roles = ['an Engineer', 'a Data Analyst', 'an AI Enthusiast', 'a Pythonist'];
    const typingElement = document.querySelector('.typing');

    let roleIndex = 0;
    let charIndex = 0;

    // Function to start the typing animation
    function startTyping() {
        const role = roles[roleIndex];
        const text = role.substring(0, charIndex + 1);
        typingElement.textContent = text;

        charIndex++;

        if (charIndex <= role.length) {
            // Continue typing the current role
            setTimeout(startTyping, 100); // Adjust the typing speed here (in milliseconds)
        } else {
            // Move to the next role after a delay
            setTimeout(() => {
                charIndex = 0;
                roleIndex = (roleIndex + 1) % roles.length;
                startTyping();
            }, 1000); // Adjust the delay here (in milliseconds)
        }
    }

    // Initial text without animation
    typingElement.textContent = roles[0];

    // Start the typing animation after a delay
    setTimeout(startTyping, 2000); // Adjust delay time as needed

    // Entrance and scrolling effect for project section
    const projectsSection = document.querySelector('.projects');

    function revealProjects() {
        if (projectsSection) {
            projectsSection.classList.add('fadeInUp');
        }
    }

    revealProjects();

    // Increase size of subtitle in about section
    const aboutSubtitle = document.querySelector('.about__subtitle');
    if (aboutSubtitle) {
        aboutSubtitle.style.fontSize = '1.5rem';
    }

    // Set background color for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = '#ffffff';
    });
});
