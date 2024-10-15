package 일곱_메서드.문제;

import java.util.Arrays;
import java.util.Scanner;
import java.util.UUID;

public class Test_2_1_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //1번
        System.out.println(num(1,54));

        //2번
        int ac = sc.nextInt();
        int ax = sc.nextInt();
        System.out.println(test2(ac,ax));

        //3번
        System.out.println(test3(4,7));
    }
    public static int num(int a, int b){
        return a + b ;
    }

    public static int test2(int a, int b){
        return a * b ;
    }

    public static int test3(int a, int b){
       return a > b ? a : b;
    }

}
