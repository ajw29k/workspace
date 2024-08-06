package com.green.Shop.member.service;

import com.green.Shop.member.vo.MemeberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public void memberInsert(MemeberVO memeberVO) {
        sqlSession.insert("memberMapper.memberInsert",memeberVO);
    }

    @Override
    public boolean checkId(String memId) {
        String id = sqlSession.selectOne("memberMapper.checkId",memId);

        return  id !=null;
    }

    @Override
    public MemeberVO memberLogin(MemeberVO memeberVO) {
        return sqlSession.selectOne("memberMapper.login",memeberVO);

    }


}
