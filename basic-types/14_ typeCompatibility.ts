// sub1 타입은 sup1 타입의 서브타입이다.
let sub1: 1 = 1;    // sub1 리터럴 타입 숫자 1 -> 값은 1만 가능
let sup1: number = sub1;    // number가 1보다 큰 타입이기 때문에 sup1에 sub1 치환 가능
// sub1 = sup1;      // Error

// sub2 타입은 sup2 타입의 서브타입이다.
// object : 프르미티브 타입이 아닌 것
let sub2: number[] = [1];
let sup2: object = sub2;    // object가 배열[1]보다 큰 타입이기 때문에 sup2에 sub2 치환 가능
// sub2 = sup2;      // Error

// sub3 타입은 sup3 타입의 서브타입이다.
let sub3: [number, number] = [1, 2];    // tuple
let sup3: number[] = sub3;    // 배열은 tuple보다 큰 타입이기 때문에 sup3에 sub3 치환 가능
// sub3 = sup3;      // Error

// sub4 타입은 sup4 타입의 서브타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;          // any이기 때문에 아무거나 넣을 수 있다.

// sub5 타입은 sup5 타입의 서브타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5;      // Error

// primitive type
let sub6: string = '';
let sup6: string | number = sub6;   // string과 number가 string보다 넓은 개념이라 가능

// Object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub7: {a: string; b: number} = {a: '', b: 1};
let sup7: {a: string | number; b: number} = sub7;

// array - object와 마찬가지
let sub8: Array<{a: string; b: number}> = [{a: '', b: 1};
let sup8: Array<{a: string | number; b: number}> = sub8;
