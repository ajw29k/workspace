package 다섯_반복문.While;

public class Test9 {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i <= 10){
            sum = sum + i++;
        }
        System.out.println(sum);
    }
}
