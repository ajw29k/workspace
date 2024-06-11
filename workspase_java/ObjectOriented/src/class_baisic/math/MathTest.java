package class_baisic.math;

import java.util.Scanner;

public class MathTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("첫 번째 수 : ");
        int a = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int b = sc.nextInt();
        System.out.print("연산자 : ");
        String c = sc.next();

        switch (c){
            case "+" :
                Add add = new Add();
                add.setValue(a,b);
                System.out.println(a+ " + " + b + " = " + add.calculate());
                break;
            case "-" :
                Sub sub = new Sub();
                sub.setValue(a,b);
                System.out.println(a+ " - " + b + " = " + sub.calculate());
                break;
            case "*" :
                Mul mul = new Mul();
                mul.setValue(a,b);
                System.out.println(a+ " * " + b + " = " + mul.calculate());
                break;
            case "/" :
                Div div = new Div();
                div.setValue(a,b);
                System.out.println(a + " / " + b + " = " +div.calculate());
                break;
            default:
                System.out.println("연산자를 잘못 입력했습니다.");
        }


//        if (c.equals("+")){
//            System.out.println(a+ c+ b+" = " + add.calculate());
//        }
//        else if (c.equals("-")){
//            System.out.println(a+ c+ b+" = " + sub.calculate());
//        }
//        else if (c.equals("*")){
//            System.out.println(a+ c+ b+" = " + mul.calculate());
//        }
//        else if (c.equals("/")){
//            System.out.println(a+ c+ b+" = " +div.calculate());
//        }
    }
}
