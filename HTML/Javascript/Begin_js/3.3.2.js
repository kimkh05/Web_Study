const a = 100;
const objA = {value: 100};// 객체는 참조타입

function changeArg(num, objA){
  num = 200;
  objA.value = 200;

  console.log(num);
  console.log(objA.value);
}

changeArg(a, objA);// a는 복사되어 나함수에 들어간다. 

console.log(a);
console.log(objA.value);

// 기본타입의 경우 CBV, 객체타입의 경우 CBR이다. 