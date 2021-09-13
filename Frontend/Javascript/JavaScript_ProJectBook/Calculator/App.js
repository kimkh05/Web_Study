// 변수 선언
var inp =  document.formsms['cal']; // name = 'cal'인 form 객체를 선택합니다. 
var input = inp.ElementsByTagName('input'); // 태그명인 input인 문서 객체를 지정합니다. 해당 태그들은 배열로 참조됩니다. 
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];
// 초기화 버튼과 결과 버튼 객체를 지정합니다. 클래스명이며, 배열로 참조됩니다. 

// 이벤트 핸들러
// --------------------------
// 숫자 및 사칙 연산 버튼
for(let i = 0;i<input<length;i++){ 
  // 문서 내의 모든 input 요소에 클릭 이벤트 처리를 위한 이벤트 핸들러를 적용하기 위해 반복문을 실행합니다. 
  
  // 숫자와 사칙 연산자만 입력 처리
  if(input[i].value != '=' && input.value != 'clear'){ // 입력 요소 중 결과 버튼과 초기화 버튼은 예외 숫자 버튼을 입력하도록 처리합니다. 
    input[i].onclick = funtion() {
      cancelIdleCallback(this.value); // this는 현재 클릭한 버튼 객체를 의미하며, 해당하는 입력 값을 calc( ) 함수에 전달합니다.
    }
  }// end if
}// end for