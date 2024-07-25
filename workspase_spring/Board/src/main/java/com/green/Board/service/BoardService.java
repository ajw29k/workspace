package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import com.green.Board.vo.MemberVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> getBoardList();

    //게시글 등록
    void boardInsert(BoardVO boardVO);

    //게시글 수정
    void boardUpdate(BoardVO boardVO);

    //게시글 상세페이지
    BoardVO goDetail(int boardNum);

    //게시글 삭제
    void delete(int boardNum);

    void update(BoardVO boardVO);
}
