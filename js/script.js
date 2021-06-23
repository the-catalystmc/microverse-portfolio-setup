
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

let body = document.querySelector('body');
let openPopup = document.querySelector('.popup-btn');
let closePopup = document.querySelector('.close-btn');
let popupWindow = document.querySelector('.popup-window');
let popupBg = document.querySelector('.popup-bg');

function openWindow() {
  popupBg.style.display = 'flex';
  popupWindow.style.display = 'block';
 
}

function closeWindow() {
  popupWindow.style.display = 'none';
  popupBg.style.display = 'none';

}

openPopup.addEventListener('click', () => {
    console.log('Window Open')
    openWindow();
})

closePopup.addEventListener('click', () => {
  closeWindow();
  console.log('Window Close')

})

//Projects Class
class Project {
  projectIndex;

  name;

  description;

  projectImage;

  technologies = [];

  liveLink;

  sourceLink;

  constructor(
    projectIndex,
    name,
    description,
    projectImage,
    technologies,
    liveLink,
    sourceLink,
  ) {
    this.projectIndex = projectIndex;
    this.name = name;
    this.description = description;
    this.projectImage = projectImage;
    this.technologies = technologies;
    this.liveLink = liveLink;
    this.sourceLink = sourceLink;
  }
}

export const projectsData = [
  new Project('0',
    'Tonic',
    '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    '../images/project1.svg',
    [
      'html',
      'css',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('1',
    'Multi-Purpose Stories',
    '  A daily selection of privately personalized reads; no accounts or sign-ups required.',      
    '../images/project2.svg',
    [
      'ruby',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('2',
    'Tonic',
    '  A daily selection of privately personalized reads; no accounts or sign-ups required.',      
    '../images/project3.png',
    [
      'html',
      'css',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('3',
    'Multi-Purpose Stories',
    '  A daily selection of privately personalized reads; no accounts or sign-ups required.',      
    '../images/project4.svg',
    [
      'html',
      'css',
      'javascript',
    ],
    'link1',
    'link2')
];


