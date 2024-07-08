function Controller(props){
  console.log(3)
  return(
    <div className='btn'>
      <div>
        <button type='buttton' value="-10" onClick={(e) =>{
        props.changeCount(e.target.value);
        }}>-10</button>
        <button type='buttton' value="-1" onClick={(e) =>{
          props.changeCount(e.target.value);
        }}>-1</button>
        <button type='buttton' value="+1" onClick={(e) =>{
          props.changeCount(e.target.value);
        }}>+1</button>
        <button type='buttton' value="+10" onClick={(e) =>{
          props.changeCount(e.target.value);
        }}>+10</button>
      </div>
    </div>
  )
}
export default Controller;