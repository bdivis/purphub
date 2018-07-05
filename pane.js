const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (event) => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('visible');

});