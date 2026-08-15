"use strict";
// todo : problem no - 12. 
// Problem Statement:
// একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
// Input:
// {
//   name: "Amina",
//   age: 22,
//   email: "amina@email.com",
//   skills: ["HTML", "CSS", "TypeScript"],
//   active: true
// }
// Output:
// Name: Amina
// Age: 22
// Email: amina@email.com
// Skills: HTML, CSS, TypeScript
// Active: true
let user = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};
let { name: userName, age, email, skills, active } = user;
let [html, css, ts] = user.skills;
let Output = `
Name : ${userName}
Age: ${age}
Email: ${email}
Skills: ${html}, ${css}, ${ts}
active:${active}

`;
console.log(Output);
