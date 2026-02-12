document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    // ----theme button and dropdown functionality----
    const themeToggle = document.getElementById('theme-button');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeButtons = document.querySelectorAll('#theme-selector button');
    const themes = ['light', 'proton', 'forest', 'portal', 'peaks'];
    
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle('open');
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.documentElement.classList.remove(...themes);
            if (button.dataset.theme !== 'default') {
                document.documentElement.classList.add(button.dataset.theme);
            }
        });
    });

    // ----smooth scrolling----
    // hero
    const goTop = document.getElementById('go-top');
    goTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // about me
    const goAbout = document.getElementById('go-about');
    goAbout.addEventListener('click', () => {
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
    });

    // projects
    const goProjects = document.getElementById('go-projects');
    goProjects.addEventListener('click', () => {
        window.scrollTo({
            top: 1600,
            left: 0,
            behavior: 'smooth'
        });
    });

    // contact
    const goContact = document.getElementById('go-contact');
    goContact.addEventListener('click', () => {
        window.scrollTo({
            top: 2400,
            left: 0,
            behavior: 'smooth'
        });
    });

    // ----typewriter effect----
    function typewriter(textElement, cursorElement, text, speed) {
        let i = 0;

        function addChar() {
            textElement.textContent += text.charAt(i);
            i++;

            if (i < text.length) {
                setTimeout(addChar, speed);
            }
            else {
                cursorElement.classList.add('blink');
            }
        }
        addChar();
    }

    // observer for typewriter effect on headers
    function typewriterObserve(containerElement, text, speed) {
        const textElement = containerElement.querySelector('.typewrite');
        const cursorElement = containerElement.querySelector('.cursor');

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typewriter(textElement, cursorElement, text, speed);
                    obs.unobserve(entry.target)
                }   
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        observer.observe(containerElement);
    }
    
    // hero
    const heroElement = document.getElementById('hero-text');
    const heroText = 'Hello!\n' +
                     'I\'m Ada Boddicker.\n' +
                     'Welcome to my website.';

    typewriterObserve(heroElement, heroText, 75);

    // about me
    const aboutElement = document.getElementById('about-text');
    const aboutText = 'About Me';
    typewriterObserve(aboutElement, aboutText, 100);

    // my projects
    const projectsElement = document.getElementById('projects-text');
    const projectsText = 'My Projects';
    typewriterObserve(projectsElement, projectsText, 100);

    // contact me
    const contactElement = document.getElementById('contact-text');
    const contactText = 'Contact Me';
    typewriterObserve(contactElement, contactText, 100);
});