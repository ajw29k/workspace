package Interface;

public class TvUser {
    public static void main(String[] args) {
        //인터페이스를 구현한 클래스의 생성자로 인터페이스 객체 생성
        Tv tv = new SamsungTv();
        tv.turnOn();
        tv.volumeDown();
        tv.volumeUp();
        tv.turnOff();

        SamsungTv tv1 = new SamsungTv();
        LgTv tv2 = new LgTv();
        Tv tv3 = new SamsungTv();
        Tv tv4 = new LgTv();


    }
}
