const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const portfolioBtn = document.querySelector('.portfolio')

let isMenuClose = true;

burgerBtn.addEventListener('click', () => {
  if(isMenuClose ? openMenu() : closeMenu());
  isMenuClose = !isMenuClose;
});

portfolioBtn.addEventListener('click', closeMenu());

function openMenu() {
  popMenu.style.display = 'flex';
};

function closeMenu() {
  popMenu.style.display = 'none';
};
