
//서버와 통신하는 기능을 모아놓은 js

import axios from "axios";

//학생 목록 조회 api
export const getStuList =() => {
  const respone = axios.get('/stuList')
  return respone;
}

export const getStuDetail = (stuNum) => {
  const respone = axios.get(`student/${stuNum}`);
  return respone ;
}


