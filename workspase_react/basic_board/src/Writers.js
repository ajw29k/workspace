import { Link, useNavigate } from "react-router-dom";
import "./Writer.css";
const Writers = ({boar}) =>{

const navigate = useNavigate();

  return(
    <>
      <tr>
        <td>{boar.boardNum}</td>
        <td>
          {/* <Link to={`/detail/${boar.boardNum}`}>{boar.title}</Link> */}
          <span onClick={() => {
            navigate(`/detail/${boar.boardNum}`)
          }}>{boar.title }</span>
          </td>
        <td>{boar.writer}</td>
        <td>{boar.createDate}</td>
      </tr>
      
    </>
  )
}

export default Writers;