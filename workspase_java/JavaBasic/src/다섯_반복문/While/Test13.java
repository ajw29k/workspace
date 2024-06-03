package 다섯_반복문.While;

public class Test13 {
    public static void main(String[] args) {
        int i = 1;
        int five = 0;
        while (i <=100){
            if (i % 5 ==0){
                five++;
            }
            i++;
            if(i % 5 ==0){
                System.out.print(i+" , ");            }
        }
        System.out.println(five + "개입니다");
    }
}
