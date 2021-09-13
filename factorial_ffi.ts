import * as ffi from 'ffi-napi'

let libFactorial = ffi.Library("./src/factorial",{
    'factorial': ['uint64',['int']]
})

if (process.argv.length < 3){
    console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>')
    process.exit()
}

let output = libFactorial.factorial(parseInt(process.argv[2]))

console.log("your output " , output)
