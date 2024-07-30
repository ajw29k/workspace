package com.green.Board.controller;

import com.green.Board.service.BoardService;
import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;
import jakarta.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {
    private static final Logger log = LoggerFactory.getLogger(BoardController.class);
    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 목록
    @PostMapping("/list")
    public List<BoardVO> getBoardList(@RequestBody SearchVO searchVO){
        log.info(searchVO.toString());
        return boardService.getBoardList(searchVO);
    }

    //게시글 작성
    @PostMapping("/write")
    public void boardInsert(@RequestBody BoardVO boardVO){
         boardService.boardInsert(boardVO);
    }

    //게시글 상세목록
    @GetMapping("/detail/{boardNum}")
    public BoardVO getDetail(@PathVariable("boardNum") int boardNum){
        return boardService.goDetail(boardNum);
    }

    //게시글 수정
    @PostMapping("/update/{boardNum}")
    public void boardUpdate(@RequestBody BoardVO boardVO){
        boardService.boardUpdate(boardVO);
    }

    //게시글 삭제
    @GetMapping("/delete/{boardNum}")
    public void delete(@PathVariable("boardNum") int boardNum){
        boardService.delete(boardNum);
    }


}
