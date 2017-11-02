/*
* # Function
*/

/*
* ## Named function expression
*/
function calculateWith(n) {
  return 1 + n;
}
//console.log( calculateWith(1) );


/*
* ## Function expression
*/
let calculate = function(x, y) {
  return x + y;
}
//console.log( calculate(1, 1) );

/*
* ## Function constructor
*/
let adder = new Function('a', 'b', 'return a + b');
console.log( adder(1, 1) );

/*
* ## Methods
*/

let person = {
  age: 19,
  name: 'Luke Skywalker',
  destroyDeathStar: function(){
    console.log('BOOOOOM!!!');
  },
  hasTheForce: function(){
    console.log('The force is strong in my family');
  }
};

/*
* ### Call
*/
for (key in person) {
  if (typeof person[key] === 'function') {
    person[key].call();
  };
}

/*
* ### Apply
*/
