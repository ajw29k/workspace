package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("stuService")
public class StuServiceImpl implements StuService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<StuInfoVO> stuList() {
        return sqlSession.selectList("stuMapper.stuList");
    }

    @Override
    public StuInfoVO student(int stuNum) {

        return sqlSession.selectOne("stuMapper.studentInfo",stuNum);
    }
}
