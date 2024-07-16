package com.green.ReactBoard.controller;

import com.green.ReactBoard.service.BoardService;
import com.green.ReactBoard.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController 어노테이션 붙은 클래스는 컨트롤러 역할을 한다
//@Controller 어노테이션과 다른 점
// 1. 해당 클래스의 리턴은 html 파일명이 아니다
// 2. 리턴되는 것은 react로 만든 화면에 보여줄 데이터를 리턴한다
// 3. 메서드의 리턴타임을 잘 지정해야 함!

@RestController
public class BoardController {
    @Resource(name = "boardService")
    private BoardService boardService;

    @GetMapping("/boardList")
    public List<BoardVO> getBoardList(){

        return boardService.getBoardList(); //html 파일이 아님
    }

    @PostMapping("/writeForm")
    public void getWrite(@RequestBody BoardVO boardVO){
        System.out.println(boardVO);



    }

    @GetMapping("/boardDetail/{boardNum}")
    public BoardVO  detail(@PathVariable("boardNum") int boardNum){
        return boardService.getBoardDetail(boardNum);

    }
}
