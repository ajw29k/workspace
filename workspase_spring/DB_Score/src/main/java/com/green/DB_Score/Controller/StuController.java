package com.green.DB_Score.Controller;

import com.green.DB_Score.VO.StuInfoVO;
import com.green.DB_Score.service.StuServiceImpl;
import com.green.DB_Score.service.Stuservice;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
    public String reg(){

        return "redirect:/stulist";
    }


}
