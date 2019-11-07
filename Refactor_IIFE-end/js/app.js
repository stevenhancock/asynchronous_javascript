"use strict";

(async function() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    let obj = await data.json();
    console.log(obj);
})();

/*fetch('https://jsonplaceholder.typicode.com/todos')
.then(data => data.json())
.then(obj => console.log(obj));*/

console.log('Other code');