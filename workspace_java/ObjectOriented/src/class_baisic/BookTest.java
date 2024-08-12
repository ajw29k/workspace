package class_baisic;

public class BookTest {
    public static void main(String[] args) {
        Book book = new Book("java","kim",1000);
        System.out.println(book.title);

        Book book1 = new Book("python", "lee", 2000);
        System.out.println(book1.title);

        Book book3 = book;
        System.out.println(book.title);//java
        System.out.println(book3.title);//java
        book.title = "c++";
        System.out.println(book.title);//c++
        System.out.println(book3.title);//c++
        //기본자료형
        int num = 5;
        int num2 = num;
        double num3 = num2;

        /*
        int byte short long
        float double
        char
        boolean
        */




    }
}
