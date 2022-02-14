declare const  maybe: unknown;

// 검사를 해서 타입이 한정되어야 하기 때문에 number를 사용할 수 없다.
// const aNumber:number = maybe;     // Error

if(maybe === true) {    
  // maybe는 true와 비교하기 때문에 해당 if문 안에서의 타입은 boolean이다.
  const aBoolean: boolean =  maybe;
  // const aString: string = maybe;      // Error
}

if(typeof maybe === 'string'){
  // maybe는 문자열과 비교하기 때문에 해당 if문 안에서의 타입은 string이다.
  const aString: string = maybe;
  // const aBoolean: boolean =  maybe;   // Error
}