let aboutMeBtn = document.querySelector('.AboutMe');
aboutMeBtn.addEventListener('onClick', redirectToAboutMe());

function redirectToAboutMe(){
    console.log("About me page");
};

let projectsBtn = document.querySelector('.Projects');
projectsBtn.addEventListener('onClick', redirectToProject());

function redirectToProject(){
    console.log("Projects page");
};

let contactMeBtn = document.querySelector('.ContactMe');
contactMeBtn.addEventListener('onClick', redirectToContact());

function redirectToContact(){
    console.log("Contact page");
};