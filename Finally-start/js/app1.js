"use strict";


const asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 2000);
    });
};

const asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("asyncFunction2 failed.");
        }, 2000);
    });
};
