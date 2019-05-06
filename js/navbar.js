const navbarHamburger = document.querySelector('.navbar .hamburger-links');
const navbarLinks = document.querySelector('.navbar .navbar-links');
const navbar = document.querySelector('.navbar');

navbarHamburger.addEventListener('click', () => {
    if (navbarLinks.style.display === 'none' || !navbarLinks.style.display) {
        navbarLinks.style.display = 'flex';
        navbar.style['padding-bottom'] = '0';
    } else {
        navbarLinks.style.display = 'none';
        navbar.style['padding-bottom'] = '1rem';
    }
});