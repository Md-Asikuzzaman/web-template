const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinksFade = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');
        //animation
        navLinksFade.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }

        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();