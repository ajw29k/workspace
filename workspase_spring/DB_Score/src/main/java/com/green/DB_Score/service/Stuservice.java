package com.green.DB_Score.service;

import com.green.DB_Score.VO.StuInfoVO;

import java.util.List;

public interface Stuservice {

    //학생 목록 조회
    List<StuInfoVO> select();

    //학생 입력
    void insert(StuInfoVO stuInfoVO);

    //선택한 학생 정보
    StuInfoVO detail(int stuNum);

    //학생삭제
    void deleteStudent(int stuNum);

    //학생 수정
    void updatestudent(StuInfoVO stuInfoVO);


}
