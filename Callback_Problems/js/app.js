"use strict";
//For this sample code click on the title 'Problems with JavaScript Callbacks'
let item1 = document.getElementById("b1");

if (item1) {
    item1.addEventListener("click", function(e) {
        let a = 0,
            b = 10;

        setTimeout(function() {
            a++;
            setTimeout(function() {
                a++;
                console.log("1 Attempt: " + a);
            }, 0);
        }, 0);

        setTimeout(function() {
            console.log("2 Attempt: " + a);
        }, 0);
        a = b;
    });
}
