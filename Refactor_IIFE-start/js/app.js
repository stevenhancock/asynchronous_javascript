"use strict";

fetch('https://jsonplaceholder.typicode.com/todos')
.then(data => data.json())
.then(obj => console.log(obj));

console.log('Other code');