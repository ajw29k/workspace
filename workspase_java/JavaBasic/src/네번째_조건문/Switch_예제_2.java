package 네번째_조건문;

import java.util.Scanner;

/*
    주민등록번호의 7번째 자리는 성별을 나타낸다.
    7번째 자리의 수가 '1' 또는 '3' 는 남자를 표현
    7번째 자리의 수가 '2' 또는 '4' 는 여자를 표현
    키보드로 주민등록번호 7번째 자리를 입력받아
    남자일 경우 '남성' 출력
    여자일 경우 '여성' 출력
    잘못된 숫자를 입력하면 '오류' 라고 출력
*/
public class Switch_예제_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("주민등록번호 7번째 자리를 입력하세요");
        int num = sc.nextInt();

        switch (num){
            case 1,3 :
                System.out.println("남자");
                break;
            case 2,4 :
                System.out.println("여자");
                break;
            default:
                System.out.println("오류");
        }
    }
}
