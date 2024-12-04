// 함수선언

function greeting () {
  console.log("안녕하세요!")
}

console.log("호출 전")
greeting()
console.log("호출 후")


function getArea (width, height) { //매개변수
  // let width = 10
  // let height = 20
  let area = width * height
  // console.log(area)
  return area //반환값, 하단 코드 실행되지 않음
}

let area1 = getArea(10, 20)
console.log(area1)

getArea(10, 20) //인수
getArea(10, 30)

//함수 안에 함수 , 중첩함수
function getArea (width, height) { //매개변수
  function another () { 
    console.log("another!")
  }
  another()
  let area = width * height
  return area 
}


// 호이스팅
// -> 끌어올리다 
// -> 선언문을 호출문보다 아래에 두어도 실행이 됨


