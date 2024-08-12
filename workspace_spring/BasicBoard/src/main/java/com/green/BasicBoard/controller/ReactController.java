package com.green.BasicBoard.controller;

import com.green.BasicBoard.service.BoardServiceImpl;
import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReactController {
    @Resource(name = "boardService")
    private BoardServiceImpl boardService;

    //RequestMapping = get,post 둘다 가능
    @RequestMapping("/list")
    public List<BoardVO> boardList(Model model, SearchVO searchVO){

        //목록조회
        List<BoardVO> list =boardService.list(searchVO);
        return list;
    }

}
