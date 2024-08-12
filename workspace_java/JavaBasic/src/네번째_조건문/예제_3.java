package 네번째_조건문;

import java.util.Scanner;

public class 예제_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //키보드를 정수 하나를 입력받아서
        System.out.print("정수를 입력하세요 : ");
        int x = sc.nextInt();
        //입력받은 정수가 3의 배수이면서 5의 배수 일때만
        //'1' 출력
        if ( x % 3 == 0 && x % 5 == 0){
            System.out.println(1);
        }
    }
}
