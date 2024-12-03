// 1. Number Type
let num1 = 27
let num2 = 1.5
let num3 = -20

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

let inf = Infinity
let mInf = -Infinity

let nan = NaN

console.log(1 *  "Hello")


// 2. String Type 
let myName = "김민정"
let myLocation = "세종"
let introduce = myName + myLocation

console.log(introduce)

//템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
console.log(introduceText)


// 3. Boolean Type
let isSwitchOn = true
let isEmpty = false

// 4. Null Type , 이 변수에는 어떠한 값도 없다는 것을 명시
let empty = null
console.log(empty)

// 5. Undefined Type , 아무런 값을 할당하지 않았을 때 자동으로 할당되는 값
let none 
console.log(none)