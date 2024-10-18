package basic;

import java.util.ArrayList;
import java.util.List;

// 클래스가 제네릭이 아닌! 클래스 안에 특정 메서드만 제네릭화 시키기
public class GenericMethod {
    public static void aaa(){
        System.out.println("111");
    }

    // public <T> : (T data)가 제네릭 자료형이라는 의미 선언!
    // 매개변수로 데이터가 전달 됨. 그 데이터는 자료형이 정해지지 않음
    // 이러한 매개변수를 전달받아, 박스에 저장하고
    // 데이터가 저장된 박스를 리턴하는 메서드
    public static <T> Box<T> makeBox(T data){
        Box<T> box = new Box<>();
        box.setData(data);
        return box;
    }

    //매개변수로 Box<String> 객체 전달 가능? -> yes
    //매개변수로 Box<Integer> 객체 전달 가능? -> yes
    public static <T> void peekBox(Box<T> box){
        System.out.println(box);
    }

    //제네릭 메서드이다? 아니다
    //와일드 카드 문법 - 위의 peekBox 메서드와 완전 동일(와일드 카드 문법 선호)
    // 가정 : 매개변수에 Box<Phone> 전달
    public static void peekBox1(Box<?> box){
        //box.getData() : phone 가져옴
            System.out.println(box);
    }

    // 와일드카드 상한제한, 하한제한(제네릭 문법의 타입인자 제한과 비슷)
    // 와일드 카드 상한제한
    // ?에 들어온느 자료형을 제한
    // Phone 클래스, 혹은 Phone 클래스를 상속한 클래스만 들어 올 수 있음.
    public static void peekBox3(Box<? extends Phone> box){
        box.getData().call();    //Box<Phone> 매개변수랑 같음
        System.out.println(box);
    }

    // 와일드 카드 하한제한
    // Phone 클래스이거나 Phone 클래스의 상위 클래스만 들어올 수 있음
    public static void peekBox4(Box<? super MobliePhone> box){
        System.out.println(box);    //Box<MobliePhone> 매개변수랑 같음
    }

    //상한제한 사용 이유
    // outBox 에서는 매개변수로 전달된 장난감이 들어있는 박스에서
    // 장난감을 꺼내는 기능
    // 상한제한을 하면 메서드 안에서 데이터를 저장하는 코드 사용을 막을 수 있음.
    // 코드의 안정성을 높이기 위해서
    public static void outBox(Box<? extends Toy> box){
        Toy toy = box.getData(); //Box<Toy>,Box<Car>,Box<Robot>
        //box.setData(new Toy());//컴파일 오류 개발자의 실수 -> 오류
    }

    //상한, 하한제한 사용의 적절한 예시
    //매개변수로 두 개의 상자가 전달되고
    //하나의 상자의 데이터를 다른 하나의 상자에 옮기는 기능
    // super : setData 만 사용
    // extends : getData 만 사용가능하게(setData 사용 못함)
    public static void moveBox(Box<? super Toy> toBox, Box<? extends Toy> fromBox){
        //fromBox -> toBox 로 장난감 옮겨 담기
        toBox.setData(fromBox.getData());

        //개발자의 실수 super, extends 를 사용하여 컴파일 오류
        //fromBox.setData(toBox.getData());
    }

    /*
    와일드카드의 최초 목적 : 여러 자료형을 전달받기 위해 사용.
    코드의 안정선 향상을 위해 상한, 하한 제한 도입 : 최초 목적을 상실..
    이 문제를 해결하기 위해 제네릭과 와일드 카드를 동시에 사용!
    */
    // 리턴 타입 앞에 제네릭 <T extends Phone>를 하면 타입인자를 제한함

    public <T extends Phone> void finalOutBox(Box<? extends T> box){
    }


    // 매개변수로 박스와, 박스에 담을 객체 전달
    // 전달받은 박스에 전달받은 객체를 저장
    // 하한 제한을 걸면 데이터 빼오는 걸 막는 것
    public static void inBox(Box<? super Toy> box, Toy toy){
        box.setData(toy);   //Box<Object>, Box<Toy>
        Toy t = (Toy) box.getData();
    }

    //제네릭 메서드이다? - > no!
    //매개변수로 Box<String> 객체 전달 가능? -> no!
    public static void peekBox2(Box<Object> box){//Object만 들어간다
        System.out.println(box);
    }

    //Object 클래스로 모든 데이터를 전달받을 수 있다.

}
