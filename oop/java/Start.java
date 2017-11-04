public class Start {
  public static void main(String[] args){

      Jedi yoda = new Jedi("Yoda");
      System.out.println(yoda.name);
      yoda.igniteLightSaber();
      yoda.swingLightSaber();
      yoda.powerOffLightSaber();
  }
}
