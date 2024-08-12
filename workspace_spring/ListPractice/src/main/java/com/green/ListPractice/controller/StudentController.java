package com.green.ListPractice.controller;

import com.green.ListPractice.service.StudentService;
import com.green.ListPractice.vo.StudentVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class StudentController {
    //학생 여러명이 저장될 수 있는 공간 생성
    StudentService studentService = new StudentService();

    //학생목록페이지
    @GetMapping("/stu_list")
    public String stuList(Model model){

        //학생 목록 데이터 받아오기
        List<StudentVO> list = studentService.getStuList();

        //학생 목록을 html로 전달
        model.addAttribute("stuList", list);
        return "stu_list";
    }

    @GetMapping("/reg_student")
    public String regstu(){
        return "reg_student";
    }

    //학생등록
    @PostMapping("/reg")
    public String reg(StudentVO studentVO){
        System.out.println(studentVO);

        studentService.regStudent(studentVO);

        return "redirect:/stu_list";
    }

    //상세페이지
    @GetMapping("/getname")
    public String name(@RequestParam(name = "name") int num, Model model){
        System.out.println();

        //내가 클릭한 학생 한명을 검색(학번을 알면 된다)
        StudentVO student = studentService.regGet(num);

        //학생 상세 정보 데이터를 html로 전달
        model.addAttribute("student", student);
        return "student_detail";
    }

    //학생 정보 수정 페이지로 이동
    @GetMapping("/goin")
    public String goin(@RequestParam(name = "stuNum") int num ,Model model){

        //정보를 수정할 학생의 원래 정보를 html에 전달
        //1.정보를 수정할 학생 한명을 찾는다.
        StudentVO student = studentService.regGet(num);
        //2. 수정할 학생을 html로 전달
        model.addAttribute("student",student);
        System.out.println(student);
        return "/update_student";
    }

    // 학생 삭제 + 목록페이지로 이동
    @GetMapping("/remove")
    public String stuRemove(@RequestParam(name="stuNum") int num){

        //학생 삭제
        studentService.stuRemove(num);

        //목록페이지로 이동
        return "redirect:/stu_list";
    }

    //정보 수정한 데이터를 상세 페이지로 이동
    @PostMapping("/updateStu")
    public String updateStu(StudentVO studentVO){

        //학생 정보 수정
        studentService.updateStu(studentVO);

        //3번

        return "redirect:/getname?name=" + studentVO.getNum();
    }

}
