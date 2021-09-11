"use strict";
/*
// 32. Activating Strict Mode //

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 🚗");

const interface = "Audio";
const private = 777;
*/

/*
// 33. Functions (can be reuse over and over again)  important //
function logger() {
  console.log("My name is Jay");
}
// calling / running / invoking the function //
logger();
logger();

// example 1 //
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

// example 2 //

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// 34. Function Declarations vs. Expressions //
//example 1 (declarations) //
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// example 2  (expressions)//
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// 35. Arrow Functions (shorter and faster to write) //
//this is the simplistic form//
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//example one //
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(2000, "BOB"));
*/

/*
// 36. Functions Calling Other Functions (very common) //
// example 1 //

function cutFruitPieces(fruit) {
  return fruit * 10;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
// 38. coding Challenge # 1. //
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1 //
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("NO team Wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// 39. Intro to Arrays //
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// example 1 //
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// example 2 //
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// example 3 //

const Jay = ["Jonas", "Sam", 2037 - 1991, "teacher", friends];
console.log(Jay);

// example 3 //
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
// 40.Basic Array Operations (Methods)//
// adding elements to array //
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// remove element from array //
friends.pop();
console.log(friends);

console.log(friends.indexOf("Steven")); //show index

console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*
// 41. Coding Challenge #2 //
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
// 42. Intro to Objects //
// the curly bracelets makes the objects //
const Jay = {
  firstName: "Jay",
  lastName: "Gimbal",
  age: 2021 - 1986,
  job: "Software Engineer",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/*
// 43. Dot vs. Bracket Notation //
const jay = {
  firstName: "Jay",
  lastName: "Gimbal",
  age: 2021 - 1986,
  job: "Software Engineer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jay);
console.log(jay.lastName);
console.log(jay["lastName"]);

const nameKey = "Name";
console.log(jay["first" + nameKey]);
console.log(jay["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jay? Choose between firstName, lastName, age, job, and friends "
);
console.log(jay[interestedIn]);

if (jay[interestedIn]) {
  console.log(jay[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jay.location = "atlanta";
jay["twitter"] = "@jay";
console.log(jay);
// side challenge //
// "Write Jay has 3 friends, and his best friend is called Peter."//
console.log(
  `${jay.firstName} has ${jay.friends.length} friends, and his best friend is called ${jay.friends[1]}`
);
*/
/*
// 44. OBJECT METHODS //
const jay = {
  firstName: "Jay",
  lastName: "Gimbal",
  birthYear: 1986,
  job: "Software Engineer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `
      ${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has  ${this.hasDriversLicense ? "a" : "no"} diver's license.
    `;
  },
};

console.log(jay.calcAge());
console.log(jay.age);
// Small Challenge //
// "Jay is a 51-year old Software Engineer" //
console.log(
  `${jay.firstName} is a ${jay.age} year old ${jay.job} professional!`
);

console.log(jay.getSummary());
*/

/*
// 45. CODING CHALLENGE #3 //
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
*/

/*
// 46. Iteration: The for Loop (which has an automatic counter)//
// console.log("lifting weights repetition 1 🏋️‍♂️");

// // for loop keeps running while condition is TRUE //
for (let rep = 1; rep <= 10; rep = rep + 1) {
  console.log(`lifting weights repetition 1 ${rep} 🏋️‍♂️`);
}
*/

/*
// 47 . Looping Arrays, Breaking and Continuing //

const jonas = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // filling the array //
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

// example 2 (MOST IMPORTANT)//
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue statement //
console.log("----ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

// break terminate the whole loop //
console.log("----BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/

/*
// 48. LOOPING BACKWARDS AND LOOPS IN LOOPS //
const jonas = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loops in loops (IMPORTANT)//
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
*/

/*
// 49. THE WHILE LOOP (more versatile)//
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}
// example 2 //
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end ...");
}
*/

/*
// 50. FINAL CODING CHALLENGE //
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
*/
