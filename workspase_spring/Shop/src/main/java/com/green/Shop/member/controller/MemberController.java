package com.green.Shop.member.controller;

import com.green.Shop.member.service.MemberService;
import com.green.Shop.member.vo.MemeberVO;
import jakarta.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {
    private static final Logger log = LoggerFactory.getLogger(MemberController.class);
    @Resource(name = "memberService")
    private MemberService memberService;

    //회원가입
    @PostMapping("/writeForm")
    public void memberInsert(@RequestBody MemeberVO memeberVO){
        memberService.memberInsert(memeberVO);
    }

    //아이디 중복확인
    @GetMapping("/check/{memId}")
    public boolean chechId(@PathVariable("memId") String memId){
        log.info(memId);
        // ture -> 중복된 id가 있음 사용불가  log.info로 확인
        // false-> id 사용 가능
        return memberService.checkId(memId);

    }

    //로그인
    @PostMapping("/login")
    public MemeberVO memberLogin(@RequestBody MemeberVO memeberVO){
        return memberService.memberLogin(memeberVO);
    }
}
