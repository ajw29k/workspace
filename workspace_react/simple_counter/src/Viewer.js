function Viewer(props){
  console.log(2)
  return(
    <div className='count'>
      <div>현재 카운터</div>
      <div>
        {props.count}
      </div>
    </div>      
  )
}

export default Viewer;