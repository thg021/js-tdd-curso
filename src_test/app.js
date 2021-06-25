import * as R from 'ramda'

import sum, {sub} from './utils/utils'

const arr1 = [2,3,4,5,1,2,3,5,6]
const arr2 = [2,5,6,7,8,3,0,9]

const arr3 = R.union(arr1, arr2)

console.log(arr3)
console.log('teste com watch do webpack')
console.log(sum(2,4))
console.log("sub", sub(2,3))
