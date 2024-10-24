import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

//중간 연산 : filter(), map(),mapToInt()
//최종 연산 : reduce(), sum(), forEach(), collect(), count(), [average(), min(), max()]
public class Stream_5 {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,2,3,4,5);

        int sum = list.stream().mapToInt(num -> num).sum();
        long count = list.stream().mapToInt(num -> num).count();
        System.out.println(count);

        OptionalInt min = list.stream().mapToInt(num -> num).min();
        //값이 없을때 오류남
        System.out.println(min.getAsInt());
        //값이 있을때만 값을 출력하는 코드
        min.ifPresent(n -> System.out.println(n));


    }
}
