package Interface;

//Wrapper클래스 : 기본자료형을 클래스로 표현한것
//int -> Inteager
//double -> Double
//boolean -> Boolean
//float -> Float
public class BoxTest {
    public static void main(String[] args) {
        //정수 10을 클래스화
        Integer a = Integer.valueOf(10);

        Box b = new Box();
        b.setBox(a);
        
    }
}
