//item_list는 현재 쇼핑몰에서 판매하고 있는 상품들의 목록 정보이다.
//아래 데이터를 참고하여 요구사항을 해결하시오.
const item_list = [
  {
    item_name : '여름 셔츠',
    price : 25000,
    brand : 'java마켓',
    size : [90, 100, 110]
  },
  {
    item_name : '라운드 티',
    price : 20000,
    brand : 'java마켓',
    size : [90, 95, 100, 105, 110]
  },
  {
    item_name : '데님 청바지',
    price : 30000,
    brand : 'python마켓',
    size : [90, 100, 110, 120]
  },
  {
    item_name : '슬림 면바지',
    price : 35000,
    brand : 'python마켓',
    size : [90, 95, 100]
  }
];

console.log(item_list[0].size)
//1. 'java마켓'에서 팔고 있는 상품들의 상품명과 가격을 각각 콘솔창에 출력하여라.

for(let i = 0 ; i < item_list.length; i++){
  if(item_list[i].brand == 'java마켓'){
    console.log(item_list[i].item_name);
    console.log(item_list[i].price);
  }
}

console.log('\n')

//2. 95사이즈를 구매할 수 있는 상품들의 상품명을 콘솔창에 출력하시오.
item_list.forEach((item,i) => {
  item.size.forEach((e, g) =>{
    if(e == 110){
      console.log(e)
    }
  })
}) 

console.log('\n')

for(let i = 0; i < item_list.length; i++){
  for(let e = 0 ; e < item_list[i].size.length; e++){
    //item_list[i] = {},{},{},{}
    //item_list[i].size[e] = 사이즈 배열[] 
    //사이즈 반복문 돌리면서 95사이즈 찾기
    if(item_list[i].size[e] == 95){
      console.log(item_list[i].item_name)
    }
  }
}


//3. '등록 및 출력' 버튼을 클릭하면 입력 내용 저장 후 콘솔창에 데이터를 출력하시오.
function addItem(){
  //클래스 값 불러오기
  const item = document.querySelector('#itemName',).value
  const price = document.querySelector('#price').value
  const brand = document.querySelector('#brand').value
  const size = document.querySelectorAll('.size')
  const size1 = [];
  const aa = {item_name : item,
    price : price,
    brand : brand,
    size : size1}
  // console.log(size.value)
  //강사님 풀이 체크박스
  // const size3 =[];
  // const chks = document.querySelectorAll('.size')
  // chks.forEach((chk, i) => {
  //   if(chk.checked){
  //     size3.push(chk.value)
  //   }
  // })
  
  // console.log(item_list)
  

  
  
  
  for(let i = 0; i < size.length; i++){

    if(size[i].checked){
     size1.push(size[i].value) 
    }
  }
  
  if(item == ''){
    alert('상품명을 입력하세요')
    console.log(item_list)
  }
  else{
    item_list.push(aa)
    console.log(item_list)
  }
}
//만약 상품명을 입력하지 않은 채 버튼을 클릭하면 '상품명을 입력하세요' 라는 alert이 뜨며 입력 내용이 저장되지 않는다.

  
  
  
  
  
