# JavaScript의 Class
### **😎Javascript의 Class**

자바스크립트에서 클래스 사용은 ES6에서부터 지원을 하기 시작했다.

익스플로러에서는 해당 코드 사용이 불가능하나, 최신 브라우저를 이용할 경우 class를 지원한다.

 

Class를 사용하는 가장 큰 이유는 재사용성이다.

작은 사이트의 경우 잘 만든 Function하나로도 충분히 개발이 용이했다면 좀 더 복잡한 사이트를

만들게 될 경우 Class의 장점을 더 잘 알 수 있다고 한다.

 

일단 난 오늘은 클래스의 기본 문법을 공부해보기로 한다.

 

 <hr>



 

### **Class 기본 문법**

#### **Class 생성하기**

Javascript 내에서 Class를 생성하려면 간단하다.

class를 선언만 해준다면 class 객체를 바로 만들 수 있다.

 

```
class Person {

}

let kim = new Person();

console.log(kim);
```

 



![img](https://blog.kakaocdn.net/dn/tBZlv/btqRL2Fsdac/otQOcUFCSicMWEu1qmHfK1/img.png)console.log 결과



class로 만들어준 예시 Person이라는 이름의 객체가 생성된 걸 확인할 수 있다.

 

 

 

 

 

#### **Class 초기값 설정해주기**

Constructor(생성자)를 이용하면 class 객체의 초기 값을 설정해 줄 수 있다.

class 내부에서 Constructor는 한 개만 존재할 수 있으며, 2번 이상 사용 시 Syntax Error가 발생할 수 있다.

 

Constructor를 이용하여 Person 클래스에 초기 값을 설정해보도록 하자. 

```
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
```

 



![img](https://blog.kakaocdn.net/dn/b6TfZY/btqRv9TMrRc/KP96yGI9wa1hVzd7aenxD1/img.png)console.log 결과화면



 

이처럼 Constructor는 새로운 클래스를 생성할 때 가장 처음 실행되면서 초기값을 설정해준다. 

 

 

 

 

 

#### **Class 메서드 사용하기**

class에서 설정한 초기값을 접근해 특정 기능을 하는 메서드를 만드는 것도 가능하다.

간단한 메서드를 하나 만들어보자.

 

class안에 function 형식으로 만들어준 뒤 해당 메서드를 호출하기만 하면 된다.

너무 당연하지만 내년에 해당 사람이 한 살 더 먹는다는 메서드를 class안에 정의한 뒤 호출해봤다.

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //메서드생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person('kim','24','seoul');

console.log(kim.nextYearAge());
```



![img](https://blog.kakaocdn.net/dn/xk1kB/btqRCWF3Ltz/rZJq3wZ9HTpzJBs6aEYslK/img.png)console.log 결과



class는 javascript 상 객체의 형태이므로 생성된 class 객체에

class 밖에서 새로운 메서드를 넣는 것도 가능하다.

다음 예시를 보자.

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //메서드생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person('kim','24','seoul');

kim.eat = function () {
    return 'apple'
}

console.log(kim.nextYearAge());
console.log(kim.eat());
```

 



![img](https://blog.kakaocdn.net/dn/lKHst/btqRCWze8UW/LiRdheKOSi3vaZTnoWkDEK/img.png)console.log 결과



class밖에서 추가한 eat이라는 메서드도 정확히 작동한다.

하지만, 이렇게 밖에서 추가한 class는 추후 새로운 new Person class로 새로운 객체를 만들었을 때는

호출하여 사용할 수 없다

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //메서드생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person('kim','24','seoul');

kim.eat = function () {
    return 'apple'
}

console.log('김씨 내년에는 몇살인가요 ?' + kim.nextYearAge());
console.log('김씨가 먹은건? ' + kim.eat());

let park = new Person('park', '31', 'busan');

console.log('박씨 내년에는 몇살인가요?' + park.nextYearAge());
console.log('박씨가 먹은건?' + park.eat())
```

 



![img](https://blog.kakaocdn.net/dn/bWV9cm/btqRt5RLR5c/th5bd8de3qmlFl98rv3HK1/img.png)park class에서 eat 호출 시 실행되지 않음



 

 

 

 

 

#### **상속(extends)**

class에서 상속 개념을 이용할 수 있습니다.

css를 이용한 분들이라면 하나의 속성이 하위 속성에도 같이 적용되는 것처럼

class에서도 상속을 이용하면 기존의 class의 값을 모두 접근하여 사용할 수 있다.

상속은 extends를 써서 이용할 수 있다.

 

다음 예제를 통해서 introducePerson클래스에서 Person을 상속받았기 때문에

this.city와 this.name을 모두 사용할 수 있는 것을 확인할 수 있다.

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //메서드생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

class introducePerson extends Person {
    introduce () {
        return `저는 ${this.city}에 사는 ${this.name} 입니다.`
    }

}

let kim = new introducePerson('kim','24','seoul');

console.log(kim.introduce())
```



![img](https://blog.kakaocdn.net/dn/cqZsJM/btqRQSWBVr8/pw1tZI6bKkGIu5kcrUCNWK/img.png)console.log 결과화면



 

 

 

#### **super 사용하기**

 

introducePerson 하위 클래스에서 기존 class의 값을 가져다 쓰는 건 좋았지만,

추가적으로 introducePerson이라는 하위 클래스에서만 사용하고 싶은 값이 있을 수도 있다.

 

이때 이용하는 것은 super라는 키워드이며

이는 객체의 부모가 가지고 있는 메서드를 호출할 수 있다.

 

 

자식 쪽의 추가적으로 사용할 초기값이 필요할 경우 constructor에 super로 부모 초기값을 세팅한 뒤

자식 class에서만 사용할 초기값을 따로 지정하는 것도 가능하며

super 기능을 이용해서 자식 class에서 부모 메서드를 호출할 수도 있다.

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //메서드생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

class introducePerson extends Person {
    constructor(name, age, city, futureHope) {
        super(name, age, city);
        this.futureHope = futureHope
    }
    introduce () {
        return `저는 ${this.city}에 사는 ${this.name} 입니다. 
            내년엔 ${super.nextYearAge()}살이며,
            장래희망은 ${this.futureHope} 입니다.`
    }

}

let kim = new introducePerson('kim','24','seoul', '개발자');

console.log(kim.introduce())
```

 



![img](https://blog.kakaocdn.net/dn/dHrVv9/btqRt5RMPb1/dT2jNMVRokKuinSfudjc50/img.png)introduce() 호출 결과 화면



 

class를 이용할 경우 규칙성을 갖는 객체를 일관성 있게 만드는 게 가능하며,

상속을 통해서 기능 확장이 용이하다는 것 알 수 있었다.



출처: https://ordinary-code.tistory.com/22 [김평범's OrdinaryCode]
