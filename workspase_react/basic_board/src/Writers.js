import { Link, useNavigate } from "react-router-dom";

const Writers = ({boar}) =>{



  return(
    <>
      <tr>
        <td>{boar.boardNum}</td>
        <td><Link to={`/detail/${boar.boardNum}`}>{boar.title}</Link></td>
        <td>{boar.writer}</td>
        <td>{boar.createDate}</td>
      </tr>
      
    </>
  )
}

export default Writers;