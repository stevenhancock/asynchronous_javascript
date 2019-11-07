//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.
var user3Posts;
const retrievePosts = async function(userID) {
    let url = 'https://jsonplaceholder.typicode.com/posts',
        posts = [];

    posts = await fetch(url).then(resp => resp.json());

    return posts.filter(obj => obj.userId === userID);
};

retrievePosts(3).then(val => user3Posts = val);

console.log("Remaining Code.");