const drop_btn = document.querySelector(".drop-btn");
const drop_btn_arrow = document.querySelector(".drop-btn span");
const tooltip = document.querySelector(".tooltip");

const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");

const programming_drop = document.querySelector(".programming-drop");
const programming_item = document.querySelector(".programming-item");
const programming_btn = document.querySelector(".back-programming-btn");

const design_drop = document.querySelector(".design-drop");
const design_item = document.querySelector(".design-item");
const design_btn = document.querySelector(".back-design-btn");

const iot_drop = document.querySelector(".iot-drop");
const iot_item = document.querySelector(".iot-item");
const iot_btn = document.querySelector(".back-iot-btn");

drop_btn.onclick = () => {
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
    if (menu_wrapper.classList.contains("show")) {
        drop_btn_arrow.classList = "fas fa-caret-down";
    } else {
        drop_btn_arrow.classList = "fas fa-caret-up";
    }
};

programming_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    programming_drop.style.display = "block";
};

programming_btn.onclick = () => {
    menu_bar.style.marginLeft = "0px";
    programming_drop.style.display = "none";
};

design_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    design_drop.style.display = "block";
};

design_btn.onclick = () => {
    menu_bar.style.marginLeft = "0px";
    design_drop.style.display = "none";
};

iot_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    iot_drop.style.display = "block";
};

iot_btn.onclick = () => {
    menu_bar.style.marginLeft = "0px";
    iot_drop.style.display = "none";
};


const projects = document.querySelectorAll(".image");

const sortProjects = function(name) {
    if (name === "all") {
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.display = "flex";
        }
    } else {
        for (let i = 0; i < projects.length; i++) {
            if (!projects[i].classList.contains(name)) {
                projects[i].style.display = "none";
            } else {
                projects[i].style.display = "flex";
            }
        }    
    }
}


const selectable = document.querySelectorAll('.selectable');

for (let i = 0; i < selectable.length; i++) {
    selectable[i].addEventListener('click', event => {
        drop_btn.innerHTML = `${event.target.lastChild.textContent.trim()}<span class="fas fa-caret-down"></span>`;
        sortProjects(event.target.lastChild.textContent.trim().toLowerCase().split(" ")[0]);
        drop_btn.click();
    });
}



