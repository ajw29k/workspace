package class_baisic.calculator;

public class Calculator {
    private int a;
    private int b;

    public Calculator(){
        this.a = 0;
        this.b = 0;
    }
    //a,b 값을 변경하는 메서드
    public void setNumber(int a, int b){
        this.a = a;
        this.b = b;
    }
    public int getSum(){
        return a + b;
    }
    public int getSub(){
        return a - b;
    }
    public double getDiv(){
        return (double)a / b;
    }
    public int getMulti(){
        return a * b;
    }
}
