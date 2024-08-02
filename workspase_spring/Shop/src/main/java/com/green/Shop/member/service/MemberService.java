package com.green.Shop.member.service;

import com.green.Shop.member.vo.MemeberVO;

public interface MemberService {
    //회원가입
    void memberInsert(MemeberVO memeberVO);

    //id중복확인
    boolean checkId(String memId);

    //로그인
    MemeberVO memberLogin(MemeberVO memeberVO);
}
