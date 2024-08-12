package com.green.SpringFirst;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.sound.midi.Soundbank;

@Controller
public class FirstcController {

    @GetMapping("/a")
    public String goFirst(){
        System.out.print(111);
        return "first";
    }
    @GetMapping("/b")
    public String goSecond(){
        System.out.print(2222);
        return "second";
    }
    @GetMapping("/c")
    public String goThird(){
        return "third";
    }

    @GetMapping("/login")
    public String gologin(){
        return "login";
    }
    @GetMapping("/loginResult")
    public String loginResult(){
        System.out.println("loginResult 메서드 실행");
        return "";
    }

}

