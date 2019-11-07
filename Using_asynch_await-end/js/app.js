"use strict";

const swapiFilms = async function() {
    let url = "https://swapi.co/api/films/",
        filmsData = {},
        films = [];

    filmsData = await fetch(url).then(data => data.json());

    //processing data
    films = filmsData.results.map(obj => obj.title);
    console.log(films);
};

swapiFilms();

console.log("Remaining Code");