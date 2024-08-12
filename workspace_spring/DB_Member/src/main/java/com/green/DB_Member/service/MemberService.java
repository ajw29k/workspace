package com.green.DB_Member.service;

import com.green.DB_Member.vo.MemberVO;

//TEST_MEMVER 테이블의 디비 조작 기능을 정의
public interface MemberService {

    //회원목록 조회    SELECT

    //회원상세정보조회  SELECT

    //회원정보등록     INSERT
    void insertMember(MemberVO memberVO);

    //회원삭제        DELETE

    //회원정보수정??   UPDATE
}
