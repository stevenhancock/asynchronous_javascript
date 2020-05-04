"use strict";

const swapi = function(num) {
    let url = "https://swapi.dev/api/people/";

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        return fetch(obj.homeworld);
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj));
};

swapi(9);

console.log("Other commands!");