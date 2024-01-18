// [] 배열, {} 객체

//// 연산자 (Operator) ////

// 1. 산술 연산자 (Arithmetic)
//  : 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지(%) 연산자

// 덧셈 연산자
console.log(1 + 2)              // 3
console.log("가을" + "겨울")    // 가을겨울

// 뺄셈 연산자
console.log(5 - 3)  // 2

// 나눗셈 연산자 (몫)
console.log(6 / 3)  // 2

// 나머지 연산자 (나머지)
console.log(7 % 3)  // 1
// [활용1] 짝수로 나누는 경우: 나머지가 0이면 짝수, 1이면 홀수
// [활용2] (now값 % 슬라이드 개수)=0 인 경우, 마지막 슬라이드이다.

// 짝수, 홀수 판별 함수
// 1) 함수 선언
//  function isEven(매개변수) {}
//  - isEven: 짝수인지 확인해주는 함수
//  - num: 인수을 받아주는 매개변수
function isEven(num) {
    return num % 2 === 0
    // num을 2로 나눈 나머지가 0이면 true, 아니면 false
}

// 2) 콘솔창에 함수 출력
console.log(isEven())   // false (숫자를 안넣어 줌)
console.log(isEven(1))  // false
console.log(isEven(2))  // true



// 2. 할당 연산자 (Assignment)
// 예제1
let now = 1
console.log(now)

now = now + 1       // now에 1을 더한 값을 now에 다시 할당
// now += 1         // 축약형
console.log(now)    // 3


// 예제2
let c = 100

c = c * 2
// c *= 2
console.log(c)



// 3. 증감 연산자 (Increment & Decrement)
// a++ / a-- : 선출력 후연산
// ++a / --a : 선연산 후출력



// 4. 부정 연산자 (Negation)
// !를 사용하여 true를 false로, false를 true로 바꿀 수 있다. (반대 데이터 출력)
console.log(!true)  // false
console.log(!false) // true
console.log(0)      // 0
console.log(!0)     // true
console.log(!!0)    // false



// 5. 비교 연산자 (Comparison)
// a === b  형변환 X
// a!==b    형변환 X
// a > b    형변환 O
// a <= b   형변환 X
// a == b   형변환 O : 추천하지 않음
// a !=     형변환 O : 추천하지 않음

// 일치 연산자 (a === b)
console.log(1 === 1)    // true
console.log(1 === '1')  // false

// 불일치 연산자 (a !== b)
console.log(1 !== 1)    // false
console.log(1 !== '1')  // true

// 대소 비교 연산자 (a > b) (형변환 O)
console.log(1 < 2)      // true
console.log(1 > 2)      // false
console.log(1 >= 2)     // false
console.log(1 >= 1)     // true
// [활용]: 스크롤트리거



// 6. 논리 연산자 (Logical)
// true, false 반환
// AND(&&), OR(||)


// AND 연산자 (a && b) //
// a, b 둘 다 true면, true 반환
// [!주의] 연산자를 기준으로 "가장 먼저 만나는 false 데이터" 반환

console.log(true && true)   // true
console.log(true && false)  // false
console.log(1 < 2 && 2 < 3) // true

console.log(true && false)      // false
console.log(1 && 0)             // 0 (1: true, 0: false)
console.log(1 && 2 && 0)        // 0
console.log(1 && 0 && false)    // 0 (0을 먼저 만났기 때문에 0 반환 후 종료)
console.log('a' && 'b' && '')   // ''
console.log('a' && 'b' && 'c')  // c (모두가 참이라면, 마지막 데이터 반환)

// 섹션의 top이 뷰포트 아래를 넘어왔을때 ~ 섹션의 botoom이 뷰포트 top에 왔을 때
// (섹션이 뷰포트 안쪽으로 들어왔을 경우)
// 스크롤트리거(글씨는 스크롤이 느림) 예제 때 활용했으니 다시 확인해보자


// OR 연산자 (a || b) //
// a, b 둘 중 하나만 true이면, true 반환
// [!주의] 연산자를 기준으로 "가장 먼저 만나는 true 데이터" 반환

console.log(true || true)                       // true
console.log(false || false)                     // true
console.log(false || true)                      // true
console.log(1 || 0)                             // 1
console.log(false || 0 || {})                   // {} (빈 객체데이터는 참이기 때문에 {} 반환)
console.log('' || 0 || NaN)                     // NaN (모두가 false라면, 마지막 데이터 반환)
console.log(function (){} || undefined || '')   // 함수 데이터는 참이기 때문에 f () {} 반환 후 종료



//// 7. 병합 연산자 (Nullish Coalescing) ////
// || 연산자와 비슷하다.
// null 또는 undefined는 제외하고 반환

console.log(0 || 5)             // 5
console.log(0 ?? 5)             // 0 (0을 데이터 값으로 사용하는 Nullish 사용)
console.log(null ?? undefined)  // undefined



//// 8. 삼항 연산자 (Ternary) ////
// 조건 ? 참일 때 반환되는 값 : 거짓일 때 반환되는 값

console.log(1 < 2 ? '참' : '거짓')  // 참
console.log(1 > 2 ? '참' : '거짓')  // 거짓

// 리액트에서 정말 많이 쓰이는 연산자 (참고 https://odada.me/255)

// 예제 1
// if문 표현
const p = 1
if (p < 3) {
    console.log('참!!')
}else {
    console.log('거짓!!')
}
// 삼항 연산자 표현
console.log(p < 3 ? '참!!' : '거짓!!')

// 예제2
function isCat (name) {     // name: 매개변수
    return (
        name === '고양이' ? '고양이' : '고양이 아님'

    ) // return에 두 줄 이상의 값이 들어가면 ()를 넣어준다.
}
// 함수 실행 (인수 '고양이'를 넣어줌)
// isCat('고양이')
console.log(isCat('고양이'))
console.log(isCat('개'))




//// 9. 전개 연산자 (Spread) 연산자
// ...을 사용하여 배열이나 객체를 펼칠 수 있다.


// 배열의 전개 //
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

console.log(num1.concat(num2))  // concat 매서드 사용
console.log([...num1, ...num2])

// 객체의 전개 //
const dog = {
    name: '멍멍이',
    phone: '010-0000-0000',
}
const dogInfo = {
    ...dog, // 기존 정보 불러옴
    age: 2
}
console.log(dogInfo)

// 함수의 전개 //
// ...을 사용하여 파라미터(인수)를 전개할 수 있다.

// 예제
// sum 함수 선언
// sum의 매개변수(a, b, c)는 이 안에서만 사용하는 것이기 때문에, 다른 함수에서 써도 괜찮음
function sum(a, b, c) {
    console.log(a + b + c)
}

// sum 함수 호출
sum(1, 2, 3)    // 함수에서 console.log를 실행문에 입력했기 때문에 함수만 써줘도 출력된다.

// 보통은 데이터가 배열, 객체에 쌓여있기 때문에 위처럼 예쁘게 넣을 수 없다.
//  >> 전개 연산자를 사용해서, 배열을 파라미터(인수)로 전달하자
const num3 = [5, 6, 7]
const num4 = [8, 9, 10]

sum(num3[0], num3[1], num3[2])
sum(num4[0], num4[1], num4[2])
// 전개 연산자를 사용하면,
sum(...num3)
sum(...num4)