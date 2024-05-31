package IF_문제_1;

import java.util.Scanner;

//IF_2 번
//3
public class Test8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int max,mid,min;
        System.out.print("첫번째 수 : ");
        int one = sc.nextInt();
        System.out.print("두번째 수 : ");
        int tow = sc.nextInt();
        System.out.print("세번째 수 : ");
        int the = sc.nextInt();

        //a가 가장 큰 수라면..
        //b가 가장 큰 수라면..
        //c가 가장 큰 수라면..
        if (one > tow && one > the){
            max = one ;
            if (tow > the){
                mid = tow;
                min = the;
            }
            else {
                mid = the;
                min = tow;
            }
        }
        else if (tow > one && tow > the){
            max = tow ;
            if (one > the){
                mid = one;
                min = tow;
            }
            else {
                mid = the;
                min = one;
            }
        }
        else {
            max = the;
            if (one > tow){
                mid = one;
                min = tow;
            }
            else {
                mid = tow;
                min = one;
            }
        }
        System.out.println(max +">" + mid + ">" + min);
    }
}
