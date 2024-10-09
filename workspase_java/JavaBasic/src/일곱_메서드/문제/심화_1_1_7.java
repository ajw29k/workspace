package 일곱_메서드.문제;

public class 심화_1_1_7 {
    public static void main(String[] args) {
//        test1(3);
//        test2(30);
//        System.out.println(test3());
//        test4(4);
//        System.out.println(test4(4));
//        int[] b = {1,4,5,6,8};
//        test5(b);
        int[] a = {5,3,1,5,7};
        System.out.println(test6(a));
        String[] b = {"집","가나","안","가나"};
        System.out.println(test7(b));

    }
    public static void test1(int b) {
        for (int i = 1; i < 10; i++) {
            System.out.println(b + "*" + i + "=" +  b * i);
        }
    }
    public static void test2(int a){
        for (int i = 1; i < 101; i++){
            if (i % a == 0){
                System.out.println(i);
            }
        }
    }
    public static int test3(){
         return (int)(Math.random() * (50) + 1) ;
    }
    public static boolean test4(int a){
        return a % 2 == 0 ? true : false;
    }
    public static void test5(int[] a){
        for (int i= 0; i < a.length; i++){
            System.out.print(a[i]);
        }
    }
    public static int test6(int[] a){
        int max = 0;
        for (int i = 0; i < a.length; i++){
            if (max < a[i]){
                max = a[i];
            }
        }
        return max;
    }
    public static String test7(String[] a){///"머해","자냐","일어나"
        String b ="";
        for (int i = 0; i < a.length; i++){
            b= b + a[i] ;

        }
        return b;
    }
}
