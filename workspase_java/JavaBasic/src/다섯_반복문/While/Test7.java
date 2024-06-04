package 다섯_반복문.While;

public class Test7 {
    public static void main(String[] args) {
        int i = 1;
        int five = 0;
        while (i <=100){
            if(i % 5 ==0){
                five++;
                System.out.print(i+" , ");
            }
            i++;
        }
        System.out.println();
        System.out.println(five + "개입니다");
    }
}
