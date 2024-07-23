package com.green.Board.service;

import com.green.Board.vo.MemberVO;

import java.util.List;

public interface MemberService {
    List<MemberVO> getMemberList();

    //중복된 ID??
    boolean isDuplicateId(String memId);

    //회원가입
    void insertMember(MemberVO memberVO);

    //로그인
    MemberVO login(MemberVO memberVO);

}
