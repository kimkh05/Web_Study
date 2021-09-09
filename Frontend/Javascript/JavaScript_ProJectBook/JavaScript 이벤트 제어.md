# 이벤트 제어

1. 두 가지 이벤트 속성으로 hover 처리

   - mouseover & mouseout을 조합해 구현할 수 있습니다.

   ```html
   /* CSS로 hover 효과 주기 */
   <style>
       #box{
           width: 100px;
           height: 100px;
           border: 3px solid black;
       }
       #box:hover{
           background: orange;
           color: white;
       }
   </style>
   ```

   ```html
   <body>
       <div id = "box">
           <p>마우스를 올려 주세요. </p>
       </div>
       <script>
       	var box = document.getElementById('box');
           
           // 마우스 오버
           box.addEventListener('mouseover', function(){
               box.setAttribute('class', 'hover');
           });
           
           // 마우스 아웃
           box.addEventListener('mouseout', function(){
              box.removeAttribute('class'); 
           });
       </script>
   </body>
   ```