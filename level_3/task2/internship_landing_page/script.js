
const learnButton = document.getElementById("learnButton");
const extraInfo = document.getElementById("extraInfo");
learnButton.addEventListener("click", function () {
    if (extraInfo.hidden) {
        extraInfo.hidden = false;
        learnButton.textContent = "Show Less";
    } else {
        extraInfo.hidden = true;
        learnButton.textContent = "Learn More";
    }
});
