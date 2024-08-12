function List(props){
  return(
    <div className="box">
      <h3>장보기 목록</h3>
        {
          props.list.map((e,i) => {
            return(
              <div key={i} className="item-div">
                <span className="item">{e}</span>
                <button type='button' onClick={(e) => {
                  // const copyList = [...props.list];
                  // copyList.splice(i,1);
                  // props.setList(copyList);
                  
                  props.list.splice(i,1);
                  props.setList([...props.list]);

                  // props.setList([...props.list.splice(i,1)]);
                }}>삭제</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default List;