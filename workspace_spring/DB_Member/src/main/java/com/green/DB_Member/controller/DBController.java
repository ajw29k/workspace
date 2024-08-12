package com.green.DB_Member.controller;

import com.green.DB_Member.service.DBServiceImpl;
import com.green.DB_Member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class DBController {
    @Resource(name = "dbService")
    private DBServiceImpl dbService;

    //회원번호가 1번인 회원의 이름을 조회
    @GetMapping("/select1")
    public String select1(){
        String name = dbService.select1();
        System.out.println("조회한 이름 : " + name);
        return "db_result";
    }

    // 전달된 회원번호를 지닌 회원의 나이를 조회
    @GetMapping("/select2")
    public String select2(){
       int age = dbService.select2(5);
        System.out.println("조회한 나이는 " + age );
        return "db_result";
    }

    //나이가 20살 이상인 회원의 이름을 조회
    @GetMapping("/select3")
    public String select3(){
        List<String> nameList= dbService.select3(40);

        for (String name : nameList){
            System.out.println("조회된 이름 : " + name);
        }
        return "db_result";
    }

    //전달받은 회원번호를 지닌 회원의 회원번호, 이름, 나이, 주소를 조회
    @GetMapping("/select4")
    public String select4(){
        MemberVO member = dbService.select4(2);
        System.out.println(member);
        return "db_result";
    }

    //모든 회원의 회원번호, 이름, 나이, 주소를 조회
    @GetMapping("/select5")
    public String select5(){
        List<MemberVO> memberList = dbService.select5();
        for (MemberVO e : memberList){
            System.out.println(e);
        }

        return "db_result";
    }

    //전달받은 회원번호를 가진 회원을 삭제
    @GetMapping("/delete")
    public String delete(){
        int result = dbService.delete(2);
        System.out.println("삭제한 행 개수 : " +result);
        return "db_result";
    }

    @GetMapping("/insert")
    public String insert(){
        MemberVO memberVO = new MemberVO();
        memberVO.setMemNum(177);
        memberVO.setMemName("호구");
        memberVO.setMemAge(80);
        memberVO.setMemAddr("집없음");
        dbService.insert(memberVO);
        return "db_result";
    }

    @GetMapping("/update")
    public String update(){
        MemberVO VO = new MemberVO();
        VO.setMemNum(9);
        VO.setMemName("java");
        VO.setMemAge(70);
        VO.setMemAddr("집없음");

        int result = dbService.update(VO);
        System.out.println("업데이트 된 행 개수 : " + VO);

        return "db_result";
    }

}
