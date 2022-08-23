//function one

const squareNumber = (num) => num * num;

// console.log(squareNumber());

// Function two

const sqaure = (val, a) => val.map((num) => a(num));

const array = [1, 2, 3, 4, 5, 6];

console.log(sqaure(array, squareNumber)); // return [1,4,9,16,25]
