package IF_문제_2;

import java.util.Scanner;

public class Test_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x,y;

        System.out.println("점 (x,y)의 좌표를 입력하시오");
        System.out.println("점 x의 좌표는");
        x = sc.nextInt();
        System.out.println("점 y의 좌표는");
        y = sc.nextInt();

        if (50 <= x && x <= 100 &&y<=100 && y>=50){
            System.out.println("사각형 안의 점이 있습니다");
        }
        else{
            System.out.println("사각형 안의 점이 없습니다");
        }


    }
}
