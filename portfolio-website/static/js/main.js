document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    // theme button and dropdown functionality
    const themeToggle = document.getElementById('theme-button');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeButtons = document.querySelectorAll('#theme-selector button');

    const themes = ['light', 'proton', 'forest', 'portal', 'peaks']
    
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
});