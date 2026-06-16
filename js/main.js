const mmb = document.querySelector('#menu-mobile-button');
const body = document.querySelector('body');
const svg = document.querySelector('svg');
const svg_top = document.querySelector('#svg-top');
const svg_middle = document.querySelector('#svg-middle');
const svg_bottom = document.querySelector('#svg-bottom');
let open = false;

mmb.addEventListener('click', () => {
    body.classList.toggle('mobile-open');
    open = !open;
      if (open) {
        svg_top.setAttribute('transform', 'rotate(45)  translate(0, 6)');
        svg_middle.style.opacity = '0';
        svg_middle.setAttribute('transform', 'scale(0)');
        svg_bottom.setAttribute('transform', 'rotate(-45) translate(0, -6)');
      } else {
        svg_top.setAttribute('transform','');
        svg_middle.style.opacity = '1';
        svg_middle.setAttribute('transform','');
        svg_bottom.setAttribute('transform','');
      }
});