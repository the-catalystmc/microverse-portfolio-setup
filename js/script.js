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

let isMenuClose = true;

//Projects Data
const myData = [{
    projectTitle: "Project 1",
    projectDesc: 'Laboris sint quis velit id in Lorem nulla labore amet eu do.'
  },
  {
    projectTitle: "Project 2",
    projectDesc: 'Laboris sint quis balablbalbalaa labore amet eu do.'
  },
  {
    projectTitle: "Project 3",
    projectDesc: 'Laboris sint quis velit idbalbalbalbalblaba.'
  },
  {
    projectTitle: "Project 4",
    projectDesc: 'blablablablaba id in Lorem nulla labore amet eu do.'
  },
  {
    projectTitle: "Project 4",
    projectDesc: 'blablablablaba id in Lorem nulla labore amet eu do.'
  },
];

// ----- FUNCTIONS DECLARATIONS------
function openProjectModal() {
  popupBg.style.display = 'flex';
  popupWindow.style.display = 'block';
}

function closeProjectModal() {
  popupWindow.style.display = 'none';
  popupBg.style.display = 'none';
}

const setUpModalData = (index) => {
  popWindow[0].querySelector('.project-name').innerText = myData[index].projectTitle;
  popWindow[0].querySelector('#mobile-pop-text').textContent = myData[index].projectDesc;
  popWindow[0].querySelector('#desk-pop-text').textContent = myData[index].projectDesc;
  console.log(popWindow[0].querySelector(('#pop-text')))
};

const setUpProjectsData = () => {
  Object.entries(projects).forEach((arr) => {
    let index = arr[0];
    let currentProject = arr[1];
    currentProject.querySelector('.project-title').innerText = myData[index].projectTitle;
    currentProject.querySelector('.primary-read').innerText = myData[index].projectDesc;
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



// ----EVENTS-----
// openPopup.addEventListener('click', (source) => {
//   console.log(source.target);
//   openProjectModal();
// })

closePopup.addEventListener('click', () => {
  closeProjectModal();
  console.log('Window Close')

})

window.addEventListener('load', () => {

})