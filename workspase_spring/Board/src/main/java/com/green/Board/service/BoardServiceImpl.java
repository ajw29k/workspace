package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<BoardVO> getBoardList() {
        return sqlSession.selectList("boardMapper.list");
    }

    @Override
    public void boardInsert(BoardVO boardVO) {
        sqlSession.insert("boardMapper.boardInsert",boardVO);
    }

    @Override
    public void boardUpdate(BoardVO boardVO) {
        sqlSession.update("boardMapper.boardUpdate",boardVO);
    }

    @Override
    public BoardVO goDetail(int boardNum) {
        return sqlSession.selectOne("boardMapper.page",boardNum);
    }

    @Override
    public void delete(int boardNum) {
        sqlSession.delete("boardMapper.delete",boardNum);
    }

    @Override
    public void update(BoardVO boardVO) {
        sqlSession.update("boardMapper.updateBoard",boardVO);
    }
}
