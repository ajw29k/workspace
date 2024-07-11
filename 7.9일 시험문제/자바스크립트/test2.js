
function setAvgAge(){
  
  const ageTds = document.querySelectorAll('.ageTd')
  let sum = 0;
  ageTds.forEach(function(add,i){
    console.log(add.textContent);
    sum = sum + Number(add.textContent);

  })
  console.log(sum);

  const avg = sum/ageTds.length;
  const bb = document.querySelector('#resultTd');
  bb.innerHTML = avg.toFixed(1);
  //toFixed : 소수점 자리수
  

  //풀이
  // const tds = document.querySelectorAll('.ageTd');

  // let sum1= 0;
  // tds.forEach((tdTag, i ) => {
  //   const age = Number(tdTag.textContent);
  //   sum1 +=age
  // });
  // console.log(sum1/tds.length)

  // const avg1 = sum1 / tds.length;

  // document.querySelector('#resultTd').textContent = avg1

}