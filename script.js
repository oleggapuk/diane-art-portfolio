const btn = document.getElementById('navBtn');
const menu = document.getElementById('navMenu');

btn.addEventListener('click', e => {
  menu.classList.toggle('active');
  document.querySelector('html').classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});