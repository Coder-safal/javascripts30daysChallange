/* 
let a = 5;
let b = 10;
const c = 45;
const d = 89;


console.log(`Addition of ${a} and ${b} is ${a + b}`);
console.log(`Addition of ${d} and ${c} is ${d - c}`);
console.log(`Multiplication of ${d} and ${c} is ${d * c}`);
console.log(`Division of ${d} by ${c} is ${d / c}`);
console.log(`Remainder of ${d} by ${c} is ${d % c}`);


a += 30;
b -= 99;
console.log(`Value  of a  is ${a}`);
console.log(`Value  of b  is ${b}`);
console.log(`Addition of ${a} and ${b} is ${a + b}`);

a = 9;
b = "9";

console.log("\n\n");
console.log(`${a} and ${b} are ${a < b}`);
console.log(`${a} and ${b} are ${a > b}`);
console.log(`${a} and ${b} are ${a == b}`);
console.log(`${a} and ${b} are ${a === b}`);
console.log(`${a} and ${b} are ${a !== b}`);
console.log(`${a} and ${b} are ${a != b}`);

if (a == b && a === b) {
    // console.log("a and b are equall!");
    console.log("a and b are equall! == && ===");
}

if (a == b || a === b) {

    console.log("a and b are equall! == || ===");

}

let flag = 9;

flag ? console.log("Flage is true!!") : console.log("Flag is false !");

flag < 1 ? console.log("Flag is negative number!") : console.log("Flag is positive numgers!!"); */

// scripts start

const add = (a, b) => a + b;

const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
const remainder = (a, b) => a % b;

console.log("Addition: ", add(45, 6));
console.log("Subtraction: ", sub(45, 6));
console.log("Multiplication: ", multiply(45, 6));
console.log("divide: ", divide(45, 6));
console.log("remainder: ", remainder(45, 6));

// Comprassion operator

const lessThan = (a, b) => a < b;

const greterThan = (a, b) => a > b;

const equallTo = (a, b) => a == b;

const equallTowithDataTypes = (a, b) => a === b;

const notEquallto = (a, b) => a != b;

const notEqualltowithDataTypes = (a, b) => a !== b;


const ternaryOperator = (a, b) => (a > b) ? true : false;


console.log("\n\n\nOperator: ")
console.log(lessThan(43, 2));
console.log(greterThan(43, 2));
console.log(equallTowithDataTypes(43, 2));
console.log(equallTo(43, 2));
console.log(notEquallto(43, 2));
console.log(notEqualltowithDataTypes(43, 2));
console.log(ternaryOperator(43, 2));
