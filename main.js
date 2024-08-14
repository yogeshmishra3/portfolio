// Toggle baar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nabar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid');
    navbar.classList.toggle('active');
}
//scroll section
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href = ' + id + ']').classList.add('active');
            });
        
        };
    });

    // sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
//     //remove toggle icon and nav bar
//     menuIcon.classList.remove('fa-solid');
//     navbar.classList.remove('active');
// };
// // scrol revel
// ScrollReveal({ 
//     distance: '80px',
//     duration: 2000,
//     delay : 200,
});
// ScrollReveal().reveal('.home-contant,heading'{ origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-contact p ,.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Web Designer', 'Java Developer', 'PL/SQL Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    
});
