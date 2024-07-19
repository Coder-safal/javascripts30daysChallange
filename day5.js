

// odd or even numbers
function oddOreven(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even number!`);
    }
    else {
        console.log(`${num} is odd number!`);

    }
}
oddOreven(13);


function squareRoot(num) {

    let result = 0, temp = num;

    for (let i = 1; i <= num; i++) {

        if (i * i <= num) {
            result = i;
        }
        else {
            break;
        }
    }


    return result;

}

console.log(squareRoot(16));


function max(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}


console.log(max(112, 23));

function concatSting(str1, str2) {

    return str1 + " " + str2;
}

console.log(concatSting("Hello", "world"));

// Arrow function to find sum

const sum = (num1, num2) => num1 + num2;

console.log(sum(123, 333));

const checkAlphabets = (str1, char) => {

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == char) {
            return true;
        }
    }
    return false;
}

console.log(checkAlphabets("apple", 'k'));


const product = (p1, p2 = "Apple") => {

    return p1 + " " + p2;
}

console.log(product("orange"));

const greating = (name, age = 34) => "Hi i am " + name + " i am " + age + " years old!";


console.log(greating("Suman"));
