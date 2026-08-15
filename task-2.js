"use strict";
// todo:    problem no - 2. 
// Problem Statement:
// একটি product-এর নাম, price, এবং availability store করো primitive types use করে।
// Input:
// name = "Laptop"
// price = 45000
// isAvailable = true
// Output:
// Laptop cost 45000 and is available: true


let product = {
    name: 'Laptop',
    price: 45000,
    isAvailable: true,
};
console.log(`${product.name} cost ${product.price} and is available: ${product.isAvailable}`);



let {name, price, isAvailable} = product;
console.log(`${name} cost ${price} and is available: ${isAvailable}`);