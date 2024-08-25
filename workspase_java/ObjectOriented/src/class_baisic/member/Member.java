package class_baisic.member;

public class Member {
    String name;
    String id;
    String password;
    int age;

    public void pre(String name2, String id2 , String password2, int age2){
        name = name2;
        id = id2;
        password = password2;
        age = age2;
    }
    //회원등록을 위한 메소드
    public void maininto(){
        System.out.println("이름 : "+ name);
        System.out.println("아이디 : "+ id);
        System.out.println("비밀번호 : "+ password);
        System.out.println("나이 : "+ age);
    }
    //회원의 이름을 변경
    public void setName(String name1){
        name = name1;
    }
    public void setId(String id1){
        id = id1;
    }
    public void setPassword(String password1){
        password = password1;
    }
    public void setAge(int age1){
        age = age1;
    }
}
