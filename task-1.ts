// todo: Problem Statement:
// একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
// Input:
// printUser("Amina", 22)
// Output:
// Amina is 22 years old.


function printUser ( userName : string, age: number):string {

    return `${userName} is ${age} years old`;
}

 let userInfo :string = printUser( "Amina", 22);
console.log(userInfo);