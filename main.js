//hamburger menu 

let hamburgerToggle = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu')

hamburgerToggle.addEventListener('click', () => {

    hamburgerToggle.classList.toggle('hamburger-close');
    mobileMenu.classList.toggle('mobile-menu-active');

})