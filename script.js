const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list')

let isMenuClose = true;

burgerBtn.addEventListener('click', () => {
  if(isMenuClose ? openMenu() : closeMenu());
  isMenuClose = !isMenuClose;
});

listParent.addEventListener("click", function(e) {
  if(e.target && e.target.nodeName == "A") {
      closeMenu();
  }
});

function openMenu() {
  popMenu.style.display = 'flex';
};

function closeMenu() {
  popMenu.style.display = 'none';
};
