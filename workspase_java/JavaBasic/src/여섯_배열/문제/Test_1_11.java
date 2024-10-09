package 여섯_배열.문제;

public class Test_1_11 {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8};

        int sum = 0;

        for (int e : arr){
            if (e % 2 ==0){
                sum++;
            }
        }



//        for (int i = 0;i <arr.length; i++){
//            if (arr[i] % 2 == 0){
//                sum++;
//            }
//        }
//
        System.out.println(sum);
    }
}
