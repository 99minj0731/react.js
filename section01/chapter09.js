// 1. if 조건문 (if문)
let num = 9
if (num >= 10) {
  console.log(`${num}은 10이상입니다.`)
}
else if(num >= 5) {
  console.log(`${num}은 5이상입니다.`)
}
else {
  console.log(`${num}은 10이하입니다.`)
}


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조선을 처리할 때 if 보다 더 직관적이다. 
let animal = "owl"
switch (animal) {
  case "cat" : {
    console.log("bear")
    break
  }
    case "dog" : {
      console.log("강아지")
      break
    }
      case "bear" : {
        console.log("곰")
        break
      }
        case "snake" : {
          console.log("뱀")
          break
        }
          case "tiger" : {
            console.log("호랑이")
            break
          }
          default : {
            console.log("그런 동물은 없습니다.")
          }
}