// 비동기 작업을 하는 함수의 결과 값을 함수 외부에서 사용하고 싶을 때
// 콜백 함수를 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b
    callback(sum)
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value)
})

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이"
    callback(food)
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`
    callback(cooldownedFood)
  }, 2000);
}


function freezeFood (food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`
    callback(freezedFood)
  }, 1500);
}

// 콜백 지옥 현상
orderFood((food) => {
  console.log(food)

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood)

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood)
    })
  })
})