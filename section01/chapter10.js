// for (초기식; 조건식; 증감식) {
//   console.log("반복!")
// }

for (let idx=0; idx < 5; idx++) {
  if (idx % 2 === 0) {
    continue
  }
  console.log(`${idx}`)
  if (idx >= 3) {
    break;
  }
}
