package class_baisic.calculator;

import java.util.Scanner;

public class CalculatorTest {
    public static void main(String[] args) {
        Calculator abc = new Calculator();
        Scanner sc = new Scanner(System.in);

        System.out.print("첫 번째 수 : " );
        int a= sc.nextInt();
        System.out.print("두 번째 수 : " );
        int b= sc.nextInt();
        System.out.print("연산자 : " );
        String c = sc.next();
        //cal 객체의 a와 b를 키보드로 입력받은 값으로 변경
        abc.setNumber(a ,b);

        if(c.equals("+")){
            System.out.println(a + "+" + b + " = " + abc.getSum());
        }
        else if(c.equals("-")){
            System.out.println(a + "-" + b + " = " + abc.getSub());
        }
        else if(c.equals("/")){
            System.out.println(a + "/" + b + " = " + abc.getDiv());
        }
        else if(c.equals("*")){
            System.out.println(a + "*" + b + " = " + abc.getMulti());
        }

    }
}
