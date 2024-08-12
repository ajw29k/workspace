package 네번째_조건문;

import java.util.Scanner;

public class Switch_예제_1 {
    public static void main(String[] args) {
        int num;
        //키보드로 정수 하나를 입력받아,
        Scanner sc = new Scanner(System.in);
        System.out.println("값 : ");
        num = sc.nextInt();
        //입력받은 값이 짝수이면 '1' 출력
        //홀수면 '2'
        //그 밖에는 '0'으로 출력
        num = num % 2;
        switch (num){
            case 0 :
                System.out.println(1);
                break;
            case 1 :
                System.out.println(2);
                break;
            default:
                System.out.println(0);
        }
    }
}
