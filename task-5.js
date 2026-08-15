"use strict";
// todo:        problem no -5. 
// Problem Statement:
// একটি user object বানাও যেখানে name required, কিন্তু email optional।
// Input:
// { name: "Amina" }
// Output:
// Name: Amina, Email: Not provided
let userInfo = {
    name: 'Amina',
    // email : 'ashraful171790@gmail.com'
};
if (!userInfo.email) {
    console.log(`Name: ${userInfo.name}, Email: Not provided`);
}
