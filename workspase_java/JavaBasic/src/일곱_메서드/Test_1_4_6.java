package 일곱_메서드;

public class Test_1_4_6 {
    public static void main(String[] args) {
        //4번 메서드
        java("들어와");

        //5번 메서드
        su(4,6);

        //6번 메서드
        tre(5,3,2);
    }
    //4번
    public static void java(String i){
        System.out.println(i);
    }
    //5번
    public static void su(int kor,int non){
        System.out.println(kor+non);
    }
    //6번
    public static void tre(int ko1,int ko2, int ko3){
        System.out.println(ko1 * ko2 * ko3);
    }

}
