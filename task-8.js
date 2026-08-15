"use strict";
//todo:     Problem - 8 .
// Problem Statement:
// দুইটি array merge করো spread operator ব্যবহার করে।
// Input:
// [1, 2, 3]
// [4, 5, 6]
// Output:
// [1, 2, 3, 4, 5, 6]
let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
let marge = [...number1, ...number2];
console.log(marge);
