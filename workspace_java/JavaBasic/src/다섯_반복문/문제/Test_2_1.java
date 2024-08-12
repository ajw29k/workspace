package 다섯_반복문.문제;

public class Test_2_1 {
    public static void main(String[] args) {
        for (int i = 1; i < 100 ; i++){
            if(i % 7 ==0 || i % 9 == 0){
                System.out.println(i);
            }
        }
    }
}
