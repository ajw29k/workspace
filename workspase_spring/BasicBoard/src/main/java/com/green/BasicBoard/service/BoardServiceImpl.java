package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //목록조회
    @Override
    public List<BoardVO> list(SearchVO searchVO) {
        List<BoardVO> list = sqlSession.selectList("boardMapper.list", searchVO);
        return list;
        //return sqlSession.selectList("boardMapper.list");
    }

    //글정보 입력
    @Override
    public void boardin(BoardVO boardVO) {
        sqlSession.insert("boardMapper.insert", boardVO);
    }

    @Override
    public BoardVO detail(int boardNum) {
        return sqlSession.selectOne("boardMapper.onesel", boardNum);
    }


}
