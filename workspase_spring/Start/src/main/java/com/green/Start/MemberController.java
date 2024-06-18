package com.green.Start;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MemberController {

    //1. 자바에서 html로 데이터를 전달하기 위해서는
    //실행되는 메서드의 매개변수의 Model 인터페이스 객체를 선언
    //2. 객체명.addAttribute메서드를 사용하여 데이터를 전달한다.

    @GetMapping("/m1")
    public String gomain(Model model){
        model.addAttribute("name","java");
        model.addAttribute("age", 10);
        return "main";
    }
    @GetMapping("/m2")
    public String goTestLogin(Model model){
        //배열 데이터 보낼때 []순번을 정해서 보내야함
        String[] hobbies = {"독서","운동","공부"};
        model.addAttribute("abc",hobbies);
        //member.getname() 같이 해야함
        Member m = new Member("콩", 40, 80);
        model.addAttribute("member",m);

        return "test_login";
    }
    @GetMapping("/m3")
    public String goTestJoin(Model model){
        List<Member> list = new ArrayList<>();

        Member m1 = new Member("임요한",41, 100);
        Member m2 = new Member("홍진호",38, 60);
        Member m3 = new Member("이영호",30, 95);

        list.add(m1);
        list.add(m2);
        list.add(m3);

        model.addAttribute("memberList",list);

        return "test_join";
    }
}
