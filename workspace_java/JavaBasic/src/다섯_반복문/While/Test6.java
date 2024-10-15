package 다섯_반복문.While;

public class Test6 {
    public static void main(String[] args) {
        int i = 1;
        int num = 0;
        while (i <= 100){
            if (i % 3 == 0){
                num++;
            }
            i++;
        }
        System.out.println(num);
    }
}
