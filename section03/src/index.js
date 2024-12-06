// const moduleData = require("./math")

// console.log(moduleData.add(1, 2))
// console.log(moduleData.sub(1, 2))



// 구조 분해 할당 사용
// const {add, sub} = require("./math")

import multiply from "./math.js"
import {add, sub} from "./math.js"


console.log(add(1, 2))
console.log(sub(1, 2))

