let aboutMeBtn = document.getElementById('aboutMe');
aboutMeBtn.addEventListener('click', redirectToAboutMe);

function redirectToAboutMe(){
    window.location.replace('../html/aboutMe.html');
};

let projectsBtn = document.querySelector('#projects');
projectsBtn.addEventListener('click', redirectToProject);

function redirectToProject(){
    window.location.replace('../html/projects.html');
};

let contactMeBtn = document.querySelector('#contactMe');
contactMeBtn.addEventListener('click', redirectToContact);

function redirectToContact(){
    window.location.replace('../html/contact.html');
};