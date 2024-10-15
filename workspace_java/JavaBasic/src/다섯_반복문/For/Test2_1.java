package 다섯_반복문.For;

public class Test2_1 {
    public static void main(String[] args) {
        int x = 0, y = 0;
        for (int i = 1; i < 100; i++) {

            if (i % 7 == 0 || i % 9 == 0) {

                System.out.print(i + " ");

            }

        }

    }

}
