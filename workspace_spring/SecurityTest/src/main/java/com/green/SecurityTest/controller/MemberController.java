package com.green.SecurityTest.controller;

import com.green.SecurityTest.service.MemberService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    // 의존성 주입 방식 : 생성자 주입, setter 주입, 필드 주입
    // 필드 주입 : 이해하기는 쉬우나, 권장하지 않는 방식
//    @Resource(name = "memberService")
//    private MemberService memberService;

//    private final MemberService memberService;
//    // 생성자 주입 방식
//    @Autowired
//    public MemberController(MemberService memberService){
//        this.memberService = memberService;
//    }

    private final MemberService memberService;
    //로그인 페이지로 이동
    @GetMapping("/loginForm")
    public String loginForm(){
        return "로그인 페이지로 이동";
    }

    //회원가입 페이지로 이동
    @GetMapping("joinForm")
    public String joinForm(){
        return "회원가입 페이지로 이동";
    }
}
