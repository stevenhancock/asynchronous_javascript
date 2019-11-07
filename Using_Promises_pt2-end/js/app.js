"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;


/*asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});*/

fetch(wordnikWords + "randomWord" + apiKey)
.then(function(response) {
    wordObj = response;
    //console.log(wordObj);
    return response.json();
})
.then(function(data) {
    console.log(data.word);
    return fetch(wordnikWord + data.word + "/definitions" + apiKey);
})
.then(function(def) {
    //console.log(def);
    return def.json();
})
.then(function(def) {
    console.log(def);
})
.catch(function(err) {
    console.log(err);
});

console.log("See this is asynchronous!");