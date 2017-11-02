let str   = "Darth Vader";
let num   = 8;
let flo   = 10.5;
let list  = [2,1,8,7];
let hash  = {key: 10};
let value = undefined;
let nil   = null;


/*
* Operators
*/
// Equal
console.log('10' == 10);
// Deep equal
console.log('10' === 10);
// OR
var newSong;
console.log(newSong || 'Los Hermanos');
// AND
console.log(1 > 0 && 0 < 1);


/*
* Global funcions
*/

/*
* JSON
*/
var json = '{"deck": 1, "trucks": 2}';

json = JSON.parse(json);
console.log(json);

json = JSON.stringify()
console.log(json);

/*
* Date
*/
let date = Date();
console.log(date);


/*
* Math
*/
console.log( Math.floor(1.8) );
console.log( Math.round(1.89999) );
console.log( Math.random() );

/*
* ParseInt & ParseFloat
*/
console.log(typeof '2017', typeof parseInt('2017'));
console.log(parseFloat('1.5'));
