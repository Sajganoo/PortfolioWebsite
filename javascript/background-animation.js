const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentTheme = localStorage.getItem("currentTheme");
console.log(currentTheme);

let particlesArray;
let mouseRadiusRatio = 110;
let userInteraction = false;

const mouse = {
    x: null,
    y: null,
    radius:
        (canvas.width / mouseRadiusRatio) * (canvas.height / mouseRadiusRatio),
};

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, dirX, dirY, size, color) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = currentTheme == "light" ? "#9acc14" : "white";
        ctx.fill();
    }

    update() {
        if (this.x < 0 || this.x > canvas.width) {
            this.dirX *= -1;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.dirY *= -1;
        }

        if (userInteraction) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            let shift = 5;
            if (distance < mouse.radius + this.size) {
                if (
                    mouse.x < this.x &&
                    this.x < canvas.width - this.size * 10
                ) {
                    this.x += shift;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= shift;
                }
                if (
                    mouse.y < this.y &&
                    this.y < canvas.height - this.size * 10
                ) {
                    this.y += shift;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= shift;
                }
            }
        }
        this.x += this.dirX;
        this.y += this.dirY;

        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 8000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let dirX = Math.random() * 5 - 3;
        let dirY = Math.random() * 5 - 3;
        let color = "#000000";

        particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
    }
}

function animation() {
    requestAnimationFrame(animation);
    currentTheme = localStorage.getItem("currentTheme");
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }

    connect();
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = 0; b < particlesArray.length; b++) {
            if (a === b) continue;
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = dx * dx + dy * dy;
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - distance / 12000;
                ctx.lineWidth = 1;
                ctx.strokeStyle =
                    currentTheme == "light"
                        ? "rgba(154, 204, 20, " + opacityValue + ")"
                        : "rgba(100, 125, 220, " + opacityValue + ")";
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius =
        (canvas.width / mouseRadiusRatio) * (canvas.height / mouseRadiusRatio);
});

window.addEventListener("mouseout", () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

init();
animation();
