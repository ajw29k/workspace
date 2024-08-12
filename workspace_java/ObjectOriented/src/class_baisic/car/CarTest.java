package class_baisic.car;

public class CarTest {
    public static void main(String[] args) {
        Car c1 = new Car();

        //c1의 변수를 출력
        System.out.println(c1.brand);
        System.out.println(c1.price);

        //c1 변수의 값 변경
        c1.brand = "현대";
        c1.price = 100;

        System.out.println(c1.brand);
        System.out.println(c1.price);

        Car c2 = new Car();
        c2.printCarinto();
        c2.setbrand("기아");
        c2.setmodelName("K3");
        c2.setsetCarNumber("5050");
        c2.setPrice(3000);
        c2.setOwner("KIA");
        c2.printCarinto();

    }
}
