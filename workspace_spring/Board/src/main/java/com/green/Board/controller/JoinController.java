package com.green.Board.controller;

import com.green.Board.service.JoinService;
import com.green.Board.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/join")
public class JoinController {
    @Resource(name ="joinService")
    private JoinService joinservice;

    @GetMapping("/bbb")
    public List<BoardVO> bbb(){
        List<BoardVO> list = joinservice.bbb();
//        System.out.println(list.get(2).getMemberVO().getMemName());
        return list;
    }

    @GetMapping("/ccc")
    public BoardVO ccc(){

        return joinservice.ccc();
    }
}
