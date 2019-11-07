"use strict";

function *yieldConsole() {
    let val = yield 'Enter a Value:';
    console.log(val);
};

let it = yieldConsole();
let prompt = it.next().value;
console.log(prompt);