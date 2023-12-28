//-----------변수-----------//
//  데이터를 저장하고 사용하는 데이터의 이름(그릇)
//  var, let, const
//  -var: ES6 (최근 js버전) 이전에 사용하던 변수. 현재는 잘 사용하지 않음
//  변수 선언
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);



// -----------let 변수 (변수의 값을 변경할 수 있음)----------- //
//  변수 선언
let c = 10;
console.log(c);

//  변수 재할당 (값 변경)
c = 20;
console.log(c);



// -----------const 변수 (변수의 값을 변경할 수 없음)----------- //
// 변수 선언
const d = 5;
console.log(d);

// 변수 재할당
// d = 10;
// console창 확인: 에러 발생 (에러나면 다음 부분도 안나옴)



// -----------zero base numbering----------- //
// js는 배열의 index가 0부터 시작
//  배열 ex) 회원, 공지사항 글
//  배열 선언
const animals = ["dog", "cat", "fish"];

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);



// -----------주석----------- //
// 한 줄 메모
/* 한 줄 메모 */

/**
* 여러 줄
* 메모1
* 메모2
*/


///////////////////////////////////////
///////////////////////////////////////

// -----------String (문자열)----------- //
// 작은 따옴표(''), 큰 따옴표("")로 감싸서 표현

let myName = '박수연';
// name으로 할당할 수 없음 (예약어(reserved word))
let age = '28';

console.log(myName);
console.log(age);
// 박수연 나이는 28살 입니다.
console.log(`${myName} 나이는 ${age}살 입니다.`)

// 1 + 1 = 2
// '1' + '1' = 11



// -----------boolean (true, false)----------- //

let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);



// -----------undefied----------- //
// 값이 할당되지 않은 상태



// -----------null----------- //
// 값이 의도적으로 비어놓은 상태



// -----------object (객체 데이터)----------- //
// 여러 데이터를 {key:Value} 형태로 저장
// : 여러 데이터를 하나의 변수에 저장하기 위해 사용
// { key: value }
// 출력 시 index 번호가 없음! (키값)

// 1명의 유저에 여러 데이터값을 저장하기
let user = {
    name: '김가을',
    age: 1,
    cute: true,
};

// console.log(변수.key);
console.log(user);
console.log(user.name);

// 김가을 나이는 1살 입니다.
console.log(`${user.name} 나이는 ${user.age}살 입니다.`)
// 김가을은 귀여워요.
console.log(`${user.name}은 ${user.cute ? '귀여워요' : '귀엽지 않아요'}.`)



// -----------array (배열 데이터)----------- //
// 여러 데이터를 순서대로 저장하기 위해 사용
// 순서가 중요

let fruits = ['사과', '바나나', '딸기'];
// 배열은 순서나 데이터값이 바뀔 수 있어서 let으로 주로 사용

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



// -----------변수 (var, let const)----------- //
// var은 지금은 잘 쓰지 않음.
//  재할당이 가능하고 위에 있는 애가 없어지는데, 그래서 오류가 많이나서 안 씀.
//  var이 있다면 기존에 사용하던거라서 수정안했을 수도 있음.

// let
// 재할당 가능

// const
// 재할당 불가



// -----------예약어----------- //
// 특정 의미가 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어들



// -----------함수----------- //
// 특정 기능을 수행하는 코드의 집합

// 함수 선언
function sayHello() {
    // 함수 내용
    console.log('안녕하세요');
}

// 함수 호출
sayHello();


// 함수의 재사용

// 국어, 수학 점수(매개변수)를 전달하면 총점을 계산하는 함수
// 함수선언
function sum(a, b) {
    return a + b
};
//  = a+b 값을 밖으로 빼줘

// 함수 호출
sum(80, 90);
//  여기까지만 하면 출력이 안됨. 콘솔창으로 빼라는 함수가 없기 때문
console.log(sum(80,90));
console.log(sum(70,80));
//  콘솔창 안에서도 함수를 호출할 수 있음
//  이렇게 매번 함수를 넣으려면 번거로우니, 함수 자체를 변수로 설정해준다.
let e = sum(20, 30);
console.log(e);


// -----------기명 함수 (named function)
// 함수 '선언'
function hello() {
    console.log('hello1')
}
hello();
//  return함수로 표현할 수도 있음

// -----------익명 함수 (anonymous function)
// function () {}
//  이름이 없기 때문에 내가 불러줄 수 없으니, 변수를 할당해서 사용할 수 있게 한다.
let hello2 = function () {
    console.log('hello2');
}
hello2();

// -----------화살표 함수 (arrow function)
// (): 매개변수 {}실행함수
let hello3 = () => {
    console.log('hello3');
}

hello3();

// -----------객체데이터



// -----------조건문 (if, else if, else)----------- //
// 특정 조건에 따라 다른 코드를 실행할 때 사용

// -----------if
// if(조건) {참일 경우 실행문}
//  조건이 참일 경우, 실행문 실행
//

// -----------if else
// 참, 거짓의 조건을 다 넣어줌
// if(조건) {참일 경우 실행문} else {거짓일 경우 실행문}
// if () {} else {}
//  >> 이렇게 괄호까지 먼저 셋팅해준 후, 값을 넣어준다
if (false) {
    console.log('true');
} else {
    console.log('false');
}



// -----------DOM API----------- //
// Document Object Model
// html 문서의 요소를 제어하는 방법 (html object들을 조작할 때 사용)

// -----------html 요소(element) 검색

const boxEl = document.querySelector('.box');
//  class, id 검색할 때 사용
//  class이름은 데이터가 아니라 글자이므로, 따옴표 사용
//  재할당되지 않게 해줘야하므로 const로 설정

// boxEl를 클릭했을 때
boxEl.addEventListener('click', function () {
    console.log('Click');
    // boxEl 요소에 active 클래스 추가
    boxEl.classList.add('active');
});
//  addEventListener: 이벤트 발생하는지 잘 듣고 있어라
//  click이 발생했을 때, 콘솔에 'Click'이 써졌으면 좋겠다
//  [!오류발생!] Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at comm.js:254:7
//      html에서 js(script)에서 html을 읽기 전에 미리 실행을 해버리기 때문에 오류가 발생.
//      (해결1) js를 아래에 넣어줌 (하지만 비추. 위에 적어줘야 하니까)
//      (해결2) script defer 태그 사용 (defer: 나중에 읽어라)


// -----------클래스(class) 정보


// -----------요소(element) 모두 찾기
const tabEls = document.querySelectorAll('.tab');
// Els 복수로 잡아줘야 다 잡힘
// 4개 다 잡을거니까 querySelector*All*
console.log(tabEls);

tabEls.forEach(function (tabEl, index) {
    console.log(tabEl, index);
    tabEl.classList.add(`tab-${index + 1}`);
})