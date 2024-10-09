package 일곱_메서드;

import java.util.Scanner;


public class Test_1_13_15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        test14(num);
//        test15(10, 5);
        test16(4);
//        test17(5,1);
//        test18(1, 10);
//        test19("집에가자",10);
    }
    public static void test14(int num){
        //삼항연산자
//        int a= 10 > 5 ? 1 : 2;
//        System.out.println(num % 2 ==0 ? "짝수" : "홀수");

        if (num % 2 == 0) {
            System.out.println("짝수");
        }
        else {
            System.out.println("홀수");
        }
    }
    public static void test15(int a, int b){
        if(a % 2 == 0 && b % 2 == 0){
            System.out.println("둘 다 짝수");
        }
        else if(a % 2 != 0 && b % 2 != 0 ){
            System.out.println("둘 다 홀수");
        }
        else {
            System.out.println("하나만 짝수");
        }
    }
    public static void test16(int num){
        for (int i = 0 ; i < num + 1 ; i++){
            System.out.println(i);
        }

    }
    public static void test17(int a, int b){
        int max = a > b ? a : b;
        int min = a < b ? a : b;

        for (int i = min + 1; i < max; i++){
            System.out.println(i);
        }

    }
    public static void test18(int a, int b){
        int max = a > b ? a : b;
        int min = a < b ? a : b;

        int cnt = 0 ;
        for (int i = min + 1; i < max; i++){
            if (i % 5 == 0){
                cnt++;
            }
        }
        System.out.println(cnt);
    }
    public static void test19(String s, int num){
        String result = " ";
        for(int i = 0 ; i < num; i++){
            result = result + s;
        }
        System.out.println(result);
    }
}

