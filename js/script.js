const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list');
const projects = document.getElementsByClassName('project-1');
const popWindow = document.getElementsByClassName('popup-window');

//POPUP WINDOW SETUP
let body = document.querySelector('body');
let openPopup = document.querySelector('.popup-btn');
let closePopup = document.querySelector('.close-btn');
let popupWindow = document.querySelector('.popup-window');
let popupBg = document.querySelector('.popup-bg');
const mobileTechContainer = document.querySelector('#mobile-pop-lang');
const deskTechContainer = document.querySelector('#desk-pop-lang');

let isMenuClose = true;

//Projects Data
const myData = [{
    projectImg: "images/project1.svg",
    projectTitle: "Tonic",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
  },
  {
    projectImg: "images/portfolio2.svg",
    projectTitle: "Multi-Post Stories",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
  },
  {
    projectImg: 'images/project3.png',
    projectTitle: "Tonic",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
  },
  {
    projectImg: 'images/project4.svg',
    projectTitle: "Multi-Post Stories",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
  },
  {
    projectTitle: "Project 4",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
  },
];


// ----- FUNCTIONS DECLARATIONS------
const createTech = (name) => {
  const newTech = document.createElement('LI');
  newTech.classList.add('small-button');
  newTech.classList.add('lang-item');
  newTech.innerText = name;
  return newTech;
}

const removeChilds = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};

function openProjectModal() {
  popupBg.style.display = 'flex';
  popupWindow.style.display = 'block';
}

function closeProjectModal() {
  popupWindow.style.display = 'none';
  popupBg.style.display = 'none';
  removeChilds(mobileTechContainer);
  removeChilds(deskTechContainer);
}

// sets modal data every time you click a see project button
const setUpModalData = (index) => {
  popWindow[0].querySelector('.projectpic').src = myData[index].projectImg;
  popWindow[0].querySelector('.project-name').innerText = myData[index].projectTitle;
  popWindow[0].querySelector('#mobile-pop-text').textContent = myData[index].projectDesc;
  popWindow[0].querySelector('#desk-pop-text').textContent = myData[index].projectDesc;

  // Creates techs using the names on myData, then adds them to the ul parent container
  for (let i = 0; i < myData[index].technologies.length; i++) {
    const element = createTech(myData[index].technologies[i]);

    deskTechContainer.appendChild(element);
    mobileTechContainer.appendChild(element);
  }
};

// puts the data from the js to the html elements
const setUpProjectsData = () => {
  Object.entries(projects).forEach((arr) => {
    let index = arr[0];
    let currentProject = arr[1];
    currentProject.querySelector('.projectpic').src = myData[index].projectImg;
    currentProject.querySelector('.project-title').innerText = myData[index].projectTitle;
    currentProject.querySelector('.primary-read').innerText = myData[index].projectDesc;

    // Add click event to each button of the projects and link openModal and setData functions
    currentProject.querySelector('.popup-btn').addEventListener('click', (source) => {
      openProjectModal();
      setUpModalData(index);
    });
  });
};

function openMenu() {
  popMenu.style.display = 'flex';
}

function closeMenu() {
  popMenu.style.display = 'none';
}
//------------------------------------


// Function calls
setUpProjectsData();

burgerBtn.addEventListener('click', () => {
  if (isMenuClose ? openMenu() : closeMenu());
  isMenuClose = !isMenuClose;
});

listParent.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'A') {
    closeMenu();
  }
});

closePopup.addEventListener('click', () => {
  closeProjectModal();
  console.log('Window Close')

})

window.addEventListener('load', () => {

})