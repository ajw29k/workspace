package collection.list.문제;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
    private List<Emp> empslist;
    private Scanner sc;

    public EmpService(){
        sc = new Scanner(System.in);

        empslist = new ArrayList<>();

        Emp e1 = new Emp(1001,"홍길동","개발부","1111-2221",200);
        Emp e2 = new Emp(1002,"동동","개발부","1111-2222",300);
        Emp e3 = new Emp(1003,"길동","영업부","1111-2223",400);
        Emp e4 = new Emp(1004,"홍동","영업부","1111-2224",250);
        Emp e5 = new Emp(1005,"정동","인사부","1111-2225",260);

        empslist.add(e1);
        empslist.add(e2);
        empslist.add(e3);
        empslist.add(e4);
        empslist.add(e5);
    }



    //1번문제
    public void login(){
        boolean isRunning = true; //while문 반복
        boolean isFind = false;
        while (isRunning) {
            System.out.print("사번 : ");
            int empNo = sc.nextInt();
            System.out.print("비밀번호(연락처의 마지막 4자리) : ");
            String pw = sc.next();

            //입력한 사번과 비밀번호 일치 여부 확인
            for (Emp e : empslist){
                if (e.getEmpNo() ==empNo &&e.getPw().equals(pw)){
                    isRunning = false;//while문 벗어남
                    System.out.println("로그인 하였습니다.");
                    System.out.println("'" + e.getName() + "'" + "님 반갑습니다.");
                    isFind = true;
                }
            }
            if (!isFind){
                System.out.println("사번 혹은 비밀번호가 일치하지 않습니다.");
            }
        }
    }

    //2번문제
    public void printDeptMoney(){
        System.out.print("부서명 : ");
        String dept = sc.next();

        int sum = 0;
        int cnt = 0;
        System.out.println("==" + dept + " 월급 현황==");
        for (int i = 0; i < empslist.size(); i++){
            if (empslist.get(i).getDept().equals(dept)){
                System.out.println(empslist.get(i));
                sum = sum + empslist.get(i).getMoney();
                cnt++;
            }
        }
        System.out.println(dept + "의 월급 총액은 " + sum + ", 평균 급여는 " + (double)sum/cnt);
    }

    //3번문제
    public void increaseMoney(){
        System.out.print("부서명 : ");
        String dept = sc.next();
        System.out.print("인상급여 : ");
        int money = sc.nextInt();
        System.out.println(dept + " 각 사원의 급여가 각각 " + money + "원씩 인상됩니다.");
        System.out.println("==월급 인상 후 " +dept +" 월급 현황==");

        //급여 인상 코드
        for (Emp e : empslist){
            if (e.getDept().equals(dept)){
                int result = e.getMoney() + money; //사원의 원래 월급 +인상급액
                e.setMoney(money + e.getMoney());
            }
        }
        for (Emp e : empslist){
            if (e.getDept().equals(dept)){
            }
            System.out.println(empslist);
        }
    }

}
