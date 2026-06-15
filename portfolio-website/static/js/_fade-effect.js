const FadeEffect = (() => {
    const init = () => {

        // TODO - create observer & variable delay when needed
        setTimeout(() => {
            const elements = document.getElementsByClassName('fade');
            
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add('visible');
            }
        }, 3750);
        
    };
    
    return { init };
})();