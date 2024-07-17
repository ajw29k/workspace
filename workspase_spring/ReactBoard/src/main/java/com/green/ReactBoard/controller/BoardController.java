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
    //글 목록 조회
    @GetMapping("/boardList")
    public List<BoardVO> getBoardList(){

        return boardService.getBoardList(); //html 파일이 아님
    }
    //글 등록
    @PostMapping("/writeForm")
    public void getWrite(@RequestBody BoardVO boardVO){
        boardService.getBoardInsert(boardVO);
        System.out.println(boardVO);



    }
    //상세정보
    @GetMapping("/boardDetail/{boardNum}")
    public BoardVO detail(@PathVariable("boardNum") int boardNum){
        return boardService.getBoardDetail(boardNum);

    }

    //삭제
    @GetMapping("/delete/{boardNum}")
    public void delete(@PathVariable("boardNum") int boardNum){
        boardService.delete(boardNum);
    }

    //수정
    @PostMapping("/update/{boardNum}")
    public void update(BoardVO boardVO){
        boardService.update(boardVO);
    }
}
