package collection.list.문제;

import java.util.ArrayList;
import java.util.List;

public class Test_1_4 {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();

        for (int i = 0 ; i < 10 ; i++){
            int rand = (int)(Math.random() * 100 +1);
            list.add(rand);
        }

        int cnt = 0;

        for (int e: list){
            if (e % 2 == 0){
                cnt++;
                System.out.println(e);
            }
        }
        System.out.println("cnt : " + cnt);
    }
}
