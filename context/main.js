/*
* ## Var
*/
var jocasta = {name: 'Jocasta Nu'};
//console.log(jocasta);


var padawans = undefined;
function temple(){
  var padawan = 20;
  guards = 8;
}
temple();
//console.log(padawan);
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
    console.log(jedi.name);
  }
}
// jedi.run()


/*
* ### Explicit Binding
*/
let skate = {
  name: 'Manobi',
  deck: 'Element',
  truck: 'Independent',
  bearing: 'Bones'
}

let wilson = {
  name: 'Wilson',
  deck: 'Element',
  truck: 'Independent',
  bearing: 'Bones'
}

function run(first, second){
  console.log(second);
  //console.log(this.name);
}

//run.call(wilson, 20, 30);
//run.apply(skate, [1, 2]);
