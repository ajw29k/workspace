package com.green.ReactBoard.service;

import com.green.ReactBoard.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 조회
    List<BoardVO> getBoardList();

    //게시글 글등록
    void getBoardInsert(BoardVO boardVO);

    //게시글 상세조회
    BoardVO getBoardDetail(int boardNum);
}
