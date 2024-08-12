package com.green.Datapractice.controller;

import com.green.Datapractice.vo.MemberInfo;
import com.green.Datapractice.vo.SurveyVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class JoinController {
    //데이터전달1
    @GetMapping("/reg_member")
    public String reg_member(){


        return "reg_member";
    }

    //커맨드 객체는 model을 사용하지 않아도 자동으로 html로 전달된다.
    //이때 넘어가는 데이터는 클래스명에서 앞글자만 소문자로 바꾼 이름으로 넘어간다!
    @PostMapping("/member3")
    public String member_info(MemberInfo memberInfo, Model model){
        model.addAttribute("member", memberInfo);
        System.out.println(memberInfo);
        return "member_info";
    }

    //데이터전달2
    @GetMapping("/survey")
    public String survey(){
        return "survey";
    }

    @PostMapping("/result")
    public String survey_result(SurveyVO surveyVO){
        System.out.println(surveyVO);
        return "survey_result";
    }


    @GetMapping("/a")
    public String inputName(){
        return "input_name";
    }

    @PostMapping("/b")
    public String inpuAge(@RequestParam(name = "name") String name, Model model){
        System.out.println(name);
        model.addAttribute("name",name);
        return "input_age";
    }

    @PostMapping("/c")
    public String show(@RequestParam(name = "name") String name, @RequestParam(name = "age") int age){

        return "show";

    }
}
