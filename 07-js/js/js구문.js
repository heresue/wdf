//// 1. 구조 분해 할당(Destructuring assignment) ////
// [참고] https://codesandbox.io/p/sandbox/propsreul-iyonghan-goyangi-ireum-nai-lml5vs?file=%2Fsrc%2FApp.js%3A12%2C34

// 배열이나 객체의 속성을 해체하여
// 그 값을 개별 변수에 담을 수 있게 하는 Java Script 표현식
// "배열"의 구조 분해, "객체"의 구조 분해


// "배열"의 구조 분해 //
const arr = [1, 2, 3]

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// 이렇게 하나하나 하려면 실무에선 데이터가 너무 많음
// >> 이걸 구조분해 해주자
const [a, b, c] = arr  // a, b, c라는 매개변수를 받아서 arr에 다시 할당해준다

console.log(a, b, c)


//  1) 각각의 변수가 미리 할당되어 있을 경우 //
let d = 0
let e = 0
let f = 0

const arr2 = [4, 5, 6]
;[d, e, f] = arr2    // 기존에 선언된 d, e, f에 재할당 (재할당이므로 const 제거)
// 세미콜론을 붙이지 않으면, const arr2 = [1, 2, 3][d, e, f] = arre 이렇게 인식함
// ([4, 5, 6]뒤 또는 [d, e, f] 앞에 붙여주면 됨)
console.log(d, e, f)


// 2) 필요하지 않은 변수 제거 //
// 배열은 순서가 있기 때문에, d, 를 없애고 (e, f)로 설정하면, 5, 6이 아닌 4, 5가 출력된다
//  >> 쉼표를 남겨주기
;[, e, f] = arr2
console.log(e, f)


// 3) 나머지 할당 //
const arr3 = [1, 2, 3, 4, 5]

const [g, h, ...rest] = arr3 // 반드시 rest라고 쓸 필요 없음 (보통 rest라고 씀)
console.log(g, h, rest)



// "객체"의 구조 분해 //
const cat = {
    name: "겨울",
    age: 2,
}

const {name, age} = cat     // 재할당 (객체 구조 분해)

console.log(cat.name, cat.age)  // 구조 분해 전
console.log(name, age)          // 구조 분해 후


// 1) 기본값 할당, 변수 이름 바꾸기 //

const cat2 = {
    name2: "가을",
    age2: 5
}
const {name2: nick, age2 = 0, birth = '0101'} = cat2
console.log(nick, birth)
// console.log(name2, birth)    // error



/////// 복습 ///////
// 구조 분해 할당 - 객체의 구조 분해 //
// 예제) airbnb icon (숙소 조건 선택 아이콘)
const airbnbIcon = {
    img:'airbnb.png',
    text: '한옥',
}

console.log(airbnbIcon.img, airbnbIcon.text)

// 구조 분해
const { img, text } = airbnbIcon
console.log(img, text)      // 속성값만으로도 호출 가능




//// 2. 선택적 체이닝 (Optional Chaining) ////
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefined를 반환한다.

const user1 = null          // 정보 없음
// console.log(user1.name)  // error (user1의 name값은 없는데 출력했기 때문)
// ?을 추가하자
console.log(user1?.name)    // undefined

const userWinter = {
    name: "겨울",
    age: 2,
    address: {
        city: 'Busan',
        dong: 'Sasang',
    }
}

const userFall = {
    name: "가을",
    age: 3,
}

// printCity : user 정보가 들어오면 어디 사는지(city)를 출력해주는 함수
// function printCity(user) {
//     return user.address.city
// }

// console.log(printCity(userWinter))
// console.log(printCity(userFall))    // error
// 수정해보자!
// 1) 함수 안 return - address에 ? 추가
// 2) || 연산자 추가

function printCity(user) {
    return user.address?.city || '주소가 없습니다.'
}

console.log(printCity(userWinter))
console.log(printCity(userFall))    // error



//// 3. 조건문 - if ////
// // if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드 
// }

// // if else문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// }else {
//     // 조건이 false일 때 실행되는 코드
// }

// // if else if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// }else if (조건2) {
//     // 조건2가 true일 때 실행되는 코드
// }else {
//     // 조건1, 조건2가 모두 거짓일 때 실행되는 코드
// }

// 음수, 양수 판별하기
// 1) 함수 선언
function isPositive(num) {
    if (num > 0) {
        console.log(`${num}은/는 양수입니다.`)
    }else if (num < 0) {
        console.log(num + '은/는 음수입니다.')
    }else {
        console.log('0 입니다.')
    }
}
// 함수이름(isPositive), 매개변수(num)은 바뀌어도 됨

// 2) 함수 실행
isPositive(4)
isPositive(-6)
isPositive(0)



//// 3. 조건문 - switch ////
// 매개변수로 입력된 값과 일치하는 case문을 실행한다. (0보다 클때 이런거말고 사과, 파인애플 이런 경우)

