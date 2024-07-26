package com.green.Board.service;


import com.fasterxml.jackson.core.sym.Name;
import com.green.Board.vo.ReplyVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<ReplyVO> list(int boardNum) {
        return sqlSession.selectList("replyMapper.replyList",boardNum);
    }


    @Override
    public void replyInsert(ReplyVO replyVO) {
        sqlSession.insert("replyMapper.replyInsert",replyVO);
    }
}
