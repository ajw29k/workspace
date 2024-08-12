package com.green.ReactStudent.constroller;

import com.green.ReactStudent.service.StuServiceImpl;
import com.green.ReactStudent.vo.StuInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StuController {
    @Resource(name = "stuService")
    private StuServiceImpl stuService;

    //학생 정보 조회
    @GetMapping("/stuList")
    public List<StuInfoVO> stuList(){
        stuService.stuList();
        return stuService.stuList();
    }

    //학생 상세정보 조회
    @GetMapping("/student/{stuNum}")
    public StuInfoVO student(@PathVariable("stuNum") int stuNum){
        return stuService.student(stuNum);
    }

    //학생 등록
    @PostMapping("/stuInsert")
    public void stuInsert(@RequestBody StuInfoVO stuInfoVO){
        System.out.println(stuInfoVO);
        stuService.stuInsert(stuInfoVO);
    }

    //삭제할 학생 목록을 불러오기
    @GetMapping("/stuDelete")
    public List<StuInfoVO> delStuList(){
        return stuService.stuList();
    }

    //학생 삭제
    @GetMapping("/stuDelete/{stuNum}")
    public void stuDelete(@PathVariable(name ="stuNum") int stuNum){
        System.out.println(stuNum);
        stuService.stuDelete(stuNum);
    }

    //성적 관리 (점수 입력)
    @PostMapping("/stuInfo/{stuNum}")
    public void stuUpdate(@RequestBody StuInfoVO stuInfoVO){
        stuService.goUpdate(stuInfoVO);
    }
}
