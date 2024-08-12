package com.green.DB_Member.controller;

import com.green.DB_Member.service.MemberServiceImpl;
import com.green.DB_Member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller// 컨트롤러 + 객체 생성. @선언함으로 두가지 다함
public class MemberController {


    @Resource(name = "memberService") //@Autowired 사용가능
    // 맴버변수 선언
    private MemberServiceImpl memberService;

    //회원 목록 페이지
    @GetMapping("/")
    public String memberList(){
        return "member_list";
    }

    //회원 등록 페이지
    @GetMapping("/insertFrom")
    public String insertFrom(){
        return "reg_member";
    }

    //회원 등록 완료 -> 회원 목록 페이지로 이동
    @PostMapping("/insertMember")
    public String insertMember(MemberVO memberVO){

        //html에서 가져온 데이터를 TEST_MEMBER 테이블에 INSERT!
        memberService.insertMember(memberVO);
        return "redirect:/";
    }





}
