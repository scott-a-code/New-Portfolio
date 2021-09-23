window.onblur = function () {
    document.querySelector("title").textContent = "Where'd you go?";
};

window.onfocus = function () {
document.querySelector("title").textContent = "Contact";
};