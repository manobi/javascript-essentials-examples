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
//console.log( adder(1, 1) );

/*
* ## Properties
*/

/*
* name
*/
//console.log(calculate.name);

/*
* arguments
*/
//console.log('calculate arguments', calculate.length);

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
    //person[key].call();
  };
}

/*
* ### Apply
*/
for (key in person) {
  if (typeof person[key] === 'function') {
    //person[key].apply();
  };
}

/*
* ### IIFE  Imediately Invoked Function Expression
*/
(function(){
  //console.log('Executou');
})();

/*
* ### Callback
*/
function pGify(text, callback) {
  let str = text.split(' ');
  let result = str.join(' p');
  callback(result);
}

function show(msg){
  //https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
  console.log('\x1b[33m%s\x1b[0m: ', 'RESULT');  //yellow
  console.log('\x1b[36m%s\x1b[0m', '"' + msg + '"');  //cyan
  console.log('\x1b[31m%s\x1b[0m', 'A menssagem possui ' + msg.length + ' caracteres');  //cyan
}
//show('Menssagem de teste');

//pGify('It is a period of civil war...', show);

/*
* ### Closure
*/
function pGify2 (text){
  let str = text.split(' ');
  let pgfied = str.join(' p');

  function show(){
    console.log('\x1b[33m%s\x1b[0m: ', 'RESULT');  //yellow
    console.log('\x1b[36m%s\x1b[0m', '"' + pgfied + '"');  //cyan
    console.log('\x1b[31m%s\x1b[0m', 'A menssagem possui ' + pgfied.length + ' caracteres');  //cyan
  }

  return show;
}

//let pgfiedText = pGify2('It is a period of civil war...');
//pgfiedText();
