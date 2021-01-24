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

window.onload = function() {
    document.querySelector('body').style.display = 'block';
}

const setTheme = function(mode) {
    if (mode == 'light') {
        // document.documentElement.style.setProperty('--animation-background', 'white');
        // document.documentElement.style.setProperty('--dark-blue', '#985eff');
        // document.documentElement.style.setProperty('--medium-blue', '');
        // document.documentElement.style.setProperty('--light-blue', 'cyan');
        document.documentElement.style.setProperty('--animation-background', 'radial-gradient(#dbb2ff, #985eff)');
        document.documentElement.style.setProperty('--dark-blue', 'rgb(200, 125, 220)');
        document.documentElement.style.setProperty('--medium-blue', 'rgb(100, 129, 180)');
        document.documentElement.style.setProperty('--light-blue', 'rgb(139, 178, 233)');
    } else {
        document.documentElement.style.setProperty('--animation-background', 'radial-gradient(#485777, #2b2e3d)');
        document.documentElement.style.setProperty('--dark-blue', 'rgb(100, 125, 220)');
        document.documentElement.style.setProperty('--medium-blue', 'rgb(0, 129, 180)');
        document.documentElement.style.setProperty('--light-blue', 'rgb(39, 178, 233)');
    }
}

// Theme toggle button
const checkbox = document.querySelector('.checkbox');

if (localStorage.getItem('currentTheme') == null) {
    localStorage.setItem('currentTheme', 'dark');
    setTheme(localStorage.getItem('currentTheme'));
} else {
    if (localStorage.getItem('currentTheme') == 'light') {
        checkbox.checked = true;
        setTheme(localStorage.getItem('currentTheme'));
    } else {
        checkbox.checked = false;
        setTheme(localStorage.getItem('currentTheme'));
    }
}

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('currentTheme') == 'light') {
        localStorage.setItem('currentTheme', 'dark');
        setTheme(localStorage.getItem('currentTheme'));
    } else {
        localStorage.setItem('currentTheme', 'light');
        setTheme(localStorage.getItem('currentTheme'));
    }
    location.reload();
});