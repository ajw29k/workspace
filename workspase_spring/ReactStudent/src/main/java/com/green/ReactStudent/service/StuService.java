package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuInfoVO;

import java.util.List;

public interface StuService {
    //학생정보조회
    List<StuInfoVO> stuList();

    //학생 상세정보 조회
    StuInfoVO student(int stuNum);

    //학생등록
    void stuInsert(StuInfoVO stuInfoVO);

    //학생 삭제
    List<StuInfoVO> delStuList();
    void stuDelete(int stuNum);

    //성적관리
    void goUpdate(StuInfoVO stuInfoVO);
}
