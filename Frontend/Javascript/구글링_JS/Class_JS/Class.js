// Class 생성
class Person { 

} 
let kim = new Person(); 
console.log(kim); 
// 출력 결과 : Person {}

// Class 초깃값 설정
class Person { 
  constructor (name,age, city) {
    console.log('construtor');
    this.name = name; 
    this.age = age; 
    this.city = city; 
  } 
} 
let kim = new Person('kim','24','seoul'); 
console.log(kim);
// 출력 결과
// constructor

// Person { name : 'kim', age:'24', city: 'seoul'}

// Class 메서드 사용하기
class Person {
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  // 메서드 생성
  nextYearAge(){
    return Number(this.age) + 1;
  }
}
let kim = new Person('kim', '24', 'Seoul');
console.log(kim.nextYearAge());
// 출력 결과 : 25

// CLass 밖에서 새로운 매서드 사용
class Person { 
  constructor (name,age, city) { 
    this.name = name; 
    this.age = age; 
    this.city = city; 
  } //메서드생성
  nextYearAge() { 
   return Number(this.age) + 1; }
}
let kim = new Person('kim','24','seoul'); 
kim.eat = function () { return 'apple' }
console.log(kim.nextYearAge()); 
console.log(kim.eat());
// 출력 결과
// 25
// apple

// 밖에서 추가된 class는 추후 새로운 new Person class로 새로운 객체를 만들었을 때는 호출하여 사용할 수가 없다.
// Example Code
class Person {
  constructor (name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  // 메서드 생성
  nextYearAge(){
    return Number(this.age) + 1;
  }
}
let kim = new Person('kim', '24', 'Seoul');

kim.eat = function(){
  return 'apple'
}

console.log('김씨, 내년에는 몇살인가요? ' + kim.nextYearAge());
console.log('김씨가 먹은건? ' + kim.eat());

let park = new Person('park', '31', 'busan');

console.log('박씨, 내년에는 몇살인가요? ' + park.nextYearAge());
console.log('박씨가 먹은건? ' + park.eat());
// 출력이 되지 않음
// 이유 : park class 에서 eat 함수를 호출 시 실행되지 않음.

// 상속 (extends)
class Person {
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  // 메서드 생성
  nextYearAge(){
    return Number(this.age) + 1;
  }
}
class introducePerson extends Person{
  introduce(){
    return `저는 ${this.city}에 사는 ${this.name} 입니다. `
  }
}
let kim = new introducePerson('kim', '24', 'Seoul');

console.log(kim.introduce())
// 출력 : 저는 Seoul에 사는 kim 입니다. 

// Super 사용하기
class Person{
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  // 메서드 생성
  nextYearAge(){
    return Number(this.age);
  }
}
class introducePerson extends Person {
  constructor(name, age, city, futureHope){
    super(name, age, city);
    this.futureHope = futureHope
  }
  introduce(){
    return `저는 ${this.city}에 ${this.name} 입니다.
          내년엔 ${super.nextYearAge()}살이며, 
          장래희망은 ${this.futureHope} 입니다. `
  }
}
let kim = new introducePerson('kim', '24', 'Daejeon', '개발자');
console.log(kim.introduce());
// 출력 결과
// 저는 Daejeon에 사는 kim 입니다.
//            내년엔 25살이며,
//            장래희망은 개발자입니다. 