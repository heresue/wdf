//// 함수 선언문 (Declaration) ////
// function helloA() {}     : 기명함수
// 호이스팅이 일어남

function hello() {
  console.log("안녕하세요");
}

//// 1. 함수 표현식 (Expression) ////
// const helloB = function () {}
// function () {}           : 익명함수
//  이름이 없기 때문에 변수로 할당해준다.
// 호이스팅이 일어나지 않음

const world = function () {
  console.log("안녕");
};

// 함수 호출
hello();
world();

//// 호이스팅 ////
// 함수 선언문이 코드의 최상단으로 끌어올려지는 것 (실행될 수 있도록)
// 표현식 선언 전 호출할 경우 error Uncaught ReferenceError: Cannot access 'world' before initialization

//// return (반환) ////
// return이란 함수를 종료하고 값을 반환하는 것이다
// 예시) horizon-ui-chakra > src > views > admin > default > index.jsx - 61행~

function h1() {
  return "hello";
}

console.log(h1());

//// 2. 매개변수 ////
// 함수를 호출할 때 함수로 전달되는 값
// function 함수이름(매개변수1, 매개변수2) {}
// 참고 https://codesandbox.io/p/sandbox/propsreul-iyonghan-goyangi-ireum-nai-lml5vs?file=%2Fsrc%2FApp.js%3A9%2C2
//  다만 위 링크는 리액트(jsx)이기 때문에, 함수 선언식 전에 호출해도 상관없다 (호이스팅의 영향이 없음)

function sum(x, y) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(7, 3)); // 10
console.log(sum(5)); // NaN (y로 들어가는 숫자가 없기 때문(5 + undefined))

// y값이 없을 때 2를 대입
function sum2(x, y = 2) {
  return x + y;
}

console.log(sum2(1, 2)); // 3
console.log(sum2(7, 3)); // 10
console.log(sum2(5)); // 7 (y값 없음 -> 2로 대입해서 계산)

//// 3. 객체의 구조 분해 할당 ////

// 예제1 (일반적인 방법)
// user 객체: name, age email
const w = {
  name: "겨울",
  age: 3,
  email: "winter@mail.com",
};

// 함수 선언 (email값 출력)
function getEmail(a) {
  return `${a.name}의 나이는 ${a.age}살이고 이메일은 ${a.email} 입니다.`;
}

// 함수 호출 (winter@gmail.com)
console.log(getEmail(w));

// 예제2
const users = [
  { name: "봄", age: 2 },
  { name: "여름", age: 1 },
  { name: "가을", age: 6 },
  { name: "겨울", age: 7 },
];

// 함수 선언
function getInfo(a) {
  return `${a.name}의 나이는 ${a.age}살 입니다.`;
}

console.log(getInfo(users[0]));
console.log(getInfo(users[1]));
console.log(getInfo(users[2]));
console.log(getInfo(users[3]));

// 예제3 (객체의 구조 분해 할당)

function getInfo2(a) {
  const { name, age } = a;
  return `${name}의 나이는 ${age}살 입니다.`;
}

console.log(getInfo2(users[0]));

// 축약
function getInfo2({ name, age }) {
  return `${name}의 나이는 ${age}살 입니다.`;
}

console.log(getInfo2(users[0]));
// 보통은 데이터가 많기 때문에 매개변수 자리에 넣어주는 축약형은 잘 사용하지 않는다.

// 예제4 (배열의 구조 분해 할당)

// 배열 만들기
const animals = ["dog", "cat", "fish"];

// 1) 배열의 2번째 요소 호출 //
// 함수 선언
function getSecond1(array) {
  return array[1];
}
// 함수 호출
console.log(getSecond1(animals));

// 2) 배열 호출 //
// 함수 선언
function getSecond2(array) {
  return `나는 ${array[0]}, ${array[1]}, ${array[2]}가 좋아.`;
}
// 함수 호출
console.log(getSecond2(animals));

// 3) 구조 분해 할당 //
// 함수 선언
function getSecond3(array) {
  const [a, b, c] = array;
  return `나는 ${a}, ${b}, ${c}가 좋아.`;
}
// 함수 호출
console.log(getSecond3(animals));

// 4) 2번째 요소부터 호출하기 //
// 함수 선언
function getSecond4(array) {
  const [, b, c] = array; // ,를 반드시 남겨줘야 함
  return `나는 ${b}, ${c}가 좋아.`;
}
// 함수 호출
console.log(getSecond4(animals));
// 마지막 요소를 뺄 경우, 순서대로 들어가는 것이기 때문에 쉼표도 지워줘도 됨.

// // 5) 배열이 없을 경우 //
// const animals2 = ['강아지', , '물고기']

