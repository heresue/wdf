// https://odada.me/263
// 날짜(date) ------------------------------------------------

console.log(new Date()); // 오늘 날짜
console.log(new Date().getFullYear());
console.log(new Date().getMonth()); // zerobase numbering (0~11)
console.log(new Date().getDate()); // 1~31
console.log(new Date().getDay()); // zerobase numbering, 일요일부터 0
console.log("---");
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

// 협정 세계시 (UTC: Coordinated Universal Time)
// 국제 표준시간의 기준으로 쓰이는 시각

// getTime(), setTime()
// 협정 세계시로부터 경과한 밀리초를 숫자로 반환, 지정하는 메서드
console.log(new Date().getTime());

//
//
// https://odada.me/264
// 배열(array) ------------------------------------------------
// index 번호가 바뀌는 shift, unshift는 사용을 권장하지 않는다

//
//
// https://odada.me/265
// 객체(object) ------------------------------------------------
