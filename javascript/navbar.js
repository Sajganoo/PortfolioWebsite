const toggleButton = document.querySelector('.toggle-button');
const navbarContainer = document.querySelector('.navbar-container');
const navbarMenu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('small');
    navbarContainer.classList.toggle('small');
});

window.addEventListener('resize', () => {
    if (innerWidth >= 600) {
        navbarMenu.classList.remove('small');
        navbarContainer.classList.remove('small');
    }
});