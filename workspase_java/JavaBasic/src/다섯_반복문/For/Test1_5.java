package 다섯_반복문.For;

public class Test1_5 {
    public static void main(String[] args) {
        //1번 방법
        for(int i = 2 ; i < 11; i = i +2) {
            System.out.print(i + " ");
        }
        //2번 방법
        for (int i = 2 ; i < 11; i++){
            if(i % 2 == 0){
                System.out.print(i + " ");
            }
        }
    }
}
