package com.green.Board.service;


import com.fasterxml.jackson.core.sym.Name;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{
    @Autowired
    SqlSessionTemplate sqlSession;

}
