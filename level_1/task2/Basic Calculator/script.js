const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const addButton = document.getElementById("addButton");
const result = document.getElementById("result");
addButton.addEventListener("click", function () {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    const sum = firstNumber + secondNumber;
    result.textContent = "The sum is: " + sum;
});