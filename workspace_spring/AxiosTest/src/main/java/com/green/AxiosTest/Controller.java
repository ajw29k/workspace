package com.green.AxiosTest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//@Restcontroller : 컨트롤러 안의 메서드 리턴이 html파일명이 아니다
@RestController
public class Controller {
    @GetMapping("/test1")
    public String test1(){
        return "쉬는시간~";
    }
    @GetMapping("/test2")
    public int test2(){
        return 100;
    }
    @GetMapping("/test3")
    public int[] test3(){
        int[] arr = {1,2,3,4,5};
        return arr;
    }
    @GetMapping("/test4")
    public List<ItemVO> test4(){
        //ItemVO 객체를 세 개 리액트로 전달
        ItemVO itemVO = new ItemVO(1,"처음 만나는 자바",20000,"소개1","book_1.jpg");
        ItemVO itemVO1 = new ItemVO(2,"자바 디자인 패턴",25000,"소개2","book_2.jpg");
        ItemVO itemVO2 = new ItemVO(3,"모두의 딥러닝",30000,"소개3","book_3.jpg");
        List<ItemVO> list = new ArrayList<>();
        list.add(itemVO);
        list.add(itemVO1);
        list.add(itemVO2);
        return list;


    }

}
