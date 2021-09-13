import * as ffi from 'ffi-napi'
let addLib = ffi.Library("./src/simpleAdd",{
    'add': ['int',["int","int"]]
})



let output: number = addLib.add(1,2)
console.log(output)



