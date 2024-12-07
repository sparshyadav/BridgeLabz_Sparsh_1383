let userName = prompt("What is your Name?");

if (userName) {
    alert(`Hello ${userName}! Welcome to our program`);
}
else {
    alert("Hello Guest! Welcome to our program");
}

let proceed = confirm("Wound you like to Continue?");
if (proceed) {
    alert("Great! Let's move forward");
}
else {
    alert("Goodbye! Have a Nice Day");
}

const user = document.getElementsByClassName("user")[0];
user.innerHTML = `Hello ${userName}!`;
