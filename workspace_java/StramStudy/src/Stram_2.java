import java.util.ArrayList;
import java.util.List;

import static java.lang.System.*;

public class Stram_2 {
    public static void main(String[] args) {

        List<Student> list = new ArrayList<>();
        list.add(new Student("김자바",80));
        list.add(new Student("이자바",70));
        list.add(new Student("박자바",100));

        //스트림의 사용해서 list에 저장된 학생 중 점수가 80점 이상인 학생만
        //걸러내는 코드
        list.stream().filter(s -> s.getScore() >= 80)
                .forEach(s -> System.out.println(s));

    }
}
