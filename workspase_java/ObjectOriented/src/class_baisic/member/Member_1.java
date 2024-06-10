package class_baisic.member;

public class Member_1 {
    private String name;
    private String id;
    private int password;

    public Member_1(){
        this.name = name;
        this.id = id;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }
    public void displayinfo(){
        System.out.println("이름 : "+ name);
        System.out.println("아이디 : "+ id);
        System.out.println("비밀번호 : "+ password);
    }
}
