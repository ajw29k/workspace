package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("첫번째 : ");
            int a = sc.nextInt();
            System.out.print("두번째 : ");
            int b = sc.nextInt();

            System.out.println(a/b);
        }catch (ArithmeticException exception){//모든 ~~exception 클래스는 모두 부모클래스
            System.out.println("수학적 오류 발생");//숫자형
        }catch (InputMismatchException e){
            System.out.println("입력 자료형 불일치!!");//문자형
        }

        System.out.println("프로그램 종료");

    }
}
