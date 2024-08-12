package test;

import javax.sound.midi.Soundbank;

public class Member {
    private String name;
    private String id;
    private String pw;
    private int age;

    public void setInfo(String name, String id, String pw, int age){

    }
    public void showInfo() {
        System.out.println("name='" + name + '\'' +", id='" + id + '\'' +", pw='" + pw + '\'' +", age=" + age);
    }
    boolean isLogin(String id, String pw){
        if(id.equals("java")&& pw.equals("abcd1234")){
            System.out.println("로그인 가능");
        return true;
        }
        else if (id.equals("java")&& pw.equals("abcd")){
            System.out.println("로그인 불가능");
            return false;
        }
        return false;
    }
}
