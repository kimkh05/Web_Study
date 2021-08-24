var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;

button.addEventListener('click', clickButton);

function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  list.appendChild(temp);
  cnt++;
}

function remove(cnt) {
  //window.alert(cnt);
  var li = document.getElementById('li'+cnt);
  list.removeChild(li);
}