class Jedi {

  igniteLightSaber(){
    console.log(this.name + " igniting: BZIUMMMMMM");
  }

  powerOffLightSaber (){
    console.log(this.name + " turning off: Kuakkkk");
  }

  swingLightSaber (){
    console.log("Vreun Vren Vrun");
  }

  constructor (name){
    this.name = name;
  }

}
var yoda = new Jedi('Yoda');
console.log(yoda);
yoda.igniteLightSaber();
yoda.powerOffLightSaber();
