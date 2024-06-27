package com.green.DB_Score.service;

import com.green.DB_Score.VO.StuInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("scoreService") //스코어 서비스라는 이름으로 StuServiceImpl객체
public class StuServiceImpl implements Stuservice{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<StuInfoVO> select() {
        List<StuInfoVO> list = sqlSession.selectList("dbMapper.listAll");
        return list;
    }
}
