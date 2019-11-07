"use strict";

var userObj = {
    firstName: 'Steven',
    lastName: 'Hancock',
    async printFullName() {
        let punct = await asyncFunction(1000);
        console.log(`${this.firstName} ${this.lastName}${punct}`);
    }
};

userObj.printFullName();

//---------------------------------

class Greetings {
    constructor(greet) {
        this.greet = greet;
    }
    async greeting(name) {
        let punct = await asyncFunction(2000);
        console.log(`${this.greet} ${name}${punct}`);
    }
};

var mornGreet = new Greetings("Good Morning");

mornGreet.greeting('Steven');
