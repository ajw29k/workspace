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

    //학생 목록 조회
    @Override
    public List<StuInfoVO> select() {
        List<StuInfoVO> list = sqlSession.selectList("dbMapper.listAll");
        return list;
    }

    //학생정보 입력
    @Override
    public void insert(StuInfoVO stuInfoVO) {
        sqlSession.insert("dbMapper.insert",stuInfoVO);
    }

    //선택한 학생 상세정보
    @Override
    public StuInfoVO detail(int stuNum) {
        StuInfoVO stuInfoVO =sqlSession.selectOne("dbMapper.student",stuNum);
        return stuInfoVO;
    }

    @Override
    public void deleteStudent(int stuNum) {
          sqlSession.delete("dbMapper.godelete",stuNum);
    }

    @Override
    public void updatestudent(StuInfoVO stuInfoVO) {
        sqlSession.update("dbMapper.goupdate" , stuInfoVO);
    }

    //선택한 학생의 정보
//    @Override
//    public void detail(StuInfoVO stuInfoVO) {
//        sqlSession.selectList("dbMapper.student",stuInfoVO);
//
//    }





}
