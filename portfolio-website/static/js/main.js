document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    // theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themes = ['light', 'proton', 'forest', 'portal', null];
    let themeNum = 0;
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(themes[themeNum]);
        themeNum = (themeNum + 1) % themes.length;
    });
});