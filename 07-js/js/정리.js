// JS데이터(JSData) - javascript 기본 https://odada.me/232
// 연산자(Operator) - javascript 기본 https://odada.me/233
// 구문(Statement) - javascript 기본 https://odada.me/235
// 함수(Function) - javascript 기본 https://odada.me/236
//
// 배열 ------------------------------------------------

const starbucks = ["americano", "latte", "tea"];

console.log(starbucks[0]);
console.log(starbucks[2]);
console.log(starbucks.length);

// 객체 ------------------------------------------------
const starbucksMenu = {
  name: "americano",
  price: 4000,
  size: "tall grande venti",
};
console.log(starbucksMenu.price); // 점 표기법
console.log(starbucksMenu["size"]); // 대괄호 표기법

const userA = {
  name: "Kim",
  age: 60,
};

const userB = {
  name: "Lee",
  age: 30,
  parent: userA,
};

console.log(userB);
console.log(userB.name);
console.log(userB.parent.name);
console.log(userB["parent"]);
console.log(userB["parent"]["name"]);

const users = [userA, userB];

const users2 = [
  {
    name: "A",
    age: 50,
  },
  {
    name: "B",
    age: 20,
    parent: userA,
  },
];

console.log(users2[0].name);
console.log(users2[1].parent.age);

// 구조분해 할당 ------------------------------------------------
const arr = [1, 2, 3];
const [, b, c] = arr; // a, b, c: 매개변수

console.log(arr[0], arr[1], arr[2]);
console.log(b, c);

// 배열은 필요없는 부분이라해도 빼면 안 된다!
// chakra-ui 반응형 작업 시
// display={['none', 'none', 'block]}
// display={['none', null, 'block]} // null을 입력해줌으로써 'none'을 상속받음
// 위와 같이 자리를 남겨놔야 함.
// 객체로 표현한다면?
//  >> display={{sm: 'none', lg: 'block'}}

const arr2 = [1, 2, 3, 4, 5];
// const [d, ...rest] = arr2   // 배열 속성을 가져오는데, d만 따로 가져와서 쓰고 나머지는 그대로
const [d, e, ...rest] = arr2;

console.log(d);
console.log(e);
console.log(rest);

const obj = {
  name: "A",
  age: 30,
  height: 180,
};

// 구조분해 할당
// const { name, age, height } = obj;
// console.log(name, age, height);

// 값이 없을 때 기본값 설정
// const { name = "이름없음", age, height } = obj;
// console.log(name, age, height);

// 변수 새로 할당
const { name = "이름없음", age: a, height: h } = obj;
console.log(name, a, h);

// 선택적 체이닝 연산자 ------------------------------------------------
const user1 = {
  name: "Jane",
  age: 32,
  address: "서울",
};
const user2 = {
  name: "Tom",
  age: 26,
};

function printCity(props) {
  return props.address || "주소없음"; // or 연산자 (처음 만나는 참 값을 출력)
}

console.log(printCity(user1));
console.log(printCity(user2));

// if 조건문 ------------------------------------------------
// 양수, 음수, 0인지 판별하는 함수
function isPositive(props) {
  if (props > 0) {
    return "양수입니다";
  } else if (props < 0) {
    return "음수입니다";
  } else {
    return "0 입니다.";
  }
}

console.log(isPositive(20));
console.log(isPositive(-20));
console.log(isPositive(0));

// switch 조건문 ------------------------------------------------
// if문과 비슷한 역할 (조건이 명확한 경우)

function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍";

    case "고양이":
      return "야옹";

    default:
      return "알 수 없음";
  }
}

console.log(getSound("고양이"));
console.log(getSound("사자"));

// switch -> if문으로 바꾸기

function getSound2(props) {
  // if (props === '개') { return "멍멍" }
  // {} 생략 가능
  //  >> 이렇게 생략해서 한 줄로 쓸수 있기 때문에, 리액트에서 삼항연산차처럼 쓸 수 있다!
  if (props === "개") return "멍멍";
  if (props === "고양이") return "야옹";
  return "몰라";
}

console.log(getSound2("개"));
console.log(getSound2("참새"));

// for 조건문 ------------------------------------------------
// for문에서는 변수를 거의 i로 사용한다!

const users3 = [
  {
    name: "봄",
    age: 2,
  },
  {
    name: "여름",
    age: 8,
  },
  {
    name: "가을",
    age: 1,
  },
  {
    name: "겨울",
    age: 10,
  },
];

