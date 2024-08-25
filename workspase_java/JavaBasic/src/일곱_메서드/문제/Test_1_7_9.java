package 일곱_메서드.문제;

public class Test_1_7_9 {
    public static void main(String[] args) {
        //7번
        asd(10, 3);

        //8번
        stong("안녕 ","잘가");

        //9번
        name("김형진");
        age(33);
        adr("울산");
    }
        //7번
    public static void asd(int x, int y){
        System.out.println("몫 : " + x / y + " 나머지 : " + x % y);
    }

        //8번
    public static void stong(String a,String b){
        System.out.println(a+b);
    }
        //9번
    public static void name(String name){
        System.out.println("이름은 "+name+"입니다");
    }
    public static void age(int age){
        System.out.println("나이는 "+age+"입니다");
    }
    public static void adr(String adr){
        System.out.println("주소는 "+adr+"입니다");
    }
}
