package class_baisic.stu_manage;
//학생관리 클래스는 학생등록, 학생정보변경(연락처),
// 학생정보출력의 기능이 있다.


import java.util.Scanner;

public class StuManage {
    private Scanner sc;//키보드 입력을 위해 선언
    private Stu[] stus;//학생 다 수를 저장할 배열
    private int idx;//학생 배열의 요소

    //생성자
    public StuManage(){
        sc = new Scanner(System.in);
        stus = new Stu[3];
        idx = 0;

    }
    //학생등록 메서드
    public void regStu(){
        if (idx > stus.length-1){
            System.out.println("더 이상 학생을 추가할 수 없습니다.");
        }
        else {

            System.out.println("학생등록실행");
            System.out.print("이름 : " );
            String name = sc.next();
            System.out.print("나이 : ");
            int age = sc.nextInt();
            System.out.print("연락처 : ");
            String tel = sc.next();
            System.out.print("학점 : ");
            String grade = sc.next();

            //입력받은 정보로 학생 객체 생성
            Stu stu =new Stu(name,age,tel,grade);
            //생성한 학생 객체를 배열에 저장
            stus[idx] = stu;
            idx++;
        }
    }
    //학생정보변경(연락처) 메서드
    public void changeInfo(){
        System.out.println("학생의 연락처를 변경합니다");
        String b = sc.next();
        while (true) {
            System.out.print("변경 학생 : ");
            String b = sc.next();
            for (int i = 0; i < idx; i++) {
                if (stus[i].getName().equals(b)) {

                    System.out.println("변경완료되었습니다.");
                    break;
                }
            }
            System.out.println("해당하는 학생이 존재하지 않습니다. 다시 입력하세요.");
        }
    }
    //학생정보출력 메서드
    public void print(){
        for (int i=0; i < idx; i++){
            while (true) {
                System.out.print("정보를 열람할 학생 : ");
                String a = sc.next();
                if (stus[i].getName().equals(a)) {
                    System.out.println("요청하신 학생의 정보입니다.");
                    stus[i].showInfo();
                    break;
                }
                System.out.println("해당하는 학생이 존재하지 않습니다. 다시 입력하세요");
            }
        }


    }
    //모든학생정보출력 메서드
    public void printAll(){
        System.out.println("모든 학생의 정보입니다. 현재 총 학생 수는 "+ idx +"명입니다.");
        for (int i = 0 ; i < idx; i++){
            stus[i].showInfo();
            System.out.println();
        }

    }
}
