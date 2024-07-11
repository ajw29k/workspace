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
  
  //풀이
  //행과 열 호출
  const row1 = document.querySelector('#rowInput').value;
  const col1 = document.querySelector('#colInput').value;

  
  //테이블 생성
  let str = ``
  str += '<table>';

  for(let i  = 0; i <row1 ; i++){
    str += '<tr>';
    for(let j = 0 ; j < col1; j++){
      str += `<td>${i+1}행 ${j+1}열</td>`;

    }
    str += '</tr>';
  }
  str += '</table>'

  // class : table-div태그에 접근
  const divTag = document.querySelector('.table-div')
  divTag.insertAdjacentHTML('beforeend', str)//끝나기전에 추가
  divTag.innerHTML = '';

  
}