package basic;

import java.util.ArrayList;
import java.util.List;

public class GenericMethodTest {
    public static void main(String[] args) {
        GenericMethod.aaa();

        //Generic 메서드의 자료형은 메서드 호출 시 결정
        Box<String> b1 = GenericMethod.makeBox("dd");
        Box<Integer> b2 =GenericMethod.makeBox(6);

        Box<String> box1 = new Box<>();
        GenericMethod.peekBox(box1);

        List<String> list = new ArrayList<>();
        //Collection<? extends String> = Collection<String>
        //list.addAll();

        //GenericMethod.moveBox();
    }
}
