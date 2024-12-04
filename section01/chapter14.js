// 스코프
// -> 전역 스코프(전체영역) / 지역 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1 // 전역 스코프


// 함수 선언식은 함수 안에서만 지역 스코프를 갖는다!
function funcA () {
  let b = 1 // 지역 스코프
  console.log(a)
  function funcB () {} // 함수안에 함수도 밖에서 선언 불가능, if 나 for 문 안에서는 가능
}


funcA()
// console.log(b) //함수 외부에서는 선언 불가능

if (true) {
  let c = 1
}

// console.log(c)

for (let i = 0; i < 10; i++) {
  let d = 1
}