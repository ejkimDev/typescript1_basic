let myNameN: string = null;   
myNameN = undefined;

console.log(myNameN);

let v: void = undefined;    // void는 undefined만 가능

// union 타입 : 변수 union은 string과 null 타입을 가질 수 있다.
let union: string | null = null;    
union = "Mark";