// promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// promise 의 3가지 상태
// 1. 대기 (pending) : 아직 작업이 완료되지 않은 상태
// 2. 성공 (fulfilled)
// 3. 실패 (rejected)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor
  
    setTimeout(() => {
      if(typeof num === 'number') {
        resolve(num + 10)
      } else {
        reject ("num이 숫자가 아닙니다.")
      }
    }, 2000);
  })
  return promise
}

add10(0)
const p = add10(0)
p.then((res) => {
  console.log(res)

  const newP = add10(res)
  newP.then((res)=> {
    console.log(res)
  })
  return newP
}) .then((res)=> {
  console.log(res)
})

// 정리
add10(0)
  .then((res) => {
    console.log(res)
    return add10(res)
  })
  .then((res) => {
    console.log(res)
    return add10(res)
  })
  .then((res)=> {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// // then 메서드
// // -> 그 후에 라는 뜻

// promise.then((value) => {
//   console.log(value)
// })
// .catch((err) => {
//   console.log(err)
// })

// // promise.catch((err) => {
// //   console.log(err)
// // })

// setTimeout(() => {
//   console.log(promise)
// }, 3000);