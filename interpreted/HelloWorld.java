import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

public class HelloWorld {
  public static void main(String[] args) {
      String evaluationScript = "parseInt('10.10');";
      Context cx = Context.enter();
      Scriptable scope = cx.initStandardObjects();
      Object result = cx.evaluateString(scope, evaluationScript, "EvaluationScript", 1, null);
      System.out.println(cx.toString(result));
  }
}
