//todo:     Problem - 8 .
// Problem Statement:
// দুইটি array merge করো spread operator ব্যবহার করে।
// Input:
// [1, 2, 3]
// [4, 5, 6]
// Output:
// [1, 2, 3, 4, 5, 6]

let number1 : number[] = [ 1, 2, 3];
let number2 : number[] = [4, 5, 6];

let marge: number[] = [...number1, ...number2];
console.log(marge);
