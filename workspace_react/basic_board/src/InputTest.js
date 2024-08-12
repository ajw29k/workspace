import { useState } from "react"

const InputTest = () =>{
  //input 태그에 입력한 내용을 저장하는 변수
  const [inputData, setInputData] = useState('')
  const [inputData2, setInputData2] = useState('')

  const [stu, setStu] = useState({
    stuName : '',
    age : 20,
    score : 80,
    addr : '울산'
  })
  function changeStu(e){
    setStu({
      ...stu,
      //key 값을 변수로 할려면 []를 사용해야한다
      [e.target.name] : e.target.value
    })
  }
  return(
<>
  <div>
          나이<input type='text' onChange={(e) => {
            setInputData(e.target.value);
          }}/> <br />
  
          이름<input type='text' onChange={(e) => {
            setInputData2(e.target.value);
            
          }}/>
        </div>
  
        <div>
          학생명 : 
          <input type='text' name='stuName' onChange={(e) => {
            changeStu(e);
  
          }}/> <br />
          학생나이 : 
          <input type='text' name='age' onChange={(e) => {
            changeStu(e);
          }}/> <br />
          점수 : 
          <input type='text' name='score' onChange={(e) => {
            changeStu(e)
          }}/> <br />
          주소 : 
          <input type='text' name='addr' onChange={(e) => {
            changeStu(e)
          }}/> <br />
          {console.log(stu)}
          <div>
          이름 : {stu.stuName} <br />
          나이 : {stu.age} <br />
          점수 : {stu.score} <br />
          주소 : {stu.addr} <br />
          </div>
        </div>
</>
  )
}

export default InputTest;