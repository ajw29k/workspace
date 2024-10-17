
public class CalTest {
    public static void main(String[] args) {
        Calcaulate cal = new Calcaulate();

        cal.setNum1(10);
        cal.setNum2(30);

        System.out.println(cal.getSum(cal.getNum1(), cal.getNum2()));
        System.out.println(cal.getMax(cal.getNum1(), cal.getNum2()));
        System.out.println(cal.getAvg(cal.getNum1(), cal.getNum2()));
    }
}
