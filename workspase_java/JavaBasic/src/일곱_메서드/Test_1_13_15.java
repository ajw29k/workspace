package 일곱_메서드;

import java.util.Scanner;
import java.util.logging.Level;

public class Test_1_13_15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        test14(num);
        test15(10, 5);
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
}

