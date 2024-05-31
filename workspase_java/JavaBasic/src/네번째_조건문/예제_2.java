package 네번째_조건문;

import java.util.Scanner;

public class 예제_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("숫자를 입력하세요");
        //키보드로 정수 하나를 입력 받아,
        int x = sc.nextInt();
        //입력받은 정수가 짝수이면 '1'출력
        if (x % 2 == 0){
            System.out.println(1);
        }
        //그 밖의 숫자는 '2' 출력
        else{
            System.out.println(2);
        }
    }
}
