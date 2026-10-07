const button = document.getElementById("colorButton");
const colors = ["red", "blue", "green", "orange", "purple"];
button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    button.style.backgroundColor = colors[randomIndex];
});