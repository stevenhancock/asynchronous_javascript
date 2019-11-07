"use strict";


let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

let setTimeoutP = function(time) {
    return new Promise(function(res, rej) {
        if (isNaN(time)) {
            rej("A number is required.");
        }
        setTimeout(res, time);
    });
};

setTimeoutP("word")
    .then(function() {
        console.log("Done");
    })
    .catch(function(err) {
        console.log(err);
    });




