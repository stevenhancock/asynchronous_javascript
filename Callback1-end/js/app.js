//Example 1
/*let logCall = function() {
    console.log("locCall was called back.");
};*/
//Example 2
/*setTimeout(function() {
    console.log("The function was called back.");
}, 3000);*/
//Example 3
let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("The button was clicked.");
});
