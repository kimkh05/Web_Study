# JavaScript์ Class
### **๐Javascript์ Class**

์๋ฐ์คํฌ๋ฆฝํธ์์ ํด๋์ค ์ฌ์ฉ์ ES6์์๋ถํฐ ์ง์์ ํ๊ธฐ ์์ํ๋ค.

์ต์คํ๋ก๋ฌ์์๋ ํด๋น ์ฝ๋ ์ฌ์ฉ์ด ๋ถ๊ฐ๋ฅํ๋, ์ต์  ๋ธ๋ผ์ฐ์ ๋ฅผ ์ด์ฉํ  ๊ฒฝ์ฐ class๋ฅผ ์ง์ํ๋ค.

 

Class๋ฅผ ์ฌ์ฉํ๋ ๊ฐ์ฅ ํฐ ์ด์ ๋ ์ฌ์ฌ์ฉ์ฑ์ด๋ค.

์์ ์ฌ์ดํธ์ ๊ฒฝ์ฐ ์ ๋ง๋  Functionํ๋๋ก๋ ์ถฉ๋ถํ ๊ฐ๋ฐ์ด ์ฉ์ดํ๋ค๋ฉด ์ข ๋ ๋ณต์กํ ์ฌ์ดํธ๋ฅผ

๋ง๋ค๊ฒ ๋  ๊ฒฝ์ฐ Class์ ์ฅ์ ์ ๋ ์ ์ ์ ์๋ค๊ณ  ํ๋ค.

 

์ผ๋จ ๋ ์ค๋์ ํด๋์ค์ ๊ธฐ๋ณธ ๋ฌธ๋ฒ์ ๊ณต๋ถํด๋ณด๊ธฐ๋ก ํ๋ค.

 

 <hr>



 

### **Class ๊ธฐ๋ณธ ๋ฌธ๋ฒ**

#### **Class ์์ฑํ๊ธฐ**

Javascript ๋ด์์ Class๋ฅผ ์์ฑํ๋ ค๋ฉด ๊ฐ๋จํ๋ค.

class๋ฅผ ์ ์ธ๋ง ํด์ค๋ค๋ฉด class ๊ฐ์ฒด๋ฅผ ๋ฐ๋ก ๋ง๋ค ์ ์๋ค.

 

```
class Person {

}

let kim = new Person();

console.log(kim);
```

 



