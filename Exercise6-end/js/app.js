"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

let addTodo = async function(todo) {
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        let results = await resp.json();

        console.log(results);
    } catch(e) {
        console.error(`Unable to create todo ${e}`);
    }
};

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

addTodo(todo);

/*fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));*/

console.log('Other code');