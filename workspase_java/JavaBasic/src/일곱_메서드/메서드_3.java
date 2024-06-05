package 일곱_메서드;

//매개변수(parameter) : 메소드 정의 부분 소괄호 안에서 정희된 변수

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
