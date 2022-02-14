// 해당방식은 typescript에서 객체 타입이 아니다.
// -> { name : "Mark", age : 39 } 타입이다.
const person1 = { name : "Mark", age : 39 };      // 리터럴 방식 선언

// Object 형태나 null 가능
const person2 = Object.create({ name : "Mark", age : 39 });

