package 일곱_메서드;


public class 메서드_3 {
    public static void main(String[] args) {
        tellYouName("자바");
        tellYouName("홍");

        //tellYouName(5); 매개변수의 자료형 일치 필요!
    }

    public static void tellYouName(String name){//String name = "자바";
        System.out.println("제 이름은 " + name);
    }

}
