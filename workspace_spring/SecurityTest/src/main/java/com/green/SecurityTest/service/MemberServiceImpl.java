package com.green.SecurityTest.service;

import com.green.SecurityTest.vo.MemberVO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("memberService")
//@RequiredArgsConstructor // lombok
// Constructor:생성자 NoArgs :매개변수X
// @RequiredArgsConstructor는 final이 붙어있는 변수를 매개변수로 갖는 생성자
// 반드시 필요한 매개변수만 받아서 생성자로 만든다
@RequiredArgsConstructor // 필수 매개변수만 받는 생성자
//@RequiredArgsConstructor =
//    @Autowired
//    public MemberServiceImpl(SqlSessionTemplate sqlSession){
//        this.sqlSession = sqlSession;
//    } 랑 같은거
public class MemberServiceImpl implements MemberService{
    //@RequiredArgsConstructor는 생성자에서 최초로 초기화가 되어야한다.
//    private final String name; //final이 붙어있는 데이터만 매개변수로 받는다.
//    private int age;

    // 생성자 의존성 주입
    private final SqlSessionTemplate sqlSession;
    /*
    @Autowired //생략을 하더라도 자동으로 @Autowired가 된다
    public MemberServiceImpl(SqlSessionTemplate sqlSession){
        this.sqlSession = sqlSession;
    }
    */

    @Override
    public void test1() {
        System.out.println(111);
    }

    @Override
    public void join(MemberVO memberVO) {
        sqlSession.insert("memberMapper.join",memberVO);
    }
}
/*
    의존성 주입 달라진점
    1. 선언한 객체 위에 어노테이션이 사라짐
    2. 선언한 변수에 final 키워가 붙는다
    3. 클래스에 @RequiredArgsConstructor 어노테이션이 붙는다
*/