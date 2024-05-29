"use strict";
/*
Primitive Types:
    - number: used for all numbers, including integers, decimals, and floats.
    - string: used for string literals, simple text, or storing any text values.
    - boolean: used for true or false values.
    - bigint: used for large integer values, introduced in ECMAScript 2020.
    - symbol: used for unique identifiers.
    - undefined: used for variables that have not been assigned a value.
    - null: used for variables that have an intentional absence of any object value.

    Note: TypeScript is a superset of JavaScript, so all JavaScript primitive types are also supported in TypeScript.
    In addition, TypeScript provides some special types, such as unknown, which is a type-safe counterpart of any, and never, which means a function never returns a value.
    (cannot assign unknown to any other type, as it is a type-safe type)
*/
// TUPLES
// ==============================
// hsla - hue, saturation, luminance, alpha
let hsla;
hsla = [200, "100%", "50%", 1];
// coordinates
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples
let user;
user = ["John", 30];
let user1 = {
    name: "John",
    age: 30,
};
const newPost = {
    title: "New Post",
    body: "This is a new post",
    id: 1,
};
// as function argument type
function createPost(post) {
    console.log(post);
}
createPost(newPost);
let cars = [
    { make: "Ford", model: "Fusion", year: 2019 },
    { make: "Chevy", model: "Malibu", year: 2018 },
];
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const color1 = getRandomColor();
console.log("🚀 ~ color1:", color1);
const color2 = getRandomColor();
console.log("🚀 ~ color2:", color2);
const someUser1 = {
    name: "John",
    age: 30,
};
function formatUser(user) {
    console.log(`🚀 ~ Name: ${user.name}, Age: ${user.age}`);
}
formatUser(someUser1);
// UNION TYPES
// ==============================
let someId;
someId = 1;
someId = "killer bees";
let email;
email = "someEmail@eamil.com";
email = null;
let currentStatus;
currentStatus = "success";
currentStatus = "error";
currentStatus = "pending";
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to both string and number types
    console.log(id.toUpperCase()); // need to check type of id before using
}
function swapIdTypeWithGuard(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed());
    }
}
// TODO - fix this
function logDetails(value) {
    if (value.type == "admin") {
        console.log(value.role);
    }
    if (value.type == "person") {
        console.log(value.age);
    }
}
