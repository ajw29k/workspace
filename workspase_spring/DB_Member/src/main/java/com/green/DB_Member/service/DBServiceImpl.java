package com.green.DB_Member.service;

import com.green.DB_Member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("dbService")
public class DBServiceImpl implements DBService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //실행할 쿼리가 select면 selectOne(),selectList() 메서드 중 하나사용
    //조회 결과 데이터가 0행 혹은 1행이면 selectOne() 사용
    //조회 결과 데이터의 행 개수가 고정되지 않으면 selectList() 사용
    //회원번호가 1번인 회원의 이름을 조회하는 쿼리를 실행할 메서드
    @Override
    public String select1() {
        String name = sqlSession.selectOne("dbMapper.select1"); //(실행할 매퍼,그안에 쿼리 id)
        return name;
    }

    //전달된 회원번호를 지닌 회원의 나이를 조회
    @Override
    public int select2(int memNum) {
        int age = sqlSession.selectOne("dbMapper.select2", memNum);
        return age;
    }

    //나이가 20살 이상인 회원의 이름을 조회
    @Override
    public List<String> select3(int memAge) {
        List<String> nameList = sqlSession.selectList("dbMapper.select3", memAge);
        return nameList;
    }

    //전달받은 회원번호를 지닌 회원의 회원번호, 이름, 나이, 주소를 조회
    @Override
    public MemberVO select4(int memNum) {
        MemberVO member = sqlSession.selectOne("dbMapper.select4",memNum);
        return member;
    }

    //전달받은 회원번호를 지닌 회원의 회원번호, 이름, 나이, 주소를 조회
    @Override
    public List<MemberVO> select5() {
        List<MemberVO> memberList = sqlSession.selectList("dbMapper.select5");
        return memberList;
    }

    //전달받은 회원번호를 가진 회원을 삭제
    @Override
    public int delete(int memNum) {
          int result= sqlSession.delete("dbMapper.delete", memNum);
        return result;
    }

    @Override
    public void insert(MemberVO memberVO) {
        sqlSession.insert("dbMapper.insert",memberVO);

    }

    @Override
    public int update(MemberVO memberVO) {
        int result = sqlSession.update("dbMapper.update",memberVO);
        return result;
    }


}

