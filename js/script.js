const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list');
const modalWindow = document.getElementById('modal');
const closeModalBtn = document.querySelector('.modal__icon-close');

// POPUP WINDOW SETUP
const techContainer = document.querySelector('.modal__tech');

// CLONE AND TARGET
const projectTemplate = document.querySelector('#project-template');
const projectList = document.querySelector('#project-list');

let isMenuClose = true;

// Projects Data
const myData = [{
  projectImg: 'images/project1.svg',
  projectTitle: 'Tonic',
  projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  modalDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
  technologies: ['html', 'css', 'javaScript'],
  link1: 'https://bizuns.com/symbols-bullets-copy-paste',
  link2: 'https://self-publishingschool.com/how-to-write-dialogue/',
  customStyle: 'row',
},
{
  projectImg: 'images/portfolio2.svg',
  projectTitle: 'Multi-Post Stories',
  projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  modalDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
  technologies: ['html', 'css', 'javaScript'],
  link1: 'https://www.figma.com/file/l7SqJ3ZfkAKih9sFxvWSR4/Microverse-Student-Project-1?node-id=37%3A2238',
  link2: 'https://self-publishingschool.com/how-to-write-dialogue/',
  customStyle: 'row-reverse',
},
{
  projectImg: 'images/project3.png',
  projectTitle: 'Tonic',
  projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  modalDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
  technologies: ['html', 'css', 'javaScript'],
  link1: 'https://www.figma.com/file/l7SqJ3ZfkAKih9sFxvWSR4/Microverse-Student-Project-1?node-id=37%3A2238',
  link2: 'https://self-publishingschool.com/how-to-write-dialogue/',
  customStyle: 'row',
},
{
  projectImg: 'images/project4.svg',
  projectTitle: 'Multi-Post Stories',
  projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  modalDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
  technologies: ['html', 'css', 'javaScript'],
  link1: 'https://www.figma.com/file/l7SqJ3ZfkAKih9sFxvWSR4/Microverse-Student-Project-1?node-id=37%3A2238',
  link2: 'https://self-publishingschool.com/how-to-write-dialogue/',
  customStyle: 'row-reverse',
},
];

// ----- FUNCTIONS DECLARATIONS------
const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

function toggleModal() {
  modalWindow.classList.toggle('show');
}

const createTech = (name) => {
  const newTech = document.createElement('LI');
  newTech.classList.add('small-button');
  newTech.classList.add('modal-tag');
  newTech.innerText = name;
  return newTech;
};

const addTechnologies = (projectInfo, target) => {
  // Creates techs using the names on myData, then adds them to the ul parent container
  for (let i = 0; i < projectInfo.technologies.length; i += 1) {
    const element = createTech(projectInfo.technologies[i]);
    target.appendChild(element);
  }
};

const displayModalWindow = (projectInfo) => {
  modalWindow.querySelector('.modal__title').innerText = projectInfo.projectTitle;
  modalWindow.querySelector('.modal__img').src = projectInfo.projectImg;
  modalWindow.querySelector('.modal__desc').innerText = projectInfo.modalDesc;
  modalWindow.querySelector('.modal__title').innerText = projectInfo.projectTitle;
  modalWindow.querySelector('.modal__button--see-live').href = projectInfo.link1;
  modalWindow.querySelector('.modal__button--see-src').href = projectInfo.link2;

  removeChilds(techContainer);
  addTechnologies(projectInfo, techContainer);
  toggleModal();
};

// const createQual = (name) => {
//   const newQual = document.createElement('LI');
//   newQual.classList.add('project__quali');
//   newQual.innerText = name;
//   return newQual;
// }

// Creates an element based on projectTemplate
const createProjectElement = (projectInfo) => {
  const clone = projectTemplate.content.firstElementChild.cloneNode(true);
  const techsTarget = clone.querySelector('.project__tech');
  // const qualTarget = clone.querySelector('.project__quali');
  clone.querySelector('.project__img').src = projectInfo.projectImg;
  clone.querySelector('.project__title').innerText = projectInfo.projectTitle;
  clone.querySelector('.project__desc').innerText = projectInfo.projectDesc;
  clone.querySelector('.project__card').style.flexDirection = projectInfo.customStyle;

  addTechnologies(projectInfo, techsTarget);

  clone.querySelector('.project__button').addEventListener('click', () => {
    displayModalWindow(projectInfo);
  });
  projectList.appendChild(clone);
};

// Iterates over each myData element
const setUpPage = () => {
  myData.forEach((data) => {
    createProjectElement(data);
  });
};

// const addQualification = (projectInfo, target) => {
//   // Creates techs using the names on myData, then adds them to the ul parent container
//   for (let i = 0; i < projectInfo.projectQual.length; i++) {
//     const element = createQual(projectInfo.projectQual[i]);
//     target.appendChild(element);
//   }
// }

function openMenu() {
  popMenu.style.display = 'flex';
}

function closeMenu() {
  popMenu.style.display = 'none';
}
//-----------------------------------------------

// Function calls

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
});

window.addEventListener('load', () => {
  setUpPage();
});