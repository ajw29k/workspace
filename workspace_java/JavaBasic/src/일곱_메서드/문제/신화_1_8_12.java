package 일곱_메서드.문제;

import java.util.Arrays;

public class 신화_1_8_12 {
    public static void main(String[] args) {
        int[] x = {1,4,5,6};
        int[] result = test9(x);

        System.out.println(Arrays.toString(result));
    }
    public static int[] test9(int[] a){
        //매개변수로 넘어온 배열 요소 중 짝수의 개수
        int cnt = 0;
        for (int e : a){
            if (e % 2 == 0){
                cnt++;
            }
            //새로운 배열 개수 지정
        }
        int[] result = new int[cnt];
        int index = 0;//새로운 배열에 값 지정
        for (int i = 0; i < a.length; i++) {

            if (a[i] % 2 == 0) {
                result[index] = a[i];
                index++;
            }
        }
        return result;
    }
}
