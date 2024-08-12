package 일곱_메서드.문제;

public class Test_2_4_6 {
    public static void main(String[] args) {

        System.out.println(test4("잠이"," 온다"));
//
//        System.out.println(test5(1));
//        System.out.println(test6(54));
//        System.out.println(test7(50));
//        System.out.println(test8(22,29,10));
        System.out.println(test9(5));
    }

    public static String test4(String a, String b){
        return a + b;
    }
    public static String test5(int i){
        if (i > 89){
            return "A";
        }
        else if (i > 69){
            return "B";
        }
        else{
            return "C";
        }
    }

    public static String test6(int a){
        //문자열>>정수
        int aa= Integer.parseInt("10");
        //정수>>문자열
        String.valueOf(10);

        return a + "";
    }
    public static double test7(int a){
        return a = a * a;
    }
    public static double test8(int a, int b, int c){
        return (a+b+c)/ (double)3;
    }
    public static int test9(int a){
        int av =0;
        for (int i = 1 ; i < a +1; i++){
            if (i % 2 == 1){
                av = av + i;
            }
        }
        return av;
    }
}
