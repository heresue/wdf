//// 함수 선언문 (Declaration) ////
// function helloA() {}     : 기명함수
// 호이스팅이 일어남

function hello () {
    console.log('안녕하세요')
}


//// 함수 표현식 (Expression) ////
// const helloB = function () {}
    // function () {}           : 익명함수
    //  이름이 없기 때문에 변수로 할당해준다.
// 호이스팅이 일어나지 않음

const world = function () {
    console.log('안녕')
}


// 함수 호출
hello ()
world ()


//// 호이스팅 ////
// 함수 선언문이 코드의 최상단으로 끌어올려지는 것 (실행될 수 있도록)
// 표현식 선언 전 호출할 경우 error Uncaught ReferenceError: Cannot access 'world' before initialization



//// return (반환) ////
// return이란 함수를 종료하고 값을 반환하는 것이다
// 예시) horizon-ui-chakra > src > views > admin > default > index.jsx - 61행~


function h1 () {
    return 'hello'
}

console.log(h1())



//// 매개변수 ////
// 함수를 호출할 때 함수로 전달되는 값
// function 함수이름(매개변수1, 매개변수2) {}
// 참고 https://codesandbox.io/p/sandbox/propsreul-iyonghan-goyangi-ireum-nai-lml5vs?file=%2Fsrc%2FApp.js%3A9%2C2
//  다만 위 링크는 리액트(jsx)이기 때문에, 함수 선언식 전에 호출해도 상관없다 (호이스팅의 영향이 없음)

function sum (x, y) {
    return x + y
}

console.log(sum(1, 2))  // 3
console.log(sum(7, 3))  // 10
console.log(sum(5))     // NaN (y로 들어가는 숫자가 없기 때문(5 + undefined))


// y값이 없을 때 2를 대입
function sum2 (x, y = 2) {
    return x + y
}

console.log(sum2(1, 2)) // 3
console.log(sum2(7, 3)) // 10
console.log(sum2(5))    // 7 (y값 없음 -> 2로 대입해서 계산)



//// 객체의 구조 분해 할당 ////


// 예제1 (일반적인 방법)
// user 객체: name, age email
const w = {
    name: '겨울',
    age: 3,
    email: 'winter@mail.com',
}

// 함수 선언 (email값 출력)
function getEmail (a) {
    return `${a.name}의 나이는 ${a.age}살이고 이메일은 ${a.email} 입니다.`
}

// 함수 호출 (winter@gmail.com)
console.log(getEmail(w))



// 예제2
const users = [
    {name: '봄', age: 2},
    {name: '여름', age: 1},
    {name: '가을', age: 6},
    {name: '겨울', age: 7},
]

// 함수 선언
function getInfo (a) {
    return `${a.name}의 나이는 ${a.age}살 입니다.`
}

console.log(getInfo(users[0]))
console.log(getInfo(users[1]))
console.log(getInfo(users[2]))
console.log(getInfo(users[3]))



// 예제3 (객체의 구조 분해 할당)

function getInfo2 (a) {
    const { name, age } = a
    return `${name}의 나이는 ${age}살 입니다.`
}

console.log(getInfo2(users[0]))


// 축약
function getInfo2 ({ name, age }) {
    return `${name}의 나이는 ${age}살 입니다.`
}

console.log(getInfo2(users[0]))
// 보통은 데이터가 많기 때문에 매개변수 자리에 넣어주는 축약형은 잘 사용하지 않는다.



// 예제4 (배열의 구조 분해 할당)

// 배열 만들기
const animals = [
    'dog', 'cat', 'fish'
]

// 1) 배열의 2번째 요소 호출 //
// 함수 선언
function getSecond1 (array) {
    return array[1]
}
// 함수 호출
console.log(getSecond1(animals))


// 2) 배열 호출 //
// 함수 선언
function getSecond2 (array) {
    return `나는 ${array[0]}, ${array[1]}, ${array[2]}가 좋아.`
}
// 함수 호출
console.log(getSecond2(animals))


// 3) 구조 분해 할당 //
// 함수 선언
function getSecond3 (array) {
    const [a, b, c] = array
    return `나는 ${a}, ${b}, ${c}가 좋아.`
}
// 함수 호출
console.log(getSecond3(animals))


// 4) 2번째 요소부터 호출하기 //
// 함수 선언
function getSecond4 (array) {
    const [, b, c] = array          // ,를 반드시 남겨줘야 함
    return `나는 ${b}, ${c}가 좋아.`
}
// 함수 호출
console.log(getSecond4(animals))
// 마지막 요소를 뺄 경우, 순서대로 들어가는 것이기 때문에 쉼표도 지워줘도 됨.



// 5) 배열이 없을 경우 //
