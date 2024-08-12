package com.green.Board.service;

import com.green.Board.vo.ReplyVO;

import java.util.List;

public interface ReplyService {
    List<ReplyVO> list(int boardNum);

    //댓글 등록
    void replyInsert(ReplyVO replyVO);

    //댓글 삭제
    void replyDelete(int replyNum);

    //삭제
    void goDelete(int boardNum);
}
