// todo:        problem no - 10.
// Problem Statement:
// একটি variable undefined হলে default value print করো।
// Input:
// username = undefined
// Output:
// Guest

let username =undefined;

if( typeof username === 'undefined'){
    username = 'Guest';
    console.log(username);
}

