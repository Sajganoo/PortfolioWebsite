const filter = document.querySelector('.filter-menu');
const projects = document.querySelector('.project');

const highlightActive = function(category) {
    Array.from(filter.children).forEach(child => {
        if (child.textContent === category) {
            child.classList.add('active');
        } else {
            child.classList.remove('active');
        }
    });
}

filter.addEventListener('click', event => {
    showProjectsOf(event.target.textContent);
    highlightActive(event.target.textContent)
});

const showProjectsOf = function(category) {
    Array.from(projects.children).forEach(child => {
        if (category === 'all') {
            child.style.display = 'flex';
            return;
        }
        if (!child.classList.contains(category)) {
            child.style.display = 'none';
        } else {
            child.style.display = 'flex';
        }
    }
)};

highlightActive('all');