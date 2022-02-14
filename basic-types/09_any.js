// 해당 함수는 콘솔로그로 출력하는 기능만 하는 함수이기 때문에 규정이 필요없어서 any 사용
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
const any2 = returnAny(29);
console.log(any1);
console.log(any2);
