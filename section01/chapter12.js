// 함수 표현식과 화살표 함수

function funA() {
  console.log("funA")
}
let varA = funA
console.log(varA)
varA()


let varB = function funcB() {
  console.log("funcB")
}

varB()


// 익명함수
let varC = function () {
  console.log("funcC")
}

varC()

// 2. 화살표 함수
// let varD = () => {
//   return 1
// }

// let varD = () => 1

// let varD = (value) => value + 1

let varD = (value) => {
  console.log(value)
  return value + 1
}

console.log(varD(10))