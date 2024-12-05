// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자
console.log(date1)  // 현재 시간

let date2 = new Date("1999-07-31/10:10:10")
// let date2 = new Date("1999,07,31,10,10,10")

console.log(date2)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지 의마하는 숫자값
let ts1 = date1.getTime()
console.log(ts1) 

let date4 = new Date(ts1)
console.log(date4)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear()
let month = date1.getMonth() + 1 //0부터 시작하기 때문에
let date = date1.getDate()
let hour = date1.getHours()
let minute = date1.getMinutes()
let seconds = date1.getMilliseconds()

console.log(year, month, date, hour, minute, seconds)

// 4. 시간 수정하기
date1.setFullYear(2024)
date1.setMonth(2)
date1.setDate(25)
date1.setHours(23)
date1.setMinutes(59)
date1.setSeconds(59)

console.log(date1)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()) // 시간제외 날짜만 출력
console.log(date1.toLocaleString()) // 현지화되어 표기