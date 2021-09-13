import * as ffi from 'ffi-napi'

import * as ref from 'ref-napi'
let ArrayType = require('ref-array-di')(ref)
let repl = require('repl');

let intArray = ArrayType(ref.types.int)




let addLib = ffi.Library("./src/sort",{
    'bubleSort': [intArray,[intArray,"int"]]
})


const bubbleSort = (array:number[]): number[] =>{
    const arr: number[] = [...array]
    const length:number = arr.length

    for (let iteration = 0; iteration < length -1 ; iteration++ ){
        for (let i = length-1; i > iteration; i--){
            if (arr[i-1] > arr[i]){
                const tmp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = tmp
            }
        }
    }
    return arr
}


let array1 = [1,5,6,2,1,9,4,23,42,3,5,6,2,324,2,6434,5,34,43,46]
const randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
array1 =  randomArray(100000, 10000)

console.time("js bubble sort")
let jsOutput = bubbleSort(array1)
console.timeEnd("js bubble sort")
console.log("js out: ", jsOutput)

let Carray = new intArray(array1)
console.time("C bubble sort")
let output= addLib.bubleSort(Carray,Carray.length)
console.timeEnd("C bubble sort")
const resultCArr:number[] = []
for (let i = 0; i < Carray.length; i++){
    resultCArr[i] = output[i]
}
console.log("C output " , resultCArr)


