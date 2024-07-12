import java.util.Arrays;

public class 배열 {
    public static void main(String[] args) {
        int max = 0;
        int[] array = {1,5,3,8,2};

        for (int i = 0; i < array.length; i++){
            if(array[i] < array.length) {

                if (array[i] > array[i + 1]) {
                } else
                    array[i] = max;
                System.out.println(array[i]);
            }
        }
    }
}
