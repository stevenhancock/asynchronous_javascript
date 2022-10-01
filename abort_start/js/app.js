
const fetchData = function(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(`Error: ${err.message}`));
}


fetchData('https://jsonplaceholder.typicode.com/todos/')