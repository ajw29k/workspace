package test;

import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int aa = 0;
        int bb = 0;
        System.out.print("1~999 정수입력 : ");
        aa = sc.nextInt();
        int c = aa % 100 %10;       //1의자리수
        int d = aa % 100 /10;        //10의자리수
        int e = aa % 100;   //100의자리수
        System.out.println(e+"+"+d + " + "+c);
        System.out.println();
        if (aa < 10){
            if (c % 3 ==0) {
                bb++;
            }
        }
        else if (aa < 100){
            if (c % 3 ==0) {
                bb++;
            }
            if (d % 3 ==0){
                bb++;
            }
        }
        else {
            if (c % 3 ==0) {
                bb++;
            }
            if (d % 3 ==0){
                bb++;
            }
            if (e % 3 ==0){
                bb++;
            }

        }
        switch(bb) {
            case 0:
                System.out.println("박수 없음");
                break;
            case 1:
                System.out.println("박수"+bb+"번");
                break;
            case 2:
                System.out.println("박수"+bb+"번");
                break;
            case 3:
                System.out.println("박수"+bb+"번");
        }

    //풀이
        int num = sc.nextInt();
        //백의 자리 숫자
        int huns = num / 100;

        //십의자리
        int tens = (num %100) /10;

        //일의 자리
        int ones = num % 10;
        System.out.println(huns+"  " + tens + " " + ones);

        int clapCnt=0;

        if (huns % 3 == 0 && huns !=0){
            clapCnt++;
        }
        if (tens % 3 == 0 && tens !=0){
            clapCnt++;
        }
        if (ones % 3 == 0 && ones !=0){
            clapCnt++;
        }


    }

}





