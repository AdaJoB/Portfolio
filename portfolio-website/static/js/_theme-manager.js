const ThemeManager = (() => {
    const init = () => {

        // ==== theme button and dropdown functionality ==== //
        const themeToggle = document.getElementById('theme-button');
        const themeDropdown = document.getElementById('theme-dropdown');
        const themeButtons = document.querySelectorAll('#theme-selector button');
        const themes = ['light', 'proton', 'forest', 'portal', 'peaks'];
        
        let isHoveringTheme = false;
        let timeout;

        // opens the dropdown menu
        themeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.add('open');
            
        });

        // removes dropdown menu after mouse is off for 300ms
        themeDropdown.addEventListener('mouseenter', () => {
            isHoveringTheme = true;
        });

        themeDropdown.addEventListener('mouseleave', () => {
            isHoveringTheme = false;

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                if (!isHoveringTheme) {
                    themeDropdown.classList.remove('open');
                }
            }, 300);
        });


        // theme button functionality in menu
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.documentElement.classList.remove(...themes);
                if (button.dataset.theme !== 'default') {
                    document.documentElement.classList.add(button.dataset.theme);
                }
            });
        });

    };
    
    return { init };
})();