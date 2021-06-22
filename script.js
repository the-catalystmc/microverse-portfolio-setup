const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list');

let isMenuClose = true;

function openMenu() {
  popMenu.style.display = 'flex';
}

function closeMenu() {
  popMenu.style.display = 'none';
}

burgerBtn.addEventListener('click', () => {
  if (isMenuClose ? openMenu() : closeMenu());
  isMenuClose = !isMenuClose;
});

listParent.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'A') {
    closeMenu();
  }
});

//POPUP WINDOW SETUP

const projectOne = {
  name: 'Tonic',
  description: 'tonic',
  'featured image': 'url',
  technologies: 'html, css, javaScript',
  'link to live version': 'url',
  'link to source': 'url'
}