<h1>Javascript 기본 문법</h1>

<h4> 선언</h4>

```
var : 변수를 선언. 추가로 동시에 값을 초기화.

let : 블록 범위(scope) 지역 변수를 선언. 추가로 동시에 값을 초기화.

const : 블록 범위 읽기 전용 상수를 선언.
```

<h4>변수 할당</h4>

```javascript
var a;
console.log("a 값은 " + a); // "a 값은 undefined"로 로그가 남음.

console.log('b 값은 ' + b); // b 값은 undefined
var b;

console.log("c 값은 " + c); // ReferenceError 예외 던짐

let x;
console.log('x 값은 ' + x); // x 값은 undefined

console.log('y 값은 ' + y); // ReferenceError 예외 던짐
let y;
```

`undefined`를 사용하여 변수값이 있는지 확인할 수 있습니다. 아래 코드에서, `input` 변수는 값이 할당되지 않았고 `if`문은 `true`로 평가합니다.

```javascript
if(input === undefined) {
  doThis();
} else {
  doThat();
}
```

