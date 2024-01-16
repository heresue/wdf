////// js기본

//// String (문자) ////

console.log("hello world")

const a = "winter"
console.log(a)

// 리터럴 방식
// 백틱(``, backticks)을 이용하면 문자열 안에 변수를 넣을 수 있다.
console.log(`안녕~!~!~!! ${a}`)



//// Number (숫자) ////
// 따옴표를 붙이지 않으면 숫자로 인식한다.
// 숫자는 다른 색으로 출력됨

console.log(123)        // 123
console.log(1 + 2)      // 3
console.log("1" + 2)    // 12
console.log("1" + "2")  // 12 (문자)

const b = -123
const c = 1.23

console.log(b, c)
console.log(b + 100, c * 2) // 콘솔창에서의 연산도 가능



//// 숫자로 변환 ////

const d = 0.1
const e = 0.2
// 1. 연산
console.log(d + e)  // 0.30000000000000004 (부동 소수점 방식 때문)

// 2. toFixed() : 소수점 ()자리까지만 남기고 잘라준다.(+ 문자열로 반환됨)
console.log((d + e).toFixed(1)) // 0.3 (문자)

// 3. typeof : 문자열인지 숫자열인지 보여줌
console.log(typeof (d + e).toFixed(1)) // string (문자)

// typeof로 확인하는 이유: 문자, 숫자 중 어떤걸 넣을지 선택해야 하는 명령어가 있음

// 4. Number() : 숫자로 반환
console.log(Number((d + e).toFixed(1)))
console.log(typeof Number((d + e).toFixed(1))) // number (숫자)



//// Boolean (참 / 거짓) ////

const f = true
const g = false

// 참일 경우 출력, 거짓일 경우 출력하지 않음
// if () 안에 true라고 직접 넣어도 되지만, 실무에서는 보통 변수로 많이 사용하니까 변수로 쓰자!

if (f) {
    console.log('참입니다.')    // 출력
}

if (g) {
    console.log('참입니다.')    // 출력되지 않음
}



//// null & undefined (값 없음) ////
// null : 값이 없다.
// undefined : 값이 할당되지 않았다.
//  ex) 회원가입을 할 때
//      null : 항목 자체가 아예 없음. 명확하게 데이터를 넣지 않는 것. 할당 조차 안함
//      undefined : 선택사항. 항목은 있는데 데이터(값)는 넣지 않음


let age = null
console.log(age)

age = 20
console.log(age)


let height          // let height = 180 원래는 이렇게 값을 할당해주는데, 값을 할당하지 않음
console.log(height)

height = 180        // height값 할당
console.log(height) // 180 출력


// null, undefined 예시 (블로그) //
const example = {
    name: 'Kim',
    age: 20,
    height: 170,
    email: null
}

console.log(example.name, example.age, example.height)  // Kim 20 170
console.log(example.weight)                             // undefined
console.log(example.email)                              // null : 이메일이 없습니다.



//// Array (배열) ////
// [value, value, value]
// 여러개의 값(value)을 순차적으로 나열한 자료형 (순서가 있는 집합)
// 배열은 순서가 있음! 몇번째인지 순서를 아는것이 중요하다

const animals = ["강아지", "고양이", "토끼"]

console.log(animals)        // 배열, 배열의 인덱스 번호, 개수(length) 출력
console.log(animals[0])     // 강아지
console.log(animals[2])     // 토끼
console.log(animals.length) // 3

// ★ 배열의 마지막 요소를 가져오기
console.log(animals[animals.length - 1]) // 토끼


//// object (객체) ////
// {key: value, key: value, key: value}
// 이름(key)과 값(value)으로 구성된 속성(property)을 저장한 자료형 (순서가 없는 집합)

const user = {
    name: '가을',
    age: 4,
}

console.log(user)
console.log(user.name, user.age)

// 가을이의 나이는 2살 입니다.
console.log(user.name + "이의 나이는 " + user.age +"살 입니다.")    // 구 표기 방식
console.log(`${user.name}이의 나이는 ${user.age}살 입니다."`)       // 웹표준화 이후 새로운 방식 (백틱)



// 점 표기법
// 객체의 키가 유효한 이름인 경우에만 사용 가능 (주로 사용하는 표기법)
console.log(user.name, user.age)

// 대괄호 표기법
// 변수를 키로 사용할 때 사용 가능
console.log(user['name'])

const userA = {
    name: 'Kim',
    age: 30,
}

const userB = {
    name: 'Lee',
    age: 10,
    parent: userA
}

console.log(userB)                      // userB의 이름: Lee
console.log(userB.parent.name)          // userB의 부모 이름: Kim
console.log(userB['parent']['name'])    // userB의 부모 이름: Kim (대괄호 표기법)


//// 배열에 객체 넣기 ////
// [참고] https://codesandbox.io/p/sandbox/table-props-baeyeol-q9l69c?file=%2Fsrc%2FApp.js%3A13%2C1

const users = [userA, userB]
console.log(users)
console.log(users[0])
console.log(users[0].name)



//// function(함수) ////
// function 함수이름(매개변수) {실행문}
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형

// 함수 선언
function printHello() {
    console.log('안녕하세요')
}
// 함수 호출
printHello()    // ★괄호를 꼭! 붙여줘야 한다.


// 함수 () 유무에 따른 차이
console.log(printHello)     // ()가 없으면 함수 자체를 출력
console.log(printHello())   // ()를 넣어줘야 함수값이 출력됨

// ex
function getNumber() {
    return 123
}

console.log(getNumber, typeof getNumber)        // 함수 자체를 출력, typeof: function
console.log(getNumber(), typeof getNumber())    // 함수값이 출력, typeof: number

// 단, 라이브러리/명렁어에 따라서 ()를 안쓰는 경우도 있다!
// ex: throttle의 경우, 함수 뒤에 ()를 쓰지 않음


//// Type Conversion (형 변환) ////
// === 일치 연산자: 값, 형태 비교
// ==  동등 연산자: 값만 비교

const h = 1     // number
const i = '1'   // string

console.log(h===i)  // false (일치 연산자)
console.log(h==i)   // true (동등 연산자)


//// truthy & falsy ////
// truthy: true 같은 것: falsy 외 모든 값
// falsy: false 같은 것: false, 0, '', null, undefined, NaN(Not a Number)

const j = true          // 참입니다.
// const j = false      // 거짓입니다.
// const j = 0          // 거짓입니다.
// const j = ''         // 거짓입니다.
// const j = null       // 거짓입니다.
// const j = undefined  // 거짓입니다.

if(j) {
    console.log('참입니다.')
} else {
    console.log('거짓입니다.')
}



//// typeof: 데이터 타입 확인 ////
console.log(typeof '123')           // string
console.log(typeof 123)             // number
console.log(typeof true)            // boolean
console.log(typeof undefined)       // undefined
console.log(typeof null)            // object
console.log(typeof {})              // object
console.log(typeof [])              // object
console.log(typeof function(){})    // function

// null, {}, []는 object로 나오기 때문에 구분하기 어려움
//  : constructor를 통해 데이터 타입을 확인할 수 있음
console.log([].constructor)         // Array
console.log({}.constructor)         // Object
console.log(null.constructor)       // error : null은 constructor가 없음

// null 데이터 타입 확인 방법 (추천 방법)
console.log(Object.prototype.toString.call(null).slice(8, -1)) // Null