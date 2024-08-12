package class_baisic.man;

public class Man {
    private String name;
    private int age;
    private String adr;

    public Man(String name, int age, String adr){
        this.name = name;
        this.age = age;
        this.adr = adr;
    }

    //setter : 멤버변수 각각의 값을 변경하는 메서드
    //setter의 이름이 set변수명으로 반드시 지정!

    //값을 변경 메소드
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setAdr(String adr) {
        this.adr = adr;
    }
    //getter : 멤버변수 각각의 값을 retrun 받는 메서드
    //getter의 이름은 get변수명으로 반드시 지정
    //리턴 메소드

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getAdr() {
        return adr;
    }

    public void pre(){
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("주소 : " + adr);
    }

}
