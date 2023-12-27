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


// ----------- null ----------- //
// 값이 의도적으로 비어놓은 상태


// ----------- object (객체 데이터) ----------- //
// 여러 데이터를 key:value 형태로 저장
// : 여러 데이터를 하나의 변수에 저장하기 위해 사용
// { key: value }
// 출력 시 index 번호가 없음! (키값)

// 1명의 유저에 여러 데이터값을 저장하기
let user = {
    name: '김가을',
    age: 1,
    cute: true,
};

console.log(user);
console.log(user.name);

// 김가을 나이는 1살 입니다.
console.log(`${user.name} 나이는 ${user.age}살 입니다.`)
// 김가을은 귀여워요.
console.log(`${user.name}은 ${user.cute ? '귀여워요' : '귀엽지 않아요'}.`)


// ----------- array (배열 데이터) ----------- //
// 순서가 중요
