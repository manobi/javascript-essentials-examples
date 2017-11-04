public class Jedi {
    String name;
    int age;
    String homeWorld;
    String specie;
    String gender;
    float height;
    String lightSaberColor = "blue";

    public Jedi (String name){
      this.name = name;
    }

    public void igniteLightSaber (){
      System.out.println(this.name + " igniting: BZIUMMMMMM");
    }

    public void powerOffLightSaber (){
      System.out.println(this.name + " turning off: Kuakkkk");
    }
    
    public void swingLightSaber (){
      System.out.println("Vreun Vren Vrun");
    }
}
