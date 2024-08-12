package com.green.Datapractice.controller;

import com.green.Datapractice.vo.ScoreVO;
import com.green.Datapractice.vo.Score_1VO;
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
        model.addAttribute("tel1" , scoreVO.getTel1());
        model.addAttribute("tel2" , scoreVO.getTel2());
        model.addAttribute("gender" , scoreVO.getGender());
        scoreVO.getAvg();
        System.out.println(scoreVO);
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

        double avg = (scoreVO.getKorScore() + scoreVO.getEngScore() + scoreVO.getMathScore()) / 3.0;
        scoreVO.setAvg(avg);
        model.addAttribute("avg", scoreVO.getAvg());
        System.out.println(scoreVO);

        return "all";
    }
    ///////////////////////////////////////////////////////////
    //시작페이지 이동
    @GetMapping("/score_first")
    public String first(){
        return "score_first";
    }
    //첫번째 페이지에서 데이터를 받아, 두번째 페이지로 이동
    @PostMapping("/score_second")
    public String second(Score_1VO score_1VO,Model model){
        System.out.println(score_1VO);

        return "score_second";
    }
    //세번째 페이지 이동
    @PostMapping("/score_third")
    public String third(Score_1VO score_1VO){
        System.out.println(score_1VO);
        return "score_third";
    }

    //네번째 페이지로 이동
    @PostMapping("/score_fourth")
    public String fourth(Score_1VO score_1VO,Model model){

        //평균
        double avg = (score_1VO.getKorScore() + score_1VO.getEngScore() + score_1VO.getMathScore()) / 3.0;
        System.out.println(score_1VO);
        model.addAttribute("avg" ,avg);

        return "score_fourth";
    }



}
