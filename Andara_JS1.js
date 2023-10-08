// ✨ if,else,nested if

// ❗️ CONTOH IF ❗️
console.log("❗️ CONTOH IF ❗️");

var Y = 25;

if (Y > 10) {
    console.log("Y is bigger than 10");
}

// ❗️ CONTOH IF-ELSE ❗️
console.log("\n❗️ CONTOH IF-ELSE ❗️");

var age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not yet an adult.");
}

// ❗️ CONTOH NESTED-IF ❗️
console.log("\n❗️ CONTOH NESTED-IF ❗️");

var age = 25;
var isMale = true;

if (age >= 18) {
    if (isMale) {
        console.log("You are a man.");
    } else {
        console.log("You are a woman.");
    }
} else {
    if (isMale) {
        console.log("You are a boy.");
    } else {
        console.log("You are a girl.");
    }
}

// ✨ switch case

// ❗️ CONTOH SWITCH CASE ❗️
console.log("\n❗️ CONTOH SWITCH CASE ❗️");

var dayOfWeek = "Saturday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the beginning of the workweek.");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("It's a workday.");
        break;
    case "Friday":
        console.log("Thanks God! It's Friday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Yeay, finally it's weekend.");
        break;
    default:
        console.log("Invalid day of the week.");
}

// ✨ for statement 

// ❗️ CONTOH FOR STATEMENT ❗️
console.log("\n❗️ CONTOH FOR STATEMENT ❗️");

function createTablewithNumber(rows, columns) {
    for (var i = 1; i <= rows; i++) {
        var row = "";
        for (var j = 1; j <= columns; j++) {
            var product = i * j;
            row += `${i} * ${j} = ${product}\t`;
        }
        console.log(row);
    }
}

createTablewithNumber(5, 4);

// ✨ while, do while 

// ❗️ CONTOH WHILE ❗️
console.log("\n❗️ CONTOH WHILE ❗️");

var o = 3;

while (o <= 5) {
    console.log(o);
    o++;
}

// ❗️ CONTOH DO-WHILE ❗️
console.log("\n❗️ CONTOH DO-WHILE ❗️");

var i = 1;

do {
    console.log("This is t-shirt number " + i);
    i++;
} while (i <= 5);

// ✨ function

// ❗️ CONTOH FUNCTION ❗️
console.log("\n❗️ CONTOH FUNCTION ❗️");

function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote!";
    } else if (age >= 1 && age < 18) {
        return "You are not eligible to vote yet.";
    } else {
        return "You are not register yet. So please register first!";
    }
}

var result1 = checkVotingEligibility(25);
var result2 = checkVotingEligibility(15);
var result3 = checkVotingEligibility(0);

console.log("Result 1: " + result1); // Output: "You are eligible to vote!"
console.log("Result 2: " + result2); // Output: "You are not eligible to vote yet."
console.log("Result 3: " + result3); // Output: "You are not register yet. So please register first!"