// // 함수 선언
// function getSecond5([a, b='두번째 요소가 없습니다.', c]) {
//     const [a, b, c] = array
//     return `난 ${b}를 키우고 있어`
// }

// // 함수 호출
// console.log(getSecond5(animals2))

// 6) 나머지 매개변수 (Rest Parameters) //
// function 함수이름(...매개변수) {}
// 매개변수는 자유롭게 이름을 설정해도 되지만, 보통 (...rest)로 써줌
// 매개변수를 배열로 전달받는다

// (1) rest 배열로 출력
function sum1(...rest) {
  return rest;
}

console.log(sum1(4, 5)); // [4, 5] (배열로 전달)
console.log(sum1(4, 5, 6, 7, 8, 9)); // [4, 5, 6, 7, 8, 9]

// (2) return을 먼저 쓰면 이후로 반환이 안됨
//        > 다시 재정리 해주자 : 콘솔창을 함수 안에서 호출, 아래에선 함수에 인수 넣어주기
function sum2(...rest) {
  console.log(rest);
}

sum2(1, 2);
sum2(1, 2, 3, 4, 5, 6);

// 숫자 + 배열로 출력
function sum3(a, b, ...rest) {
  console.log(a, b, rest);
}

sum3(8, 2, 3); // 8 2 [3]
sum3(8, 2, 3, 4, 5, 6); // 8 [2, 3, 4, 5, 6]

// 배열의 숫자를 더하는 로직 함수
function sumAll(...rest) {
  console.log(rest);

  // return rest.reduce(fn, 초기값)
  return rest.reduce(function (account, current) {
    return account + current;
  }, 0);
}

sumAll(1, 2, 3, 8);
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));

//// 5. 화살표 함수 (Arrow Function) ////
// function 키워드 대신 => 를 사용하여 좀 더 간략한 방법으로 함수를 선언
// 익명함수이기 때문에 함수 표현식으로만 사용할 수 있음
//  : const 함수이름 = function () {}
// () => {}     // 매개변수가 없을 경우
// (x) => {}    // 매개변수가 하나일 경우, 소괄호 생략 가능
// (x, y) => {} // 매개변수가 여러개인 경우, 소괄호룰 생략할 수 없음

// 예제1
const hello2 = () => {
  console.log(`나는 ${name}입니다.`);
};

hello2("김코딩");

// 예제2: sum 함수에 적용
// const sum4 = (a, b) => {
//     return a + b
// }

// 위 함수에서 중괄호 & return문 생략 가능
const sum4 = (a, b) => a + b;

console.log(sum4(1, 2));

// ★화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우 (매개변수 괄호 생략 가능 (하나라서))
const b = (x) => {};
const b2 = (x) => {};

// 3. 매개변수가 여러 개인 경우 (소괄호 생략 불가)
const c = (x, y) => {};

// 4. return이 있는 경우 (중괄호 & return 생략 가능)
const d = (x, y) => {
  return x + y;
};
const d2 = (x, y) => x + y; // 축약

// 5. return으로 시작하지 않는 경우 (중괄호 생략 불가)
const e = (x, y) => {
  console.log(x + y);
  return x + y;
};

// 6. 객체를 반환하는 경우
const f = () => {
  return { a: x };
};
const f2 = () => ({ a: x }); // 축약 + ()

// 7. 배열을 반환하는 경우
const g = () => {
  return [1, 2, 3];
};
const g2 = () => [1, 2, 3]; // 축약

//
//
//
//
//
//// 6. 호출 스케줄링 (Scheduling) ////

// setTimeout ------------------------------------------------
// 일정 시간이 지난 후 함수를 실행
// setTimeout(함수, 시간)

// clearTimeout
// setTimeout 함수의 타이머를 취소

// const timer = setTimeout(() => {
//   console.log("[setTimeout]hello");
// }, 3000); // 단위: ms

// const btnStop = document.querySelector("#btnStop");

// btnStop.addEventListener(이벤트, 함수) --------------------------
btnStop.addEventListener("click", () => {
  console.log("취소");
  clearTimeout(timer); // 3초 전에 버튼을 누르면 timer가 실행되지 않음
});

//
//
// setInterval ------------------------------------------------
// 일정 시간 간격으로 함수를 실행 (ex: 슬라이드)
// setInterval(함수, 시간)

// const timer2 = setInterval(() => {
//   console.log("[setInterval]안녕?");
// }, 1000);

// const btnStop2 = document.querySelector("#slideStop");

// btnStop2.addEventListener("click", () => {
//   console.log("슬라이드 정지");
//   clearTimeout(timer2);
// });

