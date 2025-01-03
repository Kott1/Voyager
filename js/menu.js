const menuIcon = document.querySelector('.menuIcon');
const hiddenElement = document.querySelector('.hidden');
const mainMenus = document.querySelectorAll('.mainMenu');
const lines = document.querySelectorAll('.line');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('toggleMargin')
    mainMenus[1].classList.toggle('active');
    
    hiddenElement.classList.toggle('hidden');
    hiddenElement.classList.toggle('active');

    lines.forEach((line) => {
        line.classList.toggle('rotateLines');
    });
});