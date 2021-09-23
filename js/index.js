let aboutMeBtn = document.getElementById('aboutMe');
aboutMeBtn.addEventListener('click', redirectToAboutMe);

function redirectToAboutMe(){
    window.location.replace('../html/aboutMe.html');
};

let projectsBtn = document.querySelector('#project-btn');
projectsBtn.addEventListener('click', redirectToProject);

function redirectToProject(){
    window.location.replace('../html/projects.html');
};

let contactMeBtn = document.querySelector('#contactMe');
contactMeBtn.addEventListener('click', redirectToContact);

function redirectToContact(){
    window.location.replace('../html/contact.html');
};

let phrases = [
    "- Anime fan -",
    "- Tea Drinker -",
    "- Environmentalist -",
    "- Gamer -",
    "- Full Stack Developer -",
]

function changePhraseText(phrases) {
    htmlLocation = document.querySelector("h2");
    timeout = 1500;

    phrases.forEach((phrase) => {
        setTimeout(() => {
            htmlLocation.textContent = phrase;
        }, timeout);
        timeout +=1500;
        });
}

changePhraseText(phrases);

window.onblur = function () {
    document.querySelector("title").textContent = "Where'd you go?";
};

window.onfocus = function () {
document.querySelector("title").textContent = "Portfolio.";
};