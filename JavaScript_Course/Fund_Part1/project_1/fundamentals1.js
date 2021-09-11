/*
let county = "USA";
let continent = "North America";
let population = "300,000,000";

console.log(county, continent, population);

// Variable name conventions //
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 25);
console.log(typeof "jonas");

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

console.log(typeof null);
*/

// Let, const and var //

// let age = 30;
// age = 31;

// const birthYear = 1991;

// var job = "programmer";
// job = "teacher";

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3= 2*2*2 //

// const firstName = "jonas";
// const lastName = "forms";
// console.log(firstName + " " + lastName);

// // assignment operators
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25 //
// console.log(x);

// // comparison operators; > greater than, < less than , >= greater equal, <= less than equal //
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// Precedence of different operator //
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(now - 1991 > now - 2018);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

/* Coding Challenge 1 //

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/* 17. strings and Template Literals //

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

// template string (use back tics), also you can use back tics to replace regular quotes if you want...///

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`String
multiple
lines`); */

/* 18. Taking Decisions: if / else Statement //

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license school 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`it is the ${century} century`);*/

/* Coding Challenge #2 //
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
console.log(BMIMark, BMIJohn);
// this this variable into a if/else statement //
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's Bmi (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log("John's BMI is higher than Mark's ! ");
}
*/

/* 20. Type Conversion and Coercion (is very important) //
// type conversion //
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));
// type coercion //
console.log("I am " + 23 + " years old ");

let n = "1" + 1;
n = n - 1;
console.log(n); */

/* 21. Truthy and Falsy Values //
// 5 falsy values are: 0, '', undefined, null, NaN //

console.log(Boolean(0)); // 0 is a falsy value //
console.log(Boolean(undefined));
console.log(Boolean("Jonas")); // truhly value //
console.log(Boolean(""));

// example 1 //
const money = 100;
if (money) {
  console.log("Don't spend it all! ");
} else {
  console.log("you should get a job! ");
}

// example 2 //
let height = 0;
if (height) {
  console.log("yay height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/* 22. Equality Operators ==== vs ==== //
const age = 18;
if (age === 18) console.log("You just became an adult (strict)"); // always us strict equal operator.. //
if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("what is your favorite number? "));
console.log(favorite);
console.log(typeof favorite);
// example of equality operator //
if (favorite === 55) {
  console.log("Your number is amazing! ");
} else if (favorite === 7) {
  console.log("Is also a cool number");
} else {
  console.log("Number is not 55 or 7");
}
// different operator //
if (favorite !== 55) {
  console.log("Why not 55?");
}
*/

/*
// 24. Logical Operators //
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive! ");
// } else {
//   console.log("Someone else should Drive");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log("Sarah is able to drive! ");
} else {
  console.log("Someone else should Drive");
}
*/

/*
// 25. Coding Challenge #3 //

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins Win the Trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas Win the Trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Tie Game");
// }

// Bonus 1 //
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins Win the Trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas Win the Trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Tie Game");
}
*/

/*
// 26. The Switch Statement //
const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "Sunday":
    console.log("Enjoy your weekend!");
    break;
  default:
    console.log("Not a valid Day! ");
}
*/

// 27. Statement and Expressions //

/*
// 28. The Conditional (Ternary) Operator //
const age = 25;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

// example of (Ternary Statement) for quick decisions //
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

/*
// 29. Coding Challenge #4 // (Ternary Statement)
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
