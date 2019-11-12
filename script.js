console.log('Hello, DATA!');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(gotJSON);


function gotJSON(json) {
  console.log('Hello, gotJSON()!');
  console.log(json);
  console.log(json.title);
  console.log(`My id is ${json.id}!`);
}
