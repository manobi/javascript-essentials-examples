/*
* # Array
*/

/*
* ## Expressions and assingments
*/

// Literal expression
let list = [3, 2, 1];

// Literal expression
let collection = [
  {
    age: 19,
    name: 'Luke Skywalker'
  },
  {
    age: 19,
    name: 'Leia Organa'
  },
  {
    age: 19,
    name: 'Ezra Bridger'
  },
];

// Instance constructor
let arrayInstance = new Array(1,2,3);
//console.log(arrayInstance instanceof Array);
//console.log(typeof arrayInstance);

/*
* ## Methods
*/

/*
* ### For Each
*/
collection.forEach( item => {
  // console.log(item);
});

/*
* ### Map
*/
collection.forEach( item => {
  // console.log(item);
});

/*
* ### Push
*/
// console.log(collection);
collection.push({
  age: 23,
  name: 'Jyn Erso'
});
//console.log(collection);

/*
* Sort
*/
//console.log(list.sort());