![img](https://blog.kakaocdn.net/dn/tBZlv/btqRL2Fsdac/otQOcUFCSicMWEu1qmHfK1/img.png)console.log ๊ฒฐ๊ณผ



class๋ก ๋ง๋ค์ด์ค ์์ Person์ด๋ผ๋ ์ด๋ฆ์ ๊ฐ์ฒด๊ฐ ์์ฑ๋ ๊ฑธ ํ์ธํ  ์ ์๋ค.

 

 

 

 

 

#### **Class ์ด๊ธฐ๊ฐ ์ค์ ํด์ฃผ๊ธฐ**

Constructor(์์ฑ์)๋ฅผ ์ด์ฉํ๋ฉด class ๊ฐ์ฒด์ ์ด๊ธฐ ๊ฐ์ ์ค์ ํด ์ค ์ ์๋ค.

class ๋ด๋ถ์์ Constructor๋ ํ ๊ฐ๋ง ์กด์ฌํ  ์ ์์ผ๋ฉฐ, 2๋ฒ ์ด์ ์ฌ์ฉ ์ Syntax Error๊ฐ ๋ฐ์ํ  ์ ์๋ค.

 

Constructor๋ฅผ ์ด์ฉํ์ฌ Person ํด๋์ค์ ์ด๊ธฐ ๊ฐ์ ์ค์ ํด๋ณด๋๋ก ํ์. 

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

 



![img](https://blog.kakaocdn.net/dn/b6TfZY/btqRv9TMrRc/KP96yGI9wa1hVzd7aenxD1/img.png)console.log ๊ฒฐ๊ณผํ๋ฉด



 

์ด์ฒ๋ผ Constructor๋ ์๋ก์ด ํด๋์ค๋ฅผ ์์ฑํ  ๋ ๊ฐ์ฅ ์ฒ์ ์คํ๋๋ฉด์ ์ด๊ธฐ๊ฐ์ ์ค์ ํด์ค๋ค. 

 

 

 

 

 

#### **Class ๋ฉ์๋ ์ฌ์ฉํ๊ธฐ**

class์์ ์ค์ ํ ์ด๊ธฐ๊ฐ์ ์ ๊ทผํด ํน์  ๊ธฐ๋ฅ์ ํ๋ ๋ฉ์๋๋ฅผ ๋ง๋๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค.

๊ฐ๋จํ ๋ฉ์๋๋ฅผ ํ๋ ๋ง๋ค์ด๋ณด์.

 

class์์ function ํ์์ผ๋ก ๋ง๋ค์ด์ค ๋ค ํด๋น ๋ฉ์๋๋ฅผ ํธ์ถํ๊ธฐ๋ง ํ๋ฉด ๋๋ค.

๋๋ฌด ๋น์ฐํ์ง๋ง ๋ด๋์ ํด๋น ์ฌ๋์ด ํ ์ด ๋ ๋จน๋๋ค๋ ๋ฉ์๋๋ฅผ class์์ ์ ์ํ ๋ค ํธ์ถํด๋ดค๋ค.

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //๋ฉ์๋์์ฑ
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person('kim','24','seoul');

console.log(kim.nextYearAge());
```



![img](https://blog.kakaocdn.net/dn/xk1kB/btqRCWF3Ltz/rZJq3wZ9HTpzJBs6aEYslK/img.png)console.log ๊ฒฐ๊ณผ



class๋ javascript ์ ๊ฐ์ฒด์ ํํ์ด๋ฏ๋ก ์์ฑ๋ class ๊ฐ์ฒด์

class ๋ฐ์์ ์๋ก์ด ๋ฉ์๋๋ฅผ ๋ฃ๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค.

๋ค์ ์์๋ฅผ ๋ณด์.

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //๋ฉ์๋์์ฑ
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

 



![img](https://blog.kakaocdn.net/dn/lKHst/btqRCWze8UW/LiRdheKOSi3vaZTnoWkDEK/img.png)console.log ๊ฒฐ๊ณผ



class๋ฐ์์ ์ถ๊ฐํ eat์ด๋ผ๋ ๋ฉ์๋๋ ์ ํํ ์๋ํ๋ค.

ํ์ง๋ง, ์ด๋ ๊ฒ ๋ฐ์์ ์ถ๊ฐํ class๋ ์ถํ ์๋ก์ด new Person class๋ก ์๋ก์ด ๊ฐ์ฒด๋ฅผ ๋ง๋ค์์ ๋๋

ํธ์ถํ์ฌ ์ฌ์ฉํ  ์ ์๋ค

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //๋ฉ์๋์์ฑ
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person('kim','24','seoul');

kim.eat = function () {
    return 'apple'
}

console.log('๊น์จ ๋ด๋์๋ ๋ช์ด์ธ๊ฐ์ ?' + kim.nextYearAge());
console.log('๊น์จ๊ฐ ๋จน์๊ฑด? ' + kim.eat());

let park = new Person('park', '31', 'busan');

console.log('๋ฐ์จ ๋ด๋์๋ ๋ช์ด์ธ๊ฐ์?' + park.nextYearAge());
console.log('๋ฐ์จ๊ฐ ๋จน์๊ฑด?' + park.eat())
```

 



![img](https://blog.kakaocdn.net/dn/bWV9cm/btqRt5RLR5c/th5bd8de3qmlFl98rv3HK1/img.png)park class์์ eat ํธ์ถ ์ ์คํ๋์ง ์์



 

 

 

 

 

#### **์์(extends)**

class์์ ์์ ๊ฐ๋์ ์ด์ฉํ  ์ ์์ต๋๋ค.

css๋ฅผ ์ด์ฉํ ๋ถ๋ค์ด๋ผ๋ฉด ํ๋์ ์์ฑ์ด ํ์ ์์ฑ์๋ ๊ฐ์ด ์ ์ฉ๋๋ ๊ฒ์ฒ๋ผ

class์์๋ ์์์ ์ด์ฉํ๋ฉด ๊ธฐ์กด์ class์ ๊ฐ์ ๋ชจ๋ ์ ๊ทผํ์ฌ ์ฌ์ฉํ  ์ ์๋ค.

์์์ extends๋ฅผ ์จ์ ์ด์ฉํ  ์ ์๋ค.

 

๋ค์ ์์ ๋ฅผ ํตํด์ introducePersonํด๋์ค์์ Person์ ์์๋ฐ์๊ธฐ ๋๋ฌธ์

this.city์ this.name์ ๋ชจ๋ ์ฌ์ฉํ  ์ ์๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //๋ฉ์๋์์ฑ
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

class introducePerson extends Person {
    introduce () {
        return `์ ๋ ${this.city}์ ์ฌ๋ ${this.name} ์๋๋ค.`
    }

}

let kim = new introducePerson('kim','24','seoul');

console.log(kim.introduce())
```



![img](https://blog.kakaocdn.net/dn/cqZsJM/btqRQSWBVr8/pw1tZI6bKkGIu5kcrUCNWK/img.png)console.log ๊ฒฐ๊ณผํ๋ฉด



 

 

 

#### **super ์ฌ์ฉํ๊ธฐ**

 

introducePerson ํ์ ํด๋์ค์์ ๊ธฐ์กด class์ ๊ฐ์ ๊ฐ์ ธ๋ค ์ฐ๋ ๊ฑด ์ข์์ง๋ง,

์ถ๊ฐ์ ์ผ๋ก introducePerson์ด๋ผ๋ ํ์ ํด๋์ค์์๋ง ์ฌ์ฉํ๊ณ  ์ถ์ ๊ฐ์ด ์์ ์๋ ์๋ค.

 

์ด๋ ์ด์ฉํ๋ ๊ฒ์ super๋ผ๋ ํค์๋์ด๋ฉฐ

์ด๋ ๊ฐ์ฒด์ ๋ถ๋ชจ๊ฐ ๊ฐ์ง๊ณ  ์๋ ๋ฉ์๋๋ฅผ ํธ์ถํ  ์ ์๋ค.

 

 

์์ ์ชฝ์ ์ถ๊ฐ์ ์ผ๋ก ์ฌ์ฉํ  ์ด๊ธฐ๊ฐ์ด ํ์ํ  ๊ฒฝ์ฐ constructor์ super๋ก ๋ถ๋ชจ ์ด๊ธฐ๊ฐ์ ์ธํํ ๋ค

์์ class์์๋ง ์ฌ์ฉํ  ์ด๊ธฐ๊ฐ์ ๋ฐ๋ก ์ง์ ํ๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ฉฐ

super ๊ธฐ๋ฅ์ ์ด์ฉํด์ ์์ class์์ ๋ถ๋ชจ ๋ฉ์๋๋ฅผ ํธ์ถํ  ์๋ ์๋ค.

 

```
class Person {
    constructor (name,age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //๋ฉ์๋์์ฑ
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
        return `์ ๋ ${this.city}์ ์ฌ๋ ${this.name} ์๋๋ค. 
            ๋ด๋์ ${super.nextYearAge()}์ด์ด๋ฉฐ,
            ์ฅ๋ํฌ๋ง์ ${this.futureHope} ์๋๋ค.`
    }

}

let kim = new introducePerson('kim','24','seoul', '๊ฐ๋ฐ์');

console.log(kim.introduce())
```

 



![img](https://blog.kakaocdn.net/dn/dHrVv9/btqRt5RMPb1/dT2jNMVRokKuinSfudjc50/img.png)introduce() ํธ์ถ ๊ฒฐ๊ณผ ํ๋ฉด



 

class๋ฅผ ์ด์ฉํ  ๊ฒฝ์ฐ ๊ท์น์ฑ์ ๊ฐ๋ ๊ฐ์ฒด๋ฅผ ์ผ๊ด์ฑ ์๊ฒ ๋ง๋๋ ๊ฒ ๊ฐ๋ฅํ๋ฉฐ,

์์์ ํตํด์ ๊ธฐ๋ฅ ํ์ฅ์ด ์ฉ์ดํ๋ค๋ ๊ฒ ์ ์ ์์๋ค.



์ถ์ฒ: https://ordinary-code.tistory.com/22 [๊นํ๋ฒ's OrdinaryCode]
