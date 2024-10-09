package 자바시험;

import java.util.Arrays;

public class Test2 {
    public static void main(String[] args) {


        //정수6개 랜덤한 숫자 1~46까지 숫자
        //배열에 저장후 출력

        //배열 6개 저장할 공간 만듬
        int[] arr = new int[6];

        //각 공간에 랜덤한 숫자 넣기(for문)
        for(int i = 0 ; i <arr.length; i++){
            arr[i] = (int)(Math.random() * 46 + 1);

        }
        //정수 6개 배열출력
        System.out.println(Arrays.toString(arr));


    }
}

