package com.green.Board.controller;

import com.green.Board.service.ReplyService;
import com.green.Board.service.ReplyServiceImpl;
import com.green.Board.vo.ReplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Resource(name = "replyService")
    private ReplyService replyService;

    //댓글 목록
    @GetMapping("/list/{boardNum}")
    public List<ReplyVO> getBoardList(@PathVariable("boardNum") int boardNum){
       return replyService.list(boardNum);
    }

    //댓글 등록
    @PostMapping("/insert")
    public void getReply(@RequestBody ReplyVO replyVO){
        replyService.replyInsert(replyVO);
    }

    //댓글 삭제
    @GetMapping("/delete/{replyNum}")
    public void goDelete(@PathVariable("replyNum") int replyNum){
        replyService.replyDelete(replyNum);
    }

    @GetMapping("/godelete/{boardNum}")
    public void tdelete(@PathVariable("boardNum") int boardNum){
        replyService.goDelete(boardNum);
    }
}
