package class_baisic;

public class AccountTest {
    public static void main(String[] args) {
        Account acc = new Account();
        //클래스 객체명 새로운 생성자

        acc.printAccount();

        Account acc1 = new Account(100000);
        acc1.printAccount();

        acc1.setAccount("?",",?",3);





//        //객체 초기화 (안에 있는 내용 초기화)
//        //(객체 생성 시 최초 1회 실행)
//        acc.initAccount();
//
    }
}
