package IF_문제_1;

import javax.sound.midi.Soundbank;
import java.util.Scanner;

public class IF문제_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫 번째 수 : ");
        int fir = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int tow = sc.nextInt();
        System.out.print("연산자 : ");
        String ter =sc.next();

        switch (ter){
            case "+" :
                System.out.println(fir + ter + tow+" = " + (fir + tow));
                break;
            case "-" :
                System.out.println(fir + ter + tow+" = " + (fir - tow));
                break;
            case "*" :
                System.out.println(fir + ter + tow+" = " + (fir * tow));
                break;
            case "/" :
                System.out.println(fir + ter + tow+" = " + (fir / tow));
                break;
            default:
                System.out.println("연산자를 잘못 입력하였습니다.");
        }
    }
}
