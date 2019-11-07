//Example 1
/*let logCall = function() {
    console.log("locCall was called back.");
};*/
//Example 2
/*setTimeout(function() {
    console.log("The function was called back.");
}, 3000);*/
//Example 3
/*let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("The button was clicked.");
});*/
//Example 4
let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(students, function(obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}

determineTotal();

