/*
* ## Var
*/
var jocasta = {name: 'Jocasta Nu'};
//console.log(jocasta);

function temple(){
  var padawans = 20;
  guards = 8;
}
temple();
//console.log(padawans);
//console.log(guards);
//console.log(global);

if (true) {
  var mace = 'Windu';
}
//console.log(mace);

// overwrite
var jocasta = 10;
//console.log(jocasta);




/*
* ## Let
*/
let kit = {name: 'Kit Fisto'};
//console.log(kit);

function lair(){
  let padawans = 2;
}
lair();
//console.log(padawans);

if (true) {
  let yarel = 'Proof';
}
//console.log(yarel);

// overwrite
//let kit = 10;



/*
* ### THIS
*/
//console.log(this);

/*
* ### Basic Function Call
*/
function run(first, second){
  console.log(this);
}
//run();

/*
* ### Implicit Binding
*/
let jedi = {
  name: 'Ki-Adi-Mundi',
  run: function(first, second){
    console.log(this);
  }
}
//jedi.run();

/*
* ### Explicit Binding
*/
let skate = {
  deck: 'Element',
  truck: 'Independent',
  bearing: 'Bones'
}
//run.call(skate, 1, 2);
//run.apply(skate, [1, 2]);
