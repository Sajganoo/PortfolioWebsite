const toggleButton = document.querySelector(".toggle-button");
const navbarContainer = document.querySelector(".navbar-container");
const navbarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("small");
    navbarContainer.classList.toggle("small");
});

window.addEventListener("resize", () => {
    if (innerWidth >= 600) {
        navbarMenu.classList.remove("small");
        navbarContainer.classList.remove("small");
    }
});

window.onload = function () {
    document.querySelector("body").style.display = "block";
};

const setTheme = function (mode) {
    if (mode == "light") {
        document.documentElement.style.setProperty(
            "--animation-background",
            "radial-gradient(#343c41, #191c1f)"
        );
        document.documentElement.style.setProperty("--dark-blue", "#343c41");
        document.documentElement.style.setProperty(
            "--medium-blue",
            "rgba(159, 239, 0, 0.5)"
        );
        document.documentElement.style.setProperty("--light-blue", "#9acc14");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty(
            "--icon-background",
            "rgb(116, 173, 0)"
        );
        document.documentElement.style.setProperty(
            "--skills-background",
            "rgba(119, 179, 0, 0.5)"
        );
        document.documentElement.style.setProperty(
            "--skills-background-hover",
            "rgba(119, 200, 0, 0.6)"
        );
    } else {
        document.documentElement.style.setProperty(
            "--animation-background",
            "radial-gradient(#485777, #2b2e3d)"
        );
        document.documentElement.style.setProperty(
            "--dark-blue",
            "rgb(100, 125, 220)"
        );
        document.documentElement.style.setProperty(
            "--medium-blue",
            "rgb(0, 129, 180)"
        );
        document.documentElement.style.setProperty(
            "--light-blue",
            "rgb(39, 178, 233)"
        );
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty(
            "--icon-background",
            "rgb(96, 200, 241)"
        );
        document.documentElement.style.setProperty(
            "--skills-background",
            "rgba(81, 160, 235, 0.3)"
        );
        document.documentElement.style.setProperty(
            "--skills-background-hover",
            "rgba(81, 160, 235, 0.5)"
        );
    }
};

// Theme toggle button
const checkbox = document.querySelector(".checkbox");

if (localStorage.getItem("currentTheme") == null) {
    localStorage.setItem("currentTheme", "dark");
    setTheme(localStorage.getItem("currentTheme"));
} else {
    if (localStorage.getItem("currentTheme") == "light") {
        checkbox.checked = true;
        setTheme(localStorage.getItem("currentTheme"));
    } else {
        checkbox.checked = false;
        setTheme(localStorage.getItem("currentTheme"));
    }
}

checkbox.addEventListener("change", () => {
    if (localStorage.getItem("currentTheme") == "light") {
        localStorage.setItem("currentTheme", "dark");
        setTheme(localStorage.getItem("currentTheme"));
    } else {
        localStorage.setItem("currentTheme", "light");
        setTheme(localStorage.getItem("currentTheme"));
    }
});
