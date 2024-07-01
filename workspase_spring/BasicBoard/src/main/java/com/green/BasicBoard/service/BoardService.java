package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 조회
    List<BoardVO> list(SearchVO searchVO);

    //게시글 등록
    void boardin(BoardVO boardVO);

    //게시글 상세조회
    BoardVO detail(int boardNum);
    //게시글 삭제

    //게시글 수정

    //조회수 증가
}
