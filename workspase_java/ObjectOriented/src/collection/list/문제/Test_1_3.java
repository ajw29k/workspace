package collection.list.문제;

import java.util.ArrayList;
import java.util.List;

public class Test_1_3 {
    public static void main(String[] args) {
        List<String> namelist = new ArrayList<>();
        namelist.add("김자바");
        namelist.add("파이썬");
        namelist.add("홍길동");

        for (int i = 0; i < namelist.size(); i++){
            if (namelist.get(i).equals("홍길동")){
                System.out.println("해당이름이 존재합니다.");
            }
        }

    }
}
