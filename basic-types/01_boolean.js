let isDone = false;
isDone = true;
console.log(typeof isDone); // boolean
let isOk = true; // 일반적인 방식(프르미티브)
// boolean은 프리미티브, Boolean은 래퍼 객체에 사용
//let isNotOk: boolean = new Boolean(true);     // Error
let isOkB = new Boolean(true);
