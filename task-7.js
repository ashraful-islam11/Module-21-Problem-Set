"use strict";
//todo :        problem - 7.
// Problem Statement:
// একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
// Input:
// sumAll(1, 2, 3, 4)
// Output:
// 10
function sumAll(...restNumber) {
    let sum = restNumber.reduce((initialValue, number) => initialValue + number, 0);
    return sum;
}
console.log(sumAll(1, 2, 3, 4));
