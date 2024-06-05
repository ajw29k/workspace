package 여섯_배열.문제;

import java.util.Scanner;

public class Test_1_12 {
    public static void main(String[] args) {
        //변수 선언
        Scanner sc = new Scanner(System.in);

        //0:국어,1:영어,2:수학,3:총점
        int[] scores = new int[4];
        //과목명
        String[] subjects = {"국어", "영어", "수학"};

        //평균
        double avg;

        //정수입력(0~100점 입력까지 무한 입력)
        for (int i = 0; i < scores.length - 1; i++) {
            while (true) {
                System.out.print(subjects[i] + " 점수 : ");
                scores[i] = sc.nextInt();
                if (scores[i] >= 0 && scores[i] < 100) {
                    break;
                }
            }
        }

        for (int i = 0; i < scores.length - 1; i++) {
            scores[scores.length - 1] = scores[scores.length - 1] + scores[i];
        }
        System.out.println();
        System.out.println("=== 입력한 정보입니다 ===");
        for (int i = 0; i < subjects.length; i++) {
            System.out.print(subjects[i] + " 점수 -" + scores[i]);
        }
        avg = (double) scores[scores.length - 1] / (scores.length - 1);
        System.out.println("총점은 : " + (scores[scores.length - 1]) + "평균은 : " + avg);
        System.out.printf("총점은 : %d 평균은 : %.2f\n", scores[scores.length - 1], avg);
    }
}