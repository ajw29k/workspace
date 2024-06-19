package com.green.Datapractice.controller;

import com.green.Datapractice.vo.ScoreVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

    @Controller
public class ScoreController {
    @GetMapping("/program")
    public String input(){
        return "program";
    }

    @PostMapping("/programIntro")
    public String intro(ScoreVO scoreVO, Model model){
        System.out.println(scoreVO);
        model.addAttribute("name", scoreVO.getName());
        return "intro";
    }

    @PostMapping("/Score")
    public String score(ScoreVO scoreVO, Model model){
        model.addAttribute("name" , scoreVO.getName());
        model.addAttribute("age" , scoreVO.getDd());
        model.addAttribute("tel" , scoreVO.getTel1());
        model.addAttribute("tel" , scoreVO.getTel2());
        model.addAttribute("tel" , scoreVO.getGender());
        scoreVO.getAvg();
        return "score";
    }

    @PostMapping("/programAll")
    public String all(ScoreVO scoreVO, Model model){
        model.addAttribute("name" , scoreVO.getName());
        model.addAttribute("age" , scoreVO.getDd());
        model.addAttribute("tel1" , scoreVO.getTel1());
        model.addAttribute("tel2" , scoreVO.getTel2());
        model.addAttribute("gender" , scoreVO.getGender());
        model.addAttribute("korScore" , scoreVO.getKorScore());
        model.addAttribute("engScore" , scoreVO.getEngScore());
        model.addAttribute("mathScore" , scoreVO.getMathScore());

        return "all";
    }

}
