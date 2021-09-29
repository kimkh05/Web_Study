// const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// for(let i = 0; i<superheros.length; i++) console.log(superheros[i]);
// // 반복문을 사용하여 console.log 할 수 있다. 
// superheros.forEach(hero => {
//   console.log(hero);
//   // 위에 for문 반복한 것과 결과가 같게 나온다. 
// });
// // forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 이 함수의 파라미터 hero는 각 원소를 가르키게 된다.
// // 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수라고 한다. 함수를 등록하주면, forEach 가 실행을 해준다.

// const array = [1,2,3,4,5,6,7,8];
// const squared = [];
// for(let i = 0;i <array.length; i++) squared.push(array[i] * array[i]);
// console.log(squared);
// // 반복문을 사용하여 출력할 수 있다. 
// array.forEach(n=>squared.push(n*n));
// console.log(squared);
// // 결과 : [1, 4, 9, 16, 25, 36, 49, 64];
// // 만약 map을 사용하면 이를 더 짧은 코드를 사용하여 구현할 수 있다.
// const square = n => n * n;
// const squared=  array.map(square);
// console.log(squared);
// // 위에 있는 결과가 나온다. 
// // 변화함수 square는 파라미터 n을 받아 제곱한다.
// // // array.map 함수를 사용할 때 square 를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성함.
// // // 변화 함수를 꼭 이름 붙여서 선언할 필요가 없다. 밑에처럼 사용 가능하다.
// const squared = array.map(n=>n*b);
// console.log(squared);