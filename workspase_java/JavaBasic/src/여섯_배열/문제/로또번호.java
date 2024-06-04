package 여섯_배열.문제;

public class 로또번호 {
    public static void main(String[] args) {
        int[] arr = new int[6];
        for (int i = 0; i < arr.length; i++){
            arr[i] = (int)(Math.random() * (45) +1);
            System.out.print(arr[i]+" ");
        }

    }
}
