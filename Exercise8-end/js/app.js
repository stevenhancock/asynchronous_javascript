var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

    Which pattern do you prefer for this application? promises or async await?
    */

    (async function() {
        try {
            let p1 = fetch(url + 'posts/'),
                p2 = fetch(url + 'comments/'),
                p3 = fetch(url + 'todos/');

            let results = await Promise.all([p1, p2, p3]);

            nsp.posts = await results[0].json();
            nsp.comments = await results[1].json();
            nsp.todos = await results[2].json();
            console.log("data received.");
        } catch(e) {
            console.error(`Problem retrieving data: ${e}`)
        }
    })();

    /*fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));

    fetch(url + 'comments/')
    .then(response2 => response2.json())
    .then(comments => nsp.comments = comments)
    .catch(err => console.log(`Problem retrieving comments: ${err}`));

    fetch(url + 'todos/')
    .then(response3 => response3.json())
    .then(todos => nsp.todos = todos)
    .catch(err => console.log(`Problem retrieving todos: ${err}`));*/

    console.log("Remaining Code.")

    //public
    return nsp;
})(MAINAPP || {});

