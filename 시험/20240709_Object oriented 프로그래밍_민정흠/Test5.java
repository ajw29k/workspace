package test;

import java.text.StringCharacterIterator;
import java.util.Arrays;
import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //문제
        int[] com = new int[3];
        //랜덤한 숫자3개 입력
        for (int i = 0; i< com.length; i++){
            int rand = (int)(Math.random() * 9 + 1);
            com[i] = rand;
            for (int j = 0 ; j <i ; j++){
                if (com[j] == com[i]){
                    i--;
                    break;
                }
            }

        }
        //대답
        int[] use = new int[3];

        int cnt = 0;

        int tryCnt = 0;

        System.out.println(Arrays.toString(com));
        while (true){
            int strike = 0;
            int ball = 0;
            tryCnt++;
            System.out.print(tryCnt + " >> ");
            // use [?, ? , ?] 입력
            use[0] = sc.nextInt();
            use[1] = sc.nextInt();
            use[2] = sc.nextInt();

            //정답 대조

            for (int i = 0; i < com.length;i++){
                for (int e = 0; e < use.length; e++){
                    if (com[i] == use[e] && i ==e){
                        strike++;

                    }
                    else if(com[i] == use[e]){
                        ball++;

                    }
                }
            }
            System.out.println(strike + "스크라이크" + ball +"볼");
            if (strike ==3){
                System.out.println(tryCnt+"회만에 정답을 맞췄습니다.");
                break;
            }



        }


    }
}
