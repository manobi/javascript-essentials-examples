// https://jsperf.com/prototype-vs-this


function Person(){

}
Person.prototype.walk = function(){}
Person.prototype.eat = function(){}

function Jedi(name, age){
  this.name = name;
  this.age = age;
  this.color = undefined;
}

Jedi.prototype = Person.prototype;
Jedi.prototype.igniteLightSaber = function(){
    console.log('ZUUUMMM');
    this.walk();
}

var yoda = new Jedi('Yoda', 800);
yoda.igniteLightSaber();
//console.log(yoda);
