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
            top: 850,
            left: 0,
            behavior: 'smooth'
        });
    });

    // projects
    const goProjects = document.getElementById('go-projects');
    goProjects.addEventListener('click', () => {
        window.scrollTo({
            top: 1650,
            left: 0,
            behavior: 'smooth'
        });
    });

    // contact
    const goContact = document.getElementById('go-contact');
    goContact.addEventListener('click', () => {
        window.scrollTo({
            top: 2450,
            left: 0,
            behavior: 'smooth'
        });
    });
});