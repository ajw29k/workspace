package IF_문제_2;

import java.util.Scanner;

public class Test_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("1~99사이의 정수를 입력하세요>>");
        int num = sc.nextInt();

        //십의 자리
        int tens = num / 10;
        //일의 자리
        int ones = num % 10;
        //박수 횟수
        int clapCnt = 0;

        //십의 자리가 3,6,9면 clapCnt를 1증가
        if (tens == 3 || tens == 6 || tens == 9){
            clapCnt++;
        }
        //일의 자리가 3,6,9면 clapCnt를 1증가
        if (ones == 3 || ones == 6 || ones == 9){
            clapCnt++;
        }

        //clapCnt의 값에 따라 출력
        switch (clapCnt){
            case 1 :
                System.out.println("박수짝");
                break;
            case 2 :
                System.out.println("박수짝짝");

        }
    }
}
