package 다섯_반복문.While;

import java.util.Scanner;

public class Test8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int even = sc.nextInt();
        int i = 1;
        int num = 0;

        while (i <= even){
            if(i % 2 == 0){
                num++;

            }
            i++;

        }
        System.out.println("짝수의 갯수는 : " + num);
    }
}
