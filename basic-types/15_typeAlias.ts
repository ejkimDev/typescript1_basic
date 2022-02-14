// Primitive
type MyStringType = string;
const str = 'world';
let myStr: MyStringType = 'hello';
myStr = str;    // 구조가 같아서 가능

// Union Type
let personU: string | number = 0;
personU = 'Searchkim';
type StrOrNum = string | number;
let another: StrOrNum = 0;
another = 'Anna';

// Tuple
let personT: [string, number] = ['Searhkim', 29];
type PersonTuple = [string, number];
let anotherT : PersonTuple = ['Anna', 23];

// Function
type EatType = (food: string) => void;    // 매개변수는 string 리턴은 void