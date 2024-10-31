import java.util.ArrayList;
import java.util.Scanner;

// 같은 숫자 3개면 만원+(같은숫자)*1000 상금
// 같은 숫자 2개면 만원+(같은숫자)*100 상금
// 모두 다른 숫자면 (가장 큰 숫자)*100 상금

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> rol = new ArrayList<>();
        String s = sc.nextLine();
        String[] s1 = s.split(" ");
        int money = 0;
        int max = 0;
        for (int i = 0; i < s1.length; i++){
            rol.add(Integer.parseInt(s1[i]));

        }
        if (rol.get(0) == rol.get(1) && rol.get(0) == rol.get(2)) {
            money = 10000 + rol.get(0) * 1000;
            System.out.println(money);
        } else if (rol.get(0) != rol.get(1) && rol.get(0) != rol.get(2) && rol.get(1) != rol.get(2)) {
            for (int i = 0; i < rol.size(); i++){
                if (rol.get(i) > max){
                    max = rol.get(i);
                }
            }
            System.out.println(max*100);
        }else if (rol.get(0) == rol.get(1) && rol.get(0) != rol.get(2)){
            money = 10000+rol.get(0)*100;
            System.out.println(money);
        } else if (rol.get(0) == rol.get(2) && rol.get(1) != rol.get(2)) {
            money = 10000+rol.get(0)*100;
            System.out.println(money);
        } else if (rol.get(1) == rol.get(2) && rol.get(1) != rol.get(0)){
            money = 10000+rol.get(1)*100;
            System.out.println(money);
        }
    }
}