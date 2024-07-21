let str = `Hello this is templets literals`;
console.log(str);

let multiLiterals = ` hello this is templets literals
          Aadesh is god boy. 
         which is negative statements!`;

console.log(multiLiterals);

const number = [10, 20, 30, 45, 67, 90];

const [first, second] = number;

console.log(first);
console.log(second);

const book = {
    author: "Hitesh choudhary",
    title: "This is chai code coding ",
    age: 42,
}

let { author, title } = book;

console.log(author, " ", title);



let arry2 = [...number];
console.log(arry2);

function sum(a, b, c) {

    console.log("Sum is: ", a + b + c);
}

sum(...arry2);

// rest operators

let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log("arr12 is : ", arr12);

let [suruko, secondko, ...baki] = arr12;

console.log("Surko : ", suruko);
console.log("secondko : ", secondko);
console.log("baki : ", baki);


function add(...number) {

    let accumulator = 0;
    return number.reduce((accumulator, current) => current + accumulator, accumulator)
}
console.log("addition is : ", add(1, 2, 3));


function WithArguments(a, b = 14) {

    console.log("value of a and b is: ", a, "  ", b);
}

WithArguments(30);
WithArguments(30, 45);

// Enhanced objects literals

let age = 21;
let username = "safal";

const person = {
    age,
    username,
}

console.log(person);


let props = 'age';

let user = {
    name: "suman",
    // age:21,
    [props]: 23,
}

console.log("usrs objects is : ", user);