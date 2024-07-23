package com.green.Board.service;

import com.green.Board.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<MemberVO> getMemberList() {
        return sqlSession.selectList("memberMapper.memberList");
    }

    @Override
    public boolean isDuplicateId(String memId) {
        //id가 null이면 회원가입 가능
        //id가 조회되면(null 아니면) 회원가입 불가능
        String id =sqlSession.selectOne("memberMapper.isDuplicate",memId);
        return id != null;
    }

    @Override
    public void insertMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.memberInsert", memberVO);
    }

    @Override
    public MemberVO login(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.login", memberVO);
    }
}
