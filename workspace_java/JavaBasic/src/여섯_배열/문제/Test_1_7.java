package 여섯_배열.문제;

public class Test_1_7 {
    public static void main(String[] args) {
        int[] arr = new int[10];

        for (int i = 0; i < arr.length; i++){
            arr[i] = arr[i] + 3;
            System.out.print(arr[i]+ " ");
        }
    }
}
