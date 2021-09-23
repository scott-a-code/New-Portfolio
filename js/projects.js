window.onblur = function () {
    document.querySelector("title").textContent = "Where'd you go?";
};

window.onfocus = function () {
document.querySelector("title").textContent = "Projects";
};

const techStackDisplay = document.querySelector("#tech-stack-display")

function displayIconName() {
    const icons = document.querySelectorAll(".tech-stack-icon");
    const iconArray = Array.from(icons);
    iconArray.forEach((icon) => {
        icon.addEventListener("mouseenter", (e) => {
            const txtDisplay = e.target.alt;
            techStackDisplay.textContent = txtDisplay;
        });
    });
}

displayIconName();