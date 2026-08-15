// todo:     Problem no  -  6 . 

// Problem Statement:
// একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
// Input:
// isEven(8)
// Output:
// true


function isEven ( inputNumber : number) : boolean {
    if( inputNumber % 2 === 0){
        return true;
    }
    return false
}

let checkEven = isEven(8);
console.log(checkEven);
