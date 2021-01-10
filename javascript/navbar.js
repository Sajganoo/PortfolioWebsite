const currentLocation = location.href;
const menuItems = document.querySelectorAll('a');
const listItems = document.querySelectorAll('li');

for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].href === currentLocation) {
        listItems[i].className += " active";
    }
}