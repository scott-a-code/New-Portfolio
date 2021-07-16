let aboutMeBtn = document.querySelector('.AboutMe');
aboutMeBtn.addEventListener('click', redirectToAboutMe());

function redirectToAboutMe(){
    console.log("About me page");
};

let projectsBtn = document.querySelector('.Projects');
projectsBtn.addEventListener('click', redirectToProject());

function redirectToProject(){
    console.log("Projects page");
};

let contactMeBtn = document.querySelector('.ContactMe');
contactMeBtn.addEventListener('click', redirectToContact());

function redirectToContact(){
    console.log("Conytact page");
};