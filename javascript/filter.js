const projects = document.querySelectorAll('.image');
const filter = document.querySelector('.filter-menu');

filter.addEventListener('click', event => {
    console.log(event.target.textContent);
});