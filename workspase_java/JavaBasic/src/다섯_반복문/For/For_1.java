package 다섯_반복문.For;

import com.sun.source.doctree.SummaryTree;

public class For_1 {
    public static void main(String[] args) {
//        int i = 1;
//
//        while(i < 11){
//            System.out.print(i + " ");
//            i++;
//        }
//        for(int i = 1; i < 11; i++){
//            System.out.print(i + " ");
//
//        }

        //1~10까지 합
        int sum = 0;
        for (int i = 1; i < 11; i++){
            sum= sum+i;
        }
        System.out.println(sum);
        int i = 0,k = 0;
        for(i=1; i<100; i++){
            k +=1;
            if(k >100)
                break;
        }
        System.out.println(i);
    }
}
