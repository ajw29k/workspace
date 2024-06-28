package com.green.DB_Score.Controller;

import com.green.DB_Score.VO.StuInfoVO;
import com.green.DB_Score.service.StuServiceImpl;
import com.green.DB_Score.service.Stuservice;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class StuController {
    @Resource(name = "scoreService")
    private StuServiceImpl stuService;

    //학생정보목록 페이지
    @GetMapping("/stulist")
    public String stuList(Model model){
        List<StuInfoVO> stulist = stuService.select();
        model.addAttribute("stulist", stulist);
        return "stu_list";
    }
    //학생 입력 페이지
    @GetMapping("/regStu")
    public String regStu(){

        return "regStu";
    }
    //입력완료 후 정보목록페이지
    @PostMapping("/reg")
    public String reg(StuInfoVO stuInfoVO){
        stuService.insert(stuInfoVO);
        return "redirect:/stulist";
    }

    //학생이름 클릭시 상세페이지로 이동
    @GetMapping("/detail")
    //public String detail(StuInfoVO stuInfoVO){
    public String detail(@RequestParam(name = "stuNum") int stuNum, Model model){

        //클릭한 학생 정보를 디비에서 조회
        //stuService.detail(stuInfoVO.getStuNum()); 밑에꺼랑 같음
        StuInfoVO stuInfoVO =  stuService.detail(stuNum);
        model.addAttribute("student", stuInfoVO);

        return "stu_detail";
    }


}