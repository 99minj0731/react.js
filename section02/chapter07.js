//  6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3]
arr1.push(4, 5, 6)
const newLength = arr1.push(7, 8)
console.log(arr1)
console.log(newLength)

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3]
const popedItem = arr2.pop()
console.log(popedItem)
console.log(arr2)


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2,3]
const shiftedItem = arr3.shift()
console.log(shiftedItem, arr3)

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3]
const unshiftItem = arr4.unshift(0)
console.log(arr4)
console.log(unshiftItem)

//  => shift와 unshift는 pop ,push 보다 느리게 동작 => 앞에서 제거, 추가하면 모든 인덱스가 변하기 때문에

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5]
let sliced = arr5.slice(2, 5) //2번자리부터 5번째 전까지 자르겠다.
let sliced1 = arr5.slice(2)
let sliced2 = arr5.slice(-1) // 뒤에부터 1개를 자르겠다.


console.log(sliced)
console.log(arr5)


// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2]
let arr7 = [3, 4]

let concatArr = arr6.concat(arr7)
console.log(concatArr)