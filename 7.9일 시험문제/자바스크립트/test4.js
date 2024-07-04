const aa = document.querySelector('#chk_all');
const bb = document.querySelectorAll('input');

function checkAllMenu(){
  if(aa.checked){
    bb.forEach(function(e, i){
      e.checked = true;
    })
    
  }
  else{
    bb.forEach(function(e, i){
      e.checked = false;
    })
  }
}

function checkAllOption(a){
  const bb= a.nextElementSibling;
  console.log(bb)

  const aa = bb.querySelectorAll('input')

  if(a.checked){
    aa.forEach(function(e , i){
      e.checked = true;
    })
  }
  else{
    aa.forEach(function(e , i){
      e.checked =false;
    })
  }
}