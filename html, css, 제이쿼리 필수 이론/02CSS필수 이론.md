# CSS ( Cascading Style Sheets )란?
- HTML 문서 내에 HTML 태그를 선택해서 디자인하고 배치하는 역할을 합니다.

--- 

# CSS 링크하기

## CSS 링크하기 - 내부 CSS 구문 작성
- html 파일의 <head>...</head> 사이에 <style></style> 로 CSS 시작

## CSS 링크하기 - 외부 CSS 파일로 링크 후 CSS 구문 작성
- html 파일의 <head>...</head> 사이에 css 파일을 링크
- ex) index.html 파일의 <head>...</head> 사이에 style.css를 링크

--- 
# CSS 기본 문법

## 기본 문법 (Syntax)
body {
<!-- selector -->
  color : navy;
<!-- property : value -->
}

---
# CSS 선택자 적용 우선순위
## 선택자 종류
- 태그 선택자<br>
p {<br>
  text-align :center;<br>
  color:red;<br>
}<br>
- 클래스 선택자<br>
.center {<br>
  text-align :center;<br>
  color:red;<br>
}<br>
- 아이디 선택자<br>
#center {<br>
  text-align :center;<br>
  color:red;<br>
}<br>
- 태그와 함께 쓰는 선택자<br>
p.center {<br>
  text-align :center;<br>
  color:red;<br>
}

## 그룹 선택자
- 그룹 선택자<br>
h1, p {<br>
  text-align: center; :red;<br>
}<br>
- 하위 선택자<br>
p span {<br>
  text-align:center; :red;<br>
}<br>
- 전체 선택자<br>
*{<br>
  font-size:14px; line-height:24px;<br>
}<br>

## CSS 적용 우선순위
1. !important Style
2. Inline Style
3. ID Selector Style
4. Class Selector Style
5. Tag Selector Style
6. 동일한 CSS 속성이 중복 사용되는 경우 스타일은 왼쪽의 우선 순위에 따라 적용

