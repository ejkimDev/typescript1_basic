console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();   // sym은 고유한 값

const obj = {
  [sym]: "value"        // 상단 코드의 변수 sym이 들어옴
};

console.log(obj[sym]);   // 해당 방식으로 출력