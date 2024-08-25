package IF_문제_1;



public class Test1 {
    public static void main(String[] args) {
        int x = 1,y = 20;
        System.out.println("x = " + x +" y = " + y);

        int sum = x +y;
        if (sum > 50){
            System.out.println("두 수의 합이 50보다 큽니다");
        }
        else {
            System.out.println("두 수의 합이 50이하 입니다");
        }
    }
}
