package com.green.SecurityTest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String main(){
        return "main is running~";
    }
    @GetMapping("/test")
    public String test(){
        return "tset is running~";
    }
}