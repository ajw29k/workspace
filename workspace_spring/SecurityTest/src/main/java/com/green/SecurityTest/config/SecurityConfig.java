package com.green.SecurityTest.config;

import com.green.SecurityTest.jwt.JwtConfirmFilter;
import com.green.SecurityTest.jwt.JwtUtil;
import com.green.SecurityTest.jwt.LoginFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//이 클래스에서 시큐리티의 인증 및 인가에 대한 설정
@Configuration // 클래스에 대한 객체 생성 어노테이션
@EnableWebSecurity // 해당 클래스가 Security 설정 클래스임을 인지
@RequiredArgsConstructor
public class SecurityConfig {
    private final AuthenticationConfiguration configuration;
    private final JwtUtil jwtUtil;

    //비밀번호를 암호화 시켜줄수 있는 객체 생성 메서드
    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //AuthenticationManager 객체 생성 메서드
    @Bean
    public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration configuration) throws Exception{
        return configuration.getAuthenticationManager();
    }

    /*
     인증 및 인가에 대한 설정을 진행하는 메서드
     이러한 메서드는 공식문서에 가이드에 설명된 내용을 토대로 구현

    프로젝트 생성 시 security를 사용하겠다고 선언만 하면
    우리가 만든 모든 요청에 대해서 인증을 받도록 기본 설정이 되어 있어
    어떠한 페이지로도 접근할 수 없다.

    아래 메서드 에서 인증 및 인가 설정을 하게 되면 기본적으로 모든 요청을 막던
    설정이 우리가 작성한 코드의 설정대로 진행하게 된다.

    @Bean 어노테이션은 지금까지와의 어노테이션과 다르게 메서드 위에 작성한다.
    이 어노테이션은 메서드의 리턴 데이터를 객체로
    */

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        // csrf - Cross-Site Request Forgery
        // csrf 공격에 대한 방기재를 사용하지 않겠다.
        // jwt 로그인은 csrf 공격에 상대적으로 안전하기 때문에 사용 안 함
        httpSecurity.csrf(auth -> auth.disable());//csrf(auth -> auth.disable())방어기재 기능 끔

        //form 로그인 방식을 미사용으로 지정
        //react를 제외한 나머지 전통적인 프론트 (thymeleaf, jsp)를 만드는 기술을 사욜할때 form방식의 로그인을 채택한다
        //form  방식의 로그인 채택
        httpSecurity.formLogin(auth -> auth.disable());

        //http basic 인증 방식 미사용
        //http basic : 요청 헤더 id,pw 값을 담아서 백서버에 전달하는 방식
        //보안에 취약하기 때문에 요즘은 안 씀
        //http basic 방식을 사용하면 로그인 정보를 백서버에 세션에 저장
        httpSecurity.httpBasic(auth -> auth.disable());

        //백서버의 세션 사용을 비활성화
        httpSecurity.sessionManagement(
                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );

        //loginFilter 앞에 JwtConfirmFilter를 추가
        httpSecurity.addFilterBefore(new JwtConfirmFilter(jwtUtil), LoginFilter.class);

        //loginFilter 클래스를 Filter에 추가
        httpSecurity.addFilterAt(new LoginFilter(getAuthenticationManager(configuration),jwtUtil), UsernamePasswordAuthenticationFilter.class);

        // 인증 및 인가 설정
        httpSecurity.authorizeHttpRequests(
            auth -> auth
                    .requestMatchers(
                        "/"
                        ,"/member/loginForm"
                        ,"/member/joinForm"
                        ,"/member/join"
                        ,"/login"
                        ,"/test1"
                    )
                    .permitAll()
                    .requestMatchers("/test3").hasAuthority("USER")
                    .requestMatchers("/test4").hasAuthority("ADMIN") //hasRole :ROLE_ADMIN으로 인식
                    .requestMatchers("/test5").hasAnyAuthority("MANAGER","ADMIN")
                    .anyRequest().authenticated()
                // "/" 요청은 누구나 접근 가능하다.
                // 나머지 요청은 인증 받아야 접근 가능(액세스 거부됨403)
        );
        return httpSecurity.build();
    }
}
