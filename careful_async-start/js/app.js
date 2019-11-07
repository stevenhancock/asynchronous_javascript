"use strict";

async function num1() {
    console.log(1);
    return 1;
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

main();

console.log("Last Line");
