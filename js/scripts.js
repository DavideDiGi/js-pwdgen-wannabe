const firstName = prompt("What is your name?")
const surname = prompt("Surname?");
const color = prompt("What's your favourite color?");

let number;

number = 21;

let generatedPassword = firstName + surname + color + number;

// console.log( "User's answers: ", generatedPassword);

document.writeln(generatedPassword);