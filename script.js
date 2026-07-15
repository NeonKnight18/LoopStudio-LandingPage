const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const closeBtn = document.querySelector('.close-icon');
const openBtn = document.querySelector('.open-icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});