// 콜백 함수 ------------------------------------------------
// 함수의 매개변수로 전달되는 함수
// 즉, 인수로 들어가는 함수
// ex: 위의 setTimeout, setInterval 등에서 인수로 들어가는 함수
// >> 이렇게 인수를 전달받아, 특정 시점에 호출하는 함수를 콜백함수라고 한다!!!!

// 콜백함수 자체는 지금 많이 사용하진 않지만, 개념은 꼭 이해하기 (비동기 등 다른 개념을 이해할 때 필요)

const x = () => {
  console.log("X");
};
const y = () => {
  console.log("Y");
};

x();
y();
// 이 때, y를 먼저 실행하고 싶다면?
// >> 콜백함수 사용!

const x2 = (props) => {
  props(); // 2. props로 받아서 함수 실행 > y함수가 실행된다
  console.log("X2");
};
const y2 = () => {
  console.log("Y2");
};

x2(y2); // 1. x라는 함수에 y함수를 인수로 넣어줌 (()사용 안함. 왜냐면 함수를 실행하는게 아니라 인수로 사용한거라서)
//
//
// 콜백함수를 써서 순서를 바꾸는 이유?
// >> 비동기 처리!
//  동기 처리: 순서대로 처리
//  비동기 처리: 순서없이 막 처리해버리는 것

// 콜백함수 예제: 1초 후에 콜백 함수를 호출하는 함수 //
// x + y 함수
// const sum5 = (x, y) => {
//   // setTimeout(함수, 시간)
//   setTimeout(() => {
//     return x + y;
//   }, 1000);
// };
// console.log(sum5(1, 6));
// setTimeout은 1초 후에 실행이 되는데, sum5 자체는 인수(x, y)를 바로 받았음.
// 즉, sum5 함수는 setTimeout()의 실행을 기다리지 않고 즉시 실행을 완료하고 반환하여, undefined 값이 출력된다.

//  >>> 이 때, 콜백 함수를 사용해서 수정해준다.
//  >>>>>즉, 함수를 즉시 실행하지 않고, 인수로 넣어주자!

// const sum7 = (x, y, z) => {
//   // setTimeout(함수, 시간)
//   setTimeout(() => {
//     return z(x + y); // z(3)
//   }, 1000);
// };

// sum7(1, 2, (value) => {
//   console.log(value);
// });

// 콜백함수 복습
const a1 = (b1) => {
  b1();
  console.log("a1");
};

const b1 = () => {
  console.log("b1");
};

a1(b1);

// 콜백함수 복습2_ 1초 후에 콜백함수를 호출하는 함수
const sum8 = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 2000);
};

sum8(1, 5, (d) => {
  console.log(d);
});

// 재귀함수
// 자기 자신을 호출하는 함수

let i = 0;
const aaa = () => {
  console.log("aaa");
  i++;
  if (i < 5) {
    // 자기자신을 i < 5 번까지만 불러옴
    aaa(0);
  }
};

aaa();

// 재귀함수 예제_ 최고 조상 찾기
const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (props) => {
  if (props.parent) {
    // props.parent가 참이면~ (parent 값이 있다면 참, 없으면 거짓)
    return getRootUser(props.parent);
  }
  return props; // 마지막 최고 조상 내보내기
};

console.log(getRootUser(userD));

// this ------------------------------------------------
// 일반함수: 호출위치에 따라 this가 정해짐 (선언된 함수 범위에서 this를 찾음)
// 화살표함수: '함수'에서 this가 정의되기 때문에, 함수를 찾아다님.
// >>> ★ 오브젝트 안쪽에서는 화살표함수 말고 일반함수를 쓰자!!!

// 일반함수
const obj = {
  name: "아메리카노",
  price: 4000,
  // 아메리카노는 4000원 입니다를 보여주는 함수 만들기
  // front: function () {  // *객체 안의 함수: 메서드
  //   return `${this.name}는 ${this.price}원 입니다.`;
  // },
  // 축약형
  front () {
    return `${this.name}는 ${this.price}원 입니다.`;
  },
};
console.log(obj.front());

// 화살표함수
function coffee() {
  this.name = "프라푸치노";
  this.price = "6000";

  return {
    name: "라떼",
    price: 5000,
    front: () => {
      return `${this.name}는 ${this.price}원 입니다.`;
    }, // 객체 안의 함수: 메서드
  };
}

const coffee2 = coffee();
console.log(coffee2.front());

// const obj2 = {
//   name: "라떼",
//   price: 5000,
//   front: () => {
//     return `${this.name}는 ${this.price}원 입니다.`;
//   }, // 객체 안의 함수: 메서드
// };
// console.log(obj.front());
