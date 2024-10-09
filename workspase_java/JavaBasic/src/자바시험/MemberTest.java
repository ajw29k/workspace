package 자바시험;

public class MemberTest {
    public static void main(String[] args) {
        Member mem = new Member();
        mem.setInfo("자바","java","abcd1234",20);
        mem.isLogin("java","abcd1234");
        mem.isLogin("java","abcd");


    }
}
