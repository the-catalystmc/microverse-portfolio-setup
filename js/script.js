const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list');
const modalWindow = document.getElementById('modal');
const closeModalBtn = document.querySelector('.modal__icon-close');

//POPUP WINDOW SETUP
const techContainer = document.querySelector('.modal__tech');

//CLONE AND TARGET 
const projectTemplate = document.querySelector('#project-template');
const projectList = document.querySelector('#project-list');

let isMenuClose = true;

//Projects Data
const myData = [{
    projectImg: "images/project1.svg",
    projectTitle: "Tonic",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css'],
    link1: '',
    link2: '',
    customStyle: 'row',
  },
  {
    projectImg: "images/portfolio2.svg",
    projectTitle: "Multi-Post Stories",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
    customStyle: 'row-reverse',
  },
  {
    projectImg: 'images/project3.png',
    projectTitle: "Tonic",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
    customStyle: 'row',
  },
  {
    projectImg: 'images/project4.svg',
    projectTitle: "Multi-Post Stories",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    link1: '',
    link2: '',
    customStyle: 'row',
  },
];

// ----- FUNCTIONS DECLARATIONS------
const createTech = (name) => {
  const newTech = document.createElement('LI');
  newTech.classList.add('small-button');
  newTech.classList.add('modal-tag');
  newTech.innerText = name;
  return newTech;
}

const removeChilds = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};

function toggleModal () {
  modalWindow.classList.toggle('show');
}

// Creates an element based on projectTemplate
const createProjectElement = (projectInfo) => {
  const clone = projectTemplate.content.firstElementChild.cloneNode(true);

  const techsTarget = clone.querySelector('.project__tech');
  clone.querySelector('.project__title').innerText = projectInfo.projectTitle;
  clone.querySelector('.project__desc').innerText = projectInfo.projectDesc;
  clone.querySelector('.project__card').style.flexDirection  = projectInfo.customStyle;

  addTechnologies(projectInfo, techsTarget);

  clone.querySelector('.project__button').addEventListener('click', () => {
    displayModalWindow(projectInfo);
  })
  projectList.appendChild(clone);
}

// Iterates over each myData element
const setUpPage  = () => {
  myData.forEach((data) => {
    createProjectElement(data);
  })
};

const displayModalWindow = (projectInfo) => {
  modalWindow.querySelector('.modal__title').innerText = projectInfo.projectTitle;

  removeChilds(techContainer);
  addTechnologies(projectInfo, techContainer);
  toggleModal();
}

const addTechnologies = (projectInfo, target) => {
  // Creates techs using the names on myData, then adds them to the ul parent container
  for (let i = 0; i < projectInfo.technologies.length; i++) {
    const element = createTech(projectInfo.technologies[i]);
    target.appendChild(element);
  }
}

function openMenu() {
  popMenu.style.display = 'flex';
}

function closeMenu() {
  popMenu.style.display = 'none';
}
//-----------------------------------------------


// Function calls
setUpPage();


burgerBtn.addEventListener('click', () => {
  if (isMenuClose ? openMenu() : closeMenu());
  isMenuClose = !isMenuClose;
});

listParent.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'A') {
    closeMenu();
  }
});

closeModalBtn.addEventListener('click', () => {
  toggleModal();
})

window.addEventListener('load', () => {

})