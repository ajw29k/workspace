function setTable(){
  const row = document.querySelector('#rowInput').value;
  const col = document.querySelector('#colInput').value;

  let tabla =``;

  for(let i = 1; i <= row; i++){
    tabla +=`<tr>`
    for(let e = 1; e<=col; e++){
      tabla += `
        <td>${i}행 ${e}열</td> 
      `
    }
    tabla += `</tr>`
  }


  const aa = document.querySelector('.table-div')
  aa.innerHTML='';
  const bb = `
  <table>
  ${tabla}
	</table>
  `
  aa.insertAdjacentHTML('afterbegin',bb);
  

}