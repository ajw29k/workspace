package collection.list.문제;

import java.util.ArrayList;
import java.util.List;

public class StudentTest {
    public static void main(String[] args) {
        Student s1 = new Student("kim", 80, 90);
        Student s2 = new Student("loo", 73, 80);
        Student s3 = new Student("moo", 50, 95);

        List<Student> stuList = new ArrayList<>();
        stuList.add(s1);
        stuList.add(s2);
        stuList.add(s3);

        //리스트에 저장된 모든 정보를 출력
        for(Student stu : stuList){
            System.out.println(stu);
        }
        System.out.println();

        //총점이 150점 이상인 학생의 모든 정보를 출력
        for (int i = 0; i < stuList.size(); i++){
            if (stuList.get(i).getTotalscore() >= 150){
                System.out.println(stuList.get(i));
            }
        }
        System.out.println();

        //모든 학생에 대한 총점에 대한 평균 점수를 출력
        int sum = 0;
        for (Student stu : stuList){
            sum = sum + stu.getTotalscore();
        }
        System.out.println((double)sum / stuList.size());

        System.out.println();

        //총점이 1등인 학생의 모든 정보를 출력
        int index = 0; //총점이 1등인 학생의 index
        int max = 0; // 가장 높은 총점
        for (int i = 0; i < stuList.size(); i++){
            if (stuList.get(i).getTotalscore() > max){
                max = stuList.get(i).getTotalscore();
                index = i;
            }

        }
        System.out.println(stuList.get(index));

    }
}
