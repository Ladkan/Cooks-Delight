const mmb = document.querySelector('#menu-mobile-button');
const body = document.querySelector('body');

mmb.addEventListener('click', () => {
    body.classList.toggle('mobile-open');
});