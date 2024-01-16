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

console.log('-----------------------------------')


// 섹션의 top이 뷰포트 아래를 넘어왔을때 ~ 섹션의 botoom이 뷰포트 top에 왔을 때
// (섹션이 뷰포트 안쪽으로 들어왔을 경우)
// 스크롤트리거(글씨는 스크롤이 느림) 예제 때 활용했으니 다시 확인해보자


// OR 연산자 (a || b) //
// a, b 둘 중 하나만 true이면, true 반환
// 연산자를 기준으로 가장 먼저 만나는 "true 데이터" 반환

console.log(true || true)   // true
console.log(true || false)  // true
console.log(false || false) // true

// ** 주의 **
// 연산자를 기준으로 가장 먼저 만나는 참 데이터가 반환된다.
console.log(false || true)                      // true
console.log(0 || 1)                             // 1
console.log(false || 0 || {})                   // 빈 객체데이터는 참이기 때문에 {} 반환
console.log(false || [] || null)                // 빈 배열은 참이기 때문에 [] 반환 후 종료
console.log(function (){} || undefined || '')   // 함수 데이터는 참이기 때문에 f () {} 반환 후 종료
console.log(false || 0 || NaN)                  // 모두가 거짓이라면 마지막 데이터가 반환




// 7. 병합 연산자 (Nullish Coalescing)

