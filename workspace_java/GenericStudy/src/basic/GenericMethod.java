package basic;

import java.util.ArrayList;
import java.util.List;

// 클래스가 제네릭이 아닌! 클래스 안에 특정 메서드만 제네릭화 시키기
public class GenericMethod {

    //매개변수로 데이터가 전달 됨. 그 데이터는 자료형이 정해지지 않음
    // public <T> : (T data)가 제네릭 자료형이라는 의미 선언!
    public <T> Box<T> makeBox(T data){
        Box<T> box = new Box<>();
        box.setData(data);
        return box;
    }

}
