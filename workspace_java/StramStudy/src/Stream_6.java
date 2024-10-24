
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class Stream_6 {
    public static void main(String[] args) {

        List<String> fruitList = Arrays.asList("Apple","Orange","Kiwi");

        // Function<T> -> R apply(T t)
        // BinaryFunction<T> -> R apply(T t, T t)
        // Operator<T> -> T apply(T t)
        // BinaryOperator<T> -> T apply(T t T t)
        String data = fruitList.stream()
                .reduce("",(a,b) -> {return a.length() > b.length() ? a : b ;});
                //reduce의 첫번째 매개변수 : 리스트의 0번째 요소 추가
        System.out.println(data);

    }
}
