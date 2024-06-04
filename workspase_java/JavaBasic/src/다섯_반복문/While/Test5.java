package 다섯_반복문.While;

public class Test5 {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i < 11){
            sum = sum + i++;
        }
        System.out.println(sum);
    }
}
