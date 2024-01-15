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



//// Array (배열) ////
// 여러개의 값을 순차적으로 나열한 자료형
// 배열은 순서가 있음! 몇번째인지 순서를 아는것이 중요하다

const animals = ["강아지", "고양이", "토끼"]

console.log(animals)        // 배열, 배열의 인덱스 번호, 개수(length) 출력
console.log(animals[0])     // 강아지
console.log(animals[2])     // 토끼
console.log(animals.length) // 3

// ★ 배열의 마지막 요소를 가져오기
console.log(animals[animals.length - 1]) // 토끼