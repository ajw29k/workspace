package basic;

// <T extends Phone> T를 Phone 클래스나 Phone클래스를
// 상속한 클래스만 허용하도록타입인자 제한
public class PhoneBox<T extends Phone> {
    private T data;

    public void phoneTest(T data){ //Phone, MobliePhone, SmartPhone
        this.data = data;
        data.call();
        //data.sendMsg();
        //data.playApp();
    }
}
