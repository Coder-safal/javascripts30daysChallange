

/* let a = -23;

if (a > 0) {
    console.log(`${a} is positive nubers!`);

} else if (a == 0) {
    console.log(`${a} is zero!`);
    console.log(`${a} is positive nubers!`);

}
else {
    console.log(`${a} is negative  nubers!`);

} */

let age = 89;
if (age < 0) {

    console.log(`please enter valid age!`);
}
else if (age >= 18) {

    console.log(`Person is eligible for voting!`)
} else {
    console.log(`Person isn't  eligible for voting!`)
}

// Largest nubers find


let a = 100, b = 9, c = 39;

if (a > b) {
    if (b > c || a > c) {

        console.log(`${a} is larger number!!`);
    }
    else if (c > a) {
        console.log(`${c} is larger number!!`);

    }

}
else {
    if (b > c) {
        console.log(`${b} is larger numer`);

    }
    else {
        console.log(`${c} is larger numer`);
    }
}


const weak = 11;

switch (weak) {
    case 1: console.log("Sunday!")

        break;
    case 2: console.log("Monday!")

        break;
    case 3: console.log("Tuesday!")

        break;
    case 5: console.log("Thursday!")

        break;
    case 6: console.log("Friday!")

        break;
    case 7: console.log("Saturday!")

        break;
    case 4: console.log("Wednesday!")

        break;

    default:
        console.log("Please Enter valid numbers!")
        break;
}


// Ternary

let val = 89;

val % 2 == 0 ? console.log("Even nubers") : console.log("Odd nubmers!!");

let leap = 900;

