package 일곱_메서드;

import java.util.Scanner;

public class Test_1_10_12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //10번
        myPro("김형진",33,"울산");
        //11번
        gg(6);
        String name = sc.next();
        int age = sc.nextInt();
        String adr = sc.next();
        ff(name,age,adr);


    }
        //10번
    public static void myPro(String name,int age, String adr){
            System.out.println("이름은 "+name+"입니다");
            System.out.println("나이는 "+age+"입니다");
            System.out.println("주소는 "+adr+"입니다");
    }
        //11번
    public static void gg(int i){
        System.out.println(i);

    }
    public static void ff(String i,int age, String adr){
        System.out.println("이름은 "+i+"입니다");
        System.out.println("나이는 "+age+"입니다");
        System.out.println("주소는 "+adr+"입니다");
    }
}
