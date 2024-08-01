import java.util.HashMap;
import java.util.Map;

public class Map_2 {
    public static void main(String[] args) {
        //학생 객체 3명 생성 후
        //3명의 학생을 map에 저장하시오.
        //이때 키는 각 학생의 학번으로 지정합니다.

        Student student1 = new Student(1,"김자바");
        Student student2 = new Student(2,"김길동");
        Student student3 = new Student(3,"이석진");

        Map<Integer,Student> map = new HashMap<>();
        map.put(student1.getStuNum(),student1);
        map.put(student2.getStuNum(),student2);
        map.put(student3.getStuNum(),student3);
//        System.out.println(map.toString());

        //키가 2번인 학생의 학생 이름 출력
        System.out.println(map.get(2).getStuName());

    }
}
