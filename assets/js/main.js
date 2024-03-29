//toggle menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-menu");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//hide menu
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(el => el.addEventListener('click', linkAction));


//change header shadow
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);


//scroll up btn
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener("scroll", scrollActive);

//theme change
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


//scrollreveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.home__data, .join__container, .footer`);
sr.reveal(`.home__img`, { scale: 1.5 });
sr.reveal(`.enjoy__card, .popular__card`, { interval: 100 });
sr.reveal(`.about__data`, { origin: 'top' });
sr.reveal(`.about__img`, { scale: 0.5 });



