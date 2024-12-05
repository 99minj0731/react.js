// async
// 어떤 함수를 비동기함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name:"김민정", 
        id: "99min", 
      })
    }, 1500);
  })
}

// console.log(getData())

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  // getDate가 끝날 때까지 기다렸다가 반환된 값을 data에 저장
  const data = await getData()
  console.log(data)
}

printData()