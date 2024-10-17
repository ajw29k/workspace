

public class Calcaulate {
    private int num1;
    private int num2;

    public int getNum1() {
        return num1;
    }

    public void setNum1(int num1) {
        this.num1 = num1;
    }

    public int getNum2() {
        return num2;
    }

    public void setNum2(int num2) {
        this.num2 = num2;
    }
    public int getSum(int num1,int num2){
        return num1 + num2;
    }
    public int getMax(int num1,int num2){
        return num1 > num2 ? num1 : num2;
    }
    public double getAvg(int num1,int num2){
        return (num1+num2)/2.0;
    }
}
