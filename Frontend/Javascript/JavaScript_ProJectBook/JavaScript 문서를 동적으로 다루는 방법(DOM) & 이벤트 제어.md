# JavaScript 문서를 동적으로 다루는 방법(DOM) & 이벤트 제어

1. DOM 메서드(하나의 문서 객체를 선택하는 메서드)

   ```js
   document.getElementById(id명) // 아이디를 사용해 문서 객체(요소) 선택
   document.querySelector(CSS 선택자) // CSS 선택자를 사용하는 방식(IE 8 이상)
   ```

   ※ 자바스크립트에서는 id를 엄격하게 구분하므로 HTML에서 id명을 중복 정의하지 않도록 주의해야 합니다. 

2. DOM 메서드(여러 문서 객체를 선택하는 메서드)

   ```Js
   document.getElementsByTagName(요소명) // 태그명으로 여러 문서 객체 선택
   document.getElementsByClassName(클래스명) // 클래스명으로 여러 문서 객체 선택(IE 9 이상)
   document.querySelectorAll(CSS 선택자) // CSS 선택자로 여러 문서 객체 선택(IE 9 이상)
   ```

3. 텍스트 조작과 DOM 속성 다루기

   1. 텍스트 조작 자바스크립트 속성

      ```js
      innerText // 요소 내부의 텍스트를 읽거나 변경[순수한 텍스트 정보만 출력]
      innerHTML // 요소 내부의 HTML 형식을 읽거나 변경[실제 HTML 코드로 반영된 후 출력]
      ```

   2. sytle 객체와 속성

      |       CSS        |   Javascript    |
      | :--------------: | :-------------: |
      | background-image | backgroundImage |
      | background-color | backgroundColor |
      |    list-style    |    listStyle    |

   3. 속성 조작

      ```js
      setAttribute(속성명, 값) // 속성값 설정
      getAttribute(속셩명) // 속성 값 읽기
      removeAttribute(속성명) // 속성 제거
      ```

4. 인라인 이벤트

   ```js
   onclick // 마우스를 클릭할 때
   onmouseover(hover 1단계) // 요소 안에 마우스가 들어갔을 때
   onmouseout(hover 2단계) // 요소에서 마우스가 벗어났을 때
   onkeydown // 키보드를 입력할 때
   onkeyup // 키를 눌렀다 놓을 때
   onfocus & onblur // 요소가 선택됐거나 해제됐을 때
   onsubmit // 폼 전송 이벤트가 발생했을 때
   ```

5. onload 이벤트

   ```html
   //적용 전
   <body>
       <script>
       	var h1 = document.querySelector;
           h1.innerHTML = '문서를 로딩했습니다.';
           
       </script>
       
       <h1>홈페이지에 오신 것을 환영합니다.</h1>
   </body>
   // script 부분은 실행 안됨. 
   ```

   ```html
   // 적용 후
   <body>
       <script>
       	window.onload = function(){
               var h1 = document.querySelector;
          	 	h1.innerHTML = '문서를 로딩했습니다.';
           }
           
       </script>
       
       <h1>홈페이지에 오신 것을 환영합니다.</h1>
   </body>
   ```

6. 이벤트 객체와 this

   -this는 이벤트가 발생한 객체 자신을 의미한다. 

   <this 예제>

   ```html
   <body>
      <script>
       	 window.onload = function(){
       	var h1 = document.querySelector('h1');
       	h1.onclick = function(){
       			this.innerHTML = '클릭했습니다.';
       		}
       	}
       </script>
       <h1>홈페이지에 오신 것을 환영합니다!</h1>
   </body>
   ```

7. 이벤트 리스너

   |        매개 변수        |                           설명                           |
   | :---------------------: | :------------------------------------------------------: |
   | 이벤트 타입(Event Type) |   이벤트 속성을 지정합니다. 앞에 on을 붙이지 않습니다.   |
   |    리스너(Listener)     | 이벤트가 발생할 때 호출할 함수 또는 메서드를 지정합니다. |

   

