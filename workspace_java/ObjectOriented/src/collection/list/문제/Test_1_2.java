package collection.list.문제;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test_1_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();

        //리스트에 데이터를 저장
        for(int i = 0 ; i < 5; i++){
            System.out.print("정수 입력 : ");
            int num = sc.nextInt();
            list.add(num);

        }
        //리스트에 저장된 데이터의 합
        int sum = 0;
        for (int e : list){
            sum = sum + e;
        }
        System.out.println(sum);

    }
}
