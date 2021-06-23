export default class Project {
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
  
  const createTech = (techName) => {
    const newLi = document.createElement('LI');
    newLi.classList.add('pl-block');
    newLi.innerText = techName;
    return newLi;
  };
  
  export const setProjectData = (emptyProject, projectIndex) => {
    emptyProject.style.backgroundImage = `url(${projectsData[projectIndex].projectImage})`;
    emptyProject.querySelector('#project-title').innerText = projectsData[projectIndex].name;
    emptyProject.querySelector('#project-desc').innerText = projectsData[projectIndex].description;
    emptyProject.id = `project-card-${projectIndex}`;
    projectsData[projectIndex].technologies.forEach((tech) => {
      emptyProject.querySelector('#project-techs').appendChild(createTech(tech));
    });
    return emptyProject;
  };
  
  export const displayPopProject = (popWindowRef, selectedProject) => {
    const pTitle = selectedProject.querySelector('#project-title').innerText;
    const currentPro = projectsData.find((n) => n.name === pTitle);
    popWindowRef.mainDisplay.classList.add('show');
    popWindowRef.setTitle(pTitle);
    popWindowRef.setDescription(selectedProject.querySelector('#project-desc').innerText);
    popWindowRef.setProjectImage(currentPro.projectImage);
    currentPro.technologies.forEach((tech) => {
      popWindowRef.addTech(createTech(tech));
    });
  };