package com.green.Board.controller;

import com.green.Board.service.MemberServiceImpl;
import com.green.Board.vo.MemberVO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j //로그 남길때 쓰는 어노테이션, 모든 클래스 위에서 사용가능
@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name = "memberService")
    private MemberServiceImpl memberService;
    //회원 리스트
    @GetMapping("/list")
    public List<MemberVO> getMemberList(){
        return memberService.getMemberList();
    }
    //회원 ID 중복??
    @GetMapping("/checkId/{inputId}")
    public boolean isDuplicateId(@PathVariable("inputId") String inputId){
        log.info("java");
        // ture -> 중복된 id가 있음 사용불가
        // false-> id 사용 가능

        return memberService.isDuplicateId(inputId);
    }

    //회원 가입 페이지
    @PostMapping("/join")
    public void insertMember(@RequestBody MemberVO memberVO){
        log.info("================ join() 메서드 실행 =======================");
        log.info("====== memberVO에 전달된 데이터 ===========");
        log.info(memberVO.toString());
        log.info("====== 데이터 확인 끝 ===========");
        memberService.insertMember(memberVO);
    }

    //로그인 페이지
    @PostMapping("/login")
    public void login(@RequestBody MemberVO memberVO){
        memberService.login(memberVO);

    }
}
