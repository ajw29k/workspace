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

//1. 'java마켓'에서 팔고 있는 상품들의 상품명과 가격을 각각 콘솔창에 출력하여라.
for(let i = 0 ; i < item_list.length; i++){
  if(item_list[i].brand == 'java마켓'){
    console.log(item_list[i].item_name);
    console.log(item_list[i].price);
  }
}
console.log('\n')

//2. 95사이즈를 구매할 수 있는 상품들의 상품명을 콘솔창에 출력하시오.
for(let i = 0; i<item_list[0].size.length; i++){
  if(item_list[0].size[i] ==95){
    console.log(item_list[0].item_name)
  }
}
for(let i = 0; i<item_list[1].size.length; i++){
  if(item_list[1].size[i] ==95){
    console.log(item_list[1].item_name)
  }
}
for(let i = 0; i<item_list[2].size.length; i++){
  if(item_list[2].size[i] ==95){
    console.log(item_list[2].item_name)
  }
}
for(let i = 0; i<item_list[3].size.length; i++){
  if(item_list[3].size[i] ==95){
    console.log(item_list[3].item_name)
  }
}



//3. '등록 및 출력' 버튼을 클릭하면 입력 내용 저장 후 콘솔창에 데이터를 출력하시오.
function addItem(){
  //클래스 값 불러오기
  const item = document.querySelector('#itemName',)
  const price = document.querySelector('#price')
  const brand = document.querySelector('#brand')
  const size = document.querySelectorAll('.size')
  const size1 = [];
  // console.log(size.value)
  for(let i = 0; i < size.length; i++){
    console.log(item_list.size.values)

    if(size[i].checked){
      
    }
  }
  

}


  
  
  
  
  //콘솔 list에 추가
  
