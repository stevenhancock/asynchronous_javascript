"use strict";

async function num1() {
    setTimeout(() => console.log(1), 0);
    return 1
};

async function num2() {
    console.log(2);
    return 2;
};

async function main() {
    console.log("Start Main");
    num1();
    num2();
    console.log("End Main");
    return "main";
};

main()
.then(val => console.log(val));

console.log("Last Line");
