package 여섯_배열.문제;

import java.util.Scanner;

public class Test_2_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("정수 입력 : ");
        int ss = sc.nextInt();

        int[] arr = new int[ss];
        for (int i = 0; i < arr.length; i++){
            arr[i] = i+1;
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        int sum = 0;
        for (int e : arr){
            sum = sum + e;
        }

        System.out.println(sum / (double)arr.length);


    }
}
