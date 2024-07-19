
let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(`First: ${arr[0]} and Last: ${arr[arr.length - 1]}`);

let arrPush = arr.push(45);
let arPush = arr.push(95);

console.log(arr);
let arrPop = arr.pop();
console.log(arrPop);

/* shift methods remve array elements from first */

let arrShift = arr.shift();

console.log(arrShift);
console.log(arr);

let arrUnshift = arr.unshift(34);
console.log(arr);
console.log(arrUnshift);

/* Array methods */
let initialValue = 0;
let arrReduce = arr.reduce((accumulatorValue, CurrentValue, index) => CurrentValue + accumulatorValue, initialValue);

console.log("Array Reduces: ");
console.log(arrReduce);

let arrMap = arr.map((value, index) => {
    return value + 6;
});

console.log(arrMap);


let arrFilter = arr.filter((value, index) => {
    return value < 30;
});

console.log(arrFilter);

/* Array Itetration */

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);

}

console.log("Iterator: ");

// of value dinxa 
for (const itr of arr) {
    console.log(itr);
}

// in le index dinxa
for (const itr in arr) {
    console.log("In: ", itr);
}


arr.forEach((value, index) => {
    console.log(value, " index: ", index);
});

let TwoDimArr =
    [
        [1, 2, 3, 4],
        [4, 5, 67, 9],
        [4, 52, 23, 12]
    ];

console.log(TwoDimArr);
console.log("TwoDimArr : ");

for (const itr of TwoDimArr) {
    // console.log(itr);

    for (const itr1 of itr) {
        // console.log(TwoDimArr[itr1]);
        console.log(itr1)
    }
    // console.log(typeof (itr));
    /*   for (const itr1 in itr) {
          console.log(itr);
      } */
}