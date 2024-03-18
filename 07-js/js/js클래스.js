// 클래스(class) - javascript 기본 https://odada.me/247

// 클래스(class) 개념 ------------------------------------------------
// 객체를 만들기 위한 템플릿
// 클래스 = 붕어빵 틀 / 객체 = 붕어빵
// 문법이기 때문에 그냥 무조건 통으로 외우기
// 기존에 사용하던 방법이 불편해서 나온 기능!

// 생성자 함수 ------------------------------------------------
// new 연산자를 이용해서, 객체를 생성하는 함수
// 함수명 첫 글자는 대문자! (일반함수와 구분하기 위함)

// 배열 만들기
// const animals = ['강아지', '고양이', '펭귄']

// 생성자 함수 만들기
const animals = new Array("강아지", "고양이", "펭귄");

console.log(animals);
console.log(animals.length); // length() 메서드: 길이 값 반환
console.log(animals[1]);

// 프로토타입 객체 (prototype) ------------------------------------------------
// array에 사용할 수 있는 속성 및 메서드는 프로토타입에 연결되어 있음
// 각각의 객체가 특정한 프로토타입(부모 객체라고 생각할 수 있음)과 연결되어 있는 것이고,
// 그 프로토타입의 속성과 메서드를 자신의 것처럼 사용할 수 있음

const americano = {
  name: "아메리카노",
  price: 4000,
  front: function () {
    return `${this.name}의 가격은 ${this.price}원 입니다.`;
  },
};

const latte = {
  name: "라떼",
  price: 5000,
};

console.log(americano.front());
// console.log(latte.front())

// call을 이용한 메서드 재활용 ------------------------------------------------
//  1. latte의 front 함수를 지우고
//  2. 다음과 같이 call을 사용
console.log(americano.front.call(latte));

// prototype을 이용한 메서드 재활용 ------------------------------------------------

// ~~~~~~~~~~~~~~~~~~
// ~~~~~~

// 2. 콜백함수를 이용한 비동기 처리 ------------------------------------------------

function orderCoffee(coffee, callback) {
  console.log(`${coffee} 만드는 중`);
  // setTimeout(함수, 시간)
  setTimeout(() => {
    console.log(`${coffee} 완성!`);
    callback();
  }, 1000);
}
function drinkCoffee(coffee) {
  console.log("커피를 마십니다.");
}

orderCoffee("아메리카노", drinkCoffee);
// drinkCoffee("아메리카노");
// (1) 커피 완성 후 커피를 마시기 위해, drinkCoffee를 orderCoffee에 인자로 넣어주자!
//     함수 실행이 아닌, 함수자체를 넣어주는 것
// (2) 함수선언문에서도 이 인자를 받기 위해 추가해준다 (callback)
// (3) orderCoffee내 setTimeout 함수의 커피 완성 이후 콜백해줄거니까 여기에 함수실행을 적어준다.

// 참고
function drinkCoffee2(coffee) {
  return "커피를 마시자";
}
console.log(drinkCoffee2); // drickCoffee2(coffee) {return "커피를 마시자"}
console.log(drinkCoffee2()); // 커피를 마시자

//
//
//
// 3. promise를 이용한 비동기 처리 ------------------------------------------------
// 생성자함수 만들기
const coffeeOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("아메리카노 준비 완료");
  }, 2000);
});

// promise 객체 이용하기
coffeeOrder
  // 성공적으로 수행됐을 때 실행될 함수
  .then((props) => {
    console.log(props);
  })
  // 실패했을 때 실행될 함수
  .catch((error) => {
    console.log(error);
  });

//
//
// 50% 확률로 성공 또는 실패를 시뮬레이션 하기 ----------------------------------

const coffeeOrder2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("아메리카노 성공");
    } else {
      reject("아메리카노 실패");
    }
  }, 3000);
});
coffeeOrder2
  // 성공적으로 수행됐을 때 실행될 함수
  
  .then((props) => {
    console.log(props);
  })
  // 실패했을 때 실행될 함수
  .catch((error) => {
    console.log(error);
  });
