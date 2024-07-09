
function setAvgAge(){
  
  const ageTd = document.querySelectorAll('.ageTd')
  let sum = 0;
  ageTd.forEach(function(add,i){
    console.log(add.textContent);
    sum = sum + Number(add.textContent);

  })
  console.log(sum);

  const avg = sum/ageTd.length;
  const bb = document.querySelector('#resultTd');
  bb.innerHTML = avg;
  
  

}