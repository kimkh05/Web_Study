# submit 이벤트와 기본 동작 방지

HTML

```HTML
<form id = "frm">
    <fieldset>
        <legend>주소록</legend>
        <textarea name = "txt" id = "txt" cols = "30" rows = "10"></textarea>
        <input type = "submit" id = "q" value = "불러오기"> 
        // 전송(submit) 버튼에 이벤트 리스너를 등록해 버튼을 누르면 주소록(adress)을 불러오도록 코드를 작성합니다. 
    </fieldset>
</form>
```

preventDefault( ) 메서드

```JavaScript
var adress = ["김철수", "emial : kcs@gmail.com"];

// 폼 객체 지정
var q = document.getElementById('frm');

function addr_search(event){
    var textarea = q.txt;
    
    // textarea에 주소록 표시
    textarea.value = '이름 /  주소 \n';
    textarea.value += address[0] + ', ' + adress[1] + '\n';
}

// 폼 제출 시
q.addEventListener('submit', function(event){
    event.preventDefault(); // 기본 이벤트 해제
    addr_search(); // 주소록 불러오기
});
```

