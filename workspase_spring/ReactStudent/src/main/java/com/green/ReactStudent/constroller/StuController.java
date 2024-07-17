package com.green.ReactStudent.constroller;

import com.green.ReactStudent.service.StuServiceImpl;
import com.green.ReactStudent.vo.StuInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
