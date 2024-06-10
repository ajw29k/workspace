package class_baisic.man;

public class ManTest {
    public static void main(String[] args) {
        Man man = new Man("홍",20,"울산");


        man.setName("누구");
        man.setAge(23);
        man.setAdr("부산");
        System.out.println(man.getName());
        man.pre();
    }
}
