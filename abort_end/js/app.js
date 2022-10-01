
let controller;

const fetchData = function(url) {
    controller = new AbortController();
    const signal = controller.signal;
    fetch(url, {signal})
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(`Error: ${err.message}`));
}


fetchData('https://jsonplaceholder.typicode.com/todos/')
controller.abort();