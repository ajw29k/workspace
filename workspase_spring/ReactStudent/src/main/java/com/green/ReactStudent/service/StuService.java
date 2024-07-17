package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuInfoVO;

import java.util.List;

public interface StuService {
    //학생정보조회
    List<StuInfoVO> stuList();

    //학생 상세정보 조회
    StuInfoVO student(int stuNum);
    //학생등록

    //학생 삭제

    //성적관리
}
