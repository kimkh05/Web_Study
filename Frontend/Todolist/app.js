var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var a = 1;

button.addEventListener('click', clickButton);

function clickButton() {
  var b = document.createElement('li');
  b.setAttribute("class", "list-group-item");
  b.setAttribute("id", "li"+a);
  b.innerHTML = input.value;
  b.innerHTML += "<button onClick='del("+a+")'>삭제</button>";
  list.appendChild(b);
  a++;
}

function del(a){
  var li = document.getElementById('li' + a);
  list.removeChild(li);
}