function openMenu() {
    var menu = document.getElementById('menu-id');
    menu.classList.toggle('show');
}

window.onclick = function (event) {
    var menu = document.getElementById('menu-id');

    if (
        menu.classList.contains('show') &&
        !event.target.matches('.menu-icon') &&
        !event.target.matches('.bar') &&
        !event.target.matches('.menu')
    ) {
        menu.classList.remove('show');
    }
}