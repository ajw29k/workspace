package com.green.Board.controller;

import com.green.Board.service.BoardServiceImpl;
import com.green.Board.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {
    @Resource(name = "boardService")
    private BoardServiceImpl boardService;

    //게시글 목록
    @GetMapping("/list")
    public List<BoardVO> getBoardList(){
        return boardService.getBoardList();
    }


    //게시글 목록
    @GetMapping("/detail")
    public String getDetail(){
        return "게시글 상세";
    }

}
