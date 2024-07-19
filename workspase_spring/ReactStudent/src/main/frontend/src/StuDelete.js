import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StuDelete = () => {
  const [stuList, setStuList] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    axios
    .get(`/stuDelete`)
    .then((res) => {
      console.log(res.data)
      setStuList(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  function del(stuNum){
    axios
    .get(`/stuDelete/${stuNum}`)
    .then((res) => {
      alert('삭제 완료')
      navigate('/stuDelete')
      stuList.forEach((stu , i) => {
        if(stu.stuNum == stuNum){
          stuList.splice(i,1)
        }
      })

      // stuList.filter((stu) => {stu.stuNum == stuNum});

      const arr = [1,2,3,4,5,6,7,8];
      const result = arr.filter( num => {return num > 5 });
      console.log(result)
      

      setStuList([...stuList]);
    })





    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>No</td>
            <td>학생명</td>
            <td>삭제</td>
          </tr>
          {
            stuList.map((stu,i) => {
              return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{stu.stuName} </td>
                    
                  <td>
                    <button type="button" onClick={() => {
                      del(stu.stuNum);
                      console.log(stuList[i].stuNum)
                      
                    }}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )

}

export default StuDelete;