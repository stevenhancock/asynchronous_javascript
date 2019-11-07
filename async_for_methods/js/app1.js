"use strict";


const asyncFunction = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("!");
        }, time);
    });
};
