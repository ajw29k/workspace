package com.green.ReactBoard.service;

import com.green.ReactBoard.vo.BoardVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //게시글 조회
    @Override
    public List<BoardVO> getBoardList() {
        List<BoardVO> boardList = sqlSession.selectList("boardMapper.getBoardList");
        return boardList;
    }

    //게시글 등록
    @Override
    public void getBoardInsert(BoardVO boardVO) {
        sqlSession.insert("boardMapper.getBoardInsert",boardVO);

    }

    //게시글 상세 정보 조회
    @Override
    public BoardVO getBoardDetail(int boardNum) {
        sqlSession.selectOne("boardMapper.getBoardDetail",boardNum);
        return sqlSession.selectOne("boardMapper.getBoardDetail",boardNum);
    }

    @Override
    public void delete(int boardNum) {
        sqlSession.delete("boardMapper.numDelete",boardNum);
    }

    @Override
    public void update(BoardVO boardVO) {
        sqlSession.update("boardMapper.numUpdate",boardVO);
    }
}
