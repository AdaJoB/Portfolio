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
        const elementAbout = document.getElementById('about-text');
        goAbout.addEventListener('click', () => {
            window.scrollTo({
                top: elementAbout.offsetTop-75,
                left: 0,
                behavior: 'smooth'
            });
        });

        // projects
        const goProjects = document.getElementById('go-projects');
        const elementProjects = document.getElementById('projects-text');
        goProjects.addEventListener('click', () => {
            window.scrollTo({
                top: elementProjects.offsetTop-75,
                left: 0,
                behavior: 'smooth'
            });
        });

        // contact
        const goContact = document.getElementById('go-contact');
        const elementContact = document.getElementById('contact-text');
        goContact.addEventListener('click', () => {
            window.scrollTo({
                top: elementContact.offsetTop-75,
                left: 0,
                behavior: 'smooth'
            });
        });

        // blog
        const goBlog = document.getElementById('go-blog');
        const elementblog = document.getElementById('blog-text');
        goBlog.addEventListener('click', () => {
            window.scrollTo({
                top: elementblog.offsetTop-75,
                left: 0,
                behavior: 'smooth'
            });
        });
        
    };

    return { init };
})();