import axios from "axios"


//회원가입
  export const join = (data) => {
    const response = axios.post('/member/writeForm',data)
    return response;
  }

//아이디 중복
  export const checkId = (data) => {
    const response = axios.get(`/member/check/${data}`)
    return response;
  }

//로그인
  export const login = (data) => {
    const response = axios.post('/member/login',data)
    return response;
  }