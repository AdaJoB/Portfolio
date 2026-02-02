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
    function typewriter(textId, text) {
        let textElement = document.getElementById(textId);
        let i = 0;
        addChar(textElement, text, i);
    }

    function addChar(textElement, text, i) {
        textElement.textContent += text.charAt(i);
        i++;

        if (i < text.length) {
            setTimeout(() => addChar(textElement, text, i), 100);
        }
    }

    // hero
    const heroId = 'hero-text';
    const heroText = 'Hello!\n' +
                     'I\'m Ada Boddicker.\n' +
                     'Welcome to my website.';

    typewriter(heroId, heroText);
});