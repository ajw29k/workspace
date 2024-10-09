package IF_문제_2;

import java.util.Scanner;

public class Test_1 {
    public static void main(String[] args) {
        int a, b, c ;
        Scanner sc = new Scanner(System.in);

        System.out.println("첫번째 변의 길이");
        a = sc.nextInt();
        System.out.println("두번째 변의 길이");
        b = sc.nextInt();
        System.out.println("세번째 변의 길이");
        c = sc.nextInt();
        if (a+b > c && a+c > b && b+c > a) {
            System.out.println("삼각형을 만들수있습니다");
        }
        else{
            System.out.println("삼각형을 만들수 없습니다.");
        }
    }
}
