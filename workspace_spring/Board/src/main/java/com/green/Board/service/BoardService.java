package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import com.green.Board.vo.MemberVO;
import com.green.Board.vo.PageVO;
import com.green.Board.vo.SearchVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> getBoardList(PageVO pageVO);

    //게시글 등록
    void boardInsert(BoardVO boardVO);

    //게시글 수정
    void boardUpdate(BoardVO boardVO);

    //게시글 상세페이지
    BoardVO goDetail(int boardNum);

    //게시글 삭제
    void delete(int boardNum);

    //게시글 수정
    void update(BoardVO boardVO);

    //전체 게시글 갯수 조회
    int getBoardCnt();
}
