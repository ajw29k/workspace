package test;

import java.util.Arrays;
import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] com = new int[3];
        int[] use = new int[3];
        int strike = 0;
        int ball = 0;
        int cnt = 0;

        for (int i = 0; i < com.length; i++){
            com[i] = (int)(Math.random() * 9) + 1;
            for (int e = 0; e < i; e++){
                if (com[e] == com[i]){
                    i--;
                    break;
                }
            }
        }
        System.out.println(Arrays.toString(com));

        while (true){
            for (int i = 0; i<use.length;i++){
                use[i] = sc.nextInt();
                for (int e = 0; e < i; e++){
                    if (use[i]==use[e]){
                        i--;
                        break;
                    }
                }
            }

            for (int i = 0; i < com.length;i++){
                for (int e = 0; e < use.length; e++){
                    if (com[i] == use[e] && i ==e){
                        strike++;
                        cnt++;
                    }
                    else if(com[i] == use[e] || i !=e){
                        ball++;
                        cnt++;
                    }
                }
            }
            System.out.println(cnt+strike + "스크라이크" + ball +"볼");
            if (strike ==3){
                System.out.println(cnt+"회만에 정답을 맞췄습니다.");
                break;
            }



        }


    }
}
