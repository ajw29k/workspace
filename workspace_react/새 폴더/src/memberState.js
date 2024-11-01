import { createSlice } from "@reduxjs/toolkit";

//회원 정보 초기값 세팅
const initMember = {
  memId :''
  ,memName :'kim'
  ,memAge : 0
}

//데이터 불변변성을 유지 : state 기존의 값은 변하면 안됨
const memberSlice = createSlice({
  name : 'member'
  ,initialState : initMember
  ,reducers : {
    changeMemberInfo : (state, action) => {
      // state = action.payload;
      return action.payload;
    },
    changeMemberName : (state, action) =>{
      state.memName = action.payload;
    }
    
  }
});

export const memberActions = memberSlice.actions
export const memberReducer = memberSlice.reducer