import java.util.Arrays;

public class Stram_1 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        //정수가 저장된 배열에서 짝수의 합을 출력(기존방식)
        int sum = 0;

        for(int e : arr){
            if(e % 2 == 0){
                sum +=e;
            }
        }
        System.out.println(sum);
        //정수가 저장된 배열에서 짝수의 합을 출력(스트림 사용)

        //Preadicate<T> -> boolean x(T t)
        //IntPreadicate<T> -> boolean x(int t)
        //스트림의 마지막은 항상 최종연산으로 끝낸다.
        //중간 연산은 필요 시 여러개 연결 가능,
        //중간 연산끼리의 순서는 상관없음
        int result = Arrays.stream(arr) // 배열을 스트림화 시킨 것
                .filter(num -> num % 2 == 0) //중간 연산
                .sum(); //최종 연산
        System.out.println(result);


        //스트림을 사용하여 아래 주어진 배열에서
        //짝수이면서 5보다 큰 데이터의 합을 출력
        int[] arr2 = {2, 6, 10 ,1, 7 ,3};

        int result2 = Arrays.stream(arr2)
                .filter(num -> num > 5)
                .filter(num -> num % 2 ==0)
                .sum();
        System.out.println(result2);

        int result3 = Arrays.stream(arr2).sum();
        System.out.println(result3);
        int height = 0;
        int[] aa ={149, 180, 192, 170};
        long result4 = Arrays.stream(aa).filter(num -> num > height).count();
        System.out.println(result4);
    }

}
