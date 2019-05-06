const navbarHamburger = document.querySelector('.navbar .hamburger-links');
const navbarLinks = document.querySelector('.navbar .navbar-links');
console.log(navbarLinks);

navbarHamburger.addEventListener('click', () => {
    if (navbarLinks.style.display === 'none' || !navbarLinks.style.display) {
        navbarLinks.style.display = 'flex';
        navbarLinks.style['flex-direction'] = 'column';
    } else {
        navbarLinks.style.display = 'none';
    }
});