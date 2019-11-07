
/*
Using the random number code below, set up a generator function that will act as a producer of a random value. It should return a random number whenever next is invoked. Set the function up so it can be used to create a random number between 1 and 100 or 1 and 10 or between 1 and any number; basically the end number should be whatever is passed into the function. 
*/

const randomNum = function *(end) {
    while (true) {
        let rand = Math.floor(Math.random() * end) + 1;
        yield rand;
    };
};

 let rand100 = randomNum(100);

 let rand10 = randomNum(10);
        