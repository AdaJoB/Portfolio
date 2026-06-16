const TypewriterEffect = (() => {
    const init = () => {
        
        // ==== Typewriter Effect ==== //
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

        // my blog
        const blogElement = document.getElementById('blog-text');
        const blogText = 'My Blog';
        typewriterObserve(blogElement, blogText, 100);
        
    };

    return { init };
})();