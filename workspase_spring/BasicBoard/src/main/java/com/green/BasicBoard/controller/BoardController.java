package com.green.BasicBoard.controller;

import com.green.BasicBoard.service.BoardServiceImpl;
import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class BoardController {
    @Resource(name = "boardService")
    private BoardServiceImpl boardService;

    //RequestMapping = get,post 둘다 가능
    @RequestMapping("/boardlist")
    public String boardList(Model model, SearchVO searchVO){
        //searchVO 데이터 검사
        System.out.println(searchVO);
        //목록조회
        List<BoardVO> list =boardService.list(searchVO);
        model.addAttribute("list", list);

        return "board_list";
    }

    @GetMapping("/writerform")
    public String gowrite(){

        return "write_form";
    }

    //글등록 후 목록페이지로 이동
    @PostMapping("/write")
    public String golist(BoardVO boardVO){
        boardService.boardin(boardVO);
        return "redirect:/boardlist";
    }

    //글 상세 조회
    //public String detail(StuInfoVO stuInfoVO){
    //클릭한 학생 정보를 디비에서 조회
    //stuService.detail(stuInfoVO.getStuNum()); 밑에꺼랑 같음
    @GetMapping("/detail")
    public String detail(BoardVO boardVO ,Model model){
        BoardVO boardVo =boardService.detail(boardVO.getBoardNum());
        boardService.updateReadCnt(boardVo.getBoardNum());
        model.addAttribute("board" , boardVo);
        //조회수 증가

        return "board_detail";
    }

    @GetMapping("/delete")
    public String godelete(@RequestParam(name = "boardNum") int boardNum){
        boardService.godelete(boardNum);
        return "redirect:/boardlist";
    }




}
