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
* ## Properties
*/

/*
* name
*/
console.log(calculate.name);

/*
* arguments
*/
console.log('calculate arguments', calculate.length);

/*
* ## Methods
*/

let person = {
  age: 19,
  name: 'Luke Skywalker',
  destroyDeathStar: function(){
    console.log('BOOOOOM!!!');
  },
  isJedi: function(){
    console.log('Like his father before him');
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
for (key in person) {
  if (typeof person[key] === 'function') {
    person[key].apply();
  };
}
