document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    // theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('proton');;
    });
});