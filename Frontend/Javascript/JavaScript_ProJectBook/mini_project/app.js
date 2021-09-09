var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-btn');

// 이벤트 리스너 연결 및 목록 제목 표시
list.addEventListener('click', activeItems);
function activeItems(){
  title.innerHTML = this.innerTEXT;
  this.setAttribute('class', 'active');
}

// 제목 입력
addBtn.addEventListener('click', function(){
  var txt = prompt('제목 입력');
  list.innerHTML += '<li>' + txt + "</li>";
});

// 목록 스타일 초기화
function activeItems(){
  // 해당 목록을 클리갛면 제목 영역에 표시
  title.innerHTML = this.innerTEXT;
  
  // 목록 스타일 초기화
  for(let i = 0;i<li.length;i++){
    li[i].removeAttribute('class');
  }
  this.setAttribute('class', 'active');
}
function activeItems(event){
  // 클릭한 노드가 li이면
  if(event.target.nodeName == 'LI'){
    title.innerHTML = event.target.innerTEXT;

    // 목록 스타일 초기화
    for(let i = 0;i<event.target.parentNode.children.length;i++){
      event.target.parentNode.children[i].removeAttribute('class');
    }
    // 클릭한 목록 스타일 지정
    event.target.setAttribute('class', 'active');
  }// end if
}// end function