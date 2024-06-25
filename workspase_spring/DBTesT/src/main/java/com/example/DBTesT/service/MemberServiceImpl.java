package com.example.DBTesT.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//TEST_MEMBER 테이블에 데이터를 조작하는 DB
@Service("memberService")
public class MemberServiceImpl implements MemberService{

    //SqlsessionTemplate 객체 : 쿼리 실행을 위한 메서드를 가지고 있는 객체
    //쿼리 실행을 위한 메서드
    //데이터 삽입(INSERT) : sqlSession.insert("쿼리가 있는 mapper의  mapper파일의 namesapce.쿼리 id", [실행할 쿼리의 빈값을 채울 데이터]);
    //데이터 삽제(DELETE) : sqlSession.delete();"쿼리가 있는 mapper의  mapper파일의 namesapce.쿼리 id");
    //데이터 수정(UPDATE) : sqlSession.update();"쿼리가 있는 mapper의  mapper파일의 namesapce.쿼리 id");
    //데이터 조회(SELECT) : sqlSession.selectOne();"쿼리가 있는 mapper의  mapper파일의 namesapce.쿼리 id")
    //                    sqlSession.selectList();"쿼리가 있는 mapper의  mapper파일의 namesapce.쿼리 id")
    @Autowired

    private SqlSessionTemplate sqlsession;

    //TEST_MEMEBER 테이블에 데이터 1개 삽입
    @Override
    public void insertMember() {
        sqlsession.insert("memberMapper.insert1");
    }

    @Override
    public void insertMemeber2() {
        //쿼리가 있는 mapper파일의 namespace.쿼리 id
        sqlsession.insert("memberMapper.insert2", 23);
    }
}
