package 세번째_연산자;

import javax.security.auth.callback.TextOutputCallback;
import java.util.Scanner;

/*
키보드로 이름, 국어점수, 영어점수, 수학점수를 입력받는다.
단, 점수들은 정수만 입력한다고 가정한다.
모든 정보를 입력받은 후
입력받은 이름, 국어점수, 영어점수, 수학점수와 총점 및 평균을 출력.
*/
public class 연습문제 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a,b,c,tol;

        System.out.print("이름 : ");
        String name = sc.next();

        System.out.print("국어점수 : ");
        a = sc.nextInt();
        System.out.print("영어점수 : ");
        b = sc.nextInt();
        System.out.print("수학점수 : ");
        c = sc.nextInt();

        tol = a + b + c;
        double avg = tol / 3.0;

        System.out.println("===========입력결과===========");
        System.out.println(name +"의 국어점수 " + a +",영어점수 " + b + ",수학점수 " + c );
        System.out.print("총점 : " + tol + "입니다 ");
        System.out.print("평균 : " + avg + "입니다 ");




    }
}
