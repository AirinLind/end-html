const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('show-menu');
});
