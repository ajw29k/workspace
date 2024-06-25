package com.example.DBTesT.controller;

import com.example.DBTesT.service.MemberService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {
    @Resource(name = "memberService")
    private MemberService memberService;

    //이 메서드가 실행되면 TEST_MEMBER 테이블에 1개의 데이터가 INSERT 됨
    @GetMapping("/insert1")
    public String insert1(){
        //memberService.insertMember();
        memberService.insertMemeber2();

        return "insert_1";
    }


}
