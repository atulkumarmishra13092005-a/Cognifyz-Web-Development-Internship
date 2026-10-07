const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();
if (currentHour < 12) {
    greeting.textContent = "Good Morning! Have a great day ahead!";
} else if (currentHour < 18) {
    greeting.textContent = "Good Afternoon! Hope your day is going well.";
} else {
    greeting.textContent = "Good Evening! Have a relaxing evening and a good night!";
}