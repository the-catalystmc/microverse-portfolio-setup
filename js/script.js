// STORAGE
const formData = document.querySelector('form');

const saveInputData = () => {
  const data = {
    saveName: formData.user_name.value,
    saveMail: formData.user_email.value,
    saveText: formData.user_message.value,
  };
  localStorage.setItem('userForm', JSON.stringify(data));
};

const loadInputData = () => {
  if (localStorage.getItem('userForm') !== null) {
    const loadedData = JSON.parse(localStorage.getItem('userForm'));
    formData.user_name.value = loadedData.saveName;
    formData.user_email.value = loadedData.saveMail;
    formData.user_message.value = loadedData.saveText;
  } else {
    formData.user_name.value = '';
    formData.user_email.value = '';
    formData.user_message.value = '';
  }
};

const popMenu = document.getElementById('pop-menu');
const burgerBtn = document.getElementById('burger');
const listParent = document.getElementById('menu-list');
const modalWindow = document.getElementById('modal');
const closeModalBtn = document.querySelector('.modal__icon-close');
// const qualTarget = document.querySelector('.modal__list');

// POPUP WINDOW SETUP
const techContainer = document.querySelector('.modal__tech');

// CLONE AND TARGET
const projectTemplate = document.querySelector('#project-template');
const projectList = document.querySelector('#project-list');

let isMenuClose = true;

// Projects Data
const myData = [{
  projectImg: './screenshots/TopTenCrypto.jpeg',
  projectTitle: 'Top Ten Crypto',
  projectDesc: 'This is a mobile web application that displays the total market capital of the top ten crypto currencies in the world.',
  modalDesc: 'This is a mobile web application that displays the total market capital of the top ten crypto currencies in the world. Each individual currency can then be selected and the associated market value will be displayed for it. All data is requested from the CoinGecko API and then appended to the page.',
  technologies: ['css', 'react', 'javaScript'],
  link1: 'https://the-catalystmc.github.io/crypto-market-cap-app/#/currencies',
  link2: 'https://github.com/the-catalystmc/crypto-market-cap-app',
  customStyle: 'row',
  projectQual: ['hello', 'hi', 'bye'],
},
{
  projectImg: './screenshots/a&r.jpeg',
  projectTitle: 'A&R Restaurant',
  projectDesc: 'This is a webapp that features an all beef cuisine. All meals are loaded from an external API where they are stored.',
  modalDesc: 'This is a website created in collaboration with my classmate Andy. We consumed an API to display a single category of food. We created the main page layout and enabled users to like the meals by utilizing another API. My main job was designing the comments page and writing the necessary logic to consume the comments API. Users are able to view all comments made and also add their own comments. ',
  technologies: ['html', 'bootstrap', 'javaScript'],
  link1: 'https://the-catalystmc.github.io/beef-restaurant',
  link2: 'https://github.com/the-catalystmc/beef-restaurant',
  customStyle: 'row-reverse',
  projectQual: ['helo', 'hi', 'bye'],
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
  projectQual: ['helo', 'hi', 'bye'],
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
  projectQual: ['helo', 'hi', 'bye'],
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
  // removeChilds(qualTarget);
  addTechnologies(projectInfo, techContainer);
  // addQualification(projectInfo, qualTarget);
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
  // addQualification(projectInfo, qualTarget);

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
  loadInputData();
  setUpPage();
});

//------------------------------------------------
const emailBox = document.querySelector('#email');
const formContainer = document.getElementById('contact-me');
const errorMessage = document.getElementById('error-message');

const isMailInvalid = (str) => {
  if (/[A-Z]/g.test(str)) {
    return true;
  }
  errorMessage.classList.remove('show');
  return false;
};

window.addEventListener('keyup', () => {
  isMailInvalid(emailBox.value);
  saveInputData();
});

formContainer.addEventListener('submit', (e) => {
  if (isMailInvalid(emailBox.value)) {
    e.preventDefault();
    errorMessage.classList.add('show');
  }
});