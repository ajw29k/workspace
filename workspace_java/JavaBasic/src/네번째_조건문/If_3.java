package 네번째_조건문;

import java.util.Scanner;

public class If_3 {
    public static void main(String[] args) {
        //키보드로 입력받아
        Scanner sc = new Scanner(System.in);

        System.out.print("정수 입력 : ");
        int num = sc.nextInt();

        if(num >0){
            System.out.println(1);
        }
        //그렇지 않고 만약에...
        else if (num <0) {
            System.out.println(2);
        }
        //그렇지 않으면..
        else {
            System.out.println(0);
        }
    }
}
