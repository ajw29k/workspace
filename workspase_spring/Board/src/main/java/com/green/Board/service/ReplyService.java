package com.green.Board.service;

import com.green.Board.vo.ReplyVO;

import java.util.List;

public interface ReplyService {
    List<ReplyVO> list(int boardNum);
}
