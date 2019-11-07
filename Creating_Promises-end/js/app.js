"use strict";


let a = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Done");
    }, 4000)
});

a.then(function(val) {
    console.log(val);
}, function(val) {
    console.log("rejected: " + val);
});


console.log("see this is asynch code");
