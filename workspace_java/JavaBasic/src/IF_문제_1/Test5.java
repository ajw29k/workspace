package IF_문제_1;

import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("값을 입력하세요");
        int x = sc.nextInt();
        if (x > 100 && x >= 90){
            System.out.println("학점은 A입니다");
        }
        else if (x >= 80){
            System.out.println("학점은 B입니다");
        }
        else{
            System.out.println("학점은 C입니다");
        }
    }
}
