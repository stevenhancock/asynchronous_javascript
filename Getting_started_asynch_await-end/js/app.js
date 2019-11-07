"use strict";

const asyncFun = async function() {
    let p1 = await asyncFunction();
    console.log(p1);
    console.log(`${p1}-more info`);
};

asyncFun();
