package Interface.math;

public class MyMath implements MathUtil{


    @Override
    public int getMin(int a, int b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }

    @Override
    public double getCircleArea(int radius) {
//        if(radius < 0){
//            return 0;
//        }
//        return radius * 2 * Math.PI;
        return radius < 0 ? 0 : 2 * Math.PI * radius;
    }//원의 둘레 = 2 x 반지름 x π

    @Override
    public int getMultiple(int num1, int n) {
        int result = 1;
        for (int i = 0; i < n; i++) {
            result = result * num1;
        }
        return result;


    }
}
