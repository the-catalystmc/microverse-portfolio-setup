// QuerySelectors

const projectSection = document.querySelector('.project');
const projectSection = document.querySelector('.project');

//Projects Data

const projectsArray = [
  {
    projectImg: "images/project1.svg",
    projectTitle: "Tonic",
    projectCompany: "Canopy",
    projectRole: "Back End Dev",
    ProjectYear: "2015",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectDescModal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.",
    technologies: ['html', 'css', 'javaScript'],
    link1: '#',
    link2: '#',
  }, {
    projectImg: "images/project1.svg",
    projectTitle: "Tonic",
    projectCompany: "Canopy",
    projectRole: "Back End Dev",
    ProjectYear: "2015",
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectDescModal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.",
    technologies: ['html', 'css', 'javaScript'],
    link1: '#',
    link2: '#',
  },
]

// Functions

function appendProjects(arr) {
  for (let i = 0;  i < arr.length; i += 1) {
    const project = document.createElement('div');
    project.classList.add('project__card');
    project.innerHTML = {
      `<div class="project__info">
        <h2 class="project__title">${arr[i].projectTitle}</h2>
      </div>`
    }
    projectSection.appendChild(project);
  }
}

appendProjects(projectsArray);