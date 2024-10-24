import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

//정의되어 있는 함수형 인터페이스 연습용
public class DefinedFunctional {
    //Predicate 미사용 메서드
    // 1. 매개변수로 정수형 리스트가 들어오면 그 리스트의 요소중 짝수만 출력
    public static void pringEvenOfList(List<Integer> list1){
         for(int e : list1){
             if(e % 2 == 0){
                 System.out.print(e + " ");
             }
         }

    }
    // 2. 매개변수로 정수형 리스트가 들어오면 그 리스트의 요소중 홀수만 출력
    public static void pringOddOfList(List<Integer> list1){
        for(int e : list1){
            if(e % 2 != 0){
                System.out.print(e + " ");
            }
        }

    }
    // 3. 매개변수로 정수형 리스트가 들어오면 리스트의 요소 중 짝수의 합 출력
    public static void pringSumOfList(List<Integer> list1){
        int sum = 0;
        for(int e : list1){
            if(e % 2 == 0){
                sum += e;
            }
        }
        System.out.println(sum);
    }

    //Predicate<T> -> boolean test(T t) 연습용 메서드
    public static void printOfList(List<Integer> list, Predicate p){
        for(int e : list){
            if(p.test(e)){
                System.out.println(e);
            }
        }
    }

    //Supplier<T> -> T get()
    public static List<Integer> makeIntList(Supplier<Integer> s, int n){
        List<Integer> list = new ArrayList<>();

        for(int i = 0 ; i < n ; i++){
            list.add(s.get());
        }

        return list;
    }

    //Function<T, R> -> R apply(T t) 연습 메서드
    public static List<Integer> getIntListFromString(Function<String,Integer> f, List<String> list){
        List<Integer> result = new ArrayList<>();

        for (String e : list){
            result.add(f.apply(e));
        }
        return result;
    }
}
