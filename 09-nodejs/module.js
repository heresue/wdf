// function hello () {
//     console.log('hello~!!')
// }
// export default hello    // hello를 내보내줌
// 또는,
export default function hello() {
    console.log('hello~!!')
}

//// <모듈 내보내기> ////
// 1. 기본 (default)
// export default 123
// default는 한번만 사용가능하다.

// 2. 이름 붙여서 내보내기
export const name = "가을"
export const age = "3"
export const obj = () => {}