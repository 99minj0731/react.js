export function add(a, b) {
  return a + b
}

export function sub(a, b){
  return a - b
}

// default 값으로써 내보내져서 math 모듈을 대표하는 단 하나의 기본 값이 됨
export default function multiply(a, b) {
  return a * b
}


// module.exports = {
//   add: add,
//   sub: sub,
// }


// export {add, sub}