const hamburger = document.querySelector('.hamburger');
const items = document.querySelector('.items');
const leftNav = document.querySelector('.left-nav');

hamburger.addEventListener('click', () => {
    items.classList.toggle('active');
    leftNav.classList.toggle('active');
    hamburger.classList.toggle("active")
});