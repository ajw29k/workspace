package com.green.SecurityTest.vo;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@RequiredArgsConstructor
// 유저의 정보를 저장 + security 보안 내용이 추가된 클래스
// 데이터베이스에서 조회한 로그인 하려는 회원의 정보를 담을 통
public class CustomUserVO implements UserDetails {
    private final MemberVO memberVO;

    // 유저의 권한 목록 조회
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //권한 목록을 저장할 통
        Collection<GrantedAuthority> collection = new ArrayList<>();

        //memberVO에 저장된 권한을 하나씩 빼서 collection객체에 추가
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return memberVO.getMemRole();
            }
        });
        return collection;
    }

    //유저의 비밀번호 리턴
    @Override
    public String getPassword() {
        return memberVO.getMemPw();
    }

    //유저의 아이디 리턴
    @Override
    public String getUsername() {
        return memberVO.getMemId();
    }

    //
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //잠금
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //인증 유효기간
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //사용 가능한 계정?
    @Override
    public boolean isEnabled() {
        return true;
    }
}
