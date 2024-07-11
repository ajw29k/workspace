// const aa = document.querySelector('#chk_all');
// const bb = document.querySelectorAll('input');

// function checkAllMenu(){
//   if(aa.checked){
//     bb.forEach(function(e, i){
//       e.checked = true;
//     })
    
//   }
//   else{
//     bb.forEach(function(e, i){
//       e.checked = false;
//     })
//   }
// }

// function checkAllOption(a){
//   const bb= a.nextElementSibling;
//   console.log(bb)

//   const aa = bb.querySelectorAll('input')

//   if(a.checked){
//     aa.forEach(function(e , i){
//       e.checked = true;
//     })
//   }
//   else{
//     aa.forEach(function(e , i){
//       e.checked =false;
//     })
//   }
// }

//풀이
//전체 선택 / 해제
function checkAllMenu(){
  //전체 체크박스의 체크 여부
  const isChecked = document.querySelector('#chk_all').checked;
  
  //모든 체크박스
  chks = document.querySelectorAll('input');

  if(isChecked){
    for(chk of chks){
      chk.checked =true;
    }
  }
  else{
    for(chk of chks){
      chk.checked =false;
    }
  }


}

const checkAllOption = (checkbox) =>{
  //다음 형제 노드
  const chks = checkbox.nextElementSibling.querySelectorAll('input')
  
  if(checkbox.checked){
    for(chk of chks){
      chk.checked = true;
    }
  }
  else{
    for(chk of chks){
      chk.checked = false;
    }
  }

}