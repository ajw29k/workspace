package test;

import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        //1.세 정수 scanner로 입력받아 가장큰수 부터 나열
        //입력받을 정수 선언
        Scanner sc = new Scanner(System.in);

        // scanner로 세 정수 입력
        System.out.print("첫번째 수 :");
        int num1 = sc.nextInt();
        System.out.print("두번째 수 :");
        int num2 = sc.nextInt();
        System.out.print("세번째 수 :");
        int num3 = sc.nextInt();
        int a = 0;
        int b = 0;
        int c = 0;
        if(num1 > num2 && num1 >num3){
            a = num1;
            if (num2 > num3){
                b = num2;
                c = num3;
            }
            else {
                b = num3;
                c = num2;
            }
        }
        else if(num2 > num1 && num2 > num3){
            a = num2;
            if (num1 > num3){
                b = num1;
                c = num3;
            }else {
                b = num3;
                c = num1;
            }
        }else {
            a = num3;
            if (num1 > num2){
                b = num1;
                c = num2;
            }
            else {
                b = num2;
                c = num1;
            }
        }
        System.out.println(a + " > " + b + " > " + c);
    }
}
