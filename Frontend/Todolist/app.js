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
  list.appendChild(b);
  a++;
}