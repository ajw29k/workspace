package 상속;

public class ManTest {
    public static void main(String[] args) {
        BisinessMan bm = new BisinessMan();
        System.out.println(bm.company);
        bm.tellCompany();

        System.out.println(bm.name);
        bm.tellName();
    }
}