// 여름이 나이는 3살입니다.
console.log(`${users3[1].name}이의 나이는 ${users3[1].age} 입니다.`);
console.log(`${users3[3].name}이의 나이는 ${users3[3].age} 입니다.`);

for (let i = 0; i < users3.length; i++) {
  console.log(`[for] ${users3[i].name}이의 나이는 ${users3[i].age} 입니다.`);
}

// for of문
// user라는 변수를 바로 하나 만들어서 구조분해할당처럼 해줌
// users의 객체 하나하나를 user로 저장해라

for (let user3 of users3) {
  console.log(`${user3.name}의 나이는 ${user3.age}입니다.`);
}

// for in문
// 객체 속성을 하나씩 꺼내서 변수에 할당

// while문 (무한반복)
// do while문
//
//
//
// 함수 ------------------------------------------------
//
// 일반함수 선언
function hello() {
  console.log("hello");
}

hello();

// 익명함수 표현식
const hello2 = function () {
  console.log("Hi");
};

hello2();

// 함수 예제
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 3));
console.log(sum(6)); // 6 + undifined = NaN

// 매개변수 기본값 설정
function sum2(a, b = 5) {
  return a + b;
}

console.log(sum2(6)); // 6 + 5 = 11

// 객체의 구조 분해 할당 ------------------------------------------------
const profile1 = {
  name: "John",
  age: 20,
};

const profile2 = {
  name: "Amy",
  age: 24,
  email: "amy@email.com",
};

function getName(props) {
  return props.name;
}
console.log(getName(profile1));

function getSentence(props) {
  return `${props.name}의 나이는 ${props.age}살 입니다. `;
}
console.log(getSentence(profile1));

// 구조분해할당
function getName2(props) {
  const { name, age } = props;
  return `${name}의 나이는 ${age}살 입니다. `;
}
console.log(getName2(profile2));

// 구조분해할당 - 매개변수 자리에 바로
function getName3({ name, age, email = "이메일 없음" }) {
  return `[구조분해2] ${name}의 나이는 ${age}살 입니다. (contact: ${email})`;
}
console.log(getName3(profile1));
console.log(getName3(profile2));

//
//
// 배열의 구조 분해 할당 ------------------------------------------------
const table = ["row1", "row2", "row3"];

// 함수 선언 (get2) - 2번째 배열을 출력
function get2(props) {
  return props[0];
}
console.log(get2(table));

// 구조분해할당
function get3(props) {
  // <Box display={['none', null, 'flex']}></Box>
  const [a, b, c] = props;
  return b;
}
console.log(get3(table));

function get4([, , c = "기본값"]) {
  // <Box display={['none', null, 'flex']}></Box>
  return c;
}
console.log(get4(table));

//
//
// 나머지 매개변수 ------------------------------------------------
function sum3(...rest) {
  return rest;
}

console.log(sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//
//
//
// 화살표 함수 ------------------------------------------------
const arrow = () => {}; // 매개변수 없음
const arrow2 = (x) => {}; // 매개변수 1개인 경우 () 생략 가능
const arrow3 = (x, y) => {};

// sum 함수
const sum4 = (x, y) => {
  return x + y;
};

console.log(sum4(1, 3));

// 축약: return을 포함한 {} 생략 가능
const sum5 = (x, y) => x + y;
console.log(sum5(56, 7));

//
//
// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const aa = () => {};

// 2. 매개변수가 1개인 경우
const bb = (x) => {}; // 소괄호 생략 가능

// 3. 매개변수가 여러 개인 경우
const cc = (x, y) => {};

const dd = (x, y) => {
  return x + y;
};
// 축약형 (return 생략)
const dd2 = (x, y) => x + y;
// ***return 키워드로 시작하지 않는 경우,
// 중괄호를 포함한 return을 생략할 수 없다.
const ee = (x, y) => {
  console.log(x + y);
  return x + y;
};

// 4. 객체 데이터를 반환하는 경우
const gg = () => {
  return { a: 1, b: 2 };
};
// 축약형
// const hh = () => { a: 1, b: 2 }
//  >> {}가 객체의 중괄호인지, 함수의 중괄호인지 알 수 없음.
//  >>>> ()를 사용해서 적어준다!
const hh = () => ({ a: 1, b: 2 });

//
// 5. 배열 데이터를 반환하는 경우
const ii = () => {
  return [a, b, c];
};
// 축약형
const jj = () => [a, b, c];
