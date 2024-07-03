
function setAvgAge(){
  
  const aa = document.querySelectorAll('.ageTd')
  let sum = 0;

  aa.forEach(function(add,i){
    console.log(add.textContent);
    sum = sum + Number(add.textContent);

  })
  console.log(sum);

  const b = sum/aa.length;
  console.log(b);
  
  

}