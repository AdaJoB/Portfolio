const SmoothScroll = (() => {
    const init = () => {

        // ==== Smooth Scrolling ==== //
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
        
    };

    return { init };
})();