"use strict";
let city = "Delhi";
let state = "MH";
//ANY EXAMPLE : disables type checking most unsafe
let v = true;
v = "ajay";
Math.round(v);
//UNKNOW EXAMPLE : much safe
let j = true;
j = "5";
Math.round(j); // needs type casting to fix error
//NEVER
//let a: never =true;   // throws error 
//UNDEFINED
let y;
//TYPE CONVERSION BETWEEN UNDEFINED AND NULL
let demo = null;
if (demo === undefined) {
    console.log("TYPE CONVERSION DONE BEFORE COMPARISION");
}
else {
    console.log("TYPE CONVERSION NOT DONE BEFORE COMPARISION");
}
let demo2 = undefined;
if (demo2 === null) {
    console.log("TYPE CONVERSION DONE BEFORE COMPARISION");
}
else {
    console.log("TYPE CONVERSION NOT DONE BEFORE COMPARISION");
}
// TO COMPILE THIS  TS FILE
// 1. cmd=> tsc demo.ts OR tsc.cmd demo.ts
// 2. cmd=>  node demo.js 
