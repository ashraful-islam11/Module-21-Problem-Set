// todo:    problem no - 11.
// Problem Statement:
// একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
// Input:
// "Hello"
// Output:
// Hello

let sayHallo : unknown = 'Hello';

if( typeof sayHallo === 'string'){
    console.log(sayHallo);
}
