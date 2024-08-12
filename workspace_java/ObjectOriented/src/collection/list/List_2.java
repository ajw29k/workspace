package collection.list;

import java.util.ArrayList;
import java.util.List;

public class List_2 {
    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();

        list.add(10);
        list.add(12);
        list.add(20);

        int a = list.get(1);
        System.out.println(list.get(2));
    }
}
