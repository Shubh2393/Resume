document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skills .bar span");
    const languageBars = document.querySelectorAll(".language .bar span");

    skillBars.forEach(Bar => {
        Bar.style.transition = "width 1s";
    });
    languageBars.forEach(Bar => {
        Bar.style.transition = "width 1s";
    });
});