// switch (매개변수) {
//     case 값1:
//         // 매개변수 === 값1 일 때 실행되는 코드
//         break
//     case 값2:
//         // 매개변수 === 값2 일 때 실행되는 코드
//         break
//     case 값3:
//         // 매개변수와 일치하는 case문이 없을 때 실행되는 코드
//     }

// 예제) 가격을 알아내는 함수 선언
function getPrice(item) {
    let price
    switch (item) {
        case "패딩":
            price = '280,000'   // ,을 넣으면 문자이기 때문에 ''사용 (또는 ,을 넣어주는 매서드 사용)
            break
        case "바지":
            price = '55,000'
            break
        default:
            price = '아이템 별로 상이함'
    }
    return price                // return함수로 price값 반환
}

console.log(getPrice('패딩'))
console.log(getPrice('바지'))
console.log(getPrice('모자'))

// 위 방법으로 해도 되지만 너무 길어짐
//  >> return을 활용해서 다시 해보자!
function getPrice2(item) {
    switch (item) {
        case '패딩':
            return '190,000'    // return은 값을 반환 후 자동 종료됨 (break 사용할 필요 없음)
        case '바지' :
            return '30,000'
        default :
            return '아이템 별로 다름'
    }
}

console.log(getPrice2('패딩'))
console.log(getPrice2('바지'))
console.log(getPrice2('모자'))



// if문으로 바꾸기 //
// react에서는 인라인 형식으로 코드 안쪽으로 넣어주기 때문에, 한줄로 쓰는걸 선호함
//  >> switch를 if문으로 바꿈

function getPrice3(item) {
    if (item === '패딩') return '540,000'
    if (item === '바지') return '108,000'
    return '문의 요망'  // default값
}

console.log(getPrice3('패딩'))
console.log(getPrice3('바지'))
console.log(getPrice3('모자'))



//// 4. 반복문 - (for / for of / for in / while / do while) ////
////    : 특정 코드를 반복적으로 실행할 때 사용
////    : for / for of / for in / while / do while


// 1) for문
// for (초기값; 조건; 증감식) {실행될 코드}

console.log("< 1 ~ 10 >")
// 예제) 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// i = i + 1   --축약-->>   i =+ 1????(확인)   --축약-->>   i++ (++i로는 잘안씀)

console.log("< 10 ~ 1 >")
// 예제) 10부터 1까지 출력
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("< break (4까지만) >")
// break문: 전체 반복문 종료 //
// 예제) 10부터 1까지 출력 + 4까지만 출력
for (let i = 10; i >= 1; i--) {
    if (i < 4) {    // i < 4 인 경우,
        break       // 전체 반복문 종료
    }
    console.log(i)
}

console.log("< continue (홀수) >")
// continue문: 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
// 예제) 10부터 1까지 출력 + 홀수만 출력
for (let i = 10; i >= 1; i--) {
    if (i % 2 === 0) {  // i가 짝수인 경우
        continue        // 다음 반복문으로 넘어감 (건너뛰기)
    }
    console.log(i)
} 

console.log("< continue (짝수) >")
// continue문: 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
// 예제) 10부터 1까지 출력 + 짝수만 출력
for (let i = 10; i >= 1; i--) {
    if (i % 2 === 1) {  // i가 홀수인 경우
        continue        // 다음 반복문으로 넘어감 (건너뛰기)
    }
    console.log(i)
} 



// for문으로 배열 출력 //
const animals = ['dog', 'cat', 'fish']

// 방법 1
console.log(animals[0], animals[1], animals[2])

// 방법 2
const a1 = animals[0]
const a2 = animals[1]
const a3 = animals[2]
console.log(a1, a2, a3)

console.log('< animals 배열 (for) >')
// 방법 3 (for문 사용)
for (let i = 0; i <= 2; i++) {
    console.log(animals[i])
}

// 배열 길이 확인 (length)
console.log(animals)
console.log(animals.length)

// length 적용
console.log('< animals.length로 적용 (for) >')
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}



// 2) for of문
// for (변수 of 배열) {실행될 코드}

// 예제)
console.log('< for of >')
for (let animal of animals) {
    console.log(animal)
}

// 예제)
// user들의 정보(객체{})가 담긴 배열[]
const users = [
    {name: '겨울', age: 2},
    {name: '가을', age: 1},
    {name: '여름', age: 5},
    {name: '봄', age: 9},
]

console.log(users)  // 배열 안에 객체가 들어간 형식으로 출력
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

// user들의 이름 출력
console.log('< user 이름 출력 (기본) >')
console.log(users[0].name)

console.log('< user 이름 출력 (for) >')
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name)
}

console.log('< user 이름 출력 (for of) >')
for (let user of users) {
    console.log(user.name)
}

// 역순으로 출력하려면?