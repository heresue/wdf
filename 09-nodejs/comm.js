import hello from './module'
import { name, age, obj } from './module'
import { name, age as num, obj } from './module'    //age대신 num이라고 사용하고 싶을 때
import { a, b } from './index'



hello()     // 호출

console.log(name)
console.log(age)
console.log(obj)
console.log(num)    // num 입력 > age 값 호출


a()
b()