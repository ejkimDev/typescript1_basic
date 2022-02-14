// 항상 오류 발생
function error(message: string):never {   // never를 리턴
  throw new Error(message);
}

function fail() {
  return error("faild");
}

// 무한루프도 never를 리턴
function infiniteLoop(): never {
  while (true) {      
  }
}

let a: string = "hello";

if (typeof a !== 'string') {
  // a는 string 타입인데 해당 if문은 a가 string 타입이 아닐 경우이기 때문에
  // if문 안에서 a는 아무것도 할당할 수 없는 상태는 never이다.
}


