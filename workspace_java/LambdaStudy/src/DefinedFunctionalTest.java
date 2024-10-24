import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.IntStream;

public class DefinedFunctionalTest {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        DefinedFunctional.pringEvenOfList(list);
        System.out.println();
        DefinedFunctional.pringOddOfList(list);
        System.out.println();
        DefinedFunctional.pringSumOfList(list);
//        int sum = list.stream().mapToInt(Integer::intValue).sum();
//        System.out.println(sum);

        Predicate<Integer> p = (num) ->  num % 2 == 0;
        DefinedFunctional.printOfList(list, p);

        System.out.println();
        //list에서 짝수만 삭제
//        for(int i = 0; i < list.size(); i++){
//            if(list.get(i) % 2 == 0 ){
//                list.remove(i);
//                i--;
//            }
//        }
        System.out.println();
        //위의 코드를 함수형 인터페이스 사용으로 변환
        Predicate<Integer> p1 = (num) -> num >2;
        list.removeIf((num) -> num % 2 ==0);
        System.out.println(list);
        list.forEach(num -> System.out.println(num));//메서드 참조

        System.out.println();
        //Supplier<T> -> T get() 연습
//        Supplier<Integer> s = () -> {
//            Random rand = new Random();
//            return rand.nextInt(50); // 1 ~ 50까지의 수 중 랜덤 수 생성
//        };
        List<Integer> result = DefinedFunctional.makeIntList(
                () -> {
                            Random rand = new Random();
                            return rand.nextInt(50); // 1 ~ 50까지의 수 중 랜덤 수 생성
                        },5);
        result.forEach(num -> System.out.print(num + " "));

        System.out.println();

        //Consumer<T> -> void x(T t)
        list.forEach(num -> {
            System.out.println(num);
        });

        list.forEach(num -> {
            num = num + 5;
        });

        System.out.println();
        //Function<T, R> -> R apply(T t)
        List<String> strList = new ArrayList<>();
        strList.add("java");strList.add("python");strList.add("c++");

        DefinedFunctional.getIntListFromString(str -> str.length(),strList);

    }
}
