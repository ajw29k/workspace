package collection.list.문제;

import java.util.ArrayList;
import java.util.List;

public class TestMember {
    public static void main(String[] args) {
        //Member 객체를 저장할 수 있는 list 객체 생성
        List<Member> memberList = new ArrayList<>();

        Member m1 = new Member();
        m1.setId("java");
        m1.setPw("1111");
        m1.setName("김");
        m1.setAge(10);

        Member m2 = new Member("python","11211","무무김",20);
        Member m3 = new Member("c++","2222","박박박",35);

        memberList.add(m1);
        memberList.add(m2);
        memberList.add(m3);

        for (Member member : memberList){
            System.out.println(member);
        }
        int sum = 0;
        for (int i = 0 ; i < memberList.size(); i++){
            sum = sum + memberList.get(i).getAge();
        }
        System.out.println(sum);

        //8번 list 에 저장된 회원 중 id가 java인 회원을 지우는 코드
        int index = 0;
        for (int i= 0; i < memberList.size(); i++){
            if (memberList.get(i).getId().equals("java")){
                index = i;

            }
        }
        memberList.remove(index);
        System.out.println(memberList);



    }